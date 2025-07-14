
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, products } from "@/lib/placeholder-data";
import ProductCard from "@/components/ProductCard";
import { Bee } from "@/components/Bee";
import { Cow } from "@/components/Cow";

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
            <TabsContent key={category.id} value={category.id} className="relative">
               {category.id === 'honey' && (
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
                    <Bee style={{ animation: 'fly-1 35s linear infinite', animationDelay: '0s', top: '10%' }} />
                    <Bee style={{ animation: 'fly-2 40s linear infinite', animationDelay: '5s', top: '50%' }} />
                    <Bee style={{ animation: 'fly-3 30s linear infinite', animationDelay: '10s', top: '80%' }} />
                  </div>
                )}
                {category.id === 'ghee' && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <Cow className="w-32 h-32" style={{ animation: 'dance 12s ease-in-out infinite alternate-reverse', top: '5%', right: '5%' }}/>
                        <Cow className="w-40 h-40" style={{ animation: 'dance 8s ease-in-out infinite alternate', bottom: '5%', left: '5%' }}/>
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
