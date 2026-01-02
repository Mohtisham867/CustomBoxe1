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

// Import hero image
import beverageHeroImage from "@/assets/beverage-boxes-hero.png";

// Import beverage product images
import coffeePackaging from "@/assets/beverage-products/coffee-packaging.jpg";
import teaBoxes from "@/assets/beverage-products/tea-boxes.jpg";
import wineBoxes from "@/assets/beverage-products/wine-boxes.jpg";
import beerPackaging from "@/assets/beverage-products/beer-packaging.jpg";
import juiceBoxes from "@/assets/beverage-products/juice-boxes.jpg";
import sodaPackaging from "@/assets/beverage-products/soda-packaging.jpg";
import energyDrinkBoxes from "@/assets/beverage-products/energy-drink-boxes.jpg";
import waterBottlePackaging from "@/assets/beverage-products/water-bottle-packaging.jpg";
import milkPackaging from "@/assets/beverage-products/milk-packaging.jpg";
import smoothiePackaging from "@/assets/beverage-products/smoothie-packaging.jpg";

const relatedProducts = [
  { name: "Coffee Packaging", image: coffeePackaging, description: "Premium coffee boxes and bags" },
  { name: "Tea Boxes", image: teaBoxes, description: "Elegant tea gift packaging" },
  { name: "Wine Boxes", image: wineBoxes, description: "Luxury wine bottle packaging" },
  { name: "Beer Packaging", image: beerPackaging, description: "Craft beer carriers and boxes" },
  { name: "Juice Boxes", image: juiceBoxes, description: "Colorful juice carton packaging" },
  { name: "Soda Packaging", image: sodaPackaging, description: "Multi-pack soda carriers" },
  { name: "Energy Drink Boxes", image: energyDrinkBoxes, description: "Dynamic energy drink packaging" },
  { name: "Water Bottle Packaging", image: waterBottlePackaging, description: "Water bottle carriers and boxes" },
  { name: "Milk Packaging", image: milkPackaging, description: "Dairy product packaging solutions" },
  { name: "Smoothie Packaging", image: smoothiePackaging, description: "Fresh smoothie bottle carriers" },
];

const BeverageBoxes = () => {
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
                <BreadcrumbPage>Beverage Boxes</BreadcrumbPage>
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
                Beverage Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed text-[16px]">
                Elevate your beverage brand with premium custom packaging designed for freshness and appeal.
                Our food-safe boxes protect coffee, tea, wine, and soft drinks while showcasing your brand.
                From elegant wine gift boxes to practical multi-pack carriers, customize packaging.
              </p>
              <div className="max-w-lg">
                <img
                  src={beverageHeroImage}
                  alt="Custom Beverage Boxes Collection"
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
              Prove The Quality Experience Of Beverage Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom beverage packaging solutions designed to
              protect your drinks, elevate your brand, and provide exceptional presentation.
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

export default BeverageBoxes;
