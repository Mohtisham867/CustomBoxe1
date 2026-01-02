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
import corrugatedBoxesHero from "@/assets/corrugated-boxes-hero.png";
import corrugatedBoxesWithLids from "@/assets/corrugated-boxes-with-lids.png";
import corrugatedMailerBoxes from "@/assets/corrugated-mailer-boxes.png";
import kraftCorrugatedBoxes from "@/assets/kraft-corrugated-boxes.png";
import whiteCorrugatedBoxes from "@/assets/white-corrugated-boxes.png";

// Product list for dropdown
const corrugatedBoxProducts = [
    "Corrugated Boxes With Lids",
    "Corrugated Mailer Boxes",
    "Kraft Corrugated Boxes",
    "White Corrugated Boxes",
];

const relatedProducts = [
    { name: "Corrugated Boxes With Lids", image: corrugatedBoxesWithLids, description: "Sturdy two-piece corrugated boxes" },
    { name: "Corrugated Mailer Boxes", image: corrugatedMailerBoxes, description: "Self-locking secure mailer packaging" },
    { name: "Kraft Corrugated Boxes", image: kraftCorrugatedBoxes, description: "Natural brown shipping containers" },
    { name: "White Corrugated Boxes", image: whiteCorrugatedBoxes, description: "Clean white corrugated packaging" },
];

const CorrugatedBoxes = () => {
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
                                <BreadcrumbPage>Corrugated Boxes</BreadcrumbPage>
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
                                Custom Corrugated Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover our range of custom corrugated boxes, engineered for superior strength and durability.
                                Perfect for shipping, storage, and e-commerce, ensuring your products arrive safely every time.
                            </p>
                            <div className="max-w-lg">
                                <div className="flex justify-center lg:justify-start">
                                    <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                        <img
                                            src={corrugatedBoxesHero}
                                            alt="Custom Corrugated Boxes Hero"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Instant Quote Form */}
                            <div className="flex justify-end">
                                <InstantQuoteFormCompact customProducts={corrugatedBoxProducts} />
                            </div>
                        </div>

                        {/* Brand Rating Section */}
                        <BrandRating />

                        {/* Related Products Section */}
                        <section className="mt-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Durable Corrugated Packaging Solutions
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                                Explore our selection of high-quality corrugated boxes designed to withstand the rigors of transit
                                while presenting your brand professionally.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((product, index) => (
                                    <Card
                                        key={index}
                                        className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                    >
                                        <CardContent className="p-0">
                                            <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                                <div className="relative h-full w-full flex items-center justify-center">
                                                    {product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                            <span className="text-gray-400 text-xs">Image Placeholder</span>
                                                        </div>
                                                    )}
                                                </div>
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

export default CorrugatedBoxes;
