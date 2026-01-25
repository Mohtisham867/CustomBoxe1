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
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Custom Tea Boxes", image: customTeaBoxes, description: "Premium packaging for tea products featuring internal flavor dividers and high-impact retail graphics" },
    { name: "Custom Printed Coffee Packaging", image: customPrintedCoffee, description: "Branded coffee packaging solutions featuring flavor-seal valves and vibrant high-resolution label prints" },
    { name: "Coffee Sleeves", image: coffeeSleeves, description: "Insulated sleeves for hot beverages featuring corrugated texture for grip and custom branded heat protection" },
    { name: "Coffee Cups with Lids", image: coffeeCupsLids, description: "Complete cup and lid sets featuring heat-insulated walls and secure snap-on lids for on-the-go service" },
    { name: "Disposable Coffee Cups", image: disposableCoffeeCups, description: "Convenient single-use coffee cups featuring durable poly-lined paper and high-impact custom branding" },
    { name: "Paper Coffee Cups", image: paperCoffeeCups, description: "Eco-friendly paper cup options featuring biodegradable materials and elegant minimalist brand designs" },
    { name: "To Go Coffee Cups", image: toGoCoffeeCups, description: "Perfect for takeaway service featuring reinforced rims and high-quality heat-resistant paper construction" },
    { name: "Cute Coffee Cups", image: cuteCoffeeCups, description: "Stylish and attractive cup designs featuring vibrant artistic patterns and premium tactile print effects" },
    { name: "Compostable Coffee Cups", image: compostableCoffeeCups, description: "Environmentally friendly compostable cups featuring plant-based liners and sustainable paper materials" },
    { name: "Double Wall Coffee Cups", image: doubleWallCoffeeCups, description: "Extra insulation for hot drinks featuring air-gap technology and premium thick-walled construction" },
    { name: "Restaurant Coffee Cups", image: restaurantCoffeeCups, description: "Professional-grade cups for restaurants featuring sturdy build and high-impact wholesale customization" },
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
                            <div className="pt-4 lg:pt-0">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                                    <img
                                        src={teaCoffeeHero}
                                        alt="Tea and Coffee Cups"
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

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="w-full aspect-square overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
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

                <h2>The Ultimate Guide to Tea Coffee Cups</h2>
                <p>
                    Elevate your brand presence with our premium <strong>Tea Coffee Cups</strong>.
                    Designed to meet the highest standards of quality and aesthetics, our solutions provide the perfect blend of functionality and style.
                    Whether for retail, shipping, or promotional use, we deliver products that effectively communicate your brand's value to your customers.
                </p>

                <h3>Premium Material Quality</h3>
                <p>
                    We believe that quality starts with the right materials. Our Tea Coffee Cups are manufactured using top-tier stocks selected for their durability and finish.
                    Rigorous quality control ensures consistent performance, whether you need weather resistance, structural strength, or a refined surface for printing.
                </p>
                <ul>
                    <li><strong>Durable Construction:</strong> Built to withstand handling and transit without compromising appearance.</li>
                    <li><strong>Eco-Friendly Options:</strong> Sustainable choices available for environmentally conscious brands.</li>
                    <li><strong>Versatile Substrates:</strong> A wide range of material options tailored to your specific application needs.</li>
                </ul>

                <h3>Customization & Printing Excellence</h3>
                <p>
                    Your brand is unique, and your packaging should be too. We offer comprehensive customization options to bring your vision to life.
                    Our advanced printing technology ensures sharp, vibrant visuals that capture attention.
                </p>
                <ul>
                    <li><strong>Full Color Printing:</strong> High-resolution reproduction of your logos and varied artwork.</li>
                    <li><strong>Custom Sizes & Shapes:</strong> Tailored dimensions to fit your specific requirements perfectly.</li>
                    <li><strong>Professional Finishes:</strong> Options like lamination, coating, and texturing to enhance the final look and feel.</li>
                </ul>

                <h3>Why Partner With Us?</h3>
                <p>
                    We are dedicated to your success. From design consultation to final delivery, our team supports you every step of the way.
                    Enjoy competitive wholesale pricing, reliable turnaround times, and a commitment to quality that helps your business grow.
                </p>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default TeaCoffeeCups;
