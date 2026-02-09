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
import apparelBoxesHero from "@/assets/apparel-boxes/hero.webp";

// Import professional product images
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import cufflinkBoxes from "@/assets/apparel-boxes/cufflink-boxes.webp";
import tieBoxes from "@/assets/apparel-boxes/tie-boxes.webp";
import beltBoxes from "@/assets/apparel-boxes/belt-boxes.webp";
import clothingBoxes from "@/assets/apparel-boxes/clothing-boxes.webp";
import lingerieBoxes from "@/assets/apparel-boxes/lingerie-boxes.webp";
import underwearBoxes from "@/assets/apparel-boxes/underwear-boxes.webp";
import tshirtBoxes from "@/assets/apparel-boxes/tshirt-boxes.webp";
import socksBoxes from "@/assets/apparel-boxes/socks-boxes.webp";
import clothingHangTags from "@/assets/apparel-boxes/clothing-hang-tags.webp";
import hatShippingBoxes from "@/assets/apparel-boxes/hat-shipping-boxes.webp";
import sunglassesBoxes from "@/assets/apparel-boxes/sunglasses-boxes.webp";
import apparelGiftBoxes from "@/assets/apparel-boxes/apparel-gift-boxes.webp";
import hoodiePackaging from "@/assets/apparel-boxes/hoodie-packaging.webp";
import weddingDressBoxes from "@/assets/apparel-boxes/wedding-dress-boxes.webp";
import hatBoxes from "@/assets/apparel-boxes/hat-boxes.webp";
import luxuryApparelBoxes from "@/assets/apparel-boxes/luxury-apparel-boxes.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
  { name: "Custom Shoe Boxes", image: customShoeBoxes, description: "Premium shoe packaging that protects footwear while showcasing your brand with style and durability" },
  { name: "Cufflink Boxes", image: cufflinkBoxes, description: "Elegant boxes for luxury cufflinks featuring refined finishes and protective cushioned interiors" },
  { name: "Tie Boxes", image: tieBoxes, description: "Professional tie packaging that preserves shape and prevents wrinkles for retail presentation" },
  { name: "Belt Boxes", image: beltBoxes, description: "Stylish belt boxes designed to protect and display premium accessories with upscale finishes" },
  { name: "Clothing Boxes", image: clothingBoxes, description: "Versatile packaging for folded garments, retail displays, and gift presentation with quality construction" },
  { name: "Lingerie Boxes", image: lingerieBoxes, description: "Delicate lingerie packaging with soft-touch interiors and tasteful premium presentation design" },
  { name: "Underwear Boxes", image: underwearBoxes, description: "Secure underwear packaging ideal for retail and subscription services with sustainable materials" },
  { name: "T Shirt Boxes", image: tshirtBoxes, description: "Custom t-shirt boxes keeping garments neatly folded and retail-ready with enhanced branding options" },
  { name: "Socks Boxes", image: socksBoxes, description: "Creative sock packaging for pairs and gift sets offering protection and attractive shelf presence" },
  { name: "Clothing Hang Tags", image: clothingHangTags, description: "Premium hang tags conveying brand quality, printed on sturdy stock with crisp professional finishes" },
  { name: "Hat Shipping Boxes", image: hatShippingBoxes, description: "Rugged shipping boxes designed to prevent crushing ensuring hats arrive in perfect retail condition" },
  { name: "Sunglasses Boxes", image: sunglassesBoxes, description: "Protective cases with cushioned interiors and secure closures guarding eyewear from scratches" },
  { name: "Apparel Gift Boxes", image: apparelGiftBoxes, description: "Premium gift packaging elevating the unboxing experience with luxe finishes and structural protection" },
  { name: "Hoodie Packaging", image: hoodiePackaging, description: "Custom hoodie boxes sized for folded sweatshirts offering durable protection and branding options" },
  { name: "Wedding Dress Boxes", image: weddingDressBoxes, description: "Luxury preservation boxes protecting wedding gowns long-term using archival materials and spacious design" },
  { name: "Hat Boxes", image: hatBoxes, description: "Classic hat boxes preserving shape and protecting from dust in round or square sturdy formats" },
  { name: "Luxury Apparel Boxes", image: luxuryApparelBoxes, description: "High-end packaging with premium finishes and bespoke structures reflecting luxury fashion standards" },
];

const ApparelBoxes = () => {
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
              <div className="pt-4 lg:pt-0">
                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                  <img
                    src={apparelBoxesHero}
                    alt="Custom Apparel Boxes Collection"
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
              Prove The Quality Experience Of Clothing Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive range of custom apparel packaging solutions designed to
              elevate your brand and provide exceptional protection for your products.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
                      <p className="text-xs text-muted-foreground line-clamp-2 min-h-[3rem] block">
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

        <h2>The Ultimate Guide to Apparel Boxes</h2>
        <p>
          In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
          Our <strong>Apparel Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default ApparelBoxes;
