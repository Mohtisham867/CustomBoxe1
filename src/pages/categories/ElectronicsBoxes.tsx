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

import heroImage from "../../assets/electronics-boxes/electronics-boxes-hero.jpg";

// Specific images
import hairDryerBoxes from "../../assets/electronics-boxes/hair-dryer-packaging.jpg";
import chargerBoxes from "@/assets/charger_kabel_packaging.png";
import batteryBoxes from "../../assets/electronics-boxes/battery-packaging.jpg";
import cdJackets from "../../assets/electronics-boxes/cd-jackets.jpg";
import cdCovers from "../../assets/electronics-boxes/cd-covers.jpg";
import cameraPackaging from "../../assets/electronics-boxes/camera-packaging.jpg";
import phoneBoxes from "../../assets/electronics-boxes/phone-boxes.jpg";
import headphonePackaging from "../../assets/electronics-boxes/headphone-packaging.jpg";
import softwareBoxes from "../../assets/electronics-boxes/software-boxes.jpg";

// General shapes mapping
// import mailerBoxes from "@/assets/box-shapes/mailer-boxes.jpg";
// import tuckBoxes from "@/assets/box-shapes/tuck-boxes.jpg";
// import paperBags from "@/assets/box-shapes/custom-paper-bags.jpg";
// import customShapeBoxes from "@/assets/box-shapes/custom-shape-boxes.jpg";
// import shippingBoxes from "@/assets/box-shapes/shipping-boxes.jpg";

const relatedProducts = [
    { name: "Hair Dryer Packaging", image: hairDryerBoxes, description: "Protective packaging for hair styling tools." },
    { name: "Cell Phone Charger Boxes", image: chargerBoxes, description: "Compact boxes for chargers and cables." },
    { name: "Battery Packaging", image: batteryBoxes, description: "Secure packaging for various battery sizes." },
    { name: "CD Jackets", image: cdJackets, description: "Sleek jackets for media storage." },
    { name: "CD Covers", image: cdCovers, description: "Custom covers for CDs and DVDs." },
    { name: "Camera Packaging", image: cameraPackaging, description: "Durable protection for cameras and lenses." },
    { name: "Phone Boxes", image: phoneBoxes, description: "Premium rigid or tuck boxes for smartphones." }, // Reusing charger box for sleek tech look if generic
    { name: "Headphone Packaging", image: headphonePackaging, description: "Stylish packaging for audio accessories." },
    { name: "Software Boxes", image: softwareBoxes, description: "Professional boxes for software retail." },
];

const productOptions = [
    "Hair Dryer Packaging",
    "Cell Phone Charger Boxes",
    "Battery Packaging",
    "CD Jackets",
    "CD Covers",
    "Camera Packaging",
    "Phone Boxes",
    "Headphone Packaging",
    "Software Boxes",
];

const ElectronicsBoxes = () => {
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
                                <BreadcrumbPage>Electronics Boxes</BreadcrumbPage>
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
                                Electronics Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Secure and anti-static packaging solutions designed specifically for fragile electronic devices.
                                Our custom electronics boxes offer superior protection and a premium unboxing experience,
                                ensuring your tech products arrive safely and professionally.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Electronics Packaging"
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
                            Electronics Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Specialized packaging for consumer electronics, gadgets, and tech accessories.
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
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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

export default ElectronicsBoxes;
