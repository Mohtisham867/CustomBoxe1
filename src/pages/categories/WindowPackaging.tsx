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
import windowPackagingHero from "@/assets/window-packaging/window-packaging-hero.png";

import candleBoxesWithWindow from "@/assets/window-packaging/candle-boxes-with-window.png";
import gableBoxesWithWindow from "@/assets/window-packaging/gable-boxes-with-window.png";
import halloweenWindowBoxes from "@/assets/window-packaging/halloween-window-boxes.png";
import soapBoxesWithWindow from "@/assets/window-packaging/soap-boxes-with-window.png";
import pillowBoxesWithWindow from "@/assets/window-packaging/pillow-boxes-with-window.png";
import kraftPaperBoxesWithWindow from "@/assets/window-packaging/kraft-paper-boxes-with-window.png";
import candyBoxesWithWindow from "@/assets/window-packaging/candy-boxes-with-window.png";
import cookieBoxesWithWindow from "@/assets/window-packaging/cookie-boxes-with-window.png";

const relatedProducts = [
    { name: "Candle Boxes With Window", image: candleBoxesWithWindow, description: "Showcase your candles with elegance and transparency." },
    { name: "Gable Boxes with Window", image: gableBoxesWithWindow, description: "Convenient handle boxes with a peek-inside window." },
    { name: "Halloween Window Boxes", image: halloweenWindowBoxes, description: "Spooky and fun window boxes for Halloween treats." },
    { name: "Soap Boxes With Window", image: soapBoxesWithWindow, description: "Let customers smell and see your handmade soaps." },
    { name: "Pillow Boxes With Window", image: pillowBoxesWithWindow, description: "Unique curved boxes with a stylish display window." },
    { name: "Kraft Paper Boxes With Window", image: kraftPaperBoxesWithWindow, description: "Eco-friendly natural look with product visibility." },
    { name: "Candy Boxes With Window", image: candyBoxesWithWindow, description: "Perfect for displaying colorful candies and sweets." },
    { name: "Cookie Boxes With Window", image: cookieBoxesWithWindow, description: "Keep cookies fresh while showing them off." },
];

const productOptions = relatedProducts.map(p => p.name);

const WindowPackaging = () => {
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
                                <BreadcrumbPage>Window Packaging</BreadcrumbPage>
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
                                Window Packaging
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                enhance product visibility with our premium window packaging. Designed to showcase your items while providing protection, these boxes utilize clear windows to create an enticing display that drives sales.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={windowPackagingHero}
                                        alt="Window Packaging Hero"
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
                            Clear View Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Browse our versatile collection of boxes featuring clear windows, perfect for retail and gifting.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Product image placeholder */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                                <p className="text-muted-foreground text-xs">Image placeholder</p>
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

export default WindowPackaging;
