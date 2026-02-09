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
import vinylRecordMailers from "@/assets/mailer-boxes/vinyl-record-mailers.webp";
import bubbleMailers from "@/assets/mailer-boxes/bubble-mailers.webp";
import bubbleMailers4x8 from "@/assets/mailer-boxes/4x8-bubble-mailers.webp";
import kraftBubbleMailers from "@/assets/mailer-boxes/kraft-bubble-mailers.webp";
import corrugatedMailerBoxes from "@/assets/mailer-boxes/corrugated-mailer-boxes-updated.webp";
import earLockMailerBox from "@/assets/mailer-boxes/ear-lock-mailer-box-updated.webp";
import polyBubbleMailers from "@/assets/mailer-boxes/poly-bubble-mailers.webp";
import whiteMailerBoxes from "@/assets/mailer-boxes/white-mailer-boxes.webp";
import kraftMailerBoxes from "@/assets/mailer-boxes/kraft-mailer-boxes.webp";
import blackMailerBoxes from "@/assets/mailer-boxes/black-mailer-boxes.webp";
import coloredMailerBoxes from "@/assets/mailer-boxes/colored-mailer-boxes.webp";
import tuckTopMailerBoxes from "@/assets/mailer-boxes/tuck-top-mailer-boxes.webp";
import mailerBoxesHero from "@/assets/mailer-boxes/mailer-boxes-hero.webp";
import { SEOContent } from "@/components/SEOContent";

// IMAGES INTENTIONALLY OMITTED - AWAITING USER INSTRUCTION
// Hero image placeholder - to be added later
// Product images placeholders - to be added later

const relatedProducts = [
    { name: "Vinyl Record Mailers", image: vinylRecordMailers, description: "Protective mailers for vinyl records designed to prevent warping and damage during e-commerce shipping" },
    { name: "Bubble Mailers", image: bubbleMailers, description: "Padded mailers for shipping fragile items with extra cushioning and lightweight cost-saving construction" },
    { name: "4x8 Bubble Mailers", image: bubbleMailers4x8, description: "Compact bubble mailers for small goods featuring secure adhesive seals and durable tear-resistant exteriors" },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Eco-friendly kraft paper bubble mailers combining sustainable materials with reliable product protection" },
    { name: "Corrugated Mailer Boxes", image: corrugatedMailerBoxes, description: "Sturdy corrugated boxes for shipping a wide variety of goods with superior crush resistance and style" },
    { name: "Ear Lock Mailer Box", image: earLockMailerBox, description: "Secure ear-lock closure mailer boxes requiring no tape for assembly and providing a clean retail finish" },
    { name: "Poly Bubble Mailers", image: polyBubbleMailers, description: "Water-resistant poly bubble mailers offering maximum moisture protection and durable shipping security" },
    { name: "White Mailer Boxes", image: whiteMailerBoxes, description: "Clean, professional white mailer boxes perfect for medical, beauty, and premium tech brand distributions" },
    { name: "Kraft Mailer Boxes", image: kraftMailerBoxes, description: "Sustainable kraft cardboard mailers providing a natural aesthetic for eco-conscious brands and products" },
    { name: "Black Mailer Boxes", image: blackMailerBoxes, description: "Sleek black mailer boxes for premium branding and high-end e-commerce gift or product presentations" },
    { name: "Colored Mailer Boxes", image: coloredMailerBoxes, description: "Vibrant colored mailers designed to stand out in the mail and reinforce your unique brand color palette" },
    { name: "Tuck Top Mailer Boxes", image: tuckTopMailerBoxes, description: "Classic tuck top style for easy assembly and secure fulfillment of retail products and subscription kits" },
];

const productOptions = [
    "Vinyl Record Mailers",
    "Bubble Mailers",
    "4x8 Bubble Mailers",
    "Kraft Bubble Mailers",
    "Corrugated Mailer Boxes",
    "Ear Lock Mailer Box",
    "Poly Bubble Mailers",
    "White Mailer Boxes",
    "Kraft Mailer Boxes",
    "Black Mailer Boxes",
    "Colored Mailer Boxes",
    "Tuck Top Mailer Boxes",
];

const MailerBoxes = () => {
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
                                <BreadcrumbPage>Mailer Boxes</BreadcrumbPage>
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
                                Mailer Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Strong, lightweight, and customizable corrugated packaging designed specifically for safe and cost-effective shipping and e-commerce fulfillment.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={mailerBoxesHero}
                                        alt="Mailer Boxes Hero"
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
                            Mailing & Shipping Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our durable and customizable mailer box options.
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

                <h2>The Ultimate Guide to Mailer Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Mailer Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default MailerBoxes;
