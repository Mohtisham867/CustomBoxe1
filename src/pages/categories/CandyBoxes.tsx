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

import heroImage from "@/assets/candy-boxes-hero.webp";
import gummyBoxes from "@/assets/candy-products/custom-gummy-boxes.webp";
import lollipopBoxes from "@/assets/candy-products/custom-lollipop-boxes.webp";
import hardCandyBoxes from "@/assets/candy-products/custom-hard-candy-boxes.webp";
import chocolateBoxes from "@/assets/candy-products/chocolate-boxes.webp";
import candyAppleBoxes from "@/assets/candy-products/candy-apple-boxes.webp";
import candyBoxesWindow from "@/assets/candy-products/candy-boxes-window.webp";
import christmasCandyBoxes from "@/assets/candy-products/christmas-candy-boxes.webp";
import mylarBagsCandies from "@/assets/candy-products/mylar-bags-candies.webp";
import candyDisplayBoxes from "@/assets/candy-products/candy-display-boxes.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
  { name: "Custom Gummy Boxes", image: gummyBoxes, description: "Vibrant packaging for gummy candies featuring eye-catching designs and moisture-resistant materials" },
  { name: "Custom Lollipop Boxes", image: lollipopBoxes, description: "Fun and colorful packaging for lollipops and suckers with secure stick holders and playful graphics" },
  { name: "Custom Hard Candy Boxes", image: hardCandyBoxes, description: "Durable boxes for hard candies with elegant finishes and protective compartments for freshness" },
  { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate packaging with luxurious presentation and temperature-resistant construction" },
  { name: "Candy Apple Boxes", image: candyAppleBoxes, description: "Protective packaging for caramel and candy apples with secure bases preventing tipping and damage" },
  { name: "Candy Boxes With Window", image: candyBoxesWindow, description: "Display windows to showcase your colorful candies while maintaining freshness and product protection" },
  { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, description: "Festive holiday candy packaging for seasonal treats featuring cheerful designs and gift-ready presentation" },
  { name: "Mylar Bags for Candies", image: mylarBagsCandies, description: "Resealable mylar pouches for candy freshness with barrier protection and attractive printed designs" },
  { name: "Custom Candy Display Boxes", image: candyDisplayBoxes, description: "Retail display boxes for candy merchandising with organized compartments and eye-level visibility" },
];

const CandyBoxes = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
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
            <div className="flex-1 space-y-6 lg:space-y-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Custom Candy Boxes
              </h1>
              <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Make your sweet treats irresistible with our custom candy packaging solutions. From colorful gummy boxes to elegant chocolate packaging, we create unique and attractive designs that protect your confections while captivating customers. Perfect for retail displays, gifts, and special occasions.
              </p>
              <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                <img
                  src={heroImage}
                  alt="Custom Candy Boxes"
                  className="w-full h-full object-cover" loading="lazy"
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

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" loading="lazy"
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

      {/* Brand Rating */}

      <BrandRating />

      <QuoteForm />

      <SEOContent>

        <h2>The Ultimate Guide to Candy Boxes</h2>
        <p>
          In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
          Our <strong>Candy Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
          Whether you are launching a new luxury line, shipping subscription kits, or displaying items on retail shelves, our custom packaging solutions are tailored to meet every nuance of your requirements.
        </p>
        <p>
          We understand that the unboxing experience is a critical touchpoint for customer retention. That’s why we meticulously craft each box using premium-grade materials that scream quality from the first touch.
          From the robust protective outer layers to the refined interior finishes, every inch of our packaging is optimized to protect your merchandise while elevating your brand identity.
        </p>

        <h3>Unmatched Material Quality & Durability</h3>
        <p>
          The foundation of exceptional packaging lies in the materials used. We offer a diverse spectrum of stocks to suit different weight requirements and aesthetic preferences:
        </p>
        <ul>
          <li><strong>Corrugated Cardboard:</strong> Ideal for shipping and heavy-duty protection. Available in various flute sizes (E-flute, B-flute) to balance strength and printability.</li>
          <li><strong>Rigid Board:</strong> The epitome of luxury. This thick, unbending material is perfect for high-end gift sets, electronics, and premium cosmetics, often paired with magnetic closures.</li>
          <li><strong>Kraft Stock:</strong> An eco-friendly favorite. Biodegradable and recyclable, it offers a natural, rustic look that appeals to environmentally conscious consumers.</li>
          <li><strong>Cardstock (SBS/C1S):</strong> Lightweight and highly printable, making it perfect for retail shelves, cosmetics, and food packaging where graphical fidelity is paramount.</li>
        </ul>
        <p>
          Each material is tested for compression strength and edge crush resistance, ensuring your products arrive at their destination in pristine condition, regardless of the shipping rigors.
        </p>

        <h3>Advanced Printing & Finishing Options</h3>
        <p>
          Transform your packaging into a work of art with our state-of-the-art printing capabilities. We utilize advanced offset and digital printing technologies to achieve vibrant, color-accurate results (CMYK & Pantone) that make your logo and artwork pop.
          Beyond standard printing, we offer a suite of premium finishing options to add tactile and visual depth:
        </p>
        <ul>
          <li><strong>Spot UV:</strong> Create a striking contrast by adding a high-gloss coating to specific areas like logos or patterns against a matte background.</li>
          <li><strong>Foil Stamping:</strong> Add a touch of elegance with metallic gold, silver, or holographic foils that catch the light and convey luxury.</li>
          <li><strong>Embossing & Debossing:</strong> Add dimension to your packaging with raised (embossed) or recessed (debossed) elements for a premium tactile feel.</li>
          <li><strong>Matte & Gloss Lamination:</strong> Choose Soft-Touch Matte for a velvety smooth feel or High-Gloss for a vibrant, shiny finish that protects against scuffs.</li>
        </ul>

        <h3>Comprehensive Size & Shape Customization</h3>
        <p>
          One size does not fit all. We specialize in fully bespoke structural design. Whether you need a standard tuck-end box, a complex mailer with inserts, or a unique geometric shape to stand out on the shelf, we can engineer it.
          Our CAD specialists work with you to create die-lines that fit your product perfectly—minimizing movement and preventing damage.
        </p>
        <ul>
          <li><strong>Custom Inserts:</strong> Foam, cardboard, or molded pulp inserts custom-shaped to hold your product securely in place.</li>
          <li><strong>Window Cutouts:</strong> transparent PET windows to let customers see the product inside, building trust and driving sales.</li>
          <li><strong>Unique Closures:</strong> Magnetic catches, ribbon ties, tuck-tops, and auto-lock bottoms for convenience and security.</li>
        </ul>

        <h3>Wholesale Benefits & Scalability</h3>
        <p>
          Whether you are a startup needing a small run to test the market or an established enterprise requiring thousands of units monthly, we scale with you.
          Our flexible production lines allow for competitive pricing on short runs and massive volume discounts on wholesale orders.
          Partnering with us means gaining a dedicated packaging team committed to your timeline, budget, and quality standards.
        </p>
      </SEOContent>
      <Footer />
    </div>
  );
};

export default CandyBoxes;
