'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendations, type RecommendationState } from './actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Loader2, PartyPopper, Upload } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Get My Recs
    </Button>
  );
}

export default function RecommendationForm() {
  const initialState: RecommendationState = {
    form: { healthReport: '', userGoals: '' },
    status: 'idle',
    message: '',
  };

  const [state, formAction] = useFormState(getRecommendations, initialState);

  return (
    <Card className="w-full border-secondary border-2">
        {state.status === 'success' ? (
            <div className="p-6">
                 <Alert className="border-green-500">
                    <PartyPopper className="h-4 w-4 text-green-500" />
                    <AlertTitle className="text-green-700">{state.message}</AlertTitle>
                    <AlertDescription className="mt-2 text-foreground prose">
                        <p>{state.recommendations}</p>
                    </AlertDescription>
                </Alert>
                <Button onClick={() => window.location.reload()} variant="outline" className="w-full mt-4">Start Over</Button>
            </div>
        ) : (
            <form action={formAction}>
            <CardHeader>
                <CardTitle>Your Wellness Details</CardTitle>
                <CardDescription>
                Your information is kept private and used solely for generating your recommendations.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <Button variant="outline" className="w-full border-dashed border-2 h-24">
                    <Upload className="mr-2"/> Upload Health Report PDF
                </Button>
                <div className="space-y-2">
                    <Label htmlFor="healthReport">Or, Summarize Your Report</Label>
                    <Textarea
                        id="healthReport"
                        name="healthReport"
                        placeholder="e.g., Low vitamin D, high LDL cholesterol, want to improve digestion..."
                        rows={5}
                        defaultValue={state.form.healthReport}
                    />
                    {state.errors?.healthReport && (
                        <p className="text-sm text-destructive">{state.errors.healthReport[0]}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="userGoals">Primary Health Goals</Label>
                    <Input
                        id="userGoals"
                        name="userGoals"
                        placeholder="e.g., Boost immunity, increase energy, better sleep"
                        defaultValue={state.form.userGoals}
                    />
                    {state.errors?.userGoals && (
                        <p className="text-sm text-destructive">{state.errors.userGoals[0]}</p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
                {state.status === 'error' && state.message && !state.errors && (
                     <Alert variant="destructive">
                        <AlertDescription>{state.message}</AlertDescription>
                    </Alert>
                )}
                <SubmitButton />
            </CardFooter>
            </form>
        )}

    </Card>
  );
}
