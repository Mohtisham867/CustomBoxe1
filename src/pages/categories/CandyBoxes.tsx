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

import heroImage from "@/assets/candy-boxes-hero.png";
import gummyBoxes from "@/assets/candy-products/custom-gummy-boxes.jpg";
import lollipopBoxes from "@/assets/candy-products/custom-lollipop-boxes.jpg";
import hardCandyBoxes from "@/assets/candy-products/custom-hard-candy-boxes.jpg";
import chocolateBoxes from "@/assets/candy-products/chocolate-boxes.jpg";
import candyAppleBoxes from "@/assets/candy-products/candy-apple-boxes.jpg";
import candyBoxesWindow from "@/assets/candy-products/candy-boxes-window.jpg";
import christmasCandyBoxes from "@/assets/candy-products/christmas-candy-boxes.jpg";
import mylarBagsCandies from "@/assets/candy-products/mylar-bags-candies.jpg";
import candyDisplayBoxes from "@/assets/candy-products/candy-display-boxes.jpg";

const relatedProducts = [
  { name: "Custom Gummy Boxes", image: gummyBoxes, description: "Vibrant packaging for gummy candies with eye-catching designs." },
  { name: "Custom Lollipop Boxes", image: lollipopBoxes, description: "Fun and colorful packaging for lollipops and suckers." },
  { name: "Custom Hard Candy Boxes", image: hardCandyBoxes, description: "Durable boxes for hard candies with elegant finishes." },
  { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate packaging with luxurious presentation." },
  { name: "Candy Apple Boxes", image: candyAppleBoxes, description: "Protective packaging for caramel and candy apples." },
  { name: "Candy Boxes With Window", image: candyBoxesWindow, description: "Display windows to showcase your colorful candies." },
  { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, description: "Festive holiday candy packaging for seasonal treats." },
  { name: "Mylar Bags for Candies", image: mylarBagsCandies, description: "Resealable mylar pouches for candy freshness." },
  { name: "Custom Candy Display Boxes", image: candyDisplayBoxes, description: "Retail display boxes for candy merchandising." },
];

const CandyBoxes = () => {
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
                  <Link to="/industries">Industries</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Custom Candy Boxes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Split Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Custom Candy Boxes
              </h1>
              <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Make your sweet treats irresistible with our custom candy packaging solutions. From colorful gummy boxes to elegant chocolate packaging, we create unique and attractive designs that protect your confections while captivating customers. Perfect for retail displays, gifts, and special occasions.
              </p>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Custom Candy Boxes"
                  className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-shrink-0">
              <InstantQuoteFormCompact />
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
              Prove The Quality Experience Of Candy Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover our premium candy packaging solutions designed to make your confections stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <QuoteForm />
      <Footer />
    </div>
  );
};

export default CandyBoxes;
