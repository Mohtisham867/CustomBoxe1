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

// Product Images
import kraftGableBox from "@/assets/gable-boxes/kraft-gable-box.png";
import christmasGableBox from "@/assets/gable-boxes/christmas-gable-box.png";
import genericGableBox from "@/assets/box-shapes/gable-boxes.jpg";

// Reusing generated images for other variants where appropriate
const whiteGableBox = genericGableBox; // Placeholder
const largeGableBox = kraftGableBox; // Reuse
const gableGiftBox = christmasGableBox; // Reuse
const blackGableBox = genericGableBox; // Placeholder
const gableBoxWindow = genericGableBox; // Placeholder
const gableBags = kraftGableBox; // Reuse
const blueGableBox = genericGableBox; // Placeholder
const cardboardGableBox = kraftGableBox; // Reuse
const redGableBox = christmasGableBox; // Reuse
const kraftPaperGableBox = kraftGableBox; // Reuse

const gableProducts = [
    "Kraft Gable Boxes",
    "Christmas Gable Boxes",
    "White Gable Boxes",
    "Large Gable Boxes",
    "Gable Gift Boxes",
    "Black Gable Boxes",
    "Gable Boxes with Window",
    "Gable Bags",
    "Blue Gable Boxes",
    "Cardboard Gable Boxes",
    "Red Gable Boxes",
    "Kraft Paper Gable Box",
];

const relatedProducts = [
    { name: "Kraft Gable Boxes", image: kraftGableBox, description: "Natural eco-friendly kraft gable boxes." },
    { name: "Christmas Gable Boxes", image: christmasGableBox, description: "Festive holiday themed gable packing." },
    { name: "White Gable Boxes", image: whiteGableBox, description: "Clean and elegant white gable boxes." },
    { name: "Large Gable Boxes", image: largeGableBox, description: "Extra spacious gable boxes for larger items." },
    { name: "Gable Gift Boxes", image: gableGiftBox, description: "Perfect for gifting and special occasions." },
    { name: "Black Gable Boxes", image: blackGableBox, description: "Premium black finish for a luxury look." },
    { name: "Gable Boxes with Window", image: gableBoxWindow, description: "Showcase your product with a clear window." },
    { name: "Gable Bags", image: gableBags, description: "Convenient bag-style gable packaging." },
    { name: "Blue Gable Boxes", image: blueGableBox, description: "Vibrant blue boxes to stand out." },
    { name: "Cardboard Gable Boxes", image: cardboardGableBox, description: "Sturdy cardboard construction." },
    { name: "Red Gable Boxes", image: redGableBox, description: "Bold red gable boxes for high visibility." },
    { name: "Kraft Paper Gable Box", image: kraftPaperGableBox, description: "Simple and classic kraft paper design." },
];

const GableBoxes = () => {
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
                                <BreadcrumbPage>Gable Boxes</BreadcrumbPage>
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
                                Gable Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Our gable boxes combine functionality with style, featuring a convenient built-in handle and a unique shape that stands out. Perfect for food, gifts, and retail packaging, these boxes offer a secure and attractive way to present your products.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={genericGableBox}
                                        alt="Gable Boxes Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={gableProducts} />
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
                            Gable Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our diverse collection of gable box styles and finishes.
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
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
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

export default GableBoxes;
