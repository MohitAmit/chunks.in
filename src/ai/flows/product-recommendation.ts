'use server';

/**
 * @fileOverview Personalized product recommendations based on user health reports and goals.
 *
 * - recommendProducts - A function that recommends products based on user input.
 * - ProductRecommendationInput - The input type for the recommendProducts function.
 * - ProductRecommendationOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  healthReport: z
    .string()
    .describe('The user health report as a string.'),
  userGoals: z
    .string()
    .describe('The user health goals, e.g., digestion, immunity, etc.'),
});
export type ProductRecommendationInput = z.infer<
  typeof ProductRecommendationInputSchema
>;

const ProductRecommendationOutputSchema = z.object({
  recommendedProducts: z
    .string()
    .describe('A list of recommended products based on the health report.'),
});
export type ProductRecommendationOutput = z.infer<
  typeof ProductRecommendationOutputSchema
>;

export async function recommendProducts(
  input: ProductRecommendationInput
): Promise<ProductRecommendationOutput> {
  return recommendProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `Based on the following health report: {{{healthReport}}} and the user goals: {{{userGoals}}}, recommend Chunks snacks that would be most beneficial to the user. Return the product recommendations as a string.`,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
