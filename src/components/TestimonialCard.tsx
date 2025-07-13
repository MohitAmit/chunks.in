import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card className="flex flex-col h-full bg-card justify-between">
            <div>
                 <CardHeader className="relative">
                    <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/20" />
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold font-headline">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">&quot;{testimonial.text}&quot;</p>
                </CardContent>
            </div>
            <CardFooter>
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={cn(
                                "h-5 w-5",
                                i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground/30"
                            )}
                        />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
