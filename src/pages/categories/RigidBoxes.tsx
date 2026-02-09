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
import walletBoxes from "@/assets/rigid-boxes/wallet-boxes-v2.webp";
import flipTopBoxes from "@/assets/rigid-boxes/flip-top-boxes-v2.webp";
import rigidGiftBoxes from "@/assets/rigid-boxes/rigid-gift-boxes-v2.webp";
import creditCardBoxes from "@/assets/rigid-boxes/credit-card-boxes-v2.webp";
import rigidSetupBoxes from "@/assets/rigid-boxes/rigid-setup-boxes-v2.webp";
import ribbonBoxes from "@/assets/rigid-boxes/ribbon-boxes-v2.webp";
import magneticClosureBoxes from "@/assets/rigid-boxes/magnetic-closure-boxes-v2.webp";
import rigidPaperBoxes from "@/assets/rigid-boxes/rigid-paper-boxes-v2.webp";
import flipTopMagneticClosure from "@/assets/rigid-boxes/flip-top-magnetic-closure-v2.webp";
import heroImage from "@/assets/rigid-boxes/rigid-boxes-hero-v2.webp";
import { SEOContent } from "@/components/SEOContent";

// Product list for dropdown
const rigidBoxProducts = [
    "Wallet Boxes",
    "Flip Top Boxes",
    "Rigid Gift Boxes",
    "Credit Card Boxes",
    "Rigid Setup Boxes",
    "Ribbon Boxes",
    "Magnetic Closure Boxes",
    "Rigid Paper Boxes",
    "Flip Top Boxes With Magnetic Closure",
];

const relatedProducts = [
    { name: "Wallet Boxes", image: walletBoxes, description: "Premium wallet packaging featuring luxury finishes and protective inserts for a high-end retail presentation" },
    { name: "Flip Top Boxes", image: flipTopBoxes, description: "Elegant flip-top rigid boxes with magnetic closures and sophisticated designs for premium gift packaging" },
    { name: "Rigid Gift Boxes", image: rigidGiftBoxes, description: "Luxury gift box solutions handcrafted with durable board and custom finishes to elevate your brand identity" },
    { name: "Credit Card Boxes", image: creditCardBoxes, description: "Secure credit card packaging with custom inserts and professional branding for financial products", useCover: true },
    { name: "Rigid Setup Boxes", image: rigidSetupBoxes, description: "High-end setup boxes offering superior structural integrity and a premium unboxing experience for luxury items", useCover: true },
    { name: "Ribbon Boxes", image: ribbonBoxes, description: "Decorative ribbon closure boxes perfect for special gift presentations and luxury brand storytelling", useCover: true },
    { name: "Magnetic Closure Boxes", image: magneticClosureBoxes, description: "Premium magnetic closure packaging combining sleek aesthetics with functional security for high-value goods", useCover: true },
    { name: "Rigid Paper Boxes", image: rigidPaperBoxes, description: "Durable rigid paperboard boxes designed for maximum protection and elegant retail shelf presence", useCover: true },
    { name: "Flip Top Boxes With Magnetic Closure", image: flipTopMagneticClosure, description: "Flip-top boxes with secure magnetic seals providing a refined and modern packaging solution for tech and gifts", useCover: true },
];

const RigidBoxes = () => {
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Rigid Boxes</BreadcrumbPage>
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
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Rigid Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Elevate your brand with premium rigid boxes crafted from thick, non-collapsible paperboard.
                                Perfect for luxury goods, high-end gifts, and electronics, our rigid packaging delivers superior strength and perceived value.
                                From magnetic closure boxes to elegant ribbon designs, customize your premium packaging solution.
                            </p>
                            <div className="max-w-lg">
                                <div className="flex justify-center lg:justify-start">
                                    <div className="w-full max-w-[480px] h-[300px] rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={heroImage}
                                            alt="Rigid Boxes Collection"
                                            className="w-full h-full object-cover" loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={rigidBoxProducts} />
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Discover Premium Rigid Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom rigid boxes designed to
                            showcase your products with elegance, provide exceptional protection, and deliver a premium unboxing experience.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                >
                                    <CardContent className="p-0">
                                        <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                    <span className="text-gray-400 text-xs">Image Placeholder</span>
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
                    </section>
                </div>
            </main>

            {/* Main Quote Form at Bottom */}
            {/* Brand Rating */}
            <BrandRating />
            <QuoteForm />
            <SEOContent>

                <h2>The Ultimate Guide to Rigid Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Rigid Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default RigidBoxes;
