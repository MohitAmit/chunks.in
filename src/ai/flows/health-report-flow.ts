'use server';
/**
 * @fileOverview An AI flow to analyze health reports and recommend products.
 *
 * - analyzeHealthReport - A function that analyzes a health report and suggests products.
 * - AnalyzeHealthReportInput - The input type for the analyzeHealthReport function.
 * - AnalyzeHealthReportOutput - The return type for the analyzeHealthReport function.
 */

import { ai } from '@/ai/genkit';
import { products } from '@/lib/placeholder-data';
import { z } from 'zod';

const AnalyzeHealthReportInputSchema = z.object({
  reportDataUri: z
    .string()
    .describe(
      "A health report file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeHealthReportInput = z.infer<typeof AnalyzeHealthReportInputSchema>;

const AnalyzeHealthReportOutputSchema = z.object({
  analysis: z.array(z.object({
    marker: z.string().describe('The health marker identified (e.g., "Vitamin D", "Cholesterol").'),
    finding: z.string().describe('The AI\'s finding or summary for that marker (e.g., "Levels are lower than the optimal range.", "Slightly elevated, consider dietary adjustments.").'),
  })).describe('A summary of key findings from the health report.'),
  recommendations: z.array(z.object({
    productId: z.string().describe('The ID of the recommended Chunks product.'),
    productName: z.string().describe('The name of the recommended Chunks product.'),
    reason: z.string().describe('A brief explanation of why this product is recommended based on the health report analysis.'),
  })).describe('A list of recommended Chunks products.'),
});
export type AnalyzeHealthReportOutput = z.infer<typeof AnalyzeHealthReportOutputSchema>;

export async function analyzeHealthReport(input: AnalyzeHealthReportInput): Promise<AnalyzeHealthReportOutput> {
  return analyzeHealthReportFlow(input);
}

// Create a simplified list of products for the prompt context.
const productContext = products.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
    useCase: p.useCase,
})).join('\n');


const prompt = ai.definePrompt({
  name: 'healthReportPrompt',
  input: { schema: AnalyzeHealthReportInputSchema },
  output: { schema: AnalyzeHealthReportOutputSchema },
  prompt: `You are a helpful and knowledgeable nutrition assistant for "Chunks," a brand that sells natural and organic Indian health foods. Your goal is to analyze a user's health report and provide helpful insights and relevant product recommendations from the Chunks product line.

  **User's Health Report:**
  {{media url=reportDataUri}}

  **Available Chunks Products:**
  Here is a list of available products. Use this information to make your recommendations.
  \`\`\`json
  {{{productContext}}}
  \`\`\`

  **Your Task:**

  1.  **Analyze the Report**: Carefully review the user's health report. Identify 3-5 key health markers that are noteworthy (e.g., low vitamin levels, high blood sugar, cholesterol, iron deficiency, etc.).

  2.  **Generate Insights**: For each identified marker, provide a brief, easy-to-understand finding. Avoid making medical diagnoses. Instead, use neutral language like "Slightly elevated" or "Below the optimal range."

  3.  **Recommend Products**: Based on your analysis, recommend 2-3 specific Chunks products that could be beneficial. For each recommendation, provide the product's exact \`id\` and \`name\`, and a clear, concise reason explaining *why* it's a good fit based on the report's findings and the product's use case.

  **Important Rules:**
  - DO NOT provide medical advice. Start your response with a clear disclaimer.
  - Base your recommendations ONLY on the provided list of Chunks products.
  - Ensure the \`productId\` in your output matches an ID from the product list exactly.
  - Be positive and encouraging in your tone.`,
});

const analyzeHealthReportFlow = ai.defineFlow(
  {
    name: 'analyzeHealthReportFlow',
    inputSchema: AnalyzeHealthReportInputSchema,
    outputSchema: AnalyzeHealthReportOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({
        ...input,
        productContext,
    });
    return output!;
  }
);
