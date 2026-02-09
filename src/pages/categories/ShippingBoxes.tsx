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

// Images
import shippingBoxesHero from "@/assets/shipping-boxes/shipping-boxes-hero.webp";
import chineseTakeoutBox from "@/assets/shipping-boxes/chinese-takeout-boxes.webp";
import hempShippingBox from "@/assets/shipping-boxes/hemp-shipping-boxes.webp";
import doubleWallTuck from "@/assets/shipping-boxes/double-wall-tuck-front.webp";
import whiteShippingBox from "@/assets/shipping-boxes/white-shipping-boxes.webp";
import deliveryBox from "@/assets/shipping-boxes/delivery-boxes.webp";
import candleShippingBox from "@/assets/shipping-boxes/candle-shipping-boxes.webp";
import hatShippingBox from "@/assets/shipping-boxes/hat-shipping-boxes.webp";
import box8x6x4Box from "@/assets/shipping-boxes/8x6x4-shipping-boxes.webp";
import box5x5x5Box from "@/assets/shipping-boxes/5x5x5-boxes.webp";
import wineShippingBox from "@/assets/shipping-boxes/wine-shipping-boxes.webp";
import longNarrowBox from "@/assets/shipping-boxes/long-narrow-shipping-boxes.webp";
import shippingLabelsBox from "@/assets/shipping-boxes/shipping-labels.webp";
import placeholder from "@/assets/shipping-boxes/placeholder.webp";
import { SEOContent } from "@/components/SEOContent";

// Placeholder assignments for missing value
const candleShipping = candleShippingBox;
const hatShipping = hatShippingBox;
const box8x6x4 = box8x6x4Box;
const box5x5x5 = box5x5x5Box;
const wineShipping = wineShippingBox;
const longNarrow = longNarrowBox;
const shippingLabels = shippingLabelsBox;

const relatedProducts = [
    { name: "Chinese Takeout Boxes", image: chineseTakeoutBox, description: "Classic folded design with wire handle for easy carry and leak-resistant coating for food safety" },
    { name: "Double Wall Tuck Front", image: doubleWallTuck, description: "Extra durability with reinforced walls for heavy items ensuring safe transport and stackable retail displays" },
    { name: "Hemp Shipping Boxes", image: hempShippingBox, description: "Sustainable and sturdy hemp-based material providing an eco-friendly alternative for conscious brands" },
    { name: "Candle Shipping Boxes", image: candleShipping, description: "Protective packaging specifically for fragile candles featuring corrugated board to prevent heat damage" },
    { name: "Hat Shipping Boxes", image: hatShipping, description: "Spacious boxes to keep hats in perfect shape and prevent crushing during complex logistic processes" },
    { name: "8x6x4 Shipping Boxes", image: box8x6x4, description: "Standard size ideal for small to medium retail items offering reliable strength for daily parcel shipping" },
    { name: "5x5x5 Boxes", image: box5x5x5, description: "Perfect cube shape for compact secure shipping of small gadgets and delicate electronic accessories" },
    { name: "Wine Shipping Boxes", image: wineShipping, description: "Designed to protect bottles during transit with specialized inserts for secure individual bottle placement" },
    { name: "Long Narrow Shipping Boxes", image: longNarrow, description: "Ideal for elongated items like posters or tools providing longitudinal support and reinforced ends" },
    { name: "Shipping Labels", image: shippingLabels, description: "Custom branded labels for professional delivery featuring high-quality adhesive and clear informational layout" },
    { name: "White Shipping Boxes", image: whiteShippingBox, description: "Clean, professional white finish for premium brands offering a sleek aesthetic for e-commerce deliveries" },
    { name: "Delivery Boxes", image: deliveryBox, description: "Reliable standardized boxes for all logistics needs crafted from heavy-duty corrugated cardboard for safety" },
];

const productOptions = relatedProducts.map(p => p.name);

const ShippingBoxes = () => {
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Shipping Boxes</BreadcrumbPage>
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
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Custom Shipping Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Durable, secure, and branded shipping solutions for e-commerce and retail. From standard mailers to specialized shapes, ensure your products arrive safely and in style.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={shippingBoxesHero}
                                        alt="Shipping Boxes Hero"
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
                            Versatile Shipping Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Find the right box for every product, size, and shipping requirement.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Note: Logic to show placeholder label if it is the placeholder image */}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110 ${product.image === placeholder ? "opacity-80" : ""}`} loading="lazy"
                                        />
                                        {product.image === placeholder && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                                <span className="bg-white/90 px-2 py-1 text-xs rounded shadow-sm text-foreground/70 font-medium">Image Coming Soon</span>
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

                <h2>The Ultimate Guide to Shipping Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Shipping Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default ShippingBoxes;
