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
import christmasBoxesHero from "@/assets/christmas-boxes-hero.png";

// Import professional product images
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.jpg";
import christmasTags from "@/assets/christmas-products/christmas-tags.jpg";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.jpg";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.jpg";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.jpg";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.jpg";
import christmasEveBoxes from "@/assets/christmas-products/christmas-eve-boxes.jpg";
import christmasTreatBoxes from "@/assets/christmas-products/christmas-treat-boxes.jpg";
import christmasPaperBags from "@/assets/christmas-products/christmas-paper-bags.jpg";
import christmasGiftBags from "@/assets/christmas-products/christmas-gift-bags.jpg";
import christmasFavorBoxes from "@/assets/christmas-products/christmas-favor-boxes.jpg";
import christmasStickers from "@/assets/christmas-products/christmas-stickers.jpg";
import adventCalendarBoxes from "@/assets/christmas-products/advent-calendar-boxes.jpg";

const relatedProducts = [
  { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, description: "Festive chocolate packaging" },
  { name: "Christmas Tags", image: christmasTags, description: "Custom holiday gift tags" },
  { name: "Christmas Gable Boxes", image: christmasGableBoxes, description: "Festive carry boxes" },
  { name: "Christmas Cupcake Boxes", image: christmasCupcakeBoxes, description: "Holiday cupcake packaging" },
  { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, description: "Seasonal candy packaging" },
  { name: "Christmas Gift Boxes", image: christmasGiftBoxes, description: "Elegant holiday gift boxes" },
  { name: "Christmas Eve Boxes", image: christmasEveBoxes, description: "Special eve tradition boxes" },
  { name: "Christmas Treat Boxes", image: christmasTreatBoxes, description: "Festive treat packaging" },
  { name: "Christmas Paper Bags", image: christmasPaperBags, description: "Holiday shopping bags" },
  { name: "Christmas Gift Bags", image: christmasGiftBags, description: "Premium gift bags" },
  { name: "Christmas Favor Boxes", image: christmasFavorBoxes, description: "Party favor packaging" },
  { name: "Christmas Stickers", image: christmasStickers, description: "Festive labels & stickers" },
  { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, description: "Countdown calendar packaging" },
];

const ChristmasBoxes = () => {
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
                <BreadcrumbPage>Christmas Boxes</BreadcrumbPage>
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
                Christmas Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed text-base" style={{ fontSize: '16px' }}>
                Celebrate the festive season with our premium custom Christmas packaging solutions.
                Our holiday boxes combine durability with stunning designs, perfect for gifts, treats,
                and seasonal products. Featuring vibrant colors and elegant finishes, they create
                memorable unboxing experiences.
              </p>
              <div className="max-w-lg">
                <img
                  src={christmasBoxesHero}
                  alt="Custom Christmas Boxes Collection"
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
              Prove The Quality Experience Of Christmas Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom Christmas packaging solutions designed to
              spread holiday cheer and make your products stand out during the festive season.
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

export default ChristmasBoxes;
