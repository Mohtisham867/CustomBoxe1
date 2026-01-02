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

import heroImage from "@/assets/sports-boxes/sports-boxes-hero.png";

// Specific images maps
import baseballBoxes from "@/assets/sports-boxes/custom-baseball-boxes.png";
import golfBallBoxes from "@/assets/sports-boxes/custom-golf-ball-boxes.png";
import footballBoxes from "@/assets/sports-boxes/football-boxes.png";
import basketballBoxes from "@/assets/sports-boxes/basketball-boxes.png";
import tennisBallBoxes from "@/assets/sports-boxes/tennis-ball-boxes.png";

const relatedProducts = [
    { name: "Custom Baseball Boxes", image: baseballBoxes, description: "Protective boxes for collectible or retail baseballs." },
    { name: "Custom Golf Ball Boxes", image: golfBallBoxes, description: "Premium packaging for golf balls, perfect for gifts." },
    { name: "Football Boxes", image: footballBoxes, description: "Durable boxes designed to hold footballs securely." },
    { name: "Basketball Boxes", image: basketballBoxes, description: "Large, sturdy boxes for basketballs." },
    { name: "Tennis Ball Boxes", image: tennisBallBoxes, description: "Compact boxes for tennis ball sleeves or sets." },
];

const productOptions = [
    "Custom Baseball Boxes",
    "Custom Golf Ball Boxes",
    "Football Boxes",
    "Basketball Boxes",
    "Tennis Ball Boxes",
];

const SportsBoxes = () => {
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
                                <BreadcrumbPage>Sports Boxes</BreadcrumbPage>
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
                                Sports Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Durable, protective, and branded packaging for various sports equipment and balls.
                                Showcase your sporting goods with packaging that champions your brand.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Sports Boxes Packaging"
                                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg bg-white"
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
                            Sports Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Custom designed boxes for all types of sports equipment.
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

export default SportsBoxes;
