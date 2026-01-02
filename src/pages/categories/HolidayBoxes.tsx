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

import heroImage from "@/assets/holiday-boxes-hero.png";

// Specific images
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.jpg";
import halloweenBoxes from "@/assets/products/halloween-boxes.png";
import holidayGiftBoxes from "@/assets/christmas-products/christmas-eve-boxes.jpg";
import thanksgivingBoxes from "@/assets/products/thanksgiving-boxes.png";
import thanksgivingFoodBoxes from "@/assets/products/thanksgiving-boxes.png";
import valentinesBoxes from "@/assets/products/valentines-boxes.png";
import halloweenWindowBoxes from "@/assets/products/halloween-boxes.png";
import christmasPillowBoxes from "@/assets/christmas-products/christmas-favor-boxes.jpg";

const relatedProducts = [
    { name: "Christmas Gift Boxes", image: christmasGiftBoxes, description: "Festive boxes perfect for holiday gifting." },
    { name: "Custom Halloween Boxes", image: halloweenBoxes, description: "Spooky and fun packaging for Halloween treats." },
    { name: "Holiday Gift Boxes", image: holidayGiftBoxes, description: "Elegant boxes for any holiday celebration." },
    { name: "Thanksgiving Boxes", image: thanksgivingBoxes, description: "Warm and inviting packaging for Thanksgiving." },
    { name: "Thanksgiving Food Boxes", image: thanksgivingFoodBoxes, description: "Durable boxes for Thanksgiving feasts." },
    { name: "Custom Valentines Boxes", image: valentinesBoxes, description: "Romantic packaging for Valentine's Day gifts." },
    { name: "Halloween Window Boxes", image: halloweenWindowBoxes, description: "Showcase your spooky treats with window boxes." },
    { name: "Christmas Pillow Boxes", image: christmasPillowBoxes, description: "Charming pillow boxes for small holiday favors." },
];

const productOptions = [
    "Christmas Gift Boxes",
    "Custom Halloween Boxes",
    "Holiday Gift Boxes",
    "Thanksgiving Boxes",
    "Thanksgiving Food Boxes",
    "Custom Valentines Boxes",
    "Halloween Window Boxes",
    "Christmas Pillow Boxes",
];

const HolidayBoxes = () => {
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
                                <BreadcrumbPage>Holiday Boxes</BreadcrumbPage>
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
                                Holiday Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Festive, custom-designed packaging for seasonal gifts and celebrations.
                                Make every holiday special with our range of themed boxes that add joy and excitement
                                to your products, ensuring they stand out during the festive season.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Custom Holiday Boxes"
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
                            Seasonal Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Celebrating every occasion with unique and high-quality packaging designs.
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

export default HolidayBoxes;
