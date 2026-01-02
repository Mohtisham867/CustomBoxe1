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

import heroImage from "@/assets/soap-boxes/soap-boxes-hero.png";

// Specific images
import kraftSoapBoxes from "@/assets/soap-boxes/custom-kraft-soap-boxes.png";
import bathBombPackaging from "@/assets/soap-boxes/bath-bomb-packaging.png";
import wrappingPaper from "@/assets/soap-boxes/custom-soap-wrapping-paper.png";
import handmadeSoapBoxes from "@/assets/soap-boxes/custom-handmade-soap-boxes.png";
import squareSoapBoxes from "@/assets/soap-boxes/square-soap-boxes.png";
import soapBarBoxes from "@/assets/soap-boxes/custom-soap-bar-boxes.png";
import luxurySoapPackaging from "@/assets/soap-boxes/luxury-soap-packaging.png";
import soapSleeves from "@/assets/soap-boxes/soap-sleeves.png";
import soapBarLabels from "@/assets/soap-boxes/soap-sleeves.png"; // Placeholder (Quota Limit)

const relatedProducts = [
    { name: "Custom Kraft Soap Boxes", image: kraftSoapBoxes, description: "Eco-friendly, rustic packaging for natural soaps." },
    { name: "Bath Bomb Packaging", image: bathBombPackaging, description: "Vibrant and protective boxes for bath bombs." },
    { name: "Custom Soap Wrapping Paper", image: wrappingPaper, description: "Elegant wrapping paper for a premium touch." },
    { name: "Custom Handmade Soap Boxes", image: handmadeSoapBoxes, description: "Artisanal boxes for your handmade creations." },
    { name: "Square Soap Boxes", image: squareSoapBoxes, description: "Modern square boxes for unique soap shapes." },
    { name: "Custom Soap Bar Boxes", image: soapBarBoxes, description: "Standard fit boxes for soap bars of all sizes." },
    { name: "Luxury Soap Packaging", image: luxurySoapPackaging, description: "Premium rigid boxes for high-end soap brands." },
    { name: "Soap Sleeves", image: soapSleeves, description: "Minimalist sleeves to showcase your soap." },
    { name: "Soap Bar Labels", image: soapBarLabels, description: "Custom labels to brand your soap bars." },
];

const productOptions = [
    "Custom Kraft Soap Boxes",
    "Bath Bomb Packaging",
    "Custom Soap Wrapping Paper",
    "Custom Handmade Soap Boxes",
    "Square Soap Boxes",
    "Custom Soap Bar Boxes",
    "Luxury Soap Packaging",
    "Soap Sleeves",
    "Soap Bar Labels",
];

const SoapBoxes = () => {
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
                                <BreadcrumbPage>Soap Boxes</BreadcrumbPage>
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
                                Soap Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Hygienic, attractive, and protective packaging solutions for soap and bath products.
                                Elevate your brand with our custom soap packaging designed to preserve freshness and appeal to customers.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Soap Boxes Packaging"
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
                            Soap Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Choose from our wide variety of soap packaging styles, materials, and finishes.
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

export default SoapBoxes;
