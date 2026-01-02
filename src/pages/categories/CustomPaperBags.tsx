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
import customPaperBagsHero from "@/assets/custom-paper-bags/hero-custom-paper-bags.jpg";
import customAutoBottomGableBags from "@/assets/custom-paper-bags/custom-auto-bottom-gable-bags.jpg";
import customPaperFoodBags from "@/assets/custom-paper-bags/custom-paper-food-bags.jpg";
import christmasPaperBags from "@/assets/custom-paper-bags/christmas-paper-bags.jpg";
import christmasGiftBags from "@/assets/custom-paper-bags/christmas-gift-bags.jpg";
import customBrownPaperBags from "@/assets/custom-paper-bags/custom-brown-paper-bags.jpg";
import paperShoppingBags from "@/assets/custom-paper-bags/paper-shopping-bags.jpg";
import whitePaperBags from "@/assets/custom-paper-bags/white-paper-bags.jpg";
import paperGiftBags from "@/assets/custom-paper-bags/paper-gift-bags.jpg";
import paperLunchBags from "@/assets/custom-paper-bags/paper-lunch-bags.jpg";
import friesBag from "@/assets/custom-paper-bags/fries-bag.jpg";
import glassineBags from "@/assets/custom-paper-bags/glassine-bags.jpg";
import candyBags from "@/assets/custom-paper-bags/candy-bags.jpg";
import bakeryBags from "@/assets/custom-paper-bags/bakery-bags.jpg";
import cookieBags from "@/assets/custom-paper-bags/cookie-bags.jpg";
import giftBags from "@/assets/custom-paper-bags/gift-bags.jpg";
import carryOutBags from "@/assets/custom-paper-bags/carry-out-bags.jpg";
import exoticWeedBag from "@/assets/custom-paper-bags/exotic-weed-bag.jpg";
import paperBagsWithHandles from "@/assets/custom-paper-bags/paper-bags-with-handles.jpg";

const relatedProducts = [
    { name: "Custom Auto Bottom Gable Bags", image: customAutoBottomGableBags, description: "Secure and convenient custom gable bags with auto bottom." },
    { name: "Custom Paper Food Bags", image: customPaperFoodBags, description: "Safe and hygienic paper bags for all types of food items." },
    { name: "Christmas Paper Bags", image: christmasPaperBags, description: "Festive paper bags designed for Christmas gifts and treats." },
    { name: "Christmas Gift Bags", image: christmasGiftBags, description: "Beautifully designed gift bags for the holiday season." },
    { name: "Custom Brown Paper Bags", image: customBrownPaperBags, description: "Classic and eco-friendly brown paper bags." },
    { name: "Paper Shopping Bags", image: paperShoppingBags, description: "Durable paper shopping bags for retail and events." },
    { name: "White Paper Bags", image: whitePaperBags, description: "Clean and versatile white paper bags for any occasion." },
    { name: "Paper Gift Bags", image: paperGiftBags, description: "Elegant paper bags for packaging gifts." },
    { name: "Paper Lunch Bags", image: paperLunchBags, description: "Standard paper bags perfect for lunch packaging." },
    { name: "Fries Bag", image: friesBag, description: "Specialized paper bags for serving french fries." },
    { name: "Glassine Bags", image: glassineBags, description: "Grease-resistant glassine bags for bakery and confectionery." },
    { name: "Candy Bags", image: candyBags, description: "Colorful and fun bags for candies and sweets." },
    { name: "Bakery Bags", image: bakeryBags, description: "Freshness-preserving bags for bread and pastries." },
    { name: "Cookie Bags", image: cookieBags, description: "Attractive bags for packaging cookies and biscuits." },
    { name: "Gift Bags", image: giftBags, description: "General purpose gift bags for various occasions." },
    { name: "Carry Out Bags", image: carryOutBags, description: "Sturdy carry-out bags for restaurants and cafes." },
    { name: "Exotic Weed Bag", image: exoticWeedBag, description: "Custom packaging bags for exotic weed products." },
    { name: "Paper Bags With Handles", image: paperBagsWithHandles, description: "Convenient paper bags with durable handles." },
];

const productOptions = relatedProducts.map(p => p.name);

const CustomPaperBags = () => {
    return (
        <div className="min-h-screen bg-background px-[10px]">
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
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                Custom Paper Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Premium quality custom paper bags available in various sizes, styles, and finishes. Perfect for retail, food service, events, and gift packaging. Eco-friendly and fully customizable to showcase your brand.
                            </p>
                            <div className="pt-4">
                                <div className="relative w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted">
                                    <img
                                        src={customPaperBagsHero}
                                        alt="Custom Paper Bags Collection"
                                        className="w-full h-full object-cover"
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

            {/* Brand Rating */}
            <BrandRating />

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

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Product image placeholder - intentionally empty */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
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

            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CustomPaperBags;
