import Image from 'next/image';
import { products } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Wheat } from 'lucide-react';

export default function FarmersPage() {
  const farmers = products.map(p => ({ ...p.farmerStory, region: p.region, products: [p.name] }));

  // Simple deduplication based on farmer name
  const uniqueFarmers = farmers.reduce((acc, current) => {
    const existing = acc.find(item => item.name === current.name);
    if (existing) {
      existing.products.push(...current.products);
    } else {
      acc.push(current);
    }
    return acc;
  }, [] as (typeof farmers[0])[]);

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <Wheat className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Meet Our Farmers</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            The heart and soul of Chunks These are the artisans who cultivate with passion, integrity, and a deep respect for nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFarmers.map((farmer) => (
            <Card key={farmer.name} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={farmer.photo}
                  alt={farmer.name}
                  data-ai-hint="farmer portrait"
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl">{farmer.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{farmer.region}</span>
                </div>
                <CardDescription className="mt-4 text-base italic text-muted-foreground">&quot;{farmer.story.substring(0, 100)}...&quot;</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full" asChild>
                   {/* This would ideally link to a dedicated farmer page */}
                  <Link href="/products">View Products</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
