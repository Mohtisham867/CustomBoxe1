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
import subscriptionBoxesHero from "@/assets/subscription-boxes/subscription-boxes-hero.png";
import candleSubscriptionBox from "@/assets/subscription-boxes/candle-subscription-box.jpg";
import cbdSubscriptionBox from "@/assets/subscription-boxes/cbd-subscription-box.jpg";
import chocolateSubscriptionBox from "@/assets/subscription-boxes/chocolate-subscription-box.jpg";
import cosmeticSubscriptionBox from "@/assets/subscription-boxes/cosmetic-subscription-box.jpg";
import soapSubscriptionBox from "@/assets/subscription-boxes/soap-subscription-box.jpg";
import stationerySubscriptionBox from "@/assets/subscription-boxes/stationery-subscription-box.jpg";
import subscriptionBoxesForMen from "@/assets/subscription-boxes/subscription-boxes-for-men.jpg";
import subscriptionBoxesForKids from "@/assets/subscription-boxes/subscription-boxes-for-kids.jpg";
import foodSubscriptionBoxes from "@/assets/subscription-boxes/food-subscription-boxes.jpg";
import mysterySubscriptionBoxes from "@/assets/subscription-boxes/mystery-subscription-boxes.jpg";
import candySubscriptionBoxes from "@/assets/subscription-boxes/candy-subscription-boxes.jpg";
import artSubscriptionBoxes from "@/assets/subscription-boxes/art-subscription-boxes.jpg";
import petFoodSubscriptionBoxes from "@/assets/subscription-boxes/pet-food-subscription-boxes.jpg";
import golfSubscriptionBoxes from "@/assets/subscription-boxes/golf-subscription-boxes.jpg";
import subscriptionBoxesForWomen from "@/assets/subscription-boxes/subscription-boxes-for-women.jpg";
import monthlySubscriptionBoxes from "@/assets/subscription-boxes/monthly-subscription-boxes.jpg";
import harryPotterSubscriptionBoxes from "@/assets/subscription-boxes/harry-potter-subscription-boxes.jpg";
import sportsSubscriptionBoxes from "@/assets/subscription-boxes/sports-subscription-boxes.jpg";
import disneySubscriptionBoxes from "@/assets/subscription-boxes/disney-subscription-boxes.jpg";
// Use hero as placeholder for now since we ran out of quota
const placeholderImage = subscriptionBoxesHero;

const relatedProducts = [
    { name: "Candle Subscription Boxes", image: candleSubscriptionBox, description: "Elegant packaging for scented candle subscriptions." },
    { name: "CBD Subscription Boxes", image: cbdSubscriptionBox, description: "Secure and professional boxes for CBD products." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, description: "Luxurious packaging for gourmet chocolates." },
    { name: "Cosmetic Subscription Boxes", image: cosmeticSubscriptionBox, description: "Chic designs for beauty and makeup subscriptions." },
    { name: "Soap Subscription Boxes", image: soapSubscriptionBox, description: "Fresh and clean packaging for artisanal soaps." },
    { name: "Stationery Subscription Box", image: stationerySubscriptionBox, description: "Creative boxes for paper and writing supplies." },
    { name: "Subscription Boxes For Men", image: subscriptionBoxesForMen, description: "Masculine and bold designs for men's products." },
    { name: "Subscription Boxes For Kids", image: subscriptionBoxesForKids, description: "Fun and colorful boxes to excite children." },
    { name: "Food Subscription Boxes", image: foodSubscriptionBoxes, description: "Durable packaging for gourmet food deliveries." },
    { name: "Mystery Subscription Boxes", image: mysterySubscriptionBoxes, description: "Intriguing designs for surprise box subscriptions." },
    { name: "Candy Subscription Boxes", image: candySubscriptionBoxes, description: "Sweet and vibrant packaging for candy lovers." },
    { name: "Art Subscription Boxes", image: artSubscriptionBoxes, description: "Artistic and inspiring boxes for creative supplies." },
    { name: "Pet Food Subscription Boxes", image: petFoodSubscriptionBoxes, description: "Sturdy boxes for heavy pet food deliveries." },
    { name: "Golf Subscription Boxes", image: golfSubscriptionBoxes, description: "Sporty and premium boxes for golf enthusiasts." },
    { name: "Subscription Boxes For Women", image: subscriptionBoxesForWomen, description: "Elegant and stylish boxes for women's lifestyle products." },
    { name: "Monthly Subscription Boxes", image: monthlySubscriptionBoxes, description: "Reliable packaging for recurring monthly deliveries." },
    { name: "Harry Potter Subscription Boxes", image: harryPotterSubscriptionBoxes, description: "Magical wizard-themed boxes for fans." },
    { name: "Sports Subscription Boxes", image: sportsSubscriptionBoxes, description: "Dynamic designs for sports gear and memorabilia." },
    { name: "Disney Subscription Boxes", image: disneySubscriptionBoxes, description: "Fairytale-themed boxes for magical unboxing moments." },
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
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                                                {/* Use Hero as blurred background placeholder or just a nice icon */}
                                                <img
                                                    src={placeholderImage}
                                                    className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm scale-150"
                                                    alt="placeholder background"
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

            <QuoteForm />
            <Footer />
        </div>
    );
};

export default SubscriptionBoxes;
