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

// IMAGES INTENTIONALLY OMITTED - AWAITING USER INSTRUCTION
// Hero image placeholder - to be added later
// Product images placeholders - to be added later

const relatedProducts = [
  { name: "Custom Beard Oil Boxes", image: customBeardOil, description: "Premium packaging for beard oil products." },
  { name: "Serum Boxes", image: serumBoxes, description: "Protective boxes for skincare serums." },
  { name: "Hair Color Boxes", image: hairColorBoxes, description: "Vibrant packaging for hair color kits." },
  { name: "Hair Extension Boxes", image: hairExtensionBoxes, description: "Luxury boxes for hair extensions." },
  { name: "Hair Spray Boxes", image: hairSprayBoxes, description: "Custom boxes for hair spray bottles." },
  { name: "Custom Lip Gloss Boxes", image: customLipGlossBoxes, description: "Stylish packaging for lip gloss." },
  { name: "Custom Lip Liner Boxes", image: customLipLinerBoxes, description: "Sleek boxes for lip liners." },
  { name: "Custom Lipstick Boxes", image: customLipstickBoxes, description: "Elegant lipstick packaging solutions." },
  { name: "Mascara Boxes", image: mascaraBoxes, description: "Eye-catching boxes for mascara." },
  { name: "Nail Polish Boxes", image: nailPolishBoxes, description: "Durable packaging for nail polish bottles." },
  { name: "Custom Eye Shadow Boxes", image: customEyeShadowBoxes, description: "Creative packaging for eye shadow palettes." },
  { name: "Eyelash Boxes", image: eyelashBoxes, description: "Beautiful boxes for false eyelashes." },
  { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "Secure packaging for essential oils." },
  { name: "Foundation Boxes", image: foundationBoxes, description: "Premium boxes for liquid and powder foundations." },
  { name: "Lip Balm Boxes", image: lipBalmBoxes, description: "Compact boxes for lip balm containers." },
  { name: "Nail Boxes", image: nailBoxes, description: "Custom packaging for various nail products." },
  { name: "Cosmetic Lables", image: cosmeticLabels, description: "Custom printed labels for cosmetic products." },
  { name: "Lip Tint Packaging", image: lipTintPackaging, description: "Trendy packaging for lip tints." },
  { name: "Custom Wig Boxes", image: customWigBoxes, description: "Large, protective boxes for wigs." },
  { name: "Skin Care Packaging", image: skinCarePackaging, description: "Complete packaging solutions for skincare lines." },
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
              <div className="pt-4">
                <img
                  src={cosmeticHero}
                  alt="Premium Cosmetic Boxes Collection"
                  className="w-[480px] h-[300px] rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="flex justify-end">
              <InstantQuoteFormCompact customProducts={productOptions} />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Rating */}
      <BrandRating />

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

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    {/* Product image placeholder - intentionally empty */}
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

      <QuoteForm />
      <Footer />
    </div>
  );
};

export default CosmeticBoxes;
