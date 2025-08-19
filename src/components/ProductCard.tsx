import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const startingPrice = product.variants.reduce((min, v) => v.price < min ? v.price : min, product.variants[0].price);
  
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <CardHeader className="p-0 relative">
        <Link href={`/product/${product.id}`} className="block">
           <div className="aspect-square overflow-hidden">
             <Image
                src={product.image}
                alt={product.name}
                data-ai-hint="product image"
                width={400}
                height={400}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                style={{filter: 'drop-shadow(0px 5px 15px rgba(0,0,0,0.1))'}}
              />
           </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4 text-center">
        <CardTitle className="text-lg font-headline">
           <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
        </CardTitle>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin className="h-4 w-4" />
          <span>{product.region}</span>
        </div>
        <p className="mt-2 text-xl font-semibold">
          From Rs {startingPrice}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
