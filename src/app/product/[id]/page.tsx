import Image from 'next/image';
import { notFound } from 'next/navigation';

import { products, testimonials as allTestimonials } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Feather, Heart, ShoppingCart, ShieldCheck } from 'lucide-react';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const testimonials = allTestimonials.slice(0, 2);

  if (!product) {
    notFound();
  }

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

            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">₹{product.price}</p>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted border">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div>
                    <h4 className="font-semibold text-foreground">Chunks Seal of Trust</h4>
                    <p className="text-sm text-muted-foreground">100% Tamper-proof. Guaranteed Purity.</p>
                </div>
            </div>

            <Button size="lg" className="w-full">
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
                <AccordionTrigger className="font-headline text-lg">Ingredients</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.ingredients.join(', ')}.</p>
                </AccordionContent>
              </AccordionItem>
              {product.certifications && (
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-headline text-lg">Certifications</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.certifications.join(', ')}.</p>
                </AccordionContent>
              </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>

        {/* Farmer Story Section */}
        <div className="mt-16 md:mt-24">
            <Card className="bg-muted overflow-hidden border-none shadow-none">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="md:col-span-1">
                        <Image
                            src={product.farmerStory.photo}
                            alt={product.farmerStory.name}
                            data-ai-hint="farmer portrait"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover aspect-square md:aspect-auto rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>
                    <div className="md:col-span-1 p-8 md:p-12">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl flex items-center gap-2"><Feather className="h-6 w-6 text-secondary"/> From the Farmer</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-muted-foreground italic text-base">&quot;{product.farmerStory.story}&quot;</p>
                            <p className="font-semibold mt-4">- {product.farmerStory.name}, {product.region}</p>
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
