import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxe Cosmetics",
    role: "Marketing Director",
    rating: 5,
    text: "The custom packaging boxes exceeded our expectations! Our product sales increased by 40% after the rebrand. The quality and attention to detail are outstanding.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    company: "Organic Foods Co.",
    role: "CEO",
    rating: 5,
    text: "Working with CustomPackMakers was seamless. They understood our eco-friendly requirements and delivered sustainable packaging that our customers love.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    company: "Gift Boutique",
    role: "Owner",
    rating: 5,
    text: "The luxury boxes transformed our brand image. Customers now see us as a premium boutique. The unboxing experience is unforgettable!",
    initials: "ER",
  },
  {
    name: "David Thompson",
    company: "Tech Gadgets Inc.",
    role: "Product Manager",
    rating: 5,
    text: "Fast turnaround, excellent quality, and competitive pricing. These boxes protect our products perfectly while looking incredibly professional.",
    initials: "DT",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Hear From Our Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied businesses who transformed their packaging
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 space-y-6 h-full flex flex-col">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base text-muted-foreground italic leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-base">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-base text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"
                  }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
