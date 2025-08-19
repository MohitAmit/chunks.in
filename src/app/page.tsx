
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Heart, Users, Leaf, CookingPot } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { featuredProducts, testimonials } from '@/lib/placeholder-data';
import ProductCard from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-0"></div>
        <div className="container relative px-4 md:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
           <div className="flex-1 space-y-6 z-10">
              <Badge variant="secondary" className="text-lg py-2 px-4 shadow-soft">
                <Leaf className="mr-2 h-5 w-5" /> 100% Preservative-Free
              </Badge>
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
                  <Link href="/products">Explore Chunks</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
           </div>
           <div className="flex-1 relative h-80 w-full md:h-[500px] aspect-square">
            <Image
              src="https://i.ibb.co/b54KQm6/main-screen.png" // The AI modified this line
              alt="Artisanal Indian health products"
              data-ai-hint="artisanal products"
              fill
              className="object-contain"
              style={{filter: 'drop-shadow(0px 15px 40px hsla(var(--primary)/0.2))'}}
            />
           </div>
        </div>
      </section>

       {/* Why Chunks Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Chunks?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">We connect you directly to the source, ensuring purity and fairness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">100% Natural</h3>
              <p className="mt-2 text-muted-foreground">
                Sourced directly from trusted vendors, free from preservatives and additives
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">Farmer First</h3>
              <p className="mt-2 text-muted-foreground">
                We ensure fair prices, empowering our farmer communities and sharing their stories
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">Radical Transparency</h3>
              <p className="mt-2 text-muted-foreground">
                Know the origin, ingredients, and the hands that crafted your food with our reports
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
          <div className="bg-background rounded-2xl shadow-md overflow-hidden md:grid md:grid-cols-2 items-center">
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
                src="https://placehold.co/600x600.png"
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

    
