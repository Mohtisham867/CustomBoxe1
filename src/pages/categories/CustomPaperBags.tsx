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
import { ShoppingBag } from "lucide-react";
import customPaperBagsHero from "@/assets/custom-paper-bags/hero-custom-paper-bags.webp";
import customAutoBottomGableBags from "@/assets/custom-paper-bags/custom-auto-bottom-gable-bags.webp";
import customPaperFoodBags from "@/assets/custom-paper-bags/custom-paper-food-bags.webp";
import christmasPaperBags from "@/assets/custom-paper-bags/christmas-paper-bags.webp";
import christmasGiftBags from "@/assets/custom-paper-bags/christmas-gift-bags.webp";
import customBrownPaperBags from "@/assets/custom-paper-bags/custom-brown-paper-bags.webp";
import paperShoppingBags from "@/assets/custom-paper-bags/paper-shopping-bags.webp";
import whitePaperBags from "@/assets/custom-paper-bags/white paper bags.webp";
import paperGiftBags from "@/assets/custom-paper-bags/paper-gift-bags.webp";
import paperLunchBags from "@/assets/custom-paper-bags/paper-lunch-bags.webp";
import friesBag from "@/assets/custom-paper-bags/fries-bag.webp";
import glassineBags from "@/assets/custom-paper-bags/glassine-bags.webp";
import candyBags from "@/assets/custom-paper-bags/candy-bags.webp";
import bakeryBags from "@/assets/custom-paper-bags/bakery-bags.webp";
import cookieBags from "@/assets/custom-paper-bags/cookie-bags.webp";
import giftBags from "@/assets/custom-paper-bags/gift-bags.webp";
import carryOutBags from "@/assets/custom-paper-bags/carry-out-bags.webp";
import exoticWeedBag from "@/assets/custom-paper-bags/exotic-weed-bag.webp";
import paperBagsWithHandles from "@/assets/custom-paper-bags/paper-bags-with-handles.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Custom Auto Bottom Gable Bags", image: customAutoBottomGableBags, description: "Secure and convenient custom gable bags featuring an auto bottom for quick assembly and easy loading" },
    { name: "Custom Paper Food Bags", image: customPaperFoodBags, description: "Safe and hygienic paper bags designed for all types of food items with grease-resistant material" },
    { name: "Christmas Paper Bags", image: christmasPaperBags, description: "Festive paper bags designed for Christmas gifts and treats featuring vibrant holiday-themed artwork" },
    { name: "Christmas Gift Bags", image: christmasGiftBags, description: "Beautifully designed gift bags for the holiday season with premium finishes and seasonal graphics" },
    { name: "Custom Brown Paper Bags", image: customBrownPaperBags, description: "Classic and eco-friendly brown paper bags crafted from high-quality durable and recycled materials" },
    { name: "Paper Shopping Bags", image: paperShoppingBags, description: "Durable paper shopping bags for retail and events featuring reinforced handles and sturdy bases" },
    { name: "White Paper Bags", image: whitePaperBags, description: "Clean and versatile white paper bags for any occasion with a smooth surface for custom branding" },
    { name: "Paper Gift Bags", image: paperGiftBags, description: "Elegant paper bags for packaging gifts for any special event with a premium feel and appearance" },
    { name: "Paper Lunch Bags", image: paperLunchBags, description: "Standard paper bags perfect for lunch packaging and small grocery items with reliable strength" },
    { name: "Fries Bag", image: friesBag, description: "Specialized grease-resistant paper bags for serving french fries and hot snacks in food service" },
    { name: "Glassine Bags", image: glassineBags, description: "Grease-resistant glassine bags perfect for bakery and confectionery with a smooth translucent finish" },
    { name: "Candy Bags", image: candyBags, description: "Colorful and fun bags for candies and sweets featuring attractive designs to appeal to customers" },
    { name: "Bakery Bags", image: bakeryBags, description: "Freshness-preserving bags for bread and pastries designed for sustainable food retail packaging" },
    { name: "Cookie Bags", image: cookieBags, description: "Attractive bags for packaging cookies and biscuits with a protective lining to maintain freshness" },
    { name: "Gift Bags", image: giftBags, description: "General purpose gift bags for various occasions featuring durable construction and elegant styles" },
    { name: "Carry Out Bags", image: carryOutBags, description: "Sturdy carry-out bags for restaurants and cafes designed to transport food containers safely" },
    { name: "Exotic Weed Bag", image: exoticWeedBag, description: "Custom packaging bags for exotic weed products featuring high-impact graphics and smell-proof seals" },
    { name: "Paper Bags With Handles", image: paperBagsWithHandles, description: "Convenient paper bags with durable handles designed for retail shopping and premium gift-giving" },
];

const productOptions = relatedProducts.map(p => p.name);

const CustomPaperBags = () => {
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
                                <BreadcrumbPage>Custom Paper Bags</BreadcrumbPage>
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
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                    Custom Paper Bags
                                </h1>
                                <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                    Premium quality custom paper bags available in various sizes, styles, and finishes. Perfect for retail, food service, events, and gift packaging. Eco-friendly and fully customizable to showcase your brand.
                                </p>
                            </div>
                            <div className="pt-4 lg:pt-0">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                                    <img
                                        src={customPaperBagsHero}
                                        alt="Custom Paper Bags Collection"
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
                            Paper Bag Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our wide range of durable and stylish custom paper bags.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
                                                <div className="flex flex-col items-center text-muted-foreground/50">
                                                    <ShoppingBag className="w-8 h-8 mb-1" />
                                                    <p className="text-xs">Image placeholder</p>
                                                </div>
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

                <h2>The Ultimate Guide to Custom Custom Paper Bags</h2>
                <p>
                    Preserve freshness, ensure safety, and captivate your audience with our industry-leading <strong>Custom Paper Bags</strong>.
                    In markets like food, supplements, and cannabis, the barrier integrity of your packaging is non-negotiable. Our bags are engineered to provide the ultimate shield against environmental factors while serving as a vibrant canvas for your brand's messaging.
                    Combining high-barrier technology with stunning print quality, our pouches offer the perfect versatility for retail displays and safe storage.
                </p>
                <p>
                    We leverage advanced multi-layer lamination techniques to create bags that are not only durable but also functional, ensuring your product remains as potent and fresh as the day it was packaged.
                </p>

                <h3>Superior Material Science & Barrier Protection</h3>
                <p>
                    Our Custom Paper Bags are constructed using premium multi-layer films that offer specific protective benefits:
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

export default CustomPaperBags;
