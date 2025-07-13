'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Sparkles, Lightbulb, ShoppingCart, Loader2, ArrowRight, Bot, Microscope, Scale, FileUp, Leaf } from 'lucide-react';
import type { AnalyzeHealthReportOutput } from '@/ai/flows/health-report-flow';
import { analyzeHealthReport } from '@/ai/flows/health-report-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/placeholder-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function KnowYourChunksPage() {
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

  const steps = [
    { icon: FileUp, title: "Upload Report", description: "Securely upload your health report" },
    { icon: Bot, title: "AI Analysis", description: "Our AI identifies key health markers" },
    { icon: Microscope, title: "Get Insights", description: "Receive easy-to-understand findings" },
    { icon: Leaf, title: "Personalized Plan", description: "Get snack recommendations tailored to you" },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <AnimatePresence mode="wait">
        {!results && !isLoading && (
          <motion.div
            key="upload-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground text-balance">Know Your Chunks: Your Health, Your Snacks</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                Get personalized snack recommendations by letting our AI analyze your health report
              </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-3xl mx-auto">
                ⚠️ Your data is 100% private and used only for this one-time analysis
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* How it works */}
                <div className="p-8 border-b md:border-b-0 md:border-r">
                   <h2 className="text-2xl font-headline font-bold mb-6 text-center">How It Works</h2>
                   <div className="space-y-6">
                      {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                           <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center font-bold">{index + 1}</div>
                           <div>
                              <h3 className="font-semibold text-lg">{step.title}</h3>
                              <p className="text-muted-foreground text-sm">{step.description}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Upload section */}
                <div className="p-8">
                  <h2 className="text-2xl font-headline font-bold mb-6 text-center">Upload Your Report</h2>
                  <div className="p-6 border-2 border-dashed rounded-lg text-center bg-background hover:border-primary transition-colors cursor-pointer" onClick={() => document.getElementById('report-upload')?.click()}>
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <Label htmlFor="report-upload" className="cursor-pointer">
                      <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                    </Label>
                    <Input id="report-upload" type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileChange} />
                     <p className="text-xs text-muted-foreground mt-2">PDF, JPG or PNG Max 10MB</p>
                  </div>
                  
                  {preview && (
                    <div className="mt-4 p-3 border rounded-md bg-secondary/30 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm overflow-hidden">
                          <FileUp className="h-4 w-4 text-primary shrink-0" />
                          <span className="font-medium truncate">{file?.name}</span>
                        </div>
                        <button onClick={() => { setFile(null); setPreview(null); }} className="text-muted-foreground hover:text-destructive text-sm">Remove</button>
                    </div>
                  )}

                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button onClick={handleAnalyze} disabled={!file || isLoading} className="w-full mt-6" size="lg">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Analyze My Report
                  </Button>
                </div>
              </div>
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
              <p className="text-2xl font-headline font-semibold">Analyzing your report, please wait</p>
              <p className="text-muted-foreground">Our AI is crunching the numbers to build your personalized plan!</p>
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
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Your Personalized Results</h1>
              <p className="mt-2 text-lg text-muted-foreground">Here are the insights and recommendations based on your report</p>
            </div>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Lightbulb className="h-8 w-8 text-primary"/> Key Health Insights</CardTitle>
                <CardDescription>Our AI analysis identified these key areas from your report</CardDescription>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-4">
                  {results.analysis.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background">
                       <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                       </div>
                      <div>
                          <h4 className="font-semibold text-lg">{item.marker}</h4>
                          <p className="text-muted-foreground">{item.finding}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3"><ShoppingCart className="h-8 w-8 text-primary"/> Your Chunks Food Suggestions</CardTitle>
                   <CardDescription>
                      Based on your health insights, here are some Chunks products that may be beneficial
                  </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      This analysis is AI-generated and for informational purposes only It is not a substitute for professional medical advice Always consult with a healthcare provider for any health concerns
                  </AlertDescription>
              </Alert>
               <Button onClick={handleReset} variant="ghost">Analyze Another Report</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
