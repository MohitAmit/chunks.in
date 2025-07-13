import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

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
                Unreal Taste
              </h1>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
                Discover guilt-free, homegrown health snacks sourced directly from the heartlands of India
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
            <p className="mt-2 text-lg text-muted-foreground">Handpicked for your well-being</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-foreground font-bold text-lg hover:text-primary">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Seal of Trust Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-lg shadow-soft overflow-hidden md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-3">
                 <ShieldCheck className="h-10 w-10 text-primary"/>
                 <h2 className="text-3xl md:text-4xl font-headline font-bold">Seal of Trust</h2>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Every Chunks package comes with a tamper-proof seal This ensures that the product is untouched from our farm to your hands, guaranteeing 100% purity and preventing any alteration Your trust is our priority
              </p>
            </div>
            <div className="h-64 md:h-full order-1 md:order-2">
              <Image
                src="https://placehold.co/600x600.png"
                alt="A Chunks package with a seal of trust"
                data-ai-hint="secure packaging seal"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Farmers CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-lg shadow-soft overflow-hidden md:grid md:grid-cols-2 items-center border-2 border-secondary">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Know Your Farmers</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the incredible people behind your food Learn their stories, understand their craft, and see the passion that goes into every product
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/farmers">Meet the Growers</Link>
              </Button>
            </div>
            <div className="h-64 md:h-full">
              <Image
                src="https://placehold.co/600x600.png"
                alt="A collage of Indian farmers"
                data-ai-hint="indian farmers collage"
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
            <p className="mt-2 text-lg text-muted-foreground">Real stories from our happy customers</p>
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
