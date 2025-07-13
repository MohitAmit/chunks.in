import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { featuredProducts, testimonials } from '@/lib/placeholder-data';
import ProductCard from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="container px-4 md:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
           <div className="flex-1 space-y-6 animate-fade-in">
              <Badge variant="secondary">100% Preservative-Free</Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
                Real Indian Snacks,
                <br />
                Unreal Taste.
              </h1>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
                Discover guilt-free, homegrown health snacks sourced directly from the heartlands of India.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/products">Explore Snacks</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
           </div>
           <div className="flex-1 relative h-64 w-full md:h-[450px] animate-fade-in [animation-delay:200ms]">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Chunks product packs"
              data-ai-hint="product snacks"
              fill
              className="object-contain"
              style={{filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.2))'}}
            />
           </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Chunks</h2>
            <p className="mt-2 text-lg text-muted-foreground">Handpicked for your well-being.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Recommendation CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-lg shadow-soft overflow-hidden md:grid md:grid-cols-2 items-center border-2 border-secondary">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Personalized For You</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Upload your health report and tell us your goals. Our AI-powered guide will help you discover the perfect snacks from our farms to match your wellness journey.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/recommendations">Upload PDF</Link>
              </Button>
            </div>
            <div className="h-64 md:h-full">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Personalized product selection"
                data-ai-hint="health wellness"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">From Our Community</h2>
            <p className="mt-2 text-lg text-muted-foreground">Real stories from our happy customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
               <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/testimonials">
                More Reviews <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
