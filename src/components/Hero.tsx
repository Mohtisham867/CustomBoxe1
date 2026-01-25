import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/main-home-hero-new.png";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

export const Hero = () => {
  const productCount = useCounterAnimation({ end: 500, duration: 2000, suffix: '+' });
  const responseTime = useCounterAnimation({ end: 24, duration: 1800, suffix: 'hrs' });
  const ecoFriendly = useCounterAnimation({ end: 100, duration: 2000, suffix: '%' });

  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-30" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-muted/50 border border-border px-4 py-2 rounded-md mx-auto lg:mx-0">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">Trusted by 5,000+ Businesses Worldwide</span>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-foreground">
                Premium Custom
                <br />
                <span className="text-primary">Packaging Solutions</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Elevate your brand with professional custom packaging designed for quality, sustainability, and exceptional presentation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a href="#quote" className="w-full sm:w-auto">
                <Button size="lg" className="gradient-primary text-base px-8 h-12 font-medium group w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#products" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 font-medium border-border hover:bg-accent w-full sm:w-auto">
                  View Solutions
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border/60">
              <div ref={productCount.ref} className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-300">
                  {productCount.count}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Product Options</div>
              </div>
              <div ref={responseTime.ref} className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-300">
                  {responseTime.count}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Quick Response</div>
              </div>
              <div ref={ecoFriendly.ref} className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground transition-all duration-300">
                  {ecoFriendly.count}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-8 mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative rounded-lg overflow-hidden border border-border/50 aspect-video lg:aspect-auto">
              <img
                src={heroImage}
                alt="Custom Packaging Boxes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
