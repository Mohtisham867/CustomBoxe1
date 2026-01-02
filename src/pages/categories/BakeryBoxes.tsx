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
import bakeryHeroImage from "@/assets/bakery-boxes-hero.png";

// Import bakery product images
import customCakeBoxes from "@/assets/bakery-products/custom-cake-boxes.jpg";
import pastryBoxes from "@/assets/bakery-products/pastry-boxes.jpg";
import donutBoxes from "@/assets/bakery-products/donut-boxes.jpg";
import cookieBoxes from "@/assets/bakery-products/cookie-boxes.jpg";
import cupcakeBoxes from "@/assets/bakery-products/cupcake-boxes.jpg";
import pieBoxes from "@/assets/bakery-products/pie-boxes.jpg";
import muffinBoxes from "@/assets/bakery-products/muffin-boxes.jpg";
import breadPackaging from "@/assets/bakery-products/bread-packaging.jpg";
import macaronBoxes from "@/assets/bakery-products/macaron-boxes.jpg";
import chocolateBoxes from "@/assets/bakery-products/chocolate-boxes.jpg";

const relatedProducts = [
  { name: "Custom Cake Boxes", image: customCakeBoxes, description: "Elegant boxes for cakes of all sizes" },
  { name: "Pastry Boxes", image: pastryBoxes, description: "Perfect packaging for delicate pastries" },
  { name: "Donut Boxes", image: donutBoxes, description: "Sturdy boxes for donuts and bagels" },
  { name: "Cookie Boxes", image: cookieBoxes, description: "Gift-ready cookie packaging solutions" },
  { name: "Cupcake Boxes", image: cupcakeBoxes, description: "Secure compartments for cupcakes" },
  { name: "Pie Boxes", image: pieBoxes, description: "Window boxes for showcasing pies" },
  { name: "Muffin Boxes", image: muffinBoxes, description: "Multi-compartment muffin carriers" },
  { name: "Bread Packaging", image: breadPackaging, description: "Fresh-keeping bread bags and boxes" },
  { name: "Macaron Boxes", image: macaronBoxes, description: "Luxury packaging for macarons" },
  { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate gift boxes" },
];

const BakeryBoxes = () => {
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
                <BreadcrumbPage>Bakery Boxes</BreadcrumbPage>
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
                Bakery Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed text-[16px]">
                Delight your customers with premium custom bakery boxes designed for freshness and presentation.
                Our food-safe packaging uses FDA-approved materials to protect cakes, pastries, and baked goods.
                From elegant window displays to sturdy carriers, customize your bakery's brand while ensuring
                products arrive in perfect condition.
              </p>
              <div className="max-w-lg">
                <img
                  src={bakeryHeroImage}
                  alt="Custom Bakery Boxes Collection"
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
              Prove The Quality Experience Of Bakery Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom bakery packaging solutions designed to
              keep your baked goods fresh, elevate your brand, and provide exceptional presentation.
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

export default BakeryBoxes;
