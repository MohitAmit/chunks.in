'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeartPulse, Upload, FileText, Sparkles, Lightbulb, ShoppingCart, Loader2, ArrowRight, Bot, Microscope, Scale, FileUp, Leaf, ArrowDown } from 'lucide-react';
import type { AnalyzeHealthReportOutput } from '@/ai/flows/health-report-flow';
import { analyzeHealthReport } from '@/ai/flows/health-report-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/placeholder-data';

export default function KnowYourBodyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AnalyzeHealthReportOutput | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be less than 10MB');
        return;
      }
      setFile(selectedFile);
      setError(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !preview) {
      setError('Please select a file to analyze');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const result = await analyzeHealthReport({ reportDataUri: preview });
      setResults(result);
    } catch (err) {
      console.error(err);
      setError('An error occurred during analysis Please try again');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
    setError(null);
    setIsLoading(false);
  }

  const flowchartSteps = [
    { icon: FileUp, title: "Step 1: Upload Your Health Report", description: "Drop in your full body report (PDF, image, or scan) The journey to smarter snacking begins here" },
    { icon: Bot, title: "Step 2: Smart AI Does the Heavy Lifting", description: "Our system decodes your body metrics – vitamins, sugar levels, deficiencies, and more" },
    { icon: Microscope, title: "Step 3: Discover What’s Off-Balance", description: "We flag anything that’s too high or too low — and highlight what your body needs more of" },
    { icon: Leaf, title: "Step 4: Get Your Personalized Food Plan", description: "You’ll receive snack & food recommendations from our natural, homegrown collection – tailored to your body" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      {!results && (
        <>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">🌿 Know Your Body: Your Health, Your Snacks</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Take charge of your health in just 4 simple steps — and let Chunks craft the perfect snack plan for you
            </p>
             <p className="mt-2 text-sm text-muted-foreground max-w-3xl mx-auto">
              ⚠️ Your data is 100% private and used only for this health analysis
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* How It Works Section */}
            <div className="lg:order-1 space-y-4">
              <h2 className="text-2xl font-headline font-bold text-center mb-6">⚙️ How It Works</h2>
              <div className="flex flex-col items-center">
                {flowchartSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center text-center gap-4 w-full max-w-md">
                        <div className="bg-primary/10 p-4 rounded-full border-2 border-primary/20 bg-background">
                            <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">🔹 {step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    </div>
                    {index < flowchartSteps.length - 1 && (
                      <div className="h-12 w-px flex justify-center">
                        <ArrowDown className="h-8 w-8 text-primary/50 my-2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 font-semibold">🎯 Think of it as a health report card + snack prescription, all in one!</p>
            </div>

            {/* Upload Section */}
            <div className="lg:order-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Full Body Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 border-2 border-dashed rounded-lg text-center bg-muted/50">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <Label htmlFor="report-upload" className="cursor-pointer">
                      <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                    </Label>
                    <Input id="report-upload" type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileChange} disabled={isLoading} />
                     <p className="text-xs text-muted-foreground mt-2">PDF, JPG or PNG Max 10MB</p>
                  </div>
                  
                  {preview && !isLoading && (
                    <div className="p-3 border rounded-md bg-secondary/30">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="font-medium">{file?.name}</span>
                        </div>
                    </div>
                  )}

                  {error && (
                    <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button onClick={handleAnalyze} disabled={!file || isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Analyze My Report
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}

      {isLoading && !results && (
        <div className="text-center mt-8">
            <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-xl font-semibold">Analyzing your report, please wait</p>
            <p className="text-muted-foreground">Our AI is working its magic!</p>
        </div>
      )}

      {results && (
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Your Personalized Results</h1>
            <p className="mt-2 text-lg text-muted-foreground">Here are the insights and recommendations based on your report</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Body Type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Scale className="h-6 w-6 text-primary"/> Your Body Type</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">Pitta</p>
                <p className="text-muted-foreground mt-1">This is a placeholder Your Ayurvedic dosha or body type would be displayed here</p>
              </CardContent>
            </Card>
            
            {/* Health Insights */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lightbulb className="h-6 w-6 text-primary"/> Health Insights</CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-3">
                  {results.analysis.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                       <ArrowRight className="h-5 w-5 text-secondary mt-1 shrink-0" />
                      <div>
                          <h4 className="font-semibold">{item.marker}</h4>
                          <p className="text-muted-foreground">{item.finding}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Food Suggestions */}
          <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><ShoppingCart className="h-8 w-8 text-primary"/> Chunks Food Suggestions</CardTitle>
                 <CardDescription>
                    Based on your health insights, here are some Chunks products that may be beneficial
                </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.recommendations.map((item, index) => {
                  const product = products.find(p => p.id === item.productId);
                  return (
                    <Card key={index} className="p-4 flex flex-col items-center text-center">
                       {product && (
                        <Image src={product.image} alt={product.name} width={150} height={150} className="object-contain" />
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
          
          <div className="text-center">
             <Button onClick={handleReset} variant="ghost">Analyze Another Report</Button>
             <Alert className="mt-6 text-left max-w-3xl mx-auto">
                <AlertTitle>Disclaimer</AlertTitle>
                <AlertDescription>
                    This analysis is AI-generated and for informational purposes only It is not a substitute for professional medical advice Always consult with a healthcare provider for any health concerns
                </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
}
