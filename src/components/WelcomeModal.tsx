
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { ChunksLogo } from './ChunksLogo';
import { BookOpen, Target, Award, Heart } from 'lucide-react';
import Link from 'next/link';

interface WelcomeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WelcomeModal({ isOpen, onOpenChange }: WelcomeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 border-0 shadow-2xl rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Welcome to Chunks</DialogTitle>
          <DialogDescription>A welcome modal with an overview of the brand and a sign-up form.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] overflow-hidden">
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
                      <p className="text-sm text-primary-foreground/80">Chunks isn&apos;t just a cookie brand. It&apos;s India&apos;s first gluten-free snacking movement.</p>
                  </div>
              </div>
          </div>
          {/* Right Side */}
          <div className="bg-card text-card-foreground p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-headline font-bold flex items-center justify-center gap-2">Take a Bite <Heart className="h-6 w-6 text-primary"/></h3>
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
                 <Button type="submit" className="w-full h-12">Submit</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                I accept that I have read & understood your <Link href="#" className="underline">Privacy Policy and T&Cs</Link>.
              </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
