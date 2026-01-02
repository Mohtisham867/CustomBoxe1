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

import heroImage from "@/assets/retail-boxes/retail-boxes-hero.png";

// Specific images maps
import businessCards from "@/assets/retail-boxes/custom-business-cards.png";
import matchBoxes from "@/assets/retail-boxes/custom-match-boxes.png";
import supplementPackaging from "@/assets/retail-boxes/dietary-supplement-packaging.png";
import businessLabels from "@/assets/retail-boxes/business-labels.png";
import boxesWithLogo from "@/assets/retail-boxes/custom-boxes-with-logo.png";
import clamshellBoxes from "@/assets/retail-boxes/clamshell-boxes.png";
import barbieBoxes from "@/assets/retail-boxes/barbie-boxes.png";
import foldingCartons from "@/assets/retail-boxes/folding-cartons.png";

const relatedProducts = [
    { name: "Custom Business Cards", image: businessCards, description: "Premium business cards that make a lasting impression." },
    { name: "Custom Match Boxes", image: matchBoxes, description: "Unique promotional packaging for branding." },
    { name: "Dietary Supplement Packaging", image: supplementPackaging, description: "Secure and compliant packaging for supplements." },
    { name: "Business Labels", image: businessLabels, description: "Custom labels to enhance your brand identity." },
    { name: "Custom Boxes with Logo", image: boxesWithLogo, description: "Branded boxes designed to elevate your products." },
    { name: "Clamshell Boxes", image: clamshellBoxes, description: "Clear, protective packaging for retail display." },
    { name: "Barbie Boxes", image: barbieBoxes, description: "Fun, vibrant packaging for toys and dolls." },
    { name: "Folding Cartons", image: foldingCartons, description: "Versatile folding cartons for various retail needs." },
];

const productOptions = [
    "Custom Business Cards",
    "Custom Match Boxes",
    "Dietary Supplement Packaging",
    "Business Labels",
    "Custom Boxes with Logo",
    "Clamshell Boxes",
    "Barbie Boxes",
    "Folding Cartons",
];

const RetailBoxes = () => {
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
                                <BreadcrumbPage>Retail Boxes</BreadcrumbPage>
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
                                Retail Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Versatile, customizable, and high-quality packaging solutions for general retail goods.
                                Enhance your product visibility and brand appeal with our wide range of retail packaging options.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Retail Boxes Packaging"
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
                            Retail Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our diverse collection of retail boxes, perfect for any product type.
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

export default RetailBoxes;
