'use server';
/**
 * @fileOverview An AI flow to recommend products based on user health goals.
 *
 * - getGoalRecommendation - Analyzes a user's health goal and suggests products.
 * - GoalBasedRecommendationInput - The input type for the function.
 * - GoalBasedRecommendationOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { products } from '@/lib/placeholder-data';
import { z } from 'zod';

const GoalBasedRecommendationInputSchema = z.object({
  goal: z.string().describe('The user\'s stated health goal (e.g., "I want to manage my weight", "I need more energy for the gym").'),
});
export type GoalBasedRecommendationInput = z.infer<typeof GoalBasedRecommendationInputSchema>;

const GoalBasedRecommendationOutputSchema = z.object({
  summary: z.string().describe('A brief, encouraging summary of how Chunks products can help with the stated goal.'),
  recommendations: z.array(z.object({
    productId: z.string().describe('The ID of the recommended Chunks product.'),
    productName: z.string().describe('The name of the recommended Chunks product.'),
    reason: z.string().describe('A brief explanation of why this product is recommended for the user\'s goal.'),
  })).describe('A list of 2-3 recommended Chunks products.'),
});
export type GoalBasedRecommendationOutput = z.infer<typeof GoalBasedRecommendationOutputSchema>;

export async function getGoalRecommendation(input: GoalBasedRecommendationInput): Promise<GoalBasedRecommendationOutput> {
  return goalBasedRecommendationFlow(input);
}

// Create a simplified list of products for the prompt context.
const productContext = products.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
    // Combine useCase and healthBenefits for a comprehensive goal
    goal: p.useCase ? p.useCase : p.healthBenefits.join(', '),
})).join('\n');


const prompt = ai.definePrompt({
  name: 'goalRecommendationPrompt',
  input: { schema: GoalBasedRecommendationInputSchema },
  output: { schema: GoalBasedRecommendationOutputSchema },
  prompt: `You are a friendly and helpful wellness assistant for "Chunks," a brand that sells natural and organic Indian health foods. Your task is to provide personalized product recommendations based on a user's health goal.

  **User's Goal:**
  "{{{goal}}}"

  **Available Chunks Products:**
  Here is a list of available products and their primary health goals/uses. Use this information to make your recommendations.
  \`\`\`json
  {{{productContext}}}
  \`\`\`

  **Your Task:**

  1.  **Analyze the Goal**: Understand the user's need from their stated goal.
  
  2.  **Generate a Summary**: Write a short (1-2 sentence), positive, and encouraging summary that acknowledges their goal and mentions how Chunks can help.

  3.  **Recommend Products**: Based on the user's goal, recommend 2-3 specific Chunks products that are the best fit. For each recommendation, provide the product's exact \`id\` and \`name\`, and a clear, concise reason explaining *why* it's a good choice for their specific goal.

  **Important Rules:**
  - DO NOT provide medical advice. Frame your suggestions as supportive, not prescriptive.
  - Base your recommendations ONLY on the provided list of Chunks products and their stated goals.
  - Ensure the \`productId\` in your output matches an ID from the product list exactly.
  - Be positive, encouraging, and friendly in your tone.`,
});

const goalBasedRecommendationFlow = ai.defineFlow(
  {
    name: 'goalBasedRecommendationFlow',
    inputSchema: GoalBasedRecommendationInputSchema,
    outputSchema: GoalBasedRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({
        ...input,
        productContext,
    });
    return output!;
  }
);
