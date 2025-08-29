
import { ChefHat, CookingPot, Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const recipes = [
  {
    title: 'Gur-Ghee Paratha',
    ingredients: ['Whole wheat flour', 'Jaggery (powdered)', 'A2 ghee'],
    howToMake: [
      'Knead a soft dough with atta and water.',
      'Roll out a small disc, spread a thin layer of A2 ghee, and sprinkle jaggery inside.',
      'Seal the dough, roll it out again gently, and roast on a tawa with A2 ghee until golden brown on both sides.',
    ],
    result: 'A soft, sweet paratha with a delicious, caramelized jaggery center.',
  },
  {
    title: 'A2 Ghee Gur Laddoo',
    ingredients: ['Whole wheat flour or roasted atta', 'Jaggery', 'A2 ghee', 'Chopped dry fruits'],
    howToMake: [
      'In a pan, roast the atta in A2 ghee on low heat until it turns golden and aromatic.',
      'In a separate pan, melt the jaggery with a spoonful of water to create a thick syrup.',
      'Combine the roasted atta, ghee, and melted jaggery. Add the chopped dry fruits and mix well.',
      'While the mixture is still warm, shape it into laddoos.',
    ],
    result: 'Energy-rich, melt-in-your-mouth laddoos that are perfect for winter.',
  },
  {
    title: 'Gur-Ghee Doodh (Immunity Drink)',
    ingredients: ['Milk', 'Jaggery', 'A2 ghee', 'A pinch of cardamom powder'],
    howToMake: [
      'Boil a glass of milk and let it cool down slightly so it\'s warm, not scalding.',
      'Stir in a spoonful of powdered jaggery until it dissolves completely.',
      'Add half a spoon of A2 ghee and a pinch of cardamom powder. Mix well.',
      'Serve warm before bedtime for a restful sleep.',
    ],
    result: 'A comforting and soothing drink that aids digestion and boosts immunity.',
  },
  {
    title: 'Gur-Ghee Rice (Sweet Pongal Style)',
    ingredients: ['Cooked rice', 'Jaggery', 'A2 ghee', 'Cashews', 'Raisins', 'Cardamom powder'],
    howToMake: [
      'Ensure the rice is cooked until soft.',
      'In a pan, melt jaggery with a little water to form a syrup. Add the cooked rice and mix until well combined.',
      'In a separate small pan, heat A2 ghee and fry the cashews and raisins until golden.',
      'Pour the ghee with cashews and raisins over the rice. Sprinkle with cardamom powder and mix gently.',
    ],
    result: 'A festive and flavorful sweet rice, light on the stomach yet rich in taste.',
  },
];

export default function RecipesPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <ChefHat className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Grandma's Secret Recipes</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover delicious and healthy ways to use your favorite Chunks products, passed down through generations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {recipes.map((recipe, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <CookingPot className="h-6 w-6 text-primary" />
                  {recipe.title}
                </CardTitle>
                <CardDescription>{recipe.result}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ingredients">
                    <AccordionTrigger>Ingredients</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {recipe.ingredients.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="instructions">
                    <AccordionTrigger>How to Make</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                        {recipe.howToMake.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
