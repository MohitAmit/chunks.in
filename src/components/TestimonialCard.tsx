import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card className="flex flex-col h-full bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
            </CardContent>
            <CardFooter>
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={cn(
                                "h-5 w-5",
                                i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground/50"
                            )}
                        />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
