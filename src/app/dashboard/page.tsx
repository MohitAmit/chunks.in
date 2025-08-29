'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Sparkles, Heart, Scale, Dumbbell, Bone, Loader2, ArrowRight } from 'lucide-react';
import type { GoalBasedRecommendationOutput } from '@/ai/flows/goal-based-recommendation-flow';
import { getGoalRecommendation } from '@/ai/flows/goal-based-recommendation-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { products } from '@/lib/placeholder-data';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const goals = [
  { id: 'weight-management', name: 'Weight Management', icon: Scale, description: "I'm looking to manage my weight in a healthy way." },
  { id: 'gym-performance', name: 'Gym Performance', icon: Dumbbell, description: "I want to improve my stamina and workout recovery." },
  { id: 'joint-care', name: 'Joint Care', icon: Bone, description: "I'm seeking natural support for my joint health." },
  { id: 'general-wellness', name: 'General Wellness', icon: Heart, description: "I just want to eat healthier and feel better." },
];

export default function DashboardPage() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<GoalBasedRecommendationOutput | null>(null);
  
  const handleGetRecommendation = async () => {
    if (!selectedGoal) {
      setError('Please select a goal first.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setResults(null);
    
    try {
      const goalName = goals.find(g => g.id === selectedGoal)?.description || '';
      const result = await getGoalRecommendation({ goal: goalName });
      setResults(result);
    } catch (err) {
      console.error(err);
      setError('An error occurred while getting recommendations. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedGoal(null);
    setResults(null);
    setError(null);
    setIsLoading(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        <AnimatePresence mode="wait">
        {!results && !isLoading && (
          <motion.div
            key="selection-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className="text-center mb-12">
                <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground text-balance">Your Personal Wellness Guide</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                    Tell us your wellness goal, and our AI will suggest the perfect Chunks products to support your journey.
                </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">What's Your Goal Today?</CardTitle>
                <CardDescription>Select one of the goals below to get started.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all flex items-start gap-4 ${selectedGoal === goal.id ? 'border-primary bg-primary/5' : 'hover:bg-accent'}`}
                    >
                      <goal.icon className={`h-8 w-8 mt-1 flex-shrink-0 ${selectedGoal === goal.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div>
                        <h3 className="font-semibold text-lg">{goal.name}</h3>
                        <p className="text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button onClick={handleGetRecommendation} disabled={!selectedGoal || isLoading} className="w-full mt-6" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get My Recommendation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
        </AnimatePresence>

        <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="text-center mt-8"
          >
              <div className="inline-block relative">
                <Loader2 className="h-16 w-16 mx-auto animate-spin text-primary mb-4" />
                <Bot className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/70"/>
              </div>
              <p className="text-2xl font-headline font-semibold">Finding your perfect match...</p>
              <p className="text-muted-foreground">Our AI is consulting with our digital chunkers for you!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {results && (
           <motion.div
            key="results-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground text-balance">Your Personalized Recommendations</h1>
              <p className="mt-2 text-lg text-muted-foreground">For your goal: <span className="font-semibold text-primary">{goals.find(g => g.id === selectedGoal)?.name}</span></p>
            </div>

            <Card className="shadow-md">
              <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3"><Sparkles className="h-8 w-8 text-primary"/> AI-Powered Suggestions</CardTitle>
                   <CardDescription>
                      {results.summary}
                  </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.recommendations.map((item, index) => {
                    const product = products.find(p => p.id === item.productId);
                    return (
                      <Card key={index} className="p-4 flex flex-col items-center text-center bg-background transition-all hover:shadow-lg hover:-translate-y-1">
                         {product && (
                          <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain" style={{filter: 'drop-shadow(0px 5px 10px hsla(var(--primary)/0.1))'}}/>
                         )}
                         <h4 className="font-headline text-lg mt-2">{item.productName}</h4>
                         <p className="text-muted-foreground text-sm flex-grow mt-1 mb-3">{item.reason}</p>
                         <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/product/${item.productId}`}>View Product</Link>
                         </Button>
                      </Card>
                  )})}
                </CardContent>
            </Card>

             <div className="text-center space-y-4">
               <Alert className="text-left max-w-3xl mx-auto bg-card">
                  <AlertTitle className="font-semibold">Disclaimer</AlertTitle>
                  <AlertDescription>
                      This analysis is AI-generated and for informational purposes only. It is not a substitute for professional medical advice. Always consult with a healthcare provider for any health concerns.
                  </AlertDescription>
              </Alert>
               <Button onClick={handleReset} variant="ghost">Start Over</Button>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
