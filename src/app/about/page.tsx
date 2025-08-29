import Image from 'next/image';
import { Leaf, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From the soil of India, to your soul
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-headline font-bold">The Heart of Chunks</h2>
            <p className="text-muted-foreground leading-relaxed">
              Chunks was born from a simple yet powerful idea: to bridge the gap between conscientious consumers and the dedicated chunkers of India who cultivate with passion and integrity We journeyed through the country&apos;s diverse landscapes, from the saffron fields of Kashmir to the millet farms of Karnataka, to find artisans who practice traditional, sustainable farming
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that true wellness comes from food that is pure, unadulterated, and grown in harmony with nature Our platform is more than just a marketplace; it&apos;s a celebration of India&apos;s rich agricultural heritage and the communities that uphold it
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Indian chunker in a field"
              data-ai-hint="indian farm"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">Authenticity</h3>
              <p className="mt-2 text-muted-foreground">
                We guarantee 100% preservative-free, natural products sourced directly from trusted vendors
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">Farmer First</h3>
              <p className="mt-2 text-muted-foreground">
                We ensure fair prices and empower our farmer communities by sharing their stories and craftsmanship
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold">Conscious Living</h3>
              <p className="mt-2 text-muted-foreground">
                We promote a lifestyle of wellness and transparency, connecting you to the origins of your food
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
