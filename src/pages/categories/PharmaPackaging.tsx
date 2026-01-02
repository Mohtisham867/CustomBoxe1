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

import heroImage from "@/assets/pharma-packaging-hero.png";

// Specific images
import pillBoxes from "@/assets/products/pill-boxes.png";
import dispenserBoxes from "@/assets/products/dispenser-boxes.png";
import dietarySupplementPackaging from "@/assets/dietary_supplement_packaging.png"; // Assuming this exists or I'll use medicine boxes fallback if build fails, actually I recalled seeing it in search
import medicineBoxes from "@/assets/products/medicine-boxes.png";
import oliveOilBoxes from "@/assets/products/olive-oil-boxes.png";
import condomBoxes from "@/assets/products/condom-boxes.png";
import glovesBoxes from "@/assets/products/gloves-boxes.png";
// Substite for Bandage Boxes due to quota limit -> reusing medicine boxes
import bandageBoxes from "@/assets/products/medicine-boxes.png";

const relatedProducts = [
    { name: "Custom Pill Boxes", image: pillBoxes, description: "Secure boxes for pills and medications." },
    { name: "Custom Dispenser Boxes", image: dispenserBoxes, description: "Convenient dispenser packaging for medical supplies." },
    { name: "Dietary Supplement Packaging", image: dietarySupplementPackaging, description: "Compliance-focused packaging for supplements." },
    { name: "Custom Medicine Boxes", image: medicineBoxes, description: "Professional boxes for various medicines." },
    { name: "Olive Oil Boxes", image: oliveOilBoxes, description: "Protective packaging for pharmaceutical oils." },
    { name: "Condom Boxes", image: condomBoxes, description: "Discreet and secure packaging." },
    { name: "Gloves Boxes", image: glovesBoxes, description: "Hygienic dispenser boxes for medical gloves." },
    { name: "Bandage Boxes", image: bandageBoxes, description: "Clean packaging for bandages and first aid." },
];

const productOptions = [
    "Custom Pill Boxes",
    "Custom Dispenser Boxes",
    "Dietary Supplement Packaging",
    "Custom Medicine Boxes",
    "Olive Oil Boxes",
    "Condom Boxes",
    "Gloves Boxes",
    "Bandage Boxes",
];

const PharmaPackaging = () => {
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
                                <BreadcrumbPage>Pharma Packaging</BreadcrumbPage>
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
                                Pharma Packaging
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Secure, compliant, and child-resistant packaging for medical and healthcare products.
                                Our solutions prioritize safety and integrity, ensuring your pharmaceutical products reach patients in perfect condition.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Pharmaceutical Packaging"
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
                            Healthcare Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Reliable and certified packaging designed for the pharmaceutical and healthcare industry.
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

export default PharmaPackaging;
