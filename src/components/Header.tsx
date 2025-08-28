
'use client'

import Link from 'next/link'
import { Menu, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useCart } from '@/context/CartContext'
import { ChunksLogo } from './ChunksLogo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/chunkers', label: 'Our Farmers' },
  { href: '/about', label: 'About' },
  { href: '/know-your-chunks', label: 'Know Your Chunks'},
]

export default function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setSheetOpen] = useState(false)
  const { cart, isCartAnimating } = useCart();
  const cartItemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <ChunksLogo />
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
                    <ChunksLogo />
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg',
                        pathname === link.href ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
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
        
        <div className="flex md:hidden flex-1 justify-center">
           <Link href="/" className="flex items-center gap-2">
            <ChunksLogo />
          </Link>
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center md:gap-x-8 text-sm mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative transition-all duration-300 ease-in-out hover:text-primary',
                  pathname === link.href
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-primary' />
                )}
              </Link>
            ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
           <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
             {cartItemCount > 0 && (
                <div className={cn(
                    "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
                    isCartAnimating && "animate-blinking-scaled"
                )}>
                    {cartItemCount}
                </div>
             )}
             <ShoppingCart className="h-5 w-5" />
             <span className="sr-only">Shopping Cart</span>
            </Link>
           </Button>
           <ThemeToggle />
           <Button variant="ghost" size="icon" asChild>
             <Link href="/dashboard">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
             </Link>
           </Button>
           <div className="hidden md:block space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
             <Button asChild>
              <Link href="/login">Sign Up</Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  )
}
