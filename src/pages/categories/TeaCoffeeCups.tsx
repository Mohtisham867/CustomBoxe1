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
import teaCoffeeHero from "@/assets/tea-coffee-cups-hero.png";
import customTeaBoxes from "@/assets/custom-tea-boxes.png";
import customPrintedCoffee from "@/assets/custom-printed-coffee-packaging.png";
import coffeeSleeves from "@/assets/coffee-sleeves.png";
import coffeeCupsLids from "@/assets/coffee-cups-with-lids.png";
import disposableCoffeeCups from "@/assets/disposable-coffee-cups.png";
import paperCoffeeCups from "@/assets/paper-coffee-cups.png";
import toGoCoffeeCups from "@/assets/to-go-coffee-cups.png";
import cuteCoffeeCups from "@/assets/cute-coffee-cups.png";
import compostableCoffeeCups from "@/assets/compostable-coffee-cups.png";
import doubleWallCoffeeCups from "@/assets/double-wall-coffee-cups.png";
import restaurantCoffeeCups from "@/assets/restaurant-coffee-cups.png";

const relatedProducts = [
    { name: "Custom Tea Boxes", image: customTeaBoxes, description: "Premium packaging for tea products." },
    { name: "Custom Printed Coffee Packaging", image: customPrintedCoffee, description: "Branded coffee packaging solutions." },
    { name: "Coffee Sleeves", image: coffeeSleeves, description: "Insulated sleeves for hot beverages." },
    { name: "Coffee Cups with Lids", image: coffeeCupsLids, description: "Complete cup and lid sets." },
    { name: "Disposable Coffee Cups", image: disposableCoffeeCups, description: "Convenient single-use coffee cups." },
    { name: "Paper Coffee Cups", image: paperCoffeeCups, description: "Eco-friendly paper cup options." },
    { name: "To Go Coffee Cups", image: toGoCoffeeCups, description: "Perfect for takeaway service." },
    { name: "Cute Coffee Cups", image: cuteCoffeeCups, description: "Stylish and attractive cup designs." },
    { name: "Compostable Coffee Cups", image: compostableCoffeeCups, description: "Environmentally friendly compostable cups." },
    { name: "Double Wall Coffee Cups", image: doubleWallCoffeeCups, description: "Extra insulation for hot drinks." },
    { name: "Restaurant Coffee Cups", image: restaurantCoffeeCups, description: "Professional-grade cups for restaurants." },
];

const productOptions = [
    "Custom Tea Boxes",
    "Custom Printed Coffee Packaging",
    "Coffee Sleeves",
    "Coffee Cups with Lids",
    "Disposable Coffee Cups",
    "Paper Coffee Cups",
    "To Go Coffee Cups",
    "Cute Coffee Cups",
    "Compostable Coffee Cups",
    "Double Wall Coffee Cups",
    "Restaurant Coffee Cups",
];

const TeaCoffeeCups = () => {
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Tea & Coffee Cups</BreadcrumbPage>
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
                                Tea & Coffee Cups
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Discover our extensive range of disposable, insulated, and custom-printed cups and packaging for beverages.
                                Perfect for cafes, restaurants, and events, our solutions combine functionality with branding opportunities.
                                From eco-friendly compostable options to premium double-wall designs, we have the perfect cup for your needs.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={teaCoffeeHero}
                                    alt="Tea and Coffee Cups"
                                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg"
                                />
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
                            Tea & Coffee Cup Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our comprehensive selection of beverage packaging solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="relative aspect-square overflow-hidden bg-white">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

            <QuoteForm />
            <Footer />
        </div>
    );
};

export default TeaCoffeeCups;
