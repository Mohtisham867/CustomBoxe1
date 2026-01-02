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

import vapeBoxesHero from "@/assets/vape-boxes-hero.png";
import customECigaretteBoxes from "@/assets/custom-e-cigarette-boxes.png";
import customVapeCartridgeBoxes from "@/assets/custom-vape-cartridge-boxes.png";
import vapePenBoxes from "@/assets/vape-pen-boxes.png";
import cannabisVapePackaging from "@/assets/cannabis-vape-packaging.png";
import oneMlVapeCartridgeBoxes from "@/assets/one-ml-vape-cartridge-boxes.png";
import vapeDisplayBoxes from "@/assets/vape-display-boxes.png";
import disposableVapeBoxes from "@/assets/disposable-vape-boxes.png";
import emptyVapeCartridgeBoxes from "@/assets/empty-vape-cartridge-boxes.png";
import dankVapePackaging from "@/assets/dank-vape-packaging.png";
import cbdVapeBoxes from "@/assets/cbd-vape-boxes.png";
import vapeJuiceBoxes from "@/assets/vape-juice-boxes.png";
import juulPackaging from "@/assets/juul-packaging.png";

const relatedProducts = [
    { name: "Custom E-Cigarette Boxes", image: customECigaretteBoxes, description: "Premium packaging for e-cigarettes." },
    { name: "Custom Vape Cartridge Boxes", image: customVapeCartridgeBoxes, description: "Secure boxes for vape cartridges." },
    { name: "Vape Pen Boxes", image: vapePenBoxes, description: "Stylish packaging for vape pens." },
    { name: "Cannabis Vape Packaging", image: cannabisVapePackaging, description: "Compliant cannabis vape solutions." },
    { name: "1ml Vape Cartridge Boxes", image: oneMlVapeCartridgeBoxes, description: "Precision packaging for 1ml cartridges." },
    { name: "Vape Display Boxes", image: vapeDisplayBoxes, description: "Eye-catching retail display packaging." },
    { name: "Disposable Vape Boxes", image: disposableVapeBoxes, description: "Convenient disposable vape packaging." },
    { name: "Empty Vape Cartridge Boxes", image: emptyVapeCartridgeBoxes, description: "Protective boxes for empty cartridges." },
    { name: "Dank Vape Packaging", image: dankVapePackaging, description: "Custom branded vape packaging." },
    { name: "CBD Vape Boxes", image: cbdVapeBoxes, description: "Specialized CBD vape product packaging." },
    { name: "Vape Juice Boxes", image: vapeJuiceBoxes, description: "Secure packaging for vape liquids." },
    { name: "Juul Packaging", image: juulPackaging, description: "Compatible Juul device packaging." },
];

const productOptions = [
    "Custom E-Cigarette Boxes",
    "Custom Vape Cartridge Boxes",
    "Vape Pen Boxes",
    "Cannabis Vape Packaging",
    "1ml Vape Cartridge Boxes",
    "Vape Display Boxes",
    "Disposable Vape Boxes",
    "Empty Vape Cartridge Boxes",
    "Dank Vape Packaging",
    "CBD Vape Boxes",
    "Vape Juice Boxes",
    "Juul Packaging",
];

const VapeBoxes = () => {
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
                                <BreadcrumbPage>Vape Boxes</BreadcrumbPage>
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
                                Vape Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Discover our comprehensive range of secure, child-resistant, and high-quality packaging solutions for all vape products and accessories.
                                From e-cigarettes to vape cartridges, our packaging ensures product safety while maintaining a premium brand image.
                                Compliant with industry regulations and designed for maximum protection and appeal.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={vapeBoxesHero}
                                    alt="Vape Boxes Background"
                                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg"
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
                            Vape Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our full range of vape product packaging solutions.
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
                                        {/* Product image placeholder - intentionally empty */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

export default VapeBoxes;
