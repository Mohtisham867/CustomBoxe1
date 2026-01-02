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

import heroImage from "@/assets/jewelry-boxes-hero.png";

// Specific images
import braceletBoxes from "@/assets/products/bracelet-boxes.png";
import necklaceLidOffBoxes from "@/assets/products/necklace-lid-off-boxes.png";
import pendantBoxes from "@/assets/products/pendant-boxes.png";
import ringBoxes from "@/assets/products/ring-boxes.png";
import earringBoxes from "@/assets/products/earring-boxes.png";

const relatedProducts = [
    { name: "Bracelet Square Boxes", image: braceletBoxes, description: "Elegant square boxes for bracelets." },
    { name: "Custom Necklace Lid Off Packaging", image: necklaceLidOffBoxes, description: "Premium lid-off boxes for necklaces." },
    { name: "Pendant Boxes", image: pendantBoxes, description: "Sophisticated packaging for pendants." },
    { name: "Bracelet Boxes", image: braceletBoxes, description: "Stylish and secure boxes for bracelets." },
    { name: "Ring Boxes", image: ringBoxes, description: "Classic boxes to showcase rings." },
    { name: "Earring Boxes", image: earringBoxes, description: "Chic boxes for earrings and studs." },
    { name: "Luxury Jewelry Boxes", image: heroImage, description: "High-end packaging for luxury jewelry collections." },
    { name: "Necklace Boxes", image: necklaceLidOffBoxes, description: "Beautiful boxes for all types of necklaces." },
];

const productOptions = [
    "Bracelet Square Boxes",
    "Custom Necklace Lid Off Packaging",
    "Pendant Boxes",
    "Bracelet Boxes",
    "Ring Boxes",
    "Earring Boxes",
    "Luxury Jewelry Boxes",
    "Necklace Boxes",
];

const JewelryBoxes = () => {
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
                                <BreadcrumbPage>Jewelry Boxes</BreadcrumbPage>
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
                                Jewelry Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Elegant, secure, and luxury packaging solutions for fine jewelry items.
                                enhanced by our exquisite custom boxes designed to reflect the quality and beauty
                                of the treasures they hold.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Luxury Jewelry Packaging"
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
                            Fine Jewelry Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Premium packaging solutions that complement the elegance of your jewelry.
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

export default JewelryBoxes;
