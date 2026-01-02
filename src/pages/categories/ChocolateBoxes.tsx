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
import heroImage from "@/assets/chocolate-boxes-hero.png";
import artisanChocolateBox from "@/assets/chocolate-products/artisan-chocolate-box.jpg";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.jpg";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.jpg";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.jpg";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.jpg";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.jpg";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.jpg";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging.jpg";
import chocolateBarPackaging from "@/assets/chocolate-products/chocolate-bar-packaging.jpg";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.jpg";

const relatedProducts = [
  { name: "Artisan Chocolate Box", image: artisanChocolateBox, description: "Handcrafted boxes for premium artisan chocolates" },
  { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, description: "Custom packaging for chocolate milk products" },
  { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, description: "Vibrant boxes for chocolate candies and treats" },
  { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, description: "Premium packaging for high-end chocolate brands" },
  { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, description: "Specialized packaging for hot chocolate bombs" },
  { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, description: "Elegant gift-ready chocolate packaging" },
  { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, description: "Festive holiday-themed chocolate packaging" },
  { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, description: "Trendy packaging for mushroom-infused chocolates" },
  { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, description: "Sleek wrapping and boxes for chocolate bars" },
  { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, description: "Monthly subscription box packaging solutions" },
];

const ChocolateBoxes = () => {
  return (
    <div className="min-h-screen bg-background px-[10px]">
      <Header />

      {/* Main Content */}
      <main className="mt-[120px] md:mt-[160px]">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                  <BreadcrumbPage>Chocolate Boxes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Split Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Chocolate Boxes
                </h1>
                <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  Elevate your chocolate brand with our premium custom packaging solutions. From artisan truffles to luxury gift sets, our food-safe boxes combine elegant design with superior protection, ensuring your chocolates arrive in perfect condition while creating an unforgettable unboxing experience for your customers.
                </p>
                <div className="relative w-full max-w-lg">
                  <img
                    src={heroImage}
                    alt="Custom Chocolate Boxes"
                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
                  />
                </div>
              </div>

              {/* Right Content - Quote Form */}
              <div className="flex justify-center lg:justify-end">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prove The Quality Experience Of Chocolate Products
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Explore our range of premium chocolate packaging solutions designed to showcase your confections beautifully while maintaining freshness and food safety.
            </p>

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
                      <p className="text-xs text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
};

export default ChocolateBoxes;
