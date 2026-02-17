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
import hempCardboardBoxes from "@/assets/cardboard-boxes/hemp-cardboard-boxes.webp";
import cardboardCigaretteBoxes from "@/assets/cardboard-boxes/cardboard-cigarette-boxes.webp";
import cardboardGiftBoxes from "@/assets/cardboard-boxes/cardboard-gift-boxes.webp";
import blackCardboardBoxes from "@/assets/cardboard-boxes/black-cardboard-boxes.webp";
import whiteCardboardBoxes from "@/assets/cardboard-boxes/white-cardboard-boxes.webp";
import cardboardDividerBoxes from "@/assets/cardboard-boxes/cardboard-divider-boxes.webp";
import cardboardJewelryBoxes from "@/assets/cardboard-boxes/cardboard-jewelry-boxes.webp";
import cardboardBoxWithHandle from "@/assets/cardboard-boxes/cardboard-box-with-handle.webp";
import ammoCardboardBoxes from "@/assets/cardboard-boxes/ammo-cardboard-boxes.webp";
import cardboardInserts from "@/assets/cardboard-boxes/cardboard-inserts.webp";
import paperboardBoxes from "@/assets/cardboard-boxes/paperboard-boxes.webp";
import cardboardShoeBoxes from "@/assets/cardboard-boxes/cardboard-shoe-boxes.webp";
import cardboardBoxWithInserts from "@/assets/cardboard-boxes/cardboard-box-with-inserts.webp";
import cardboardCigarBoxes from "@/assets/cardboard-boxes/Cardboard Cigar Boxes.webp";
import cosmeticCardboardBoxes from "@/assets/cardboard-boxes/cosmetic-cardboard-boxes.webp";
import cardboardSoapBoxes from "@/assets/cardboard-boxes/cardboard-soap-boxes.webp";
import cardboardBoxesHero from "@/assets/cardboard-boxes/cardboard-boxes-hero.webp";
import { SEOContent } from "@/components/SEOContent";

// Product list for dropdown
const cardboardBoxProducts = [
    "Hemp Cardboard Boxes",
    "Cardboard Cigarette Boxes",
    "Cardboard Gift Boxes",
    "Black Cardboard Boxes",
    "White Cardboard Boxes",
    "Cardboard Divider Boxes",
    "Cardboard Jewelry Boxes",
    "Cardboard Box With Handle",
    "Ammo Cardboard Boxes",
    "Cardboard Inserts",
    "Paperboard Boxes",
    "Cardboard Shoe Boxes",
    "Cardboard Box With Inserts",
    "Cardboard Cigar Boxes",
    "Cosmetic Cardboard Boxes",
    "Cardboard Soap Boxes",
];

const relatedProducts = [
    { name: "Hemp Cardboard Boxes", image: hempCardboardBoxes, description: "Eco-friendly hemp cardboard packaging solutions crafted from sustainable and biodegradable materials" },
    { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, description: "Custom cigarette cardboard boxes featuring durable construction and high-quality vibrant printing" },
    { name: "Cardboard Gift Boxes", image: cardboardGiftBoxes, description: "Decorative gift cardboard boxes perfect for special occasions with elegant finishes and secure closures" },
    { name: "Black Cardboard Boxes", image: blackCardboardBoxes, description: "Sleek black cardboard packaging with a luxury matte finish designed for premium product presentation" },
    { name: "White Cardboard Boxes", image: whiteCardboardBoxes, description: "Clean white cardboard boxes offering a professional aesthetic for medical and cosmetic retail items" },
    { name: "Cardboard Divider Boxes", image: cardboardDividerBoxes, description: "Boxes with custom cardboard dividers to organize and protect delicate multiple product kits safely" },
    { name: "Cardboard Jewelry Boxes", image: cardboardJewelryBoxes, description: "Elegant jewelry cardboard boxes featuring soft inserts and premium branding for luxury accessories" },
    { name: "Cardboard Box With Handle", image: cardboardBoxWithHandle, description: "Convenient handled cardboard boxes designed for easy transport and attractive retail gift display" },
    { name: "Ammo Cardboard Boxes", image: ammoCardboardBoxes, description: "Secure ammunition packaging engineered for heavy-duty protection and organized storage requirements" },
    { name: "Cardboard Inserts", image: cardboardInserts, description: "Custom cardboard insert solutions designed to hold products securely and prevent movement in transit" },
    { name: "Paperboard Boxes", image: paperboardBoxes, description: "Versatile paperboard packaging offering lightweight durability and exceptional surface for branding" },
    { name: "Cardboard Shoe Boxes", image: cardboardShoeBoxes, description: "Durable shoe cardboard boxes with reinforced corners and elegant designs for footwear retail brands" },
    { name: "Cardboard Box With Inserts", image: cardboardBoxWithInserts, description: "Boxes with protective custom inserts tailored to fit your specific product dimensions perfectly" },
    { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, description: "Premium cigar cardboard boxes utilizing high-quality board and sophisticated logo printing techniques" },
    { name: "Cosmetic Cardboard Boxes", image: cosmeticCardboardBoxes, description: "Beauty product cardboard packaging designed with glam finishes to stand out on crowded retail shelves" },
    { name: "Cardboard Soap Boxes", image: cardboardSoapBoxes, description: "Custom soap cardboard boxes featuring breathable materials and rustic aesthetic for natural brands" },
];

const CardboardBoxes = () => {
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
                                <BreadcrumbPage>Cardboard Boxes</BreadcrumbPage>
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
                                Cardboard Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover highly customizable and economical cardboard packaging solutions made from durable paperboard.
                                Suitable for almost any product, our cardboard boxes offer exceptional versatility in size, shape, and printing options.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={cardboardBoxesHero}
                                        alt="Cardboard Boxes Hero"
                                        className="w-full h-full object-cover" loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={cardboardBoxProducts} />
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Versatile Cardboard Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom cardboard boxes designed to
                            provide economical packaging, exceptional customization, and reliable protection for your products.
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
            {/* Brand Rating */}
            <BrandRating />
            <QuoteForm />
            <SEOContent>

                <h2>The Ultimate Guide to Cardboard Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Cardboard Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default CardboardBoxes;
