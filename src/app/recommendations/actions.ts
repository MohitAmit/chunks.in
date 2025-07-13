'use server';

import { z } from 'zod';
import { recommendProducts } from '@/ai/flows/product-recommendation';

export interface RecommendationState {
  form: {
    healthReport: string;
    userGoals: string;
  };
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  recommendations?: string;
  errors?: {
    healthReport?: string[];
    userGoals?: string[];
  };
}

const schema = z.object({
  healthReport: z.string({ required_error: 'Health report summary is required.' }).min(10, 'Please provide more details in your health report summary.'),
  userGoals: z.string({ required_error: 'Health goals are required.' }).min(3, 'Please describe your health goals.'),
});

export async function getRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const healthReport = formData.get('healthReport') as string;
  const userGoals = formData.get('userGoals') as string;

  const validatedFields = schema.safeParse({
    healthReport,
    userGoals,
  });

  if (!validatedFields.success) {
    return {
      form: { healthReport, userGoals },
      status: 'error',
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await recommendProducts({
      healthReport: validatedFields.data.healthReport,
      userGoals: validatedFields.data.userGoals,
    });

    return {
      form: { healthReport: '', userGoals: '' },
      status: 'success',
      message: 'Here are your personalized recommendations!',
      recommendations: result.recommendedProducts,
    };
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return {
      form: { healthReport, userGoals },
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
