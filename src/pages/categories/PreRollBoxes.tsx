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

import heroImage from "@/assets/pre-roll-boxes/pre-roll-boxes-hero.png";

// Specific images maps
import hempPreRollBoxes from "@/assets/pre-roll-boxes/hemp-pre-roll-boxes.png";
import preRollDisplayBoxes from "@/assets/pre-roll-boxes/custom-pre-roll-display-boxes.png";
import preRollLabels from "@/assets/pre-roll-boxes/pre-roll-packaging-labels.png";
import luxuryPreRollPackaging from "@/assets/pre-roll-boxes/luxury-pre-roll-packaging.png";
import preRollConePackaging from "@/assets/pre-roll-boxes/custom-pre-roll-cone-packaging.png";
import preRollJointBoxes from "@/assets/pre-roll-boxes/pre-roll-joint-boxes.png";
import childResistantPreRollBox from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box.png";

const relatedProducts = [
    { name: "Hemp Pre Roll Boxes", image: hempPreRollBoxes, description: "Eco-friendly packaging for hemp pre-rolls." },
    { name: "Custom Pre Roll Display Boxes", image: preRollDisplayBoxes, description: "Retail display boxes optimized for counters." },
    { name: "Pre Roll Packaging Labels", image: preRollLabels, description: "Custom labels for branding and compliance." },
    { name: "Luxury Pre Roll Packaging", image: luxuryPreRollPackaging, description: "Premium rigid boxes for a high-end experience." },
    { name: "Custom Pre Roll Cone Packaging", image: preRollConePackaging, description: "Protective tubes for pre-roll cones." },
    { name: "Pre Roll Joint Boxes", image: preRollJointBoxes, description: "Classic cigarette-style boxes for joints." },
    { name: "Child Resistant Pre Roll Box", image: childResistantPreRollBox, description: "Safety-first packaging for compliance." },
];

const productOptions = [
    "Hemp Pre Roll Boxes",
    "Custom Pre Roll Display Boxes",
    "Pre Roll Packaging Labels",
    "Luxury Pre Roll Packaging",
    "Custom Pre Roll Cone Packaging",
    "Pre Roll Joint Boxes",
    "Child Resistant Pre Roll Box",
];

const PreRollBoxes = () => {
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
                                <BreadcrumbPage>Pre Roll Boxes</BreadcrumbPage>
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
                                Pre Roll Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Compliant, secure, and child-resistant packaging for cannabis pre-rolls.
                                Showcase your brand while ensuring product freshness and safety with our diverse range of custom pre-roll solutions.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Custom Pre Roll Packaging"
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
                            Pre-Roll Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            From single tubes to multi-packs, we have the perfect packaging for your pre-rolls.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default PreRollBoxes;
