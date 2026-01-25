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
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
  { name: "Custom E-Cigarette Boxes", image: eCigaretteBoxes, description: "Modern packaging for electronic cigarettes featuring sleek designs and high-quality protective finishes" },
  { name: "Custom Hemp Cigarette Boxes", image: hempCigaretteBoxes, description: "Eco-friendly hemp cigarette packaging offering natural appeal and sustainable material construction" },
  { name: "Paper Cigarette Boxes", image: paperCigaretteBoxes, description: "Classic paper cigarette packaging featuring elegant finishes and professional retail presentation" },
  { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, description: "Sturdy cardboard packaging with premium print quality designed for durability and shelf impact" },
  { name: "Blank Cigarette Boxes", image: blankCigaretteBoxes, description: "Plain white cigarette boxes ready for your fully custom branding and artistic graphic designs" },
  { name: "Disposable Cigarette Boxes", image: disposableCigaretteBoxes, description: "Single-use packaging solutions for convenience, portability, and high-impact branding possibilities" },
  { name: "Lighter Boxes", image: lighterBoxes, description: "Custom lighter packaging with clear window display options and professional retail-ready branding" },
  { name: "Empty Cigarette Boxes", image: emptyCigaretteBoxes, description: "Empty boxes ready for efficient product filling, featuring durable board and secure closure designs" },
  { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, description: "Retail display stands designed for maximum brand visibility and organized product merchandising" },
  { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, description: "Premium cigar packaging featuring luxury finishes and robust materials for high-end retail presentation" },
  { name: "Cigarette Cartons", image: cigaretteCartons, description: "Bulk cigarette carton packaging designed for secure wholesale distribution and prominent branding" },
];

const CigaretteBoxes = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
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
            <div className="flex-1 space-y-6 lg:space-y-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cigarette Boxes
              </h1>
              <p className="text-[16px] text-muted-foreground mb-8 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Elevate your tobacco brand with our premium custom cigarette boxes. Our durable packaging solutions offer exceptional protection while showcasing your brand identity with high-quality printing and finishes. From sleek flip-top designs to classic soft packs, we deliver packaging that stands out on retail shelves and reinforces brand recognition.
              </p>
              <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                <img
                  src={heroImage}
                  alt="Custom Cigarette Boxes Collection"
                  className="w-full h-full object-cover"
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

      {/* Related Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prove The Quality Experience Of Cigarette Products
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Explore our comprehensive range of cigarette packaging solutions designed for durability, compliance, and brand impact.
          </p>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
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

        <h2>The Ultimate Guide to Cigarette Boxes</h2>
        <p>
          In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
          Our <strong>Cigarette Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default CigaretteBoxes;
