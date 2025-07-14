
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, products } from "@/lib/placeholder-data";
import ProductCard from "@/components/ProductCard";
import { Bee } from "@/components/Bee";

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
            <TabsContent key={category.id} value={category.id}>
               {category.id === 'honey' && (
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <Bee style={{ animation: 'fly-1 20s linear infinite', top: '10%', left: '-10%' }} />
                    <Bee style={{ animation: 'fly-2 25s linear infinite', top: '30%', left: '-10%' }} />
                    <Bee style={{ animation: 'fly-3 18s linear infinite', top: '50%', left: '-10%' }} />
                    <Bee style={{ animation: 'fly-4 22s linear infinite', top: '70%', left: '-10%' }} />
                    <Bee style={{ animation: 'fly-1 23s linear infinite 5s', top: '90%', left: '-10%' }} />
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
