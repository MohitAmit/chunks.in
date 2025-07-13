'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeartPulse, Upload, FileText, Sparkles, Lightbulb, ShoppingCart, Loader2 } from 'lucide-react';
import type { AnalyzeHealthReportOutput } from '@/ai/flows/health-report-flow';
import { analyzeHealthReport } from '@/ai/flows/health-report-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export default function KnowYourBodyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AnalyzeHealthReportOutput | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size must be less than 5MB.');
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
      setError('Please select a file to analyze.');
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
      setError('An error occurred during analysis. Please try again.');
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

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <HeartPulse className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Know Your Body</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Upload your health report to get personalized insights and product recommendations from Chunks.
        </p>
      </div>

      {!results && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Upload Your Report</CardTitle>
            <CardDescription>
              Upload an image or PDF of your latest health report. Your data is private and secure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="report-upload">Health Report File</Label>
              <Input id="report-upload" type="file" accept="image/*,application/pdf" onChange={handleFileChange} disabled={isLoading} />
              <p className="text-sm text-muted-foreground">Max file size: 5MB. Accepts PDF and images.</p>
            </div>
            
            {preview && !isLoading && (
              <div className="p-4 border rounded-md bg-muted/50">
                  <p className="font-semibold">File ready for analysis:</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>{file?.name}</span>
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
      )}

      {isLoading && !results && (
        <div className="text-center mt-8">
            <p className="text-lg font-semibold">Analyzing your report, please wait...</p>
            <p className="text-muted-foreground">Our AI is working its magic!</p>
        </div>
      )}

      {results && (
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3"><Lightbulb className="h-8 w-8 text-primary"/> Your Health Insights</CardTitle>
              <CardDescription>
                Based on the report you provided, here is a summary of key health markers.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2">
                {results.analysis.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-md">
                     <Sparkles className="h-5 w-5 text-secondary mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold">{item.marker}</h4>
                        <p className="text-muted-foreground">{item.finding}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3"><ShoppingCart className="h-8 w-8 text-primary"/> Recommended Chunks Products</CardTitle>
                 <CardDescription>
                    Here are some Chunks products that may align with your health profile.
                </CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-4">
                {results.recommendations.map((item, index) => (
                  <li key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                     <h4 className="font-headline text-xl">{item.productName}</h4>
                     <p className="text-muted-foreground mt-1 mb-3">{item.reason}</p>
                     <Button asChild variant="outline">
                        <Link href={`/product/${item.productId}`}>View Product</Link>
                     </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center">
             <Button onClick={handleReset} variant="ghost">Analyze a new report</Button>
             <Alert className="mt-6 text-left">
                <AlertTitle>Disclaimer</AlertTitle>
                <AlertDescription>
                    This analysis is AI-generated and for informational purposes only. It is not a substitute for professional medical advice. Always consult with a healthcare provider for any health concerns.
                </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
}
