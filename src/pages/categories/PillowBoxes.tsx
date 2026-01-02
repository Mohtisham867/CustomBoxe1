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
import pillowBoxesHero from "@/assets/pillow-boxes/pillow-boxes-hero.png";
import whitePillowBoxes from "@/assets/pillow-boxes/white_pillow_boxes.png";
import smallPillowBoxes from "@/assets/pillow-boxes/small_pillow_boxes.png";
import kraftPillowBoxes from "@/assets/pillow-boxes/kraft_pillow_boxes.png";
import largePillowBoxes from "@/assets/pillow-boxes/large_pillow_boxes.png";
import pillowBoxesWithHandle from "@/assets/pillow-boxes/pillow_boxes_with_handle.png";
import blackPillowBoxes from "@/assets/pillow-boxes/black_pillow_boxes.png";
import pillowBoxesWithWindow from "@/assets/pillow-boxes/pillow_boxes_with_window.png";
import cardboardPillowBoxes from "@/assets/pillow-boxes/cardboard_pillow_boxes.png";
import paperPillowBox from "@/assets/pillow-boxes/paper_pillow_box.png";
import pillowGiftBoxes from "@/assets/pillow-boxes/pillow_gift_boxes.png";

const relatedProducts = [
    { name: "White Pillow Boxes", image: whitePillowBoxes, description: "Clean and elegant white pillow boxes for weddings and favors." },
    { name: "Small Pillow Boxes", image: smallPillowBoxes, description: "Compact boxes perfect for jewelry and small gifts." },
    { name: "Kraft Pillow Boxes", image: kraftPillowBoxes, description: "Eco-friendly kraft paper pillow boxes for a rustic look." },
    { name: "Large Pillow Boxes", image: largePillowBoxes, description: "Spacious pillow boxes for apparel and larger items." },
    { name: "Pillow Boxes With Handle", image: pillowBoxesWithHandle, description: "Convenient pillow boxes with built-in carrying handles." },
    { name: "Black Pillow Boxes", image: blackPillowBoxes, description: "Sophisticated black pillow boxes for premium packaging." },
    { name: "Pillow Boxes With Window", image: pillowBoxesWithWindow, description: "Showcase your product with a clear window cutout." },
    { name: "Cardboard Pillow Boxes", image: cardboardPillowBoxes, description: "Durable cardboard construction for secure shipping." },
    { name: "Paper Pillow Box", image: paperPillowBox, description: "Lightweight paper pillow boxes for simple packaging needs." },
    { name: "Pillow Gift Boxes", image: pillowGiftBoxes, description: "Decorative pillow boxes designed specially for gifting." },
];

const productOptions = relatedProducts.map(p => p.name);

const PillowBoxes = () => {
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
                                <BreadcrumbPage>Pillow Boxes</BreadcrumbPage>
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
                                Pillow Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Unique curved packaging perfect for gifts, jewelry, and retail items. Our pillow boxes combine elegant aesthetics with practical functionality, available in various sizes and finishes.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={pillowBoxesHero}
                                        alt="Pillow Boxes Hero"
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
                            Premium Pillow Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our range of pillow boxes, from eco-friendly kraft to premium windowed options.
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

export default PillowBoxes;
