import RecommendationForm from './recommendation-form';
import { Bot } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">AI-Powered Snack Guide</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get personalized snack recommendations from Chunks. Simply share a summary of your health report (e.g., "low iron, high cholesterol") and your wellness goals to receive a custom-tailored nudge towards better health.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <RecommendationForm />
        </div>
      </div>
    </div>
  );
}
