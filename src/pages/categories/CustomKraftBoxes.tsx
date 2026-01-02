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

// Generated Images
import customHandleBoxes from "@/assets/kraft-boxes/custom-handle-boxes.png";
import customPaperCups from "@/assets/kraft-boxes/custom-paper-cups.png";
import kraftSandwichBoxes from "@/assets/kraft-boxes/kraft-sandwich-boxes.png";
import customKraftSoapBoxes from "@/assets/kraft-boxes/custom-kraft-soap-boxes.png";
import kraftPillowBoxes from "@/assets/kraft-boxes/kraft-pillow-boxes.png";
import kraftJewelryBoxes from "@/assets/kraft-boxes/kraft-jewelry-boxes.png";
import kraftGableBoxes from "@/assets/kraft-boxes/kraft-gable-boxes.png";
import kraftLabels from "@/assets/kraft-boxes/kraft-labels.png";
import paperTubePackaging from "@/assets/kraft-boxes/paper-tube-packaging.png";
import kraftGiftBoxes from "@/assets/kraft-boxes/kraft-gift-boxes.png";
import kraftBubbleMailers from "@/assets/kraft-boxes/kraft-bubble-mailers.png";
import kraftCorrugatedBoxes from "@/assets/kraft-boxes/kraft-corrugated-boxes.png";
import kraftTakeawayBoxes from "@/assets/kraft-boxes/kraft-takeaway-boxes.png";
import kraftPaperBoxesWithWindow from "@/assets/kraft-boxes/kraft-paper-boxes-with-window.png";
import kraftCupcakeBoxes from "@/assets/kraft-boxes/kraft-cupcake-boxes.png";
import kraftBags from "@/assets/kraft-boxes/kraft-bags.png";
import kraftPieBoxes from "@/assets/kraft-boxes/kraft-pie-boxes.png";
import whiteKraftBoxes from "@/assets/kraft-boxes/white-kraft-boxes.png";
import smallKraftBoxes from "@/assets/kraft-boxes/small-kraft-boxes.png";
import kraftBoxesWithLids from "@/assets/kraft-boxes/kraft-boxes-with-lids.png";

// Reused Images
import tuckTopBoxes from "@/assets/tuck-boxes/tuck-top-boxes.png";

// Hero Image
import kraftBoxesHero from "@/assets/kraft-boxes/kraft-boxes-hero.png";

const kraftBoxProducts = [
    "Custom Handle Boxes",
    "Custom Paper Cups",
    "Kraft Sandwich Boxes",
    "Custom Kraft Soap Boxes",
    "Kraft Pillow Boxes",
    "Kraft Jewelry Boxes",
    "Kraft Gable Boxes",
    "Kraft Labels",
    "Paper Tube Packaging",
    "Kraft Gift Boxes",
    "Kraft Bubble Mailers",
    "Kraft Corrugated Boxes",
    "Kraft Takeaway Boxes",
    "Kraft Paper Boxes With Window",
    "Kraft Cupcake Boxes",
    "Kraft Bags",
    "Kraft Pie Boxes",
    "White Kraft Boxes",
    "Small Kraft Boxes",
    "Kraft Boxes With Lids",
    "Kraft Tuck Top Boxes",
    "Shipping Labels",
];

const relatedProducts = [
    { name: "Custom Handle Boxes", image: customHandleBoxes, description: "Convenient kraft boxes with built-in handles." },
    { name: "Custom Paper Cups", image: customPaperCups, description: "Eco-friendly disposable kraft paper cups." },
    { name: "Kraft Sandwich Boxes", image: kraftSandwichBoxes, description: "Wedge-shaped boxes with windows for sandwiches." },
    { name: "Custom Kraft Soap Boxes", image: customKraftSoapBoxes, description: "Natural rustic packaging for handmade soaps." },
    { name: "Kraft Pillow Boxes", image: kraftPillowBoxes, description: "Unique pillow-shaped gift and favor boxes." },
    { name: "Kraft Jewelry Boxes", image: kraftJewelryBoxes, description: "Elegant brown paper boxes for jewelry." },
    { name: "Kraft Gable Boxes", image: kraftGableBoxes, description: "Classic barn-style boxes with handles." },
    { name: "Kraft Labels", image: kraftLabels, description: "Rustic brown kraft paper stickers and labels." },
    { name: "Paper Tube Packaging", image: paperTubePackaging, description: "Cylindrical kraft tubes for various products." },
    { name: "Kraft Gift Boxes", image: kraftGiftBoxes, description: "Beautifully simple gift boxes for any occasion." },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Padded protective envelopes for shipping." },
    { name: "Kraft Corrugated Boxes", image: kraftCorrugatedBoxes, description: "Durable fluted boxes for shipping and storage." },
    { name: "Kraft Takeaway Boxes", image: kraftTakeawayBoxes, description: "Grease-resistant food pails and containers." },
    { name: "Kraft Paper Boxes With Window", image: kraftPaperBoxesWithWindow, description: "Display your products through a clear window." },
    { name: "Kraft Cupcake Boxes", image: kraftCupcakeBoxes, description: "Secure holders for cupcakes with viewing windows." },
    { name: "Kraft Bags", image: kraftBags, description: "Sturdy kraft shopping bags with twisted handles." },
    { name: "Kraft Pie Boxes", image: kraftPieBoxes, description: "Perfectly sized boxes for pies and tarts." },
    { name: "White Kraft Boxes", image: whiteKraftBoxes, description: "Bleached white kraft paper for a clean look." },
    { name: "Small Kraft Boxes", image: smallKraftBoxes, description: "Tiny boxes for favors, samples, or small items." },
    { name: "Kraft Boxes With Lids", image: kraftBoxesWithLids, description: "Classic two-piece telescopic kraft boxes." },
    { name: "Kraft Tuck Top Boxes", image: tuckTopBoxes, description: "Simple tuck-top retail packaging boxes." },
    { name: "Shipping Labels", image: kraftLabels, description: "Essential shipping labels for your packages." },
];

const CustomKraftBoxes = () => {
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Kraft Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Top Split Section */}
            <main className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 mb-12 items-start">
                        {/* Left Side */}
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Custom Kraft Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover our eco-friendly Custom Kraft Boxes, designed for sustainability without compromising on style.
                                Made from high-quality recycled materials, these boxes offer a rustic, natural aesthetic perfect for organic brands.

                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={kraftBoxesHero}
                                        alt="Custom Kraft Boxes Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Instant Quote Form */}
                            <div className="flex justify-end">
                                <InstantQuoteFormCompact customProducts={kraftBoxProducts} />
                            </div>
                        </div>

                        {/* Brand Rating Section */}
                        <BrandRating />

                        {/* Related Products Section */}
                        <section className="mt-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Explore Sustainable Kraft Packaging
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                                Browse our extensive collection of kraft paper packaging. From sturdy shipping boxes to elegant gift containers,
                                find the perfect eco-friendly solution for your products.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((product, index) => (
                                    <Card
                                        key={index}
                                        className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative aspect-square overflow-hidden bg-white">
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                        <span className="text-gray-400 text-xs">Image Placeholder</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-4 border-t border-border">
                                                <h3 className="font-semibold text-foreground text-sm mb-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Main Quote Form at Bottom */}
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CustomKraftBoxes;
