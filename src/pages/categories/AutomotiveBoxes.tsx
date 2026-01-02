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
import automotiveBoxesHero from "@/assets/automotive-boxes-hero.png";

// Import professional product images
import carAccessoriesBoxes from "@/assets/automotive-products/car-accessories-boxes.jpg";
import sparePartsBoxes from "@/assets/automotive-products/spare-parts-boxes.jpg";
import lubricantPackaging from "@/assets/automotive-products/lubricant-packaging.jpg";
import electronicComponentBoxes from "@/assets/automotive-products/electronic-component-boxes.jpg";
import brakePadsPackaging from "@/assets/automotive-products/brake-pads-packaging.jpg";
import airFilterBoxes from "@/assets/automotive-products/air-filter-boxes.jpg";
import toolKitBoxes from "@/assets/automotive-products/tool-kit-boxes.jpg";
import tireAccessoriesPackaging from "@/assets/automotive-products/tire-accessories-packaging.jpg";
import headlightBoxes from "@/assets/automotive-products/headlight-boxes.jpg";
import carCleaningKitsBoxes from "@/assets/automotive-products/car-cleaning-kits-boxes.jpg";

const relatedProducts = [
  { name: "Car Accessories Boxes", image: carAccessoriesBoxes, description: "Premium automotive accessory packaging" },
  { name: "Spare Parts Boxes", image: sparePartsBoxes, description: "Durable spare parts protection" },
  { name: "Lubricant Packaging Boxes", image: lubricantPackaging, description: "Professional oil and lubricant boxes" },
  { name: "Electronic Component Boxes", image: electronicComponentBoxes, description: "Protective electronic parts packaging" },
  { name: "Brake Pads Packaging", image: brakePadsPackaging, description: "Heavy-duty brake component boxes" },
  { name: "Air Filter Boxes", image: airFilterBoxes, description: "Clean air filter storage solutions" },
  { name: "Tool Kit Boxes", image: toolKitBoxes, description: "Robust automotive tool packaging" },
  { name: "Tire Accessories Packaging", image: tireAccessoriesPackaging, description: "Secure tire accessory boxes" },
  { name: "Headlight Boxes", image: headlightBoxes, description: "Protective lighting component packaging" },
  { name: "Car Cleaning Kits Boxes", image: carCleaningKitsBoxes, description: "Premium detailing kit boxes" },
];

const AutomotiveBoxes = () => {
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
                <BreadcrumbPage>Automotive Boxes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Top Split Section */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 mb-12 items-start">
            {/* Left Side */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Automotive Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Protect your automotive parts and accessories with our custom-designed packaging solutions.
                Built with durable, industrial-grade materials, our automotive boxes ensure safe storage and
                shipping of car parts, tools, and accessories.
              </p>
              <div className="max-w-lg">
                <img
                  src={automotiveBoxesHero}
                  alt="Custom Automotive Boxes Collection"
                  className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
                />
              </div>
            </div>

            {/* Right Side - Instant Quote Form */}
            <div className="flex justify-end">
              <InstantQuoteFormCompact customProducts={relatedProducts.map(p => p.name)} />
            </div>
          </div>

          {/* Brand Rating Section */}
          <BrandRating />

          {/* Related Products Section */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prove The Quality Experience Of Automotive Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom automotive packaging solutions designed to
              protect your parts, elevate your brand, and provide exceptional durability for your products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                      <p className="text-xs text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Main Quote Form at Bottom */}
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default AutomotiveBoxes;
