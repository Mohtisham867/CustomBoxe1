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

import heroImage from "@/assets/custom-hemp-boxes-hero.png";
import hempPaperBoxes from "@/assets/cbd-products/custom-cbd-isolate-boxes.jpg";
import hempShippingBoxes from "@/assets/box-shapes/shipping-boxes.jpg";
import hempPreRollBoxes from "@/assets/cannabis-products/cannabis-cigarette-boxes.jpg";
import hempOilBoxes from "@/assets/cbd-products/cbd-oil-boxes.jpg";
import hempGiftBoxes from "@/assets/apparel-products/apparel-gift-boxes.jpg";
import hempCardboardBoxes from "@/assets/box-shapes/mailer-boxes.jpg";
import hempCigaretteBoxes from "@/assets/cigarette-products/hemp-cigarette-boxes.jpg";
import eLiquidBoxes from "@/assets/cigarette-products/e-cigarette-boxes.jpg";
import hempTeaBags from "@/assets/beverage-products/tea-boxes.jpg";
import cbdHempOilBoxes from "@/assets/cbd-products/cbd-oil-boxes.jpg"; // Reusing cbd-oil-boxes

const relatedProducts = [
    { name: "Hemp Paper Boxes", image: hempPaperBoxes, description: "Sustainable paper packaging for eco-conscious brands." },
    { name: "Hemp Shipping Boxes", image: hempShippingBoxes, description: "Durable shipping solutions made for hemp products." },
    { name: "Hemp Pre Roll Boxes", image: hempPreRollBoxes, description: "Secure and stylish boxes for hemp pre-rolls." },
    { name: "Hemp Oil Boxes", image: hempOilBoxes, description: "Protective packaging for hemp oil bottles." },
    { name: "Hemp Gift Boxes", image: hempGiftBoxes, description: "Elegant gift boxes for special hemp items." },
    { name: "Hemp Cardboard Boxes", image: hempCardboardBoxes, description: "Robust cardboard boxes for various hemp goods." },
    { name: "Custom Hemp Cigarette Boxes", image: hempCigaretteBoxes, description: "Customized boxes for hemp cigarettes." },
    { name: "E Liquid Boxes", image: eLiquidBoxes, description: "Safe and compliant packaging for e-liquids." },
    { name: "Hemp Tea Bags", image: hempTeaBags, description: "Flavor-preserving boxes for hemp tea." },
    { name: "CBD Hemp Oil Boxes", image: cbdHempOilBoxes, description: "Premium packaging for CBD hemp oil." },
];

const productOptions = [
    "Hemp Paper Boxes",
    "Hemp Shipping Boxes",
    "Hemp Pre Roll Boxes",
    "Hemp Oil Boxes",
    "Hemp Gift Boxes",
    "Hemp Cardboard Boxes",
    "Custom Hemp Cigarette Boxes",
    "E Liquid Boxes",
    "Hemp Tea Bags",
    "CBD Hemp Oil Boxes",
];

const HempBoxes = () => {
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
                                <BreadcrumbPage>Custom Hemp Boxes</BreadcrumbPage>
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
                                Custom Hemp Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Discover our eco-friendly Custom Hemp Boxes, designed to reflect the natural quality of your products.
                                Crafted from sustainable materials, these secure and durable boxes offer the perfect blend of
                                protection and style for your hemp-based items.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Custom Hemp Boxes"
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
                            Hemp Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our range of sustainable hemp packaging, custom-designed to enhance your brand and protect your products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default HempBoxes;
