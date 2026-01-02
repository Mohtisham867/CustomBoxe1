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
import apparelBoxesHero from "@/assets/apparel-boxes-hero.png";

// Import professional product images
import customShoeBoxes from "@/assets/apparel-products/custom-shoe-boxes.jpg";
import cufflinkBoxes from "@/assets/apparel-products/cufflink-boxes.jpg";
import tieBoxes from "@/assets/apparel-products/tie-boxes.jpg";
import beltBoxes from "@/assets/apparel-products/belt-boxes.jpg";
import clothingBoxes from "@/assets/apparel-products/clothing-boxes.jpg";
import lingerieBoxes from "@/assets/apparel-products/lingerie-boxes.jpg";
import underwearBoxes from "@/assets/apparel-products/underwear-boxes.jpg";
import tshirtBoxes from "@/assets/apparel-products/tshirt-boxes.jpg";
import socksBoxes from "@/assets/apparel-products/socks-boxes.jpg";
import clothingHangTags from "@/assets/apparel-products/clothing-hang-tags.jpg";
import hatShippingBoxes from "@/assets/apparel-products/hat-shipping-boxes.jpg";
import sunglassesBoxes from "@/assets/apparel-products/sunglasses-boxes.jpg";
import apparelGiftBoxes from "@/assets/apparel-products/apparel-gift-boxes.jpg";
import hoodiePackaging from "@/assets/apparel-products/hoodie-packaging.jpg";
import weddingDressBoxes from "@/assets/apparel-products/wedding-dress-boxes.jpg";
import hatBoxes from "@/assets/apparel-products/hat-boxes.jpg";
import luxuryApparelBoxes from "@/assets/apparel-products/luxury-apparel-boxes.jpg";

const relatedProducts = [
  { name: "Custom Shoe Boxes", image: customShoeBoxes, description: "Premium shoe packaging solutions" },
  { name: "Cufflink Boxes", image: cufflinkBoxes, description: "Elegant cufflink presentation boxes" },
  { name: "Tie Boxes", image: tieBoxes, description: "Professional tie packaging" },
  { name: "Belt Boxes", image: beltBoxes, description: "Stylish belt storage boxes" },
  { name: "Clothing Boxes", image: clothingBoxes, description: "Versatile clothing packaging" },
  { name: "Lingerie Boxes", image: lingerieBoxes, description: "Delicate lingerie packaging" },
  { name: "Underwear Boxes", image: underwearBoxes, description: "Comfortable underwear boxes" },
  { name: "T Shirt Boxes", image: tshirtBoxes, description: "Custom t-shirt packaging" },
  { name: "Socks Boxes", image: socksBoxes, description: "Creative sock packaging" },
  { name: "Clothing Hang Tags", image: clothingHangTags, description: "Professional hang tags" },
  { name: "Hat Shipping Boxes", image: hatShippingBoxes, description: "Secure hat shipping" },
  { name: "Sunglasses Boxes", image: sunglassesBoxes, description: "Protective sunglasses cases" },
  { name: "Apparel Gift Boxes", image: apparelGiftBoxes, description: "Premium gift packaging" },
  { name: "Hoodie Packaging", image: hoodiePackaging, description: "Custom hoodie boxes" },
  { name: "Wedding Dress Boxes", image: weddingDressBoxes, description: "Luxury dress preservation" },
  { name: "Hat Boxes", image: hatBoxes, description: "Classic hat storage" },
  { name: "Luxury Apparel Boxes", image: luxuryApparelBoxes, description: "High-end fashion packaging" },
];

const ApparelBoxes = () => {
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
                <BreadcrumbPage>Apparel Boxes</BreadcrumbPage>
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
                Apparel Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Available in unique shapes and styles, our custom apparel boxes are made with durable,
                resilient, and sustainable materials to keep your clothing safe while showing the real
                image of your brand. These are printed with HD graphics and colors to boost the overall
                visual appeal.
              </p>
              <div className="max-w-lg">
                <img
                  src={apparelBoxesHero}
                  alt="Custom Apparel Boxes Collection"
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
              Prove The Quality Experience Of Clothing Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom apparel packaging solutions designed to
              elevate your brand and provide exceptional protection for your products.
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

export default ApparelBoxes;
