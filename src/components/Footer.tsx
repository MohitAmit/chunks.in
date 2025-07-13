import Link from 'next/link'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const ChunksLogo = () => (
    <svg width="125" height="28" viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text y="22" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28">
            <tspan fill="#D90429">C</tspan>
            <tspan dx="1" fill="#E63946">h</tspan>
            <tspan dx="1" fill="#2A9D8F">u</tspan>
            <tspan dx="1" fill="#8338EC">n</tspan>
            <tspan dx="1" fill="#34D399">k</tspan>
            <tspan dx="1" fill="#219EBC">s</tspan>
        </text>
    </svg>
)

export default function Footer() {
  return (
    <footer className="bg-muted text-secondary-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ChunksLogo />
            </Link>
            <p className="text-sm text-muted-foreground">
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
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
             <h4 className="font-semibold">Legal</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Shipping Policy</Link></li>
             </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Stay updated with our latest products and offers</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chunks All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
