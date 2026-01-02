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
import candleHeroImage from "@/assets/candle-boxes-hero.png";

// Import candle product images
import candleDisplayBoxes from "@/assets/candle-products/candle-display-boxes.jpg";
import candleJarBoxes from "@/assets/candle-products/candle-jar-boxes.jpg";
import twoPieceCandleBoxes from "@/assets/candle-products/two-piece-candle-boxes.jpg";
import candleShippingBoxes from "@/assets/candle-products/candle-shipping-boxes.jpg";
import taperCandleBoxes from "@/assets/candle-products/taper-candle-boxes.jpg";
import candleBoxesInserts from "@/assets/candle-products/candle-boxes-inserts.jpg";
import candleLabels from "@/assets/candle-products/candle-labels.jpg";
import candleBoxesWindow from "@/assets/candle-products/candle-boxes-window.jpg";
import waxMeltPackaging from "@/assets/candle-products/wax-melt-packaging.jpg";
import candleSubscriptionBoxes from "@/assets/candle-products/candle-subscription-boxes.jpg";
import luxuryCandleBoxes from "@/assets/candle-products/luxury-candle-boxes.jpg";
import wishesCandleBoxes from "@/assets/candle-products/16-wishes-candle-boxes.jpg";
import candleDustCovers from "@/assets/candle-products/candle-dust-covers.jpg";

const relatedProducts = [
  { name: "Custom Candle Display Boxes", image: candleDisplayBoxes, description: "Showcase candles with elegant displays" },
  { name: "Custom Candle Jar Boxes", image: candleJarBoxes, description: "Secure packaging for glass jar candles" },
  { name: "Two Piece Candle Boxes", image: twoPieceCandleBoxes, description: "Premium lid and base packaging" },
  { name: "Candle Shipping Boxes", image: candleShippingBoxes, description: "Safe transit for fragile candles" },
  { name: "Taper Candle Boxes", image: taperCandleBoxes, description: "Slim packaging for taper candles" },
  { name: "Candle Boxes with Inserts", image: candleBoxesInserts, description: "Custom inserts for protection" },
  { name: "Candle Labels", image: candleLabels, description: "Brand your candles beautifully" },
  { name: "Candle Boxes With Window", image: candleBoxesWindow, description: "Display candles through windows" },
  { name: "Wax Melt Packaging", image: waxMeltPackaging, description: "Compartment boxes for wax melts" },
  { name: "Candle Subscription Boxes", image: candleSubscriptionBoxes, description: "Monthly subscription packaging" },
  { name: "Luxury Candle Boxes", image: luxuryCandleBoxes, description: "High-end rigid gift boxes" },
  { name: "16 Wishes Candle Boxes", image: wishesCandleBoxes, description: "Celebratory birthday candle boxes" },
  { name: "Candle Dust Covers", image: candleDustCovers, description: "Protective covers for candles" },
];

const CandleBoxes = () => {
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
                <BreadcrumbPage>Candle Boxes</BreadcrumbPage>
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
                Candle Boxes
              </h1>
              <p className="text-muted-foreground leading-relaxed text-[16px]">
                Elevate your candle brand with premium custom packaging designed for protection and luxury presentation.
                Our candle boxes feature sturdy construction to safeguard delicate wax products during shipping.
                From elegant window displays to gift-ready rigid boxes, customize every detail to reflect.
              </p>
              <div className="max-w-lg">
                <img
                  src={candleHeroImage}
                  alt="Custom Candle Boxes Collection"
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
              Prove The Quality Experience Of Candle Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom candle packaging solutions designed to
              protect your products, elevate your brand, and create luxurious presentation.
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

export default CandleBoxes;