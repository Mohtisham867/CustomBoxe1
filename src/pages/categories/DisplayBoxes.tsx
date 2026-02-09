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

// Product Images
import brochureDisplayHolder from "@/assets/display-boxes/brochure-display-holder.webp";
import customCandleDisplayBoxes from "@/assets/display-boxes/custom-candle-display-boxes.webp";
import customPreRollDisplayBoxes from "@/assets/display-boxes/custom-pre-roll-display-boxes.webp";
import vapeDisplayBoxes from "@/assets/display-boxes/vape-display-boxes.webp";
import cardboardDisplayBoxes from "@/assets/display-boxes/cardboard-display-boxes.webp";
import counterDisplayBoxes from "@/assets/display-boxes/counter-display-boxes.webp";
import jewelryDisplayBoxes from "@/assets/display-boxes/jewelry-display-boxes.webp";
import cbdDisplayBoxes from "@/assets/display-boxes/cbd-display-boxes.webp";
import lollipopDisplayBoxes from "@/assets/display-boxes/lollipop-display-boxes.webp";
import cigaretteDisplayBoxes from "@/assets/display-boxes/cigarette-display-boxes.webp";
import cosmeticDisplayBoxes from "@/assets/display-boxes/cosmetic-display-boxes.webp";
import clearLidBoxes from "@/assets/display-boxes/clear-lid-boxes.webp";
import productDisplayBoxes from "@/assets/display-boxes/product-display-boxes.webp";
import countertopDisplayBoxes from "@/assets/display-boxes/countertop-display-boxes.webp";
import watchDisplayBoxes from "@/assets/display-boxes/watch-display-boxes.webp";
import healthCounterDisplayBoxes from "@/assets/display-boxes/health-counter-display-boxes.webp";
import candyDisplayBoxes from "@/assets/display-boxes/candy-display-boxes.webp";
import displayBoxesHero from "@/assets/display-boxes/display-boxes-hero.webp";
import { SEOContent } from "@/components/SEOContent";


const relatedProducts = [
    { name: "Brochure Display Holder", image: brochureDisplayHolder, description: "Professional holders for brochures and flyers designed for high visibility in lobbies and retail environments" },
    { name: "Custom Candle Display Boxes", image: customCandleDisplayBoxes, description: "Attractive display boxes for candles featured with protective inserts and premium branding for shelf appeal" },
    { name: "Custom Pre Roll Display Boxes", image: customPreRollDisplayBoxes, description: "Secure display packaging for pre-rolls offering clear product visibility and organized retail counter presence" },
    { name: "Vape Display Boxes", image: vapeDisplayBoxes, description: "Custom displays for vape products featuring eye-catching graphics and sturdy construction for retail use" },
    { name: "Cardboard Display Boxes", image: cardboardDisplayBoxes, description: "Eco-friendly cardboard display solutions providing sustainable and lightweight packaging for general retail" },
    { name: "Counter Display Boxes", image: counterDisplayBoxes, description: "Eye-catching boxes for counter placement designed to drive impulse purchases with bold branding and layout" },
    { name: "Jewelry Display Boxes", image: jewelryDisplayBoxes, description: "Elegant displays for jewelry items highlighting detail and luxury with premium finishes and protective linings" },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Custom packaging for CBD product displays featured with compliant labeling and attractive design elements" },
    { name: "Lollipop Display Boxes", image: lollipopDisplayBoxes, description: "Fun and functional lollipop displays with secure holders designed to catch the eye of younger consumers" },
    { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, description: "Organized display units for cigarette packs providing efficient retail storage and prominent brand visibility" },
    { name: "Cosmetic Display Boxes", image: cosmeticDisplayBoxes, description: "Stylish displays for cosmetic lines offering tiered layouts for product organization and high-end aesthetics" },
    { name: "Clear Lid Boxes", image: clearLidBoxes, description: "Boxes with clear lids for product visibility allowing customers to view contents while ensuring safety" },
    { name: "Product Display Boxes", image: productDisplayBoxes, description: "Versatile boxes for various retail products designed for multi-functional storage and attractive shelf presence" },
    { name: "Countertop Display Boxes", image: countertopDisplayBoxes, description: "Compact displays for limited counter space offering efficient product merchandising in smaller retail areas" },
    { name: "Watch Display Boxes", image: watchDisplayBoxes, description: "Premium display boxes for watches featuring cushioned interiors and luxury exterior branding for retailers" },
    { name: "Health Counter Display Boxes", image: healthCounterDisplayBoxes, description: "Clean and professional health product displays designed for pharmacies and health-conscious retail stores" },
    { name: "Candy Display Boxes", image: candyDisplayBoxes, description: "Bright and appealing candy display boxes featuring colorful graphics and divided compartments for variety" },
];

const productOptions = [
    "Brochure Display Holder",
    "Custom Candle Display Boxes",
    "Custom Pre Roll Display Boxes",
    "Vape Display Boxes",
    "Cardboard Display Boxes",
    "Counter Display Boxes",
    "Jewelry Display Boxes",
    "CBD Display Boxes",
    "Lollipop Display Boxes",
    "Cigarette Display Boxes",
    "Cosmetic Display Boxes",
    "Clear Lid Boxes",
    "Product Display Boxes",
    "Countertop Display Boxes",
    "Watch Display Boxes",
    "Health Counter Display Boxes",
    "Candy Display Boxes",
];

const DisplayBoxes = () => {
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
                                    <Link to="/shapes-styles">Shapes & Style</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Display Boxes</BreadcrumbPage>
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
                                Display Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Custom, attractive, and robust packaging solutions designed to showcase products effectively in retail and counter settings.
                            </p>
                            <div className="pt-4">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={displayBoxesHero}
                                        alt="Display Boxes Hero"
                                        className="w-full h-full object-cover" loading="lazy"
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
                            Display Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our comprehensive selection of display packaging solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Product image placeholder - intentionally empty */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
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

                <h2>The Ultimate Guide to Display Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Display Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default DisplayBoxes;
