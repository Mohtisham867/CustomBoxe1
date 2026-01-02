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

import heroImage from "@/assets/cigarette-boxes-hero.png";
import eCigaretteBoxes from "@/assets/cigarette-products/e-cigarette-boxes.jpg";
import hempCigaretteBoxes from "@/assets/cigarette-products/hemp-cigarette-boxes.jpg";
import paperCigaretteBoxes from "@/assets/cigarette-products/paper-cigarette-boxes.jpg";
import cardboardCigaretteBoxes from "@/assets/cigarette-products/cardboard-cigarette-boxes.jpg";
import blankCigaretteBoxes from "@/assets/cigarette-products/blank-cigarette-boxes.jpg";
import disposableCigaretteBoxes from "@/assets/cigarette-products/disposable-cigarette-boxes.jpg";
import lighterBoxes from "@/assets/cigarette-products/lighter-boxes.jpg";
import emptyCigaretteBoxes from "@/assets/cigarette-products/empty-cigarette-boxes.jpg";
import cigaretteDisplayBoxes from "@/assets/cigarette-products/cigarette-display-boxes.jpg";
import cardboardCigarBoxes from "@/assets/cigarette-products/cardboard-cigar-boxes.jpg";
import cigaretteCartons from "@/assets/cigarette-products/cigarette-cartons.jpg";

const relatedProducts = [
  { name: "Custom E-Cigarette Boxes", image: eCigaretteBoxes, description: "Modern packaging for electronic cigarettes with sleek design" },
  { name: "Custom Hemp Cigarette Boxes", image: hempCigaretteBoxes, description: "Eco-friendly hemp cigarette packaging with natural appeal" },
  { name: "Paper Cigarette Boxes", image: paperCigaretteBoxes, description: "Classic paper cigarette packaging with elegant finish" },
  { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, description: "Sturdy cardboard packaging with premium print quality" },
  { name: "Blank Cigarette Boxes", image: blankCigaretteBoxes, description: "Plain boxes ready for your custom branding" },
  { name: "Disposable Cigarette Boxes", image: disposableCigaretteBoxes, description: "Single-use packaging for convenience and portability" },
  { name: "Lighter Boxes", image: lighterBoxes, description: "Custom lighter packaging with window display options" },
  { name: "Empty Cigarette Boxes", image: emptyCigaretteBoxes, description: "Empty boxes ready for product filling" },
  { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, description: "Retail display stands with maximum brand visibility" },
  { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, description: "Premium cigar packaging with luxury finish" },
  { name: "Cigarette Cartons", image: cigaretteCartons, description: "Bulk carton packaging for wholesale distribution" },
];

const CigaretteBoxes = () => {
  return (
    <div className="min-h-screen bg-background px-[10px]">
      <Header />

      {/* Hero Section with Split Layout */}
      <section className="mt-[120px] md:mt-[160px] py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
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
                  <BreadcrumbPage>Cigarette Boxes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Split Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cigarette Boxes
              </h1>
              <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Elevate your tobacco brand with our premium custom cigarette boxes. Our durable packaging solutions offer exceptional protection while showcasing your brand identity with high-quality printing and finishes. From sleek flip-top designs to classic soft packs, we deliver packaging that stands out on retail shelves and reinforces brand recognition.
              </p>
              <div className="mb-8">
                <img
                  src={heroImage}
                  alt="Custom Cigarette Boxes Collection"
                  className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-shrink-0">
              <InstantQuoteFormCompact customProducts={relatedProducts.map(p => p.name)} />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Rating */}
      <BrandRating />

      {/* Related Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prove The Quality Experience Of Cigarette Products
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Explore our comprehensive range of cigarette packaging solutions designed for durability, compliance, and brand impact.
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

      <Footer />
    </div>
  );
};

export default CigaretteBoxes;
