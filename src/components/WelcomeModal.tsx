
'use client';

import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { ChunksLogo } from './ChunksLogo';
import { BookOpen, Target, Award, X } from 'lucide-react';
import Link from 'next/link';

interface WelcomeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WelcomeModal({ isOpen, onOpenChange }: WelcomeModalProps) {

  const TongueIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff4b4b]">
        <path d="M12 21C15.866 21 19 17.866 19 14V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V14C5 17.866 8.13401 21 12 21Z" stroke="#ff4b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" fill="#ff4b4b" fillOpacity="0.5"/>
        <path d="M12 21V19C12 16.2386 9.76142 14 7 14" stroke="#ff4b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
          {/* Left Side */}
          <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col">
              <div className="flex items-center gap-4">
                 <div className="bg-white p-1 rounded-md">
                    <ChunksLogo />
                 </div>
              </div>
              <div className="my-8">
                <h2 className="text-3xl font-headline font-bold">Welcome to India&apos;s Tastiest Health Brand</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-primary/80 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
                      <Award className="h-8 w-8 text-yellow-300 mb-2"/>
                      <h3 className="font-bold font-headline">Story</h3>
                      <p className="text-sm text-primary-foreground/80">Born in a chef&apos;s kitchen, not a factory. Real ingredients, no palm oil, no chemicals.</p>
                  </div>
                   <div className="bg-primary/80 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
                      <Target className="h-8 w-8 text-yellow-300 mb-2"/>
                      <h3 className="font-bold font-headline">Vision</h3>
                      <p className="text-sm text-primary-foreground/80">We&apos;re here to end boring biscuits and fake 'healthy.' Bold, clean, joyful snacking only.</p>
                  </div>
                   <div className="bg-primary/80 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
                      <BookOpen className="h-8 w-8 text-yellow-300 mb-2"/>
                      <h3 className="font-bold font-headline">Promise</h3>
                      <p className="text-sm text-primary-foreground/80">Chunks isn't just a cookie brand. It&apos;s India&apos;s first gluten-free snacking movement.</p>
                  </div>
              </div>
          </div>
          {/* Right Side */}
          <div className="bg-card text-card-foreground p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-headline font-bold flex items-center justify-center gap-2">Take a Bite <TongueIcon /></h3>
              </div>
              <form className="space-y-4">
                 <div>
                    <Label htmlFor="mobile-number" className="sr-only">Mobile Number</Label>
                    <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-ring">
                       <span className="px-3 text-muted-foreground">+91</span>
                       <Input id="mobile-number" type="tel" placeholder="Enter Mobile Number" className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"/>
                    </div>
                 </div>
                 <div className="flex items-center space-x-2">
                    <Checkbox id="notify" />
                    <Label htmlFor="notify" className="text-sm font-normal text-muted-foreground">Notify me with offers & updates</Label>
                 </div>
                 <Button type="submit" className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800">Submit</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                I accept that I have read & understood your <Link href="#" className="underline">Privacy Policy and T&Cs</Link>.
              </p>
          </div>
        </div>
        <DialogClose className="absolute top-4 right-4 text-primary-foreground bg-black/20 rounded-full p-1 opacity-70 hover:opacity-100 transition-opacity">
            <X className="h-5 w-5"/>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
