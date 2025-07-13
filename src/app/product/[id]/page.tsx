'use client'

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

import { products, testimonials as allTestimonials } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Feather, Heart, ShoppingCart, ShieldCheck, FileText, Download, Info } from 'lucide-react';
import { TestimonialCard } from '@/components/TestimonialCard';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { Product, ProductVariant } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const product = products.find((p) => p.id === params.id);
  const testimonials = allTestimonials.slice(0, 2);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(product?.variants[0]);

  if (!product) {
    notFound();
  }

  const handleVariantChange = (variantId: string) => {
    const newVariant = product.variants.find(v => v.id === variantId);
    setSelectedVariant(newVariant);
  };
  
  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addToCart(product, selectedVariant);
      toast({
        title: "Added to cart",
        description: `${product.name} (${selectedVariant.size}) has been added to your cart`,
      });
    }
  };

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images Carousel */}
          <div>
            <div className="relative aspect-square">
               <Image
                src={product.image}
                alt={product.name}
                data-ai-hint="product detail"
                fill
                className="w-full h-auto object-contain rounded-lg"
                style={{filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.2))'}}
              />
            </div>
             <Carousel className="w-full max-w-xs mx-auto mt-4">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <Card className="overflow-hidden bg-white">
                      <Image
                        src={img}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint="product thumbnail"
                        width={100}
                        height={100}
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4"/>
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="accent">{product.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>
            
            {product.variants.length > 1 && (
              <div>
                <Label className="text-lg font-headline mb-2 block">Select Size</Label>
                <RadioGroup
                  defaultValue={selectedVariant?.id}
                  onValueChange={handleVariantChange}
                  className="flex flex-wrap gap-4"
                >
                  {product.variants.map((variant) => (
                    <Label
                      key={variant.id}
                      htmlFor={variant.id}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                        selectedVariant?.id === variant.id && "border-primary"
                      )}
                    >
                      <RadioGroupItem value={variant.id} id={variant.id} className="sr-only" />
                      <span className="font-bold">{variant.size}</span>
                      <span className="text-sm">₹{variant.price}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}


            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">₹{selectedVariant?.price}</p>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted border">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div>
                    <h4 className="font-semibold text-foreground">Chunks Seal of Trust</h4>
                    <p className="text-sm text-muted-foreground">100% Tamper-proof Guaranteed Purity</p>
                </div>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-headline text-lg">Health Benefits</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {product.healthBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-headline text-lg">Ingredient Traceability</AccordionTrigger>
                <AccordionContent>
                   <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Ingredient</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Batch ID</TableHead>
                        <TableHead>Expiry</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.ingredients.map((ingredient, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell>{ingredient.source}</TableCell>
                            <TableCell>{ingredient.batchId}</TableCell>
                            <TableCell>{ingredient.expiryDate}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </AccordionContent>
              </AccordionItem>
               {product.nutrition && (
                 <AccordionItem value="item-5">
                    <AccordionTrigger className="font-headline text-lg">Nutritional Information</AccordionTrigger>
                    <AccordionContent>
                         <p className="text-sm text-muted-foreground mb-4">Approximate values per 100g serving</p>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Nutrient</TableHead>
                                <TableHead className="text-right">Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(product.nutrition).map(([key, value]) => (
                                <TableRow key={key}>
                                    <TableCell className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</TableCell>
                                    <TableCell className="text-right">{value}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </AccordionContent>
                </AccordionItem>
              )}
              {product.reports && product.reports.length > 0 && (
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-headline text-lg">Quality Reports</AccordionTrigger>
                <AccordionContent>
                    <ul className="space-y-2">
                        {product.reports.map((report, i) => (
                            <li key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium">{report.name}</p>
                                        <p className="text-sm text-muted-foreground">Date: {report.date}</p>
                                    </div>
                                </div>
                                <Button asChild variant="outline" size="sm">
                                    <Link href={report.url} target="_blank">
                                        <Download className="mr-2 h-4 w-4" />
                                        View
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
              </AccordionItem>
              )}
               {product.certifications && (
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-headline text-lg">Certifications</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.certifications.join(', ')}</p>
                </AccordionContent>
              </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>

        {/* Chunker Story Section */}
        <div className="mt-16 md:mt-24">
            <Card className="bg-muted overflow-hidden border-none shadow-none">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:col-span-1">
                        <Image
                            src={product.chunkerStory.photo}
                            alt={product.chunkerStory.name}
                            data-ai-hint="farmer portrait"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover aspect-square md:aspect-auto rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>
                    <div className="md:col-span-1 p-8 md:p-12">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl flex items-center gap-2"><Feather className="h-6 w-6 text-secondary"/> From the Chunker</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-muted-foreground italic text-base">&quot;{product.chunkerStory.story}&quot;</p>
                            <p className="font-semibold mt-4">- {product.chunkerStory.name}, {product.region}</p>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>

        {/* Testimonials Section */}
         <div className="mt-16 md:mt-24">
            <h2 className="text-3xl font-headline font-bold text-center mb-8 flex items-center justify-center gap-2"><Heart className="h-8 w-8 text-primary"/> Customer Experiences</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
             </div>
        </div>
      </div>
    </div>
  );
}
