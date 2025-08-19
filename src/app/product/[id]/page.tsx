
'use client'

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import Link from 'next/link';

import { products, testimonials as allTestimonials } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Feather, Heart, ShoppingCart, ShieldCheck, FileText, Download, Info, Leaf, Notebook, ScaleIcon } from 'lucide-react';
import { TestimonialCard } from '@/components/TestimonialCard';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { Product, ProductVariant } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);
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
        variant: 'default'
      });
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images Carousel */}
          <div>
            <Card className="overflow-hidden aspect-square relative shadow-md">
               <Image
                src={product.image}
                alt={product.name}
                data-ai-hint="product detail"
                fill
                className="w-full h-auto object-contain p-4"
                style={{filter: 'drop-shadow(0px 10px 30px hsla(var(--primary)/0.1))'}}
              />
            </Card>
             <Carousel className="w-full max-w-sm mx-auto mt-4">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <Card className="overflow-hidden bg-white aspect-square flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint="product thumbnail"
                        width={100}
                        height={100}
                        className="w-auto h-auto object-contain max-h-full max-w-full"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-2" />
              <CarouselNext className="mr-2"/>
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="accent">{product.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-headline font-bold text-balance">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>
            
            {product.variants.length > 1 && (
              <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-headline">Select Size</CardTitle>
                </CardHeader>
                <CardContent>
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
                            "flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all",
                            selectedVariant?.id === variant.id && "border-primary shadow-soft"
                        )}
                        >
                        <RadioGroupItem value={variant.id} id={variant.id} className="sr-only" />
                        <span className="font-bold">{variant.size}</span>
                        <span className="text-sm text-muted-foreground">Rs {variant.price}</span>
                        </Label>
                    ))}
                    </RadioGroup>
                </CardContent>
              </Card>
            )}


            <div className="flex items-baseline justify-between gap-4 p-4 rounded-lg bg-card">
              <span className="text-lg text-muted-foreground">Price</span>
              <p className="text-4xl font-bold text-foreground">Rs {selectedVariant?.price}</p>
            </div>
            
            <Button size="lg" className="w-full text-lg h-12" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-6 w-6" />
              Add to Cart
            </Button>

            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-headline text-lg"><Leaf className="text-primary mr-2"/>Health Benefits</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-2">
                    {product.healthBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-headline text-lg"><Notebook className="text-primary mr-2"/>Ingredient Traceability</AccordionTrigger>
                <AccordionContent>
                   <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Ingredient</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Procurement</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.ingredients.map((ingredient, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell>{ingredient.source}</TableCell>
                            <TableCell>{ingredient.procurementDate}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </AccordionContent>
              </AccordionItem>
               {product.nutrition && (
                 <AccordionItem value="item-5">
                    <AccordionTrigger className="font-headline text-lg"><ScaleIcon className="text-primary mr-2"/>Nutritional Information</AccordionTrigger>
                    <AccordionContent>
                         <p className="text-sm text-muted-foreground mb-4">Approximate values per 100g serving</p>
                         <Table>
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
                <AccordionTrigger className="font-headline text-lg"><FileText className="text-primary mr-2"/>Quality Reports</AccordionTrigger>
                <AccordionContent>
                    <ul className="space-y-2">
                        {product.reports.map((report, i) => (
                            <li key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="h-5 w-5 text-secondary" />
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
                <AccordionTrigger className="font-headline text-lg"><Info className="text-primary mr-2"/>Certifications</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, i) => (
                        <Badge key={i} variant="secondary">{cert}</Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>

        {/* Chunker Story Section */}
        <div className="mt-16 md:mt-24">
            <Card className="bg-card overflow-hidden shadow-md">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:col-span-1 h-full">
                        <Image
                            src={product.chunkerStory.photo}
                            alt={product.chunkerStory.name}
                            data-ai-hint="farmer portrait"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover aspect-square md:aspect-auto"
                        />
                    </div>
                    <div className="md:col-span-1 p-8 md:p-12">
                        <CardHeader className="p-0">
                            <Badge variant="outline">Meet the Maker</Badge>
                            <CardTitle className="font-headline text-3xl mt-2">{product.chunkerStory.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-muted-foreground italic text-base relative pl-5">
                              <span className="absolute left-0 top-0 text-3xl text-primary/50 font-serif -mt-1">“</span>
                              {product.chunkerStory.story}
                            </p>
                            <p className="font-semibold text-muted-foreground mt-4 text-right">- {product.chunkerStory.name}, {product.region}</p>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>

        {/* Testimonials Section */}
         <div className="mt-16 md:mt-24">
            <h2 className="text-3xl font-headline font-bold text-center mb-8 flex items-center justify-center gap-3"><Heart className="h-8 w-8 text-primary"/> Customer Experiences</h2>
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
