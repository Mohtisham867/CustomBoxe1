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
import cosmeticHero from "@/assets/cosmetic-boxes-hero.png";
import customBeardOil from "@/assets/cosmetic-boxes/custom-beard-oil-boxes.png";
import serumBoxes from "@/assets/cosmetic-boxes/serum-boxes.png";
import hairColorBoxes from "@/assets/cosmetic-boxes/hair-color-boxes.png";
import hairExtensionBoxes from "@/assets/cosmetic-boxes/hair-extension-boxes.png";
import hairSprayBoxes from "@/assets/cosmetic-boxes/hair-spray-boxes.png";
import customLipGlossBoxes from "@/assets/cosmetic-boxes/custom-lip-gloss-boxes.png";
import customLipLinerBoxes from "@/assets/cosmetic-boxes/custom-lip-liner-boxes.png";
import customLipstickBoxes from "@/assets/cosmetic-boxes/custom-lipstick-boxes.png";
import mascaraBoxes from "@/assets/cosmetic-boxes/mascara-boxes.png";
import nailPolishBoxes from "@/assets/cosmetic-boxes/nail-polish-boxes.png";
import customEyeShadowBoxes from "@/assets/cosmetic-boxes/custom-eye-shadow-boxes.png";
import eyelashBoxes from "@/assets/cosmetic-boxes/eyelash-boxes.png";
import essentialOilBoxes from "@/assets/cosmetic-boxes/essential-oil-boxes.png";
import foundationBoxes from "@/assets/cosmetic-boxes/foundation-boxes.png";
import lipBalmBoxes from "@/assets/cosmetic-boxes/lip-balm-boxes.png";
import nailBoxes from "@/assets/cosmetic-boxes/nail-boxes.png";
import cosmeticLabels from "@/assets/cosmetic-boxes/cosmetic-labels.png";
import lipTintPackaging from "@/assets/cosmetic-boxes/lip-tint-packaging.png";
import customWigBoxes from "@/assets/cosmetic-boxes/custom-wig-boxes.png";
import skinCarePackaging from "@/assets/cosmetic-boxes/skin-care-packaging.png";
import { SEOContent } from "@/components/SEOContent";

// IMAGES INTENTIONALLY OMITTED - AWAITING USER INSTRUCTION
// Hero image placeholder - to be added later
// Product images placeholders - to be added later

const relatedProducts = [
  { name: "Custom Beard Oil Boxes", image: customBeardOil, description: "Premium packaging for beard oil products featuring leak-proof design and masculine branding aesthetics" },
  { name: "Serum Boxes", image: serumBoxes, description: "Protective boxes for skincare serums with cushioned inserts preventing breakage and elegant presentation" },
  { name: "Hair Color Boxes", image: hairColorBoxes, description: "Vibrant packaging for hair color kits with clear instructions display and protective inner compartments" },
  { name: "Hair Extension Boxes", image: hairExtensionBoxes, description: "Luxury boxes for hair extensions featuring soft-touch finishes and organized storage for multiple pieces" },
  { name: "Hair Spray Boxes", image: hairSprayBoxes, description: "Custom boxes for hair spray bottles with secure fit and attractive shelf-ready retail presentation" },
  { name: "Custom Lip Gloss Boxes", image: customLipGlossBoxes, description: "Stylish packaging for lip gloss featuring window displays and premium finishes for cosmetic appeal" },
  { name: "Custom Lip Liner Boxes", image: customLipLinerBoxes, description: "Sleek boxes for lip liners with protective inserts and sophisticated branding for makeup products" },
  { name: "Custom Lipstick Boxes", image: customLipstickBoxes, description: "Elegant lipstick packaging solutions with magnetic closures and luxurious finishes for premium brands" },
  { name: "Mascara Boxes", image: mascaraBoxes, description: "Eye-catching boxes for mascara featuring bold graphics and secure tube holders for retail display" },
  { name: "Nail Polish Boxes", image: nailPolishBoxes, description: "Durable packaging for nail polish bottles with protective padding and attractive color-coordinated designs" },
  { name: "Custom Eye Shadow Boxes", image: customEyeShadowBoxes, description: "Creative packaging for eye shadow palettes with mirror inserts and compartmentalized protective design" },
  { name: "Eyelash Boxes", image: eyelashBoxes, description: "Beautiful boxes for false eyelashes featuring clear windows and delicate protective trays for storage" },
  { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "Secure packaging for essential oils with leak-resistant construction and aromatherapy-themed branding" },
  { name: "Foundation Boxes", image: foundationBoxes, description: "Premium boxes for liquid and powder foundations with protective inserts and elegant matte finishes" },
  { name: "Lip Balm Boxes", image: lipBalmBoxes, description: "Compact boxes for lip balm containers featuring eco-friendly materials and convenient display options" },
  { name: "Nail Boxes", image: nailBoxes, description: "Custom packaging for various nail products with organized compartments and vibrant beauty branding" },
  { name: "Cosmetic Lables", image: cosmeticLabels, description: "Custom printed labels for cosmetic products with waterproof finishes and FDA-compliant information display" },
  { name: "Lip Tint Packaging", image: lipTintPackaging, description: "Trendy packaging for lip tints with modern designs and protective features for liquid formulations" },
  { name: "Custom Wig Boxes", image: customWigBoxes, description: "Large protective boxes for wigs featuring spacious interiors and shape-maintaining support structures" },
  { name: "Skin Care Packaging", image: skinCarePackaging, description: "Complete packaging solutions for skincare lines with cohesive branding and protective product inserts" },
];

const productOptions = [
  "Custom Beard Oil Boxes",
  "Serum Boxes",
  "Hair Color Boxes",
  "Hair Extension Boxes",
  "Hair Spray Boxes",
  "Custom Lip Gloss Boxes",
  "Custom Lip Liner Boxes",
  "Custom Lipstick Boxes",
  "Mascara Boxes",
  "Nail Polish Boxes",
  "Custom Eye Shadow Boxes",
  "Eyelash Boxes",
  "Essential Oil Boxes",
  "Foundation Boxes",
  "Lip Balm Boxes",
  "Nail Boxes",
  "Cosmetic Lables",
  "Lip Tint Packaging",
  "Custom Wig Boxes",
  "Skin Care Packaging",
];

const CosmeticBoxes = () => {
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
                <BreadcrumbPage>Cosmetic Boxes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Split Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cosmetic Boxes
              </h1>
              <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                High-quality, stylish, and protective custom packaging for makeup, skincare, and beauty products.
              </p>
              <div className="pt-4 lg:pt-0">
                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                  <img
                    src={cosmeticHero}
                    alt="Premium Cosmetic Boxes Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex justify-end">
              <InstantQuoteFormCompact customProducts={productOptions} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cosmetic Packaging Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore our comprehensive selection of cosmetic packaging solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="w-full aspect-square overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground text-xs">Image placeholder</p>
                      </div>
                    )}
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

        <h2>The Ultimate Guide to Cosmetic Boxes</h2>
        <p>
          In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
          Our <strong>Cosmetic Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default CosmeticBoxes;
