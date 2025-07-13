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
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/product/${product.id}`} className="block">
          <Image
            src={product.image}
            alt={product.name}
            data-ai-hint="product image"
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-headline">
           <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
        </CardTitle>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin className="h-4 w-4" />
          <span>{product.region}</span>
        </div>
        <p className="mt-2 text-xl font-semibold">
          ₹{product.price}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/product/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
