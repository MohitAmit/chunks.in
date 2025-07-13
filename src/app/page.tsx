import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredProducts, testimonials } from '@/lib/placeholder-data';
import ProductCard from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Lush green fields in India"
          data-ai-hint="farm landscape"
          fill
          className="object-cover -z-10 brightness-50"
        />
        <div className="container px-4 md:px-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Authentic Indian Wellness,
            <br />
            Rooted in Tradition.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Discover preservative-free, homegrown health products sourced directly from the heartlands of India.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Products</h2>
            <p className="mt-2 text-lg text-muted-foreground">Handpicked for your well-being.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-accent text-lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Recommendation CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Personalized For You</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Upload your health report and tell us your goals. Our AI-powered guide will help you discover the perfect products from our farms to match your wellness journey.
              </p>
              <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90">
                <Link href="/recommendations">Get Your Nudge</Link>
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
      <section className="py-16 md:py-24 bg-background">
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
            <Button asChild variant="link" className="text-accent text-lg">
              <Link href="/testimonials">
                More Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
