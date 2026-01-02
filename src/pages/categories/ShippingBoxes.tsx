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
import shippingBoxesHero from "@/assets/shipping-boxes/shipping-boxes-hero.jpg";
import chineseTakeoutBox from "@/assets/shipping-boxes/chinese-takeout-boxes.jpg";
import hempShippingBox from "@/assets/shipping-boxes/hemp-shipping-boxes.jpg";
import doubleWallTuck from "@/assets/shipping-boxes/double-wall-tuck-front.jpg";
import whiteShippingBox from "@/assets/shipping-boxes/white-shipping-boxes.png";
import deliveryBox from "@/assets/shipping-boxes/delivery-boxes.png";
import candleShippingBox from "@/assets/shipping-boxes/candle-shipping-boxes.jpg";
import hatShippingBox from "@/assets/shipping-boxes/hat-shipping-boxes.jpg";
import box8x6x4Box from "@/assets/shipping-boxes/8x6x4-shipping-boxes.jpg";
import box5x5x5Box from "@/assets/shipping-boxes/5x5x5-boxes.jpg";
import wineShippingBox from "@/assets/shipping-boxes/wine-shipping-boxes.jpg";
import longNarrowBox from "@/assets/shipping-boxes/long-narrow-shipping-boxes.jpg";
import shippingLabelsBox from "@/assets/shipping-boxes/shipping-labels.jpg";
import placeholder from "@/assets/shipping-boxes/placeholder.png";

// Placeholder assignments for missing value
const candleShipping = candleShippingBox;
const hatShipping = hatShippingBox;
const box8x6x4 = box8x6x4Box;
const box5x5x5 = box5x5x5Box;
const wineShipping = wineShippingBox;
const longNarrow = longNarrowBox;
const shippingLabels = shippingLabelsBox;

const relatedProducts = [
    { name: "Chinese Takeout Boxes", image: chineseTakeoutBox, description: "Classic folded design with wire handle for easy carry." },
    { name: "Double Wall Tuck Front", image: doubleWallTuck, description: "Extra durability with reinforced walls for heavy items." },
    { name: "Hemp Shipping Boxes", image: hempShippingBox, description: "Sustainable and sturdy hemp-based material." },
    { name: "Candle Shipping Boxes", image: candleShipping, description: "Protective packaging specifically for fragile candles." },
    { name: "Hat Shipping Boxes", image: hatShipping, description: "Spacious boxes to keep hats in perfect shape." },
    { name: "8x6x4 Shipping Boxes", image: box8x6x4, description: "Standard size ideal for small to medium retail items." },
    { name: "5x5x5 Boxes", image: box5x5x5, description: "Perfect cube shape for compact secure shipping." },
    { name: "Wine Shipping Boxes", image: wineShipping, description: "Designed to protect bottles during transit." },
    { name: "Long Narrow Shipping Boxes", image: longNarrow, description: "Ideal for elongated items like posters or tools." },
    { name: "Shipping Labels", image: shippingLabels, description: "Custom branded labels for professional delivery." },
    { name: "White Shipping Boxes", image: whiteShippingBox, description: "Clean, professional white finish for premium brands." },
    { name: "Delivery Boxes", image: deliveryBox, description: "Reliable standardized boxes for all logistics needs." },
];

const productOptions = relatedProducts.map(p => p.name);

const ShippingBoxes = () => {
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
                                <BreadcrumbPage>Shipping Boxes</BreadcrumbPage>
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
                                Custom Shipping Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Durable, secure, and branded shipping solutions for e-commerce and retail. From standard mailers to specialized shapes, ensure your products arrive safely and in style.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={shippingBoxesHero}
                                        alt="Shipping Boxes Hero"
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
                            Versatile Shipping Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Find the right box for every product, size, and shipping requirement.
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
                                        {/* Note: Logic to show placeholder label if it is the placeholder image */}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110 ${product.image === placeholder ? "opacity-80" : ""}`}
                                        />
                                        {product.image === placeholder && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                                <span className="bg-white/90 px-2 py-1 text-xs rounded shadow-sm text-foreground/70 font-medium">Image Coming Soon</span>
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

export default ShippingBoxes;
