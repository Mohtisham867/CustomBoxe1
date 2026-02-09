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
import bakeryHeroImage from "@/assets/bakery-products/Hero.webp";

// Import bakery product images
import customCakeBoxes from "@/assets/bakery-products/custom-cake-boxes.webp";
import pastryBoxes from "@/assets/bakery-products/pastry-boxes.webp";
import donutBoxes from "@/assets/bakery-products/donut-boxes.webp";
import cookieBoxes from "@/assets/bakery-products/cookie-boxes.webp";
import cupcakeBoxes from "@/assets/bakery-products/cupcake-boxes.webp";
import pieBoxes from "@/assets/bakery-products/Pie Boxes.webp";
import muffinBoxes from "@/assets/bakery-products/muffin-boxes.webp";
import breadPackaging from "@/assets/bakery-products/Bread Packaging.webp";
import macaronBoxes from "@/assets/bakery-products/Macaron Boxes.webp";
import chocolateBoxes from "@/assets/bakery-products/Chocolate Boxes.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
  { name: "Custom Cake Boxes", image: customCakeBoxes, description: "Elegant boxes for cakes of all sizes featuring sturdy construction and beautiful presentation design" },
  { name: "Pastry Boxes", image: pastryBoxes, description: "Perfect packaging for delicate pastries with grease-resistant materials and secure closure mechanisms" },
  { name: "Donut Boxes", image: donutBoxes, description: "Sturdy boxes designed for donuts and bagels with convenient carrying handles and viewing windows" },
  { name: "Cookie Boxes", image: cookieBoxes, description: "Gift-ready cookie packaging featuring attractive designs and protective inserts for freshness preservation" },
  { name: "Cupcake Boxes", image: cupcakeBoxes, description: "Secure compartments for cupcakes preventing movement and damage with clear window display options" },
  { name: "Pie Boxes", image: pieBoxes, description: "Window boxes for showcasing pies with ventilation features and sturdy base for safe transportation" },
  { name: "Muffin Boxes", image: muffinBoxes, description: "Multi-compartment muffin carriers with individual slots ensuring products stay fresh and presentable" },
  { name: "Bread Packaging", image: breadPackaging, description: "Fresh-keeping bread bags and boxes with breathable materials maintaining optimal texture and quality" },
  { name: "Macaron Boxes", image: macaronBoxes, description: "Luxury packaging for macarons featuring elegant design and protective inserts for delicate confections" },
  { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate gift boxes with sophisticated finishes and compartments for assorted selections" },
];

const BakeryBoxes = () => {
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
              <div className="pt-4 lg:pt-0">
                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                  <img
                    src={bakeryHeroImage}
                    alt="Custom Bakery Boxes Collection"
                    className="w-full h-full object-cover" loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Instant Quote Form */}
            <div className="flex justify-end">
              <InstantQuoteFormCompact customProducts={relatedProducts.map(p => p.name)} />
            </div>
          </div>

          {/* Related Products Section */}
          <section className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prove The Quality Experience Of Bakery Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom bakery packaging solutions designed to
              keep your baked goods fresh, elevate your brand, and provide exceptional presentation.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
          </section>
        </div>
      </main>

      {/* Main Quote Form at Bottom */}
      {/* Brand Rating */}
      <BrandRating />
      <QuoteForm />
      <SEOContent>

        <h2>The Ultimate Guide to Bakery Boxes</h2>
        <p>
          In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
          Our <strong>Bakery Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default BakeryBoxes;
