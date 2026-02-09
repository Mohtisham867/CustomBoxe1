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
import subscriptionBoxesHero from "@/assets/subscription-boxes/subscription-boxes-hero.webp";
import candleSubscriptionBox from "@/assets/subscription-boxes/candle-subscription-box.webp";
import cbdSubscriptionBox from "@/assets/subscription-boxes/cbd-subscription-box.webp";
import chocolateSubscriptionBox from "@/assets/subscription-boxes/chocolate-subscription-box.webp";
import cosmeticSubscriptionBox from "@/assets/subscription-boxes/cosmetic-subscription-box.webp";
import soapSubscriptionBox from "@/assets/subscription-boxes/soap-subscription-box.webp";
import stationerySubscriptionBox from "@/assets/subscription-boxes/stationery-subscription-box.webp";
import subscriptionBoxesForMen from "@/assets/subscription-boxes/subscription-boxes-for-men.webp";
import subscriptionBoxesForKids from "@/assets/subscription-boxes/subscription-boxes-for-kids.webp";
import foodSubscriptionBoxes from "@/assets/subscription-boxes/food-subscription-boxes.webp";
import mysterySubscriptionBoxes from "@/assets/subscription-boxes/mystery-subscription-boxes.webp";
import candySubscriptionBoxes from "@/assets/subscription-boxes/candy-subscription-boxes.webp";
import artSubscriptionBoxes from "@/assets/subscription-boxes/art-subscription-boxes.webp";
import petFoodSubscriptionBoxes from "@/assets/subscription-boxes/pet-food-subscription-boxes.webp";
import golfSubscriptionBoxes from "@/assets/subscription-boxes/golf-subscription-boxes.webp";
import subscriptionBoxesForWomen from "@/assets/subscription-boxes/subscription-boxes-for-women.webp";
import monthlySubscriptionBoxes from "@/assets/subscription-boxes/monthly-subscription-boxes.webp";
import harryPotterSubscriptionBoxes from "@/assets/subscription-boxes/harry-potter-subscription-boxes.webp";
import sportsSubscriptionBoxes from "@/assets/subscription-boxes/sports-subscription-boxes.webp";
import disneySubscriptionBoxes from "@/assets/subscription-boxes/disney-subscription-boxes.webp";
import { SEOContent } from "@/components/SEOContent";
// Use hero as placeholder for now since we ran out of quota
const placeholderImage = subscriptionBoxesHero;

const relatedProducts = [
    { name: "Candle Subscription Boxes", image: candleSubscriptionBox, description: "Elegant packaging for scented candle subscriptions featuring protective inserts for fragile glass jars" },
    { name: "CBD Subscription Boxes", image: cbdSubscriptionBox, description: "Secure and professional boxes for CBD products ensuring compliant labeling and child-resistant safety" },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, description: "Luxurious packaging for gourmet chocolates featuring temperature-resistant materials and elegant presentation" },
    { name: "Cosmetic Subscription Boxes", image: cosmeticSubscriptionBox, description: "Chic designs for beauty and makeup subscriptions featuring glamorous finishes and partitioned compartments" },
    { name: "Soap Subscription Boxes", image: soapSubscriptionBox, description: "Fresh and clean packaging for artisanal soaps featuring breathable paperboard and moisture protection" },
    { name: "Stationery Subscription Box", image: stationerySubscriptionBox, description: "Creative boxes for paper and writing supplies featuring protective flat designs for cards and notebooks" },
    { name: "Subscription Boxes For Men", image: subscriptionBoxesForMen, description: "Masculine and bold designs for men's products featuring robust construction and minimalist aesthetics" },
    { name: "Subscription Boxes For Kids", image: subscriptionBoxesForKids, description: "Fun and colorful boxes to excite children featuring playful illustrations and safe protective materials" },
    { name: "Food Subscription Boxes", image: foodSubscriptionBoxes, description: "Durable packaging for gourmet food deliveries featuring thermal insulation and food-safe interior coatings" },
    { name: "Mystery Subscription Boxes", image: mysterySubscriptionBoxes, description: "Intriguing designs for surprise box subscriptions featuring opaque packaging and curiosity-building graphics" },
    { name: "Candy Subscription Boxes", image: candySubscriptionBoxes, description: "Sweet and vibrant packaging for candy lovers featuring bright colors and secure seals for freshness" },
    { name: "Art Subscription Boxes", image: artSubscriptionBoxes, description: "Artistic and inspiring boxes for creative supplies featuring durable protection for delicate craft items" },
    { name: "Pet Food Subscription Boxes", image: petFoodSubscriptionBoxes, description: "Sturdy boxes for heavy pet food deliveries featuring reinforced corrugated board and tear-resistant handles" },
    { name: "Golf Subscription Boxes", image: golfSubscriptionBoxes, description: "Sporty and premium boxes for golf enthusiasts featuring protective spacers for clubs and accessories" },
    { name: "Subscription Boxes For Women", image: subscriptionBoxesForWomen, description: "Elegant and stylish boxes for women's lifestyle products featuring floral prints and soft-touch finishes" },
    { name: "Monthly Subscription Boxes", image: monthlySubscriptionBoxes, description: "Reliable packaging for recurring monthly deliveries featuring consistent branding and durable shipping board" },
    { name: "Harry Potter Subscription Boxes", image: harryPotterSubscriptionBoxes, description: "Magical wizard-themed boxes for fans featuring cryptic designs and high-fidelity thematic illustrations" },
    { name: "Sports Subscription Boxes", image: sportsSubscriptionBoxes, description: "Dynamic designs for sports gear and memorabilia featuring action-oriented graphics and robust protection" },
    { name: "Disney Subscription Boxes", image: disneySubscriptionBoxes, description: "Fairytale-themed boxes for magical unboxing moments featuring iconic characters and enchanting color palettes" },
];

const productOptions = relatedProducts.map(p => p.name);

const SubscriptionBoxes = () => {
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
                                <BreadcrumbPage>Subscription Boxes</BreadcrumbPage>
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
                                Custom Subscription Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Create an unforgettable unboxing experience with our custom printed subscription boxes. Durable, stylish, and fully customizable to tell your brand's unique story every month.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={subscriptionBoxesHero}
                                        alt="Subscription Boxes Hero"
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
                            Subscription Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Find the perfect box for your subscription service, from candles to collectibles.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                            >
                                <CardContent className="p-0">
                                    <div className="w-full aspect-square overflow-hidden relative">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                                                <img
                                                    src={placeholderImage}
                                                    className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm scale-150"
                                                    alt="placeholder background" loading="lazy"
                                                />
                                                <span className="relative z-10 text-muted-foreground/50 text-xs font-medium px-2 text-center">
                                                    Image Coming Soon
                                                </span>
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

                <h2>The Ultimate Guide to Subscription Boxes</h2>
                <p>
                    In the competitive world of retail and e-commerce, packaging is no longer just a container—it's a powerful marketing tool that communicates your brand's value instantly.
                    Our <strong>Subscription Boxes</strong> are engineered to deliver precisely that impact. merging superior structural integrity with breathtaking aesthetics, these boxes serve as the perfect ambassador for your products.
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

export default SubscriptionBoxes;
