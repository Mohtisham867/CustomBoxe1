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

// Generated Images
import customHandleBoxesV2 from "@/assets/kraft-boxes/custom-handle-boxes-v2.webp";
import customPaperCupsV2 from "@/assets/kraft-boxes/custom-paper-cups-v2.webp";
import kraftSandwichBoxesV2 from "@/assets/kraft-boxes/kraft-sandwich-boxes-v2.webp";
import customKraftSoapBoxesV2 from "@/assets/kraft-boxes/custom-kraft-soap-boxes-v2.webp";
import kraftPillowBoxesV2 from "@/assets/kraft-boxes/kraft-pillow-boxes-v2.webp";
import kraftJewelryBoxesV2 from "@/assets/kraft-boxes/kraft-jewelry-boxes-v2.webp";
import kraftGableBoxesV2 from "@/assets/kraft-boxes/kraft-gable-boxes-v2.webp";
import kraftLabelsV2 from "@/assets/kraft-boxes/kraft-labels-v2.webp";
import paperTubePackagingV2 from "@/assets/kraft-boxes/paper-tube-packaging-v2.webp";
import kraftGiftBoxesV2 from "@/assets/kraft-boxes/kraft-gift-boxes-v2.webp";

// Remaining Old/Other Images
import kraftBubbleMailers from "@/assets/kraft-boxes/kraft-bubble-mailers.webp";
import kraftCorrugatedBoxes from "@/assets/kraft-boxes/kraft-corrugated-boxes.webp";
import kraftTakeawayBoxes from "@/assets/kraft-boxes/kraft-takeaway-boxes.webp";
import kraftPaperBoxesWithWindow from "@/assets/kraft-boxes/kraft-paper-boxes-with-window.webp";
import kraftCupcakeBoxes from "@/assets/kraft-boxes/kraft-cupcake-boxes.webp";
import kraftBags from "@/assets/kraft-boxes/kraft-bags.webp";
import kraftPieBoxes from "@/assets/kraft-boxes/kraft-pie-boxes.webp";
import whiteKraftBoxes from "@/assets/kraft-boxes/white-kraft-boxes.webp";
import smallKraftBoxes from "@/assets/kraft-boxes/small-kraft-boxes.webp";
import kraftBoxesWithLids from "@/assets/kraft-boxes/kraft-boxes-with-lids.webp";
import kraftTuckTopBoxes from "@/assets/kraft-boxes/kraft-tuck-top-boxes.webp";
import kraftShippingLabels from "@/assets/kraft-boxes/kraft-shipping-labels.webp";

// Hero Image
import kraftBoxesHeroV2 from "@/assets/kraft-boxes/kraft-boxes-hero-v2.webp";
import { SEOContent } from "@/components/SEOContent";

const kraftBoxProducts = [
    "Custom Handle Boxes",
    "Custom Paper Cups",
    "Kraft Sandwich Boxes",
    "Custom Kraft Soap Boxes",
    "Kraft Pillow Boxes",
    "Kraft Jewelry Boxes",
    "Kraft Gable Boxes",
    "Kraft Labels",
    "Paper Tube Packaging",
    "Kraft Gift Boxes",
    "Kraft Bubble Mailers",
    "Kraft Corrugated Boxes",
    "Kraft Takeaway Boxes",
    "Kraft Paper Boxes With Window",
    "Kraft Cupcake Boxes",
    "Kraft Bags",
    "Kraft Pie Boxes",
    "White Kraft Boxes",
    "Small Kraft Boxes",
    "Kraft Boxes With Lids",
    "Kraft Tuck Top Boxes",
    "Shipping Labels",
];

const relatedProducts = [
    { name: "Custom Handle Boxes", image: customHandleBoxesV2, description: "Convenient kraft boxes with built-in handles designed for easy transport and attractive retail display" },
    { name: "Custom Paper Cups", image: customPaperCupsV2, description: "Eco-friendly disposable kraft paper cups featuring high-heat resistance and custom branding surfaces" },
    { name: "Kraft Sandwich Boxes", image: kraftSandwichBoxesV2, description: "Wedge-shaped boxes with clear windows designed for sandwiches and fresh deli product presentations" },
    { name: "Custom Kraft Soap Boxes", image: customKraftSoapBoxesV2, description: "Natural rustic packaging for handmade soaps featuring breathable materials and organic brand appeal" },
    { name: "Kraft Pillow Boxes", image: kraftPillowBoxesV2, description: "Unique pillow-shaped gift and favor boxes crafted from durable sustainable cardstock for unique gifting" },
    { name: "Kraft Jewelry Boxes", image: kraftJewelryBoxesV2, description: "Elegant brown paper boxes for jewelry featuring soft inserts and premium custom logo printing options" },
    { name: "Kraft Gable Boxes", image: kraftGableBoxesV2, description: "Classic barn-style containers with handles perfect for holiday treats and seasonal gift presentations" },
    { name: "Kraft Labels", image: kraftLabelsV2, description: "Rustic brown kraft paper stickers and labels designed to complement your eco-friendly brand identity" },
    { name: "Paper Tube Packaging", image: paperTubePackagingV2, description: "Cylindrical kraft tubes for various products offering superior protection and unique retail shelf presence" },
    { name: "Kraft Gift Boxes", image: kraftGiftBoxesV2, description: "Beautifully simple gift boxes for any occasion featuring robust construction and elegant organic finishes" },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Padded protective envelopes for shipping small items securely with eco-friendly kraft paper exteriors" },
    { name: "Kraft Corrugated Boxes", image: kraftCorrugatedBoxes, description: "Durable fluted boxes for shipping and storage engineered for maximum crush resistance and safety" },
    { name: "Kraft Takeaway Boxes", image: kraftTakeawayBoxes, description: "Grease-resistant food pails and containers designed for sustainable and professional takeout services" },
    { name: "Kraft Paper Boxes With Window", image: kraftPaperBoxesWithWindow, description: "Display your products through a clear window while maintaining a natural and sustainable aesthetic look" },
    { name: "Kraft Cupcake Boxes", image: kraftCupcakeBoxes, description: "Secure holders for cupcakes with viewing windows and festive designs for a professional baker's finish" },
    { name: "Kraft Bags", image: kraftBags, description: "Sturdy kraft shopping bags with twisted handles and reinforced bases for reliable retail use and carry" },
    { name: "Kraft Pie Boxes", image: kraftPieBoxes, description: "Perfectly sized boxes for pies and tarts featuring grease-resistant coatings and secure closure tabs" },
    { name: "White Kraft Boxes", image: whiteKraftBoxes, description: "Bleached white kraft paper for a clean and professional look with eco-friendly material benefits" },
    { name: "Small Kraft Boxes", image: smallKraftBoxes, description: "Tiny boxes for favors, samples, or small luxury items featuring durable cardstock and organic charm" },
    { name: "Kraft Boxes With Lids", image: kraftBoxesWithLids, description: "Classic two-piece telescopic kraft boxes designed for premium storage and high-end gift presentation" },
    { name: "Kraft Tuck Top Boxes", image: kraftTuckTopBoxes, description: "Simple tuck-top retail packaging boxes offering easy assembly and secure product containment features" },
    { name: "Shipping Labels", image: kraftShippingLabels, description: "Essential shipping labels designed to adhere securely to your packages with clear informational layout" },
];

const CustomKraftBoxes = () => {
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[10px] py-4">
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
                                <BreadcrumbPage>Custom Kraft Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Top Split Section */}
            <main className="py-16">
                <div className="container mx-auto px-[10px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 mb-12 items-start">
                        {/* Left Side */}
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Custom Kraft Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover our eco-friendly Custom Kraft Boxes, designed for sustainability without compromising on style.
                                Made from high-quality recycled materials, these boxes offer a rustic, natural aesthetic perfect for organic brands.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={kraftBoxesHeroV2}
                                        alt="Custom Kraft Boxes Hero"
                                        className="w-full h-full object-cover" loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={kraftBoxProducts} />
                        </div>

                    </div>

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Sustainable Kraft Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Browse our extensive collection of kraft paper packaging. From sturdy shipping boxes to elegant gift containers,
                            find the perfect eco-friendly solution for your products.
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
            <BrandRating />
            <QuoteForm />
            <SEOContent>
                <h2>The Ultimate Guide to Custom Kraft Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Custom Kraft Boxes</strong> are engineered to deliver precisely that impact, merging superior structural integrity with breathtaking aesthetics. These boxes serve as the perfect ambassador for your products.
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

export default CustomKraftBoxes;
