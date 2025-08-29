
import { ChefHat } from 'lucide-react';

export default function RecipesPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <ChefHat className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Our Recipes</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover delicious and healthy ways to use your favorite Chunks products.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Recipes are coming soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}
