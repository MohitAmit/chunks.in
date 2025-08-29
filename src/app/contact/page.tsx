import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  const amitWhatsappLink = "https://wa.me/918879049091?text=Hello%20Chunks,%20I%20have%20a%20query.";
  const mohitWhatsappLink = "https://wa.me/917303576066?text=Hello%20Chunks,%20I%20have%20a%20query.";

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re here to help and answer any question you might have We look forward to hearing from you
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Leadership Card */}
          <div className="space-y-8">
             <Card>
              <CardHeader>
                <CardTitle>Speak with our Leadership</CardTitle>
                <CardDescription>
                    For any queries, feel free to reach out directly to our leadership team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amit Singh */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                      <User className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Amit Singh</p>
                        <p className="text-sm text-muted-foreground">COO</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <p>8879049091</p>
                  </div>
                  <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <p>amit@chunks.in</p>
                  </div>
                   <Button asChild className="w-full">
                      <Link href={amitWhatsappLink} target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Chat with Amit on WhatsApp
                      </Link>
                   </Button>
                </div>
                
                <Separator />

                {/* Mohit Verma */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                      <User className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold">Mohit Verma</p>
                        <p className="text-sm text-muted-foreground">CBO</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <p>7303576066</p>
                  </div>
                  <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <p>mohit@chunks.in</p>
                  </div>
                   <Button asChild className="w-full">
                      <Link href={mohitWhatsappLink} target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Chat with Mohit on WhatsApp
                      </Link>
                   </Button>
                </div>
              </CardContent>
            </Card>

            {/* General Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <p>contact@chunks.in</p>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <p>Chunks Wellness Pvt. Ltd.,<br/>Mumbai, India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-8">Our Location</h2>
            <div className="rounded-lg overflow-hidden border-2 border-primary/20">
                <Image 
                    src="https://placehold.co/1200x400.png"
                    data-ai-hint="map location"
                    alt="Map showing location of Chunks in Mumbai"
                    width={1200}
                    height={400}
                    className="w-full"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
