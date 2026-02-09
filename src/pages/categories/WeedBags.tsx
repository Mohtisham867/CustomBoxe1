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
import weedBagsHero from "@/assets/weed-bags/weed-bags-hero.webp";
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/weed-bags/weed-bags-3-5.webp";
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";
import weedPoundBags from "@/assets/weed-bags/weed-pound-bags.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Exotic Weed Bag", image: exoticWeedBag, description: "Vibrant designs for your premium exotic strains featuring holographic effects and high-barrier protection" },
    { name: "Smell Proof Weed Bags", image: smellProofWeedBags, description: "Advanced odor-barrier material for discretion featuring multi-layer films and secure airtight zippers" },
    { name: "Weed Bags 3.5", image: weedBags35, description: "Perfectly sized 3.5g pouches for retail flower featuring child-resistant seals and vibrant custom prints" },
    { name: "Zip Weed Bags", image: zipWeedBags, description: "Reliable resealable zipper for freshness and safety featuring durable materials and high-impact branding" },
    { name: "Weed Pound Bags", image: weedPoundBags, description: "Heavy-duty bulk storage bags for larger quantities featuring reinforced seams and superior odor control" },
];

const productOptions = relatedProducts.map(p => p.name);

const WeedBags = () => {
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
                                <BreadcrumbPage>Weed Bags</BreadcrumbPage>
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
                                Custom Weed Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Premium aesthetic and compliant packaging for your cannabis brand. Our custom weed bags offer superior freshness protection, child-resistant features, and high-impact branding possibilities.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={weedBagsHero}
                                        alt="Custom Weed Bags Hero"
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
                            Bag Styles & Sizes
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our range of specialized cannabis packaging solutions.
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
                </div>
            </section>

            {/* Brand Rating */}

            <BrandRating />

            <QuoteForm />

            <SEOContent>

                <h2>The Ultimate Guide to Custom Weed Bags</h2>
                <p>
                    Preserve freshness, ensure safety, and captivate your audience with our industry-leading <strong>Weed Bags</strong>.
                    In markets like food, supplements, and cannabis, the barrier integrity of your packaging is non-negotiable. Our bags are engineered to provide the ultimate shield against environmental factors while serving as a vibrant canvas for your brand's messaging.
                    Combining high-barrier technology with stunning print quality, our pouches offer the perfect versatility for retail displays and safe storage.
                </p>
                <p>
                    We leverage advanced multi-layer lamination techniques to create bags that are not only durable but also functional, ensuring your product remains as potent and fresh as the day it was packaged.
                </p>

                <h3>Superior Material Science & Barrier Protection</h3>
                <p>
                    Our Weed Bags are constructed using premium multi-layer films that offer specific protective benefits:
                </p>
                <ul>
                    <li><strong>PET (Polyester):</strong> The outer layer provides excellent structural strength and a high-quality surface for printing.</li>
                    <li><strong>AL (Aluminum Foil) / VMPET:</strong> A critical middle layer that acts as a fortress against oxygen, moisture, and UV light, virtually eliminating permeation.</li>
                    <li><strong>LLDPE (Linear Low-Density Polyethylene):</strong> The inner food-grade layer that ensures a safe, chemically inert environment for your product and enables reliable heat sealing.</li>
                </ul>
                <p>
                    Calculated thickness options ranging from 3.5 mil to 7+ mil allow you to choose the right rigidity and protection level for your specific product weight and shelf-life requirements.
                </p>

                <h3>Functional Features & Customizations</h3>
                <p>
                    Functionality drives repeat purchases. We integrate user-friendly features that enhance the consumer experience:
                </p>
                <ul>
                    <li><strong>Resealable Zippers:</strong> Premium press-to-close zippers or child-resistant zippers that maintain freshness after opening.</li>
                    <li><strong>Tear Notches:</strong> Precision-cut notches for easy, tool-free opening by the end user.</li>
                    <li><strong>Hang Holes:</strong> Standard round or sombrero styles for versatile retail pegboard display.</li>
                    <li><strong>Transparent Windows:</strong> Clear sections to showcase the product quality inside, often preferred by consumers.</li>
                    <li><strong>Gussets:</strong> Bottom gussets (for Stand Up Pouches) that allow the bag to stand upright on shelves, maximizing visibility.</li>
                </ul>

                <h3>High-Definition Printing & Finishes</h3>
                <p>
                    Stand out in a crowded market with our rotogravure and digital printing options. We reproduce your artwork with photographic fidelity and rich color saturation.
                    Choose from distinct finishes to match your brand vibe:
                </p>
                <ul>
                    <li><strong>Matte Finish:</strong> A sophisticated, non-reflective look that feels premium and hides fingerprints.</li>
                    <li><strong>Gloss Finish:</strong> A high-shine surface that makes colors vibrant and shelf presence aggressive.</li>
                    <li><strong>Holographic Effects:</strong> Eye-catching metallic patterns that change with the light, perfect for premium or limited-edition lines.</li>
                    <li><strong>Spot UV:</strong> A mix of matte and gloss textures to highlight your logo or specific design elements.</li>
                </ul>

                <h3>Wholesale & Compliance</h3>
                <p>
                    We cover all bases—from regulatory compliance (Child-Resistant certification, FDA food grade) to supply chain efficiency.
                    Our volume pricing structures ensure that you get the best margin possible as you scale.
                    Fast turnaround times and low MOQs make us the ideal partner for dynamic brands that need to move fast.
                </p>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default WeedBags;
