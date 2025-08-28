
'use client';
import Link from 'next/link'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ChunksLogo } from './ChunksLogo';

export default function Footer() {
  return (
    <footer className="bg-accent-2 text-background border-t border-primary/20">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ChunksLogo />
            </Link>
            <p className="text-sm text-background/80">
              Bringing you the purest, homegrown snacks from the heart of India
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary text-background/80">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary text-background/80">Products</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary text-background/80">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-primary text-background/80">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
             <h4 className="font-semibold text-background">Legal</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary text-background/80">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary text-background/80">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary text-background/80">Shipping Policy</Link></li>
             </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Newsletter</h4>
            <p className="text-sm text-background/80">Stay updated with our latest products and offers</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background placeholder:text-foreground/60 border-primary/20 focus-visible:ring-primary" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-background/20 pt-6 text-center text-sm text-background/80">
          <p>&copy; {new Date().getFullYear()} Chunks All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
