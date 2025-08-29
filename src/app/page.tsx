
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Heart, Users, Leaf, CookingPot, Truck, ChefHat, PackageCheck, Lock, Snail, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { featuredProducts, testimonials } from '@/lib/placeholder-data';
import ProductCard from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-secondary">
        <div className="container relative px-4 md:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
           <div className="flex-1 space-y-6 z-10">
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-balance">
                Real Indian Chunks,
                <br />
                <span className="text-primary">Unreal Taste</span>
              </h1>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground text-balance">
                Discover guilt-free, homegrown chunks sourced directly from the heartlands of India
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/products">Explore Our Offerings</Link>
                </Button>
              </div>
           </div>
           <div className="flex-1 relative h-80 w-full md:h-[500px] aspect-square">
            <Image
              src="https://i.ibb.co/RTmzgjnM/Screenshot-2025-07-13-at-11-41-02-PM.png"
              alt="Artisanal Indian health products"
              data-ai-hint="artisanal products"
              fill
              className="object-contain"
              style={{filter: 'drop-shadow(0px 15px 40px hsla(var(--primary)/0.2))'}}
            />
           </div>
        </div>
      </section>
      
      {/* My Kahani, My Zubani Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">My Kahani, My Zubani</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Welcome to Chunks, a clean-label brand reimagining everyday indulgence. Amit and Priyanka, self-taught home chefs and cuisine explorers, are passionate about creating new flavors that feel both exciting and familiar.
                </p>
                <p>
                  Every product is crafted with love, using only clean ingredients, with no preservatives and no shortcuts. We also work with a handful of genuine farmers who produce items on our demand, so your order starts getting prepared only after we receive it. That’s why deliveries take a little more time <strong>जल्दी का काम शैतान का!!!!</strong>
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/400"
                alt="Founders of Chunks"
                data-ai-hint="founders portrait"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seal of Trust Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://i.ibb.co/RzM8yCg/promise.png"
                alt="Our promise of quality"
                data-ai-hint="product packaging"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Seal of Trust</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Our farmers instantly seal-pack every item with our patented seal, created to guarantee freshness and safety. Once your order is packed, nobody can open it except you. We’ve invested heavily in research to make sure the chances of duplicacy are impossible.
                </p>
                <p>
                  And because we believe in complete transparency, we also share videos and photos of the making and sealing process. So just relax, <strong>और बाकी हम पे छोड़ दो.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New "Why Chunks" Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                    <Snail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold mt-2">Slow Shipping</h3>
                <p className="text-sm text-primary-foreground/80 max-w-xs">
                    Made fresh on order, delivered with love.
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                    <ChefHat className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold mt-2">Home Chefs</h3>
                <p className="text-sm text-primary-foreground/80 max-w-xs">
                    Expertly crafted by home chefs with premium ingredients.
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                    <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold mt-2">Seal of Trust</h3>
                <p className="text-sm text-primary-foreground/80 max-w-xs">
                    Authenticity and quality, guaranteed.
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                    <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold mt-2">100% Secure Shopping</h3>
                <p className="text-sm text-primary-foreground/80 max-w-xs">
                    Shop with confidence, your data is fully protected.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 md:py-24 bg-background">
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
      
      {/* Know Your Chunks CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="bg-secondary rounded-2xl shadow-md overflow-hidden md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <Badge variant="accent">AI-Powered Nutrition</Badge>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mt-2">Know Your Chunks</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Upload your health report and get personalized food recommendations from our range of natural products It's smart, simple, and tailored just for you
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/know-your-chunks">Analyze My Report</Link>
              </Button>
            </div>
            <div className="h-64 md:h-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="A collage of Indian chunkers"
                data-ai-hint="health report analysis"
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
        <div className="container px-4 mdS:px-6">
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
            <Button asChild variant="link" className="text-primary text-lg font-semibold">
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
