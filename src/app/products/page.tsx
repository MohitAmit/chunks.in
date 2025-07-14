
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, products } from "@/lib/placeholder-data";
import ProductCard from "@/components/ProductCard";
import { Bee } from "@/components/Bee";
import { Cow } from "@/components/Cow";
import { Sugarcane } from "@/components/Sugarcane";

export default function ProductsPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Our Chunks</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated range of natural and homegrown chunks, direct from Indian farms
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="all">All Chunks</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="relative overflow-hidden min-h-[50vh]">
               {category.id === 'honey' && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
                    <Bee style={{ animation: 'fly-heart-1 25s linear infinite', top: '5%', left: '-10%' }} />
                    <Bee style={{ animation: 'fly-heart-2 30s linear infinite', top: '15%', left: '100%' }} />
                    <Bee style={{ animation: 'fly-heart-3 20s linear infinite', top: '100%', left: '30%' }} />
                  </div>
                )}
                {category.id === 'ghee' && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10 dark:opacity-20">
                       <Cow 
                         className="w-24 h-24 absolute"
                         style={{ top: '10%', animation: 'walk 45s linear infinite' }}
                       />
                       <Cow
                         className="w-32 h-32 absolute"
                         style={{ top: '60%', animation: 'walk 60s linear infinite reverse', animationDelay: '5s' }}
                       />
                    </div>
                )}
                {category.id === 'jaggery' && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-50">
                       <Sugarcane style={{ animation: 'fall-1 20s linear infinite', left: '10%' }} />
                       <Sugarcane style={{ animation: 'fall-2 15s linear infinite', left: '50%', animationDelay: '5s' }} />
                       <Sugarcane style={{ animation: 'fall-3 18s linear infinite', left: '80%', animationDelay: '10s' }} />
                    </div>
                )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {products
                  .filter((product) => product.category === category.id)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
