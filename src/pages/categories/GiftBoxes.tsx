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

import heroImage from "@/assets/gift-boxes-hero.png";

// Specific images
import favorBoxes from "@/assets/box-shapes/pillow-boxes.jpg";
import giftCardBoxes from "@/assets/box-shapes/sleeve-and-tray.jpg";
import customPrintedGiftBoxes from "@/assets/products/rigid-boxes.jpg";
import hempGiftBoxes from "@/assets/custom-hemp-boxes-hero.png";
import cardboardGiftBoxes from "@/assets/products/cardboard-boxes.jpg";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.jpg";
import giftTags from "@/assets/box-shapes/hang-tags.jpg";
import gableGiftBoxes from "@/assets/box-shapes/gable-boxes.jpg";

const relatedProducts = [
    { name: "Favor Boxes", image: favorBoxes, description: "Charming pillow boxes for party favors and gifts." },
    { name: "Gift Card Boxes", image: giftCardBoxes, description: "Elegant sleeve and tray boxes for gift cards." },
    { name: "Custom Printed Gift Boxes", image: customPrintedGiftBoxes, description: "High-end rigid boxes with custom printing." },
    { name: "Hemp Gift Boxes", image: hempGiftBoxes, description: "Eco-friendly hemp packaging for gifts." },
    { name: "Cardboard Gift Boxes", image: cardboardGiftBoxes, description: "Versatile cardboard boxes for any occasion." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, description: "Deliciously designed boxes for chocolate gifts." },
    { name: "Gift Tags", image: giftTags, description: "Custom tags to add a personal touch to your gifts." },
    { name: "Gable Gift Boxes", image: gableGiftBoxes, description: "Convenient handled boxes for easy gifting." },
];

const productOptions = [
    "Favor Boxes",
    "Gift Card Boxes",
    "Custom Printed Gift Boxes",
    "Hemp Gift Boxes",
    "Cardboard Gift Boxes",
    "Chocolate Gift Boxes",
    "Gift Tags",
    "Gable Gift Boxes",
];

const GiftBoxes = () => {
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
                                <BreadcrumbPage>Gift Boxes</BreadcrumbPage>
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
                                Gift Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Elegant, memorable, and customizable packaging for every occasion and item.
                                Our gift boxes are designed to elevate your presentation, ensuring a lasting impression.
                                Choose from a wide variety of styles and materials to perfectly match your brand and products.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Custom Gift Boxes"
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
                            Gift Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our diverse range of gift packaging options tailored for any need.
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

export default GiftBoxes;
