import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { InstantQuoteFormCompact } from "@/components/InstantQuoteFormCompact";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import heroImage from "@/assets/cannabis-boxes-hero.png";
import cannabisTinctureBoxes from "@/assets/cannabis-products/cannabis-tincture-boxes.jpg";
import cannabisVapePackaging from "@/assets/cannabis-products/cannabis-vape-packaging.jpg";
import cannabisSeedPackaging from "@/assets/cannabis-products/cannabis-seed-packaging.jpg";
import cannabisCigaretteBoxes from "@/assets/cannabis-products/cannabis-cigarette-boxes.jpg";
import cannabisMylarBags from "@/assets/cannabis-products/cannabis-mylar-bags.jpg";
import cannabisFlowerPackaging from "@/assets/cannabis-products/cannabis-flower-packaging.jpg";
import cannabisCartridgePackaging from "@/assets/cannabis-products/cannabis-cartridge-packaging.jpg";

const relatedProducts = [
  { name: "Cannabis Tincture Boxes", image: cannabisTinctureBoxes, description: "Custom tincture packaging with child-resistant features and compliance labeling." },
  { name: "Cannabis Vape Packaging", image: cannabisVapePackaging, description: "Premium vape pen boxes designed for secure display and brand visibility." },
  { name: "Cannabis Seed Packaging", image: cannabisSeedPackaging, description: "Moisture-proof seed containers with custom printing and strain information." },
  { name: "Cannabis Cigarette Boxes", image: cannabisCigaretteBoxes, description: "Pre-roll cigarette packaging with child-resistant closures and branding." },
  { name: "Cannabis Mylar Bags", image: cannabisMylarBags, description: "Smell-proof mylar bags with custom printing and resealable features." },
  { name: "Cannabis Flower Packaging", image: cannabisFlowerPackaging, description: "Airtight flower containers preserving freshness and potency." },
  { name: "Cannabis Cartridge Packaging", image: cannabisCartridgePackaging, description: "Secure cartridge boxes with inserts for protection during shipping." },
];

const CannabisPackaging = () => {
  return (
    <div className="min-h-screen bg-background px-[10px]">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/industries">All Industries</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cannabis Packaging</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Split Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cannabis Packaging
              </h1>
              <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                Elevate your cannabis brand with our compliant, child-resistant packaging solutions.
                From vape cartridges to flower containers, we deliver premium custom boxes that meet
                regulatory requirements while showcasing your brand identity with professional printing
                and secure, tamper-evident closures.
              </p>
              <div className="pt-4">
                <img
                  src={heroImage}
                  alt="Cannabis Packaging"
                  className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="flex justify-end">
              <InstantQuoteFormCompact customProducts={relatedProducts.map(p => p.name)} />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Rating */}
      <BrandRating />

      {/* Related Products Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prove The Quality Experience Of Cannabis Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover our range of compliant cannabis packaging solutions designed for safety, freshness, and brand impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 border-t border-border">
                    <h3 className="font-semibold text-foreground text-sm mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
};

export default CannabisPackaging;
