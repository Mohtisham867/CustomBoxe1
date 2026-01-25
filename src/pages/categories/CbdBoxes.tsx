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

import heroImage from "@/assets/cbd-boxes-hero.png";
import cbdCapsuleBoxes from "@/assets/cbd-products/custom-cbd-capsule-boxes.jpg";
import cbdCreamBoxes from "@/assets/cbd-products/custom-cbd-cream-boxes.jpg";
import cbdLotionBoxes from "@/assets/cbd-products/custom-cbd-lotion-boxes.jpg";
import cbdOilBoxes from "@/assets/cbd-products/cbd-oil-boxes.jpg";
import essentialOilBoxes from "@/assets/cbd-products/essential-oil-boxes.jpg";
import cbdIsolateBoxes from "@/assets/cbd-products/custom-cbd-isolate-boxes.jpg";
import cbdPodBoxes from "@/assets/cbd-products/custom-cbd-pod-boxes.jpg";
import cbdLollipopBoxes from "@/assets/cbd-products/cbd-lollipop-boxes.jpg";
import cbdGummiesBoxes from "@/assets/cbd-products/cbd-gummies-boxes.jpg";
import delta8ThcBoxes from "@/assets/cbd-products/delta-8-thc-boxes.jpg";
import cbdDisplayBoxes from "@/assets/cbd-products/cbd-display-boxes.jpg";
import tinctureBoxes from "@/assets/cbd-products/tincture-boxes.jpg";
import bluntBoxes from "@/assets/cbd-products/blunt-boxes.jpg";
import cbdTinctureBoxes from "@/assets/cbd-products/cbd-tincture-boxes.jpg";
import dropperBottleBoxes from "@/assets/cbd-products/dropper-bottle-boxes.jpg";
import cbdChocolateBoxes from "@/assets/cbd-products/cbd-chocolate-boxes.jpg";
import cbdMailerBoxes from "@/assets/cbd-products/cbd-mailer-boxes.jpg";
import cbdHempOilBoxes from "@/assets/cbd-products/cbd-hemp-oil-boxes.jpg";
import cbdSoapBoxes from "@/assets/cbd-products/cbd-soap-boxes.jpg";
import delta9Packaging from "@/assets/cbd-products/delta-9-packaging.jpg";
import cbdVapeBoxes from "@/assets/cbd-products/cbd-vape-boxes.jpg";
import cbdPreRollBoxes from "@/assets/cbd-products/cbd-pre-roll-boxes.jpg";
import concentratePackaging from "@/assets/cbd-products/concentrate-packaging.jpg";
import cbdSubscriptionBoxes from "@/assets/cbd-products/cbd-subscription-boxes.jpg";
import cbdBathBombBoxes from "@/assets/cbd-products/cbd-bath-bomb-boxes.jpg";
import { SEOContent } from "@/components/SEOContent";

// Placeholder image for new products
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f0f0f0' width='400' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

const productOptions = [
    "Custom CBD Capsule Boxes",
    "Custom CBD Cream Boxes",
    "Custom CBD Lotion Boxes",
    "CBD Oil Boxes",
    "Essential Oil Boxes",
    "Custom CBD Isolate Boxes",
    "Custom CBD Pod Boxes",
    "CBD Lollipop Boxes",
    "CBD Gummies Boxes",
    "Delta 8 THC Boxes",
    "CBD Display Boxes",
    "Tincture Boxes",
    "Blunt Boxes",
    "CBD Tincture Boxes",
    "Dropper Bottle Boxes",
    "CBD Chocolate Boxes",
    "CBD Mailer Boxes",
    "CBD Hemp Oil Boxes",
    "CBD Soap Boxes",
    "Delta 9 Packaging",
    "CBD Vape Boxes",
    "CBD Pre-Roll Boxes",
    "Concentrate Packaging",
    "CBD Subscription Boxes",
    "CBD Bath Bomb Boxes",
];

const relatedProducts = [
    { name: "Custom CBD Capsule Boxes", image: cbdCapsuleBoxes, description: "Secure packaging for CBD capsules and supplements featuring high-quality board and protective finishes" },
    { name: "Custom CBD Cream Boxes", image: cbdCreamBoxes, description: "Premium boxes for CBD creams and topicals designed for luxury retail display and product protection" },
    { name: "Custom CBD Lotion Boxes", image: cbdLotionBoxes, description: "Elegant packaging for CBD lotions and heavy bottles utilizing reinforced board for maximum safety" },
    { name: "CBD Oil Boxes", image: cbdOilBoxes, description: "Protective boxes for CBD oil droppers and tinctures featuring secure inserts and vibrant branding" },
    { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "Custom packaging designed for essential oil bottles with specialized focus on aroma preservation" },
    { name: "Custom CBD Isolate Boxes", image: cbdIsolateBoxes, description: "Specialized packaging for CBD isolate containers providing airtight seals and professional aesthetics" },
    { name: "Custom CBD Pod Boxes", image: cbdPodBoxes, description: "Sleek boxes for CBD vape pods and cartridges featuring child-resistant features and modern designs" },
    { name: "CBD Lollipop Boxes", image: cbdLollipopBoxes, description: "Fun and safe packaging for CBD-infused lollipops with colorful graphics and secure barrier materials" },
    { name: "CBD Gummies Boxes", image: cbdGummiesBoxes, description: "Attractive packaging for CBD gummies and edibles designed to maintain freshness and shelf appeal" },
    { name: "Delta 8 THC Boxes", image: delta8ThcBoxes, description: "Compliant packaging for Delta 8 THC products featuring all required regulatory warnings and logos" },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Eye-catching display boxes for retail CBD products designed to drive impulse sales on shop counters" },
    { name: "Tincture Boxes", image: tinctureBoxes, description: "Protective packaging for tincture bottles with custom-shaped inserts to prevent breakage in transit" },
    { name: "Blunt Boxes", image: bluntBoxes, description: "Custom boxes for pre-rolled blunts offering moisture protection and high-end printing options" },
    { name: "CBD Tincture Boxes", image: cbdTinctureBoxes, description: "Specialized boxes for CBD tincture droppers featuring elegant finishes and informative labeling" },
    { name: "Dropper Bottle Boxes", image: dropperBottleBoxes, description: "Secure packaging for dropper bottles with reinforced walls for maximum protection of glass items" },
    { name: "CBD Chocolate Boxes", image: cbdChocolateBoxes, description: "Premium boxes for CBD-infused chocolates with luxury foil stamping and protective interior layers" },
    { name: "CBD Mailer Boxes", image: cbdMailerBoxes, description: "Durable shipping boxes for CBD products designed for secure delivery and branded unboxing impact" },
    { name: "CBD Hemp Oil Boxes", image: cbdHempOilBoxes, description: "Custom packaging for hemp oil products featuring eco-friendly materials and professional designs" },
    { name: "CBD Soap Boxes", image: cbdSoapBoxes, description: "Elegant boxes for CBD-infused soaps featuring artistic designs and moisture-resistant paperboard" },
    { name: "Delta 9 Packaging", image: delta9Packaging, description: "Compliant packaging for Delta 9 products ensuring all safety features and legal text are displayed" },
    { name: "CBD Vape Boxes", image: cbdVapeBoxes, description: "Sleek boxes for CBD vape products featuring modern aesthetics and secure fit for devices and pods" },
    { name: "CBD Pre-Roll Boxes", image: cbdPreRollBoxes, description: "Protective packaging for CBD pre-rolls with child-resistant features and high-impact custom graphics" },
    { name: "Concentrate Packaging", image: concentratePackaging, description: "Specialized boxes for CBD concentrates providing superior barrier protection and professional branding" },
    { name: "CBD Subscription Boxes", image: cbdSubscriptionBoxes, description: "Custom boxes for CBD subscription services designed for recurring shipment and premium brand loyalty" },
    { name: "CBD Bath Bomb Boxes", image: cbdBathBombBoxes, description: "Beautiful packaging for CBD bath bombs featuring vibrant colors and moisture-resistant protective coatings" },
];

const CbdBoxes = () => {
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
                                <BreadcrumbPage>Custom CBD Boxes</BreadcrumbPage>
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
                                Custom CBD Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Elevate your CBD brand with premium, compliant custom packaging. Our child-resistant and
                                eco-friendly boxes ensure safety and freshness for oils, creams, and edibles, while
                                showcasing your unique brand identity with professional printing and high-quality finishes.
                            </p>
                            <div className="pt-4 lg:pt-0">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                                    <img
                                        src={heroImage}
                                        alt="Custom CBD Boxes"
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
                            Prove The Quality Experience Of CBD Products
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Discover our range of compliant CBD packaging solutions designed for safety, freshness, and brand impact.
                        </p>
                    </div>

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

                <h2>The Ultimate Guide to Cbd Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Cbd Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default CbdBoxes;
