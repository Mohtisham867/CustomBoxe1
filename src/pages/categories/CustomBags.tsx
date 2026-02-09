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
import heroImage from "@/assets/custom_bags/custom-bags-hero.webp";
import heatSealMylar from "@/assets/custom_bags/heat-seal-mylar-bags.webp";
import weedMylar from "@/assets/custom_bags/weed-mylar-bags.webp";
import edibleMylar from "@/assets/custom_bags/edible-mylar-bags.webp";
import paperBagsHandle from "@/assets/custom_bags/paper-bags-with-handles.webp";
import holographicBags from "@/assets/custom_bags/holographic-bags.webp";
import kraftBags from "@/assets/custom_bags/kraft-bags.webp";
import takeOutBags from "@/assets/custom_bags/take-out-bags.webp";
import tShirtBags from "@/assets/custom_bags/t-shirt-bags.webp";
import paperGroceryBags from "@/assets/custom_bags/paper-grocery-bags.webp";
import vacuumSealWebBags from "@/assets/custom_bags/vacuum-seal-weed-bags.webp";
import smellProofWeedBags from "@/assets/custom_bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/custom_bags/weed-bags-3-5.webp";
import sachetPackaging from "@/assets/custom_bags/sachet-packaging.webp";
import coffeeBags from "@/assets/custom_bags/coffee-bags.webp";
import flatBottomBags from "@/assets/custom_bags/flat-bottom-bags.webp";
import tinTiePaperBags from "@/assets/custom_bags/tin-tie-paper-bags.webp";
import { SEOContent } from "@/components/SEOContent";

const products = [
    {
        name: "Heat Seal Mylar Bags",
        image: heatSealMylar,
        description: "Airtight heat-seal mylar bags that preserve freshness and protect high-value products during storage.",
    },
    {
        name: "Weed Mylar Bags",
        image: weedMylar,
        description: "Custom-branded mylar bags tailored for cannabis products with odor-locking seals and vibrant graphics.",
    },
    {
        name: "Edible Mylar Bags",
        image: edibleMylar,
        description: "Child-resistant, tamper-evident edible pouches engineered for safety, compliance, and shelf appeal.",
    },
    {
        name: "Paper Bags With Handles",
        image: paperBagsHandle,
        description: "Premium paper shopping bags with twisted handles designed for a refined and luxury unboxing experience.",
    },
    {
        name: "Holographic Bags",
        image: holographicBags,
        description: "Iridescent holographic pouches that capture attention on retail shelves with vivid reflective finishes.",
    },
    {
        name: "Kraft Bags",
        image: kraftBags,
        description: "Sustainable kraft paper bags offering a natural aesthetic and reliable strength for eco-conscious retail.",
    },
    {
        name: "Take Out Bags",
        image: takeOutBags,
        description: "Durable takeout bags designed for foodservice, combining high capacity with superior grease resistance.",
    },
    {
        name: "T Shirt Bags",
        image: tShirtBags,
        description: "Economical T-shirt carrier bags ideal for high-volume retail, perfectly balancing strength and cost.",
    },
    {
        name: "Paper Grocery Bags",
        image: paperGroceryBags,
        description: "Heavy-duty grocery bags built to carry bulky items securely with reinforced handles and sturdy bases.",
    },
    {
        name: "Vacuum Seal Weed Bags",
        image: vacuumSealWebBags,
        description: "Vacuum-seal pouches that remove air to extend shelf life and maintain maximum product color and aroma.",
    },
    {
        name: "Smell Proof Weed Bags",
        image: smellProofWeedBags,
        description: "Odor-locking bags engineered to contain scents while maintaining product integrity and regulatory compliance.",
    },
    {
        name: "Weed Bags 3.5",
        image: weedBags35,
        description: "Eighth-sized bags designed for compliance and high-impact custom branding for targeted retail displays.",
    },
    {
        name: "Sachet Packaging",
        image: sachetPackaging,
        description: "Single-serve sachets ideal for samples and travel sizes, offering portion control and clear branding.",
    },
    {
        name: "Coffee Bags",
        image: coffeeBags,
        description: "Coffee bags with one-way degassing valves to preserve aroma and extend freshly roasted bean shelf life.",
    },
    {
        name: "Flat Bottom Bags",
        image: flatBottomBags,
        description: "Flat-bottom pouches that stand stable on store shelves while maximizing fill volume and brand visibility.",
    },
    {
        name: "Tin Tie Paper Bags",
        image: tinTiePaperBags,
        description: "Reclosable tin-tie bakery bags that preserve freshness and offer convenient resealing for all customers.",
    },
];

const productOptions = products.map((product) => product.name);

const CustomBags = () => {
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
                                <BreadcrumbPage>Custom Bags</BreadcrumbPage>
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
                                Custom Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Elevate your brand with our wide selection of custom bags. From secure mylar pouches to eco-friendly paper options, we provide durable and customizable packaging solutions tailored to your specific product needs.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={heroImage}
                                        alt="Custom Bags Hero"
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

            {/* Products Grid */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Bag Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our versatile range of high-quality custom bags for every industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
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
                                        <p className="text-xs text-muted-foreground line-clamp-2 h-12 overflow-hidden">
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

                <h2>The Ultimate Guide to Custom Custom Bags</h2>
                <p>
                    Preserve freshness, ensure safety, and captivate your audience with our industry-leading <strong>Custom Bags</strong>.
                    In markets like food, supplements, and cannabis, the barrier integrity of your packaging is non-negotiable. Our bags are engineered to provide the ultimate shield against environmental factors while serving as a vibrant canvas for your brand's messaging.
                    Combining high-barrier technology with stunning print quality, our pouches offer the perfect versatility for retail displays and safe storage.
                </p>
                <p>
                    We leverage advanced multi-layer lamination techniques to create bags that are not only durable but also functional, ensuring your product remains as potent and fresh as the day it was packaged.
                </p>

                <h3>Superior Material Science & Barrier Protection</h3>
                <p>
                    Our Custom Bags are constructed using premium multi-layer films that offer specific protective benefits:
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

export default CustomBags;
