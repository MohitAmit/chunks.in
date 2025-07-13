'use client';

import Link from 'next/link';
import { Leaf, Menu, ShoppingCart, User, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/recommendations', label: 'Recommendations' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Bharat Haat</span>
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-bold">Bharat Haat</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      )}
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto border-t pt-4">
                   <Button asChild className="w-full" onClick={() => setSheetOpen(false)}>
                    <Link href="/login">Login / Sign Up</Link>
                   </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
           <Button variant="ghost" size="icon">
             <ShoppingCart className="h-5 w-5" />
             <span className="sr-only">Shopping Cart</span>
           </Button>
           <ThemeToggle />
           <Button variant="ghost" size="icon" asChild>
             <Link href="/dashboard">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
             </Link>
           </Button>
           <div className="hidden md:block">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  );
}
