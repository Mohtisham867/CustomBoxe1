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
import heroImage from "@/assets/chocolate-boxes-hero.webp";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
  { name: "Artisan Chocolate Box", image: artisanChocolateBox, description: "Handcrafted boxes for premium artisan chocolates featuring delicate compartmentalized inserts for protection" },
  { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, description: "Custom packaging for chocolate milk products designed with moisture-resistant materials and vibrant graphics" },
  { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, description: "Vibrant boxes for chocolate candies and treats offering clear window displays and colorful brand storytelling" },
  { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, description: "Premium packaging for high-end chocolate brands utilizing rigid board and elegant foil-stamping finishes" },
  { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, description: "Specialized packaging for hot chocolate bombs with secure internal cradles to prevent breakage during transit" },
  { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, description: "Elegant gift-ready chocolate packaging with sophisticated ribbon closures and luxury unboxing experiences" },
  { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, description: "Festive holiday-themed chocolate packaging featuring seasonal colors and protective festive-themed inserts" },
  { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, description: "Trendy packaging for mushroom-infused chocolates with specialized safety seals and unique brand aesthetics" },
  { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, description: "Sleek wrapping and boxes for chocolate bars providing airtight protection and high-fidelity offset printing" },
  { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, description: "Monthly subscription box packaging solutions designed for secure shipping and delightful recurring unboxings" },
];

const ChocolateBoxes = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
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
              <div className="flex flex-col-reverse lg:block">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Chocolate Boxes
                </h1>
                <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  Elevate your chocolate brand with our premium custom packaging solutions. From artisan truffles to luxury gift sets, our food-safe boxes combine elegant design with superior protection, ensuring your chocolates arrive in perfect condition while creating an unforgettable unboxing experience for your customers.
                </p>
                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                  <img
                    src={heroImage}
                    alt="Custom Chocolate Boxes"
                    className="w-full h-full object-cover" loading="lazy"
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

        {/* Related Products Section */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prove The Quality Experience Of Chocolate Products
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Explore our range of premium chocolate packaging solutions designed to showcase your confections beautifully while maintaining freshness and food safety.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
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
        {/* Brand Rating */}
        <BrandRating />
        <QuoteForm />
        <SEOContent>

          <h2>The Ultimate Guide to Chocolate Boxes</h2>
          <p>
            In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
            Our <strong>Chocolate Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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
      </main>

      <Footer />
    </div>
  );
};

export default ChocolateBoxes;
