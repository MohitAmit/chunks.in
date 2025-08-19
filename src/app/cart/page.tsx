'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.items.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
            <ShoppingBag className="h-10 w-10 text-primary" />
            <div>
                <h1 className="text-3xl font-headline font-bold">Your Shopping Cart</h1>
                <p className="text-muted-foreground">Review your items and proceed to checkout</p>
            </div>
        </div>

        {cart.items.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed rounded-md">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet</p>
            <Button asChild className="mt-6">
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cart Items ({cart.items.reduce((acc, item) => acc + item.quantity, 0)})</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {cart.items.map((item) => {
                      const cartItemId = item.id + item.variant.id;
                      return (
                      <li key={cartItemId} className="flex flex-col sm:flex-row gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="rounded-md object-contain bg-muted p-2"
                        />
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.variant.size}</p>
                          <p className="text-lg font-bold mt-1">Rs {item.variant.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" onClick={() => updateQuantity(cartItemId, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <Button variant="ghost" size="icon" onClick={() => updateQuantity(cartItemId, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="outline" size="icon" onClick={() => removeFromCart(cartItemId)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </li>
                    )})}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">Rs {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">Rs {shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rs {total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                  <CardDescription>Enter your delivery details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123, Wellness Street" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" placeholder="400001" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>We accept all major cards and UPI</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className="w-full">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Proceed to Payment
                    </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
