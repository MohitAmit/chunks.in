
'use client'

import Link from 'next/link'
import { Menu, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/chunkers', label: 'Our Farmers' },
  { href: '/about', label: 'About' },
  { href: '/know-your-chunks', label: 'Know Your Chunks'},
]

const ChunksLogo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const svgContent = (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <style>
              {`
                .logo-c { fill: #8e44ad; }
                .logo-h { fill: #2a9d8f; }
                .logo-u { fill: #e74c3c; }
                .logo-n { fill: #f4a261; }
                .logo-k { fill: #e76f51; }
                .logo-s { fill: #8e44ad; }
                .logo-subtext { fill: hsl(var(--foreground)); opacity: 0.8; }
                .dark .logo-c { fill: #f5c02c; }
                .dark .logo-h { fill: #81b29a; }
                .dark .logo-u { fill: #e74c3c; }
                .dark .logo-n { fill: #f5b98b; }
                .dark .logo-k { fill: #ee9279; }
                .dark .logo-s { fill: #f5c02c; }
                .dark .logo-subtext { fill: hsl(var(--foreground)); opacity: 0.8; }
              `}
            </style>
            <text y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28">
                <tspan className="logo-c">C</tspan>
                <tspan dx="1" className="logo-h">h</tspan>
                <tspan dx="1" className="logo-u">u</tspan>
                <tspan dx="1" className="logo-n">n</tspan>
                <tspan dx="1" className="logo-k">k</tspan>
                <tspan dx="1" className="logo-s">s</tspan>
            </text>
            <text x="0" y="38" fontSize="12" className="logo-subtext">
                of happiness
            </text>
        </svg>
    );

    if (!isMounted) {
        return <div style={{ width: '150px', height: '40px' }} />;
    }

    return (
      <div className="w-[150px] h-[40px]">
          {svgContent}
      </div>
    );
};

export default function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setSheetOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { cart, isCartAnimating } = useCart();
  const cartItemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);


  useEffect(() => {
    setIsMounted(true)
  }, [])

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
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
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
        {isMounted && (
          <nav className="hidden md:flex md:items-center md:gap-x-8 text-lg font-semibold mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative transition-all duration-300 ease-in-out hover:text-primary hover:scale-110',
                  pathname === link.href
                    ? 'text-primary'
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
        )}

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
           <div className="hidden md:block">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  )
}
