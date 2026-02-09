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
import heroImage from "@/assets/tuck-boxes/tuck hero.webp";
// Product Images
import reverseTuckEnd from "@/assets/tuck-boxes/reverse-tuck-end.webp";
import reverseTuckEndBoxes from "@/assets/tuck-boxes/reverse-tuck-end-boxes.webp";
import straightTuckEnd from "@/assets/tuck-boxes/Straight Tuck End.webp";
import straightTuckEndBoxes from "@/assets/tuck-boxes/straight-tuck-end-boxes.webp";
import tuckTopBox from "@/assets/tuck-boxes/tuck-top-box.webp";
import tuckTopBoxes from "@/assets/tuck-boxes/tuck-top-boxes.webp";
import tuckTopSnapBottom from "@/assets/tuck-boxes/tuck-top-snap-bottom-box.webp";
import tuckTopAutoBottom from "@/assets/tuck-boxes/tuck-top-auto-bottom-box.webp";
import tuckFrontBoxes from "@/assets/tuck-boxes/tuck-front-boxes.webp";
import doubleWallTuckFront from "@/assets/tuck-boxes/double-wall-tuck-front.webp";
import doubleWallTuckTopBoxes from "@/assets/tuck-boxes/double-wall-tuck-top-boxes.webp";
import straightTuckHangTab from "@/assets/tuck-boxes/straight-tuck-with-hang-tab.webp";
import reverseTuckHangTab from "@/assets/tuck-boxes/reverse-tuck-with-hang-tab.webp";
import straightTuckWindow from "@/assets/tuck-boxes/straight-tuck-with-customize-window.webp";
import reverseTuckWindow from "@/assets/tuck-boxes/reverse-tuck-with-customize-window.webp";
import { SEOContent } from "@/components/SEOContent";

const tuckBoxProducts = [
    "Reverse Tuck End",
    "Reverse Tuck End Boxes",
    "Straight Tuck End",
    "Straight Tuck End Boxes",
    "Tuck Top Box",
    "Tuck Top Boxes",
    "Tuck Top Snap Bottom Box",
    "Tuck Top Auto Bottom Box",
    "Tuck Front Boxes",
    "Double Wall Tuck Front",
    "Double Wall Tuck Top Boxes",
    "Straight Tuck with Hang Tab",
    "Reverse Tuck with Hang Tab",
    "Straight Tuck with Customize Window",
    "Reverse Tuck with Customize Window",
];

const relatedProducts = [
    { name: "Reverse Tuck End", image: reverseTuckEnd, description: "Classic reverse tuck closure designed for secure packaging and easy assembly across various retail sectors." },
    { name: "Reverse Tuck End Boxes", image: reverseTuckEndBoxes, description: "Versatile reverse tuck boxes suitable for a wide range of products requiring reliable and elegant packaging." },
    { name: "Straight Tuck End", image: straightTuckEnd, description: "Clean straight tuck design offering a premium look with perfectly aligned closures for high-end retail displays." },
    { name: "Straight Tuck End Boxes", image: straightTuckEndBoxes, description: "Standard straight tuck packaging solutions engineered for ease of use and professional product presentation." },
    { name: "Tuck Top Box", image: tuckTopBox, description: "Simple and effective tuck top closure providing convenient access and secure containment for your retail goods." },
    { name: "Tuck Top Boxes", image: tuckTopBoxes, description: "Reliable tuck top boxes perfect for retail display and organized storage, featuring durable construction." },
    { name: "Tuck Top Snap Bottom Box", image: tuckTopSnapBottom, description: "Hybrid design featuring a secure snap-lock bottom and easy tuck top access for heavy or fragile products." },
    { name: "Tuck Top Auto Bottom Box", image: tuckTopAutoBottom, description: "Quick-assembly auto bottom combined with a convenient tuck top to streamline your high-volume packaging line." },
    { name: "Tuck Front Boxes", image: tuckFrontBoxes, description: "Durable tuck front design providing enhanced protection and a clean exterior surface for prominent branding." },
    { name: "Double Wall Tuck Front", image: doubleWallTuckFront, description: "Extra sturdy double wall construction offering maximum crush resistance for shipping and retail of heavier items." },
    { name: "Double Wall Tuck Top Boxes", image: doubleWallTuckTopBoxes, description: "Reinforced top tuck design engineered specifically for heavier items requiring added structural security." },
    { name: "Straight Tuck with Hang Tab", image: straightTuckHangTab, description: "Retail-ready packaging featuring an integrated hang tab for convenient pegboard display and easy visibility." },
    { name: "Reverse Tuck with Hang Tab", image: reverseTuckHangTab, description: "Functional reverse tuck style with a built-in hang tab designed for efficient vertical retail merchandising." },
    { name: "Straight Tuck with Customize Window", image: straightTuckWindow, description: "Showcase your products through a custom clear window combined with a premium straight tuck closure design." },
    { name: "Reverse Tuck with Customize Window", image: reverseTuckWindow, description: "Professional reverse tuck box featuring a large product window to boost consumer interest and brand trust." },
];

const TuckBoxes = () => {
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
                                <BreadcrumbPage>Tuck Boxes</BreadcrumbPage>
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
                                Tuck Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover versatile tuck boxes featuring easy-to-assemble designs with standard tuck-in flaps.
                                Perfect for small to medium-sized products across retail and pharmaceutical industries, our tuck packaging offers convenience and reliability.
                                From reverse tuck end to auto-lock styles, customize your packaging solution.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={heroImage}
                                        alt="Tuck Boxes Hero"
                                        className="w-full h-full object-cover" loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={tuckBoxProducts} />
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Versatile Tuck Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom tuck boxes designed to
                            provide easy assembly, secure closure, and professional presentation for your products.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

                <h2>The Ultimate Guide to Tuck Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Tuck Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default TuckBoxes;
