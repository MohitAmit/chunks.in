
'use client';
import Link from 'next/link'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useEffect, useState } from 'react';

const ChunksLogo = () => {
    return (
      <div className="w-[150px] h-[40px]">
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
      </div>
    );
};


export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t-[3px]" style={{borderColor: 'hsl(var(--accent-2))'}}>
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ChunksLogo />
            </Link>
            <p className="text-sm ">
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
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
             <h4 className="font-semibold text-foreground">Legal</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary">Shipping Policy</Link></li>
             </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <p className="text-sm">Stay updated with our latest products and offers</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-[hsl(var(--accent-2))] placeholder:text-foreground/60 border-primary/20 focus-visible:ring-primary" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chunks All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
