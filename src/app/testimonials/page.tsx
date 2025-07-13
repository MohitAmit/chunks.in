import { testimonials } from '@/lib/placeholder-data';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function TestimonialsPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Voices of Our Community</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Read what our customers have to say about their journey with Chunks snacks
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>


        <div className="mt-24 max-w-3xl mx-auto">
            <Card>
                <CardHeader className="text-center">
                    <Heart className="h-10 w-10 text-primary mx-auto mb-2" />
                    <CardTitle className="text-3xl font-headline">Share Your Story</CardTitle>
                    <CardDescription>We&apos;d love to hear about your experience!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" placeholder="Enter your name" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="location">Your Location</Label>
                                <Input id="location" placeholder="e.g., Mumbai, IN" />
                            </div>
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="testimonial">Your Testimonial</Label>
                             <Textarea id="testimonial" placeholder="Share your thoughts..." rows={5} />
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="rating">Rating</Label>
                             {/* Placeholder for star rating component */}
                             <Input id="rating" type="number" min="1" max="5" placeholder="Rate us from 1 to 5" />
                        </div>
                         <Button type="submit" className="w-full">Submit Your Review</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
