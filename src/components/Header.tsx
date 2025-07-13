'use client'

import Link from 'next/link'
import { Menu, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/farmers', label: 'Our Farmers' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/about', label: 'About' },
]

const ChunksLogo = () => (
    <svg width="125" height="28" viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28">
            <tspan fill="#D90429">C</tspan>
            <tspan dx="1" fill="#E63946">h</tspan>
            <tspan dx="1" fill="#2A9D8F">u</tspan>
            <tspan dx="1" fill="#8338EC">n</tspan>
            <tspan dx="1" fill="#E9C46A">k</tspan>
            <tspan dx="1" fill="#219EBC">s</tspan>
        </text>
    </svg>
)

export default function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        
        <div className="flex md:hidden flex-1 justify-center">
           <Link href="/" className="flex items-center gap-2">
            <ChunksLogo />
          </Link>
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center md:gap-x-8 text-sm font-medium mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary relative',
                pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              {link.label}
              {pathname === link.href && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-05 w-4 bg-primary rounded-full"></span>}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
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
            <Button asChild variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  )
}
