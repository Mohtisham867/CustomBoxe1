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

import sleevesTraysHero from "@/assets/sleeves-and-trays/sleeves-and-trays-hero.png";
import placeholder from "@/assets/sleeves-and-trays/placeholder.png";
import rollEndTrayImg from "@/assets/sleeves-and-trays/roll-end-tray.jpg";
import customBowlSleevesImg from "@/assets/sleeves-and-trays/custom-bowl-sleeves.jpg";
import customDrawerPaperBoxesImg from "@/assets/sleeves-and-trays/custom-drawer-paper-boxes.jpg";
import paperFoodTraysImg from "@/assets/sleeves-and-trays/paper-food-trays.jpg";
import hotDogSleevesImg from "@/assets/sleeves-and-trays/hot-dog-sleeves.jpg";
import cupSleevesImg from "@/assets/sleeves-and-trays/cup-sleeves.jpg";
import coffeeSleevesImg from "@/assets/sleeves-and-trays/coffee-sleeves.jpg";
import packagingSleevesImg from "@/assets/sleeves-and-trays/packaging-sleeves.jpg";
import soapSleevesImg from "@/assets/sleeves-and-trays/soap-sleeves.jpg";
import giftCardSleevesImg from "@/assets/sleeves-and-trays/gift-card-sleeves.jpg";
import packagingInsertsImg from "@/assets/sleeves-and-trays/packaging-inserts.jpg";
import foamInsertsImg from "@/assets/sleeves-and-trays/foam-inserts.jpg";
import slideBoxesImg from "@/assets/sleeves-and-trays/slide-boxes.jpg";
import sleeveBoxesImg from "@/assets/sleeves-and-trays/sleeve-boxes.jpg";
import customShrinkSleevesImg from "@/assets/sleeves-and-trays/custom-shrink-sleeves.jpg";
import soapPackagingSleevesImg from "@/assets/sleeves-and-trays/soap-packaging-sleeves.jpg";
import trayBoxesImg from "@/assets/sleeves-and-trays/tray-boxes.jpg";
import kraftSleeveBoxesImg from "@/assets/sleeves-and-trays/kraft-sleeve-boxes.jpg";
import customConeSleeveImg from "@/assets/sleeves-and-trays/custom-cone-sleeve.jpg";

const relatedProducts = [
    { name: "Roll End Tray", image: rollEndTrayImg, description: "Self-locking tray box for retail and food.", isPlaceholder: false },
    { name: "Custom Bowl Sleeves", image: customBowlSleevesImg, description: "Branded sleeves for takeout bowls and containers.", isPlaceholder: false },
    { name: "Custom Drawer Paper Boxes", image: customDrawerPaperBoxesImg, description: "Premium sliding drawer boxes for gifts.", isPlaceholder: false },
    { name: "Paper Food Trays", image: paperFoodTraysImg, description: "Disposable trays for street food and events.", isPlaceholder: false },
    { name: "Hot Dog Sleeves", image: hotDogSleevesImg, description: "Convenient paper sleeves for hot dogs and sausages.", isPlaceholder: false },
    { name: "Cup Sleeves", image: cupSleevesImg, description: "Protective sleeves for hot beverage cups.", isPlaceholder: false },
    { name: "Coffee Sleeves", image: coffeeSleevesImg, description: "Insulating sleeves for coffee cups with custom print.", isPlaceholder: false },
    { name: "Packaging Sleeves", image: packagingSleevesImg, description: "Versatile paper sleeves to brand any box or item.", isPlaceholder: false },
    { name: "Soap Sleeves", image: soapSleevesImg, description: "Minimalist packaging band for soap bars.", isPlaceholder: false },
    { name: "Gift Card Sleeves", image: giftCardSleevesImg, description: "Small sleeves designed to hold gift cards elegantly.", isPlaceholder: false },
    { name: "Packaging Inserts", image: packagingInsertsImg, description: "Custom inserts to secure products within a box.", isPlaceholder: false },
    { name: "Foam Inserts", image: foamInsertsImg, description: "Protective foam cutouts for delicate items.", isPlaceholder: false },
    { name: "Slide Boxes", image: slideBoxesImg, description: "Two-piece boxes with a sliding tray mechanism.", isPlaceholder: false },
    { name: "Sleeve Boxes", image: sleeveBoxesImg, description: "Tray and sleeve combination for a premium unboxing.", isPlaceholder: false },
    { name: "Custom Shrink Sleeves", image: customShrinkSleevesImg, description: "Full-body labels that shrink to fit container contours.", isPlaceholder: false },
    { name: "Soap Packaging Sleeves", image: soapPackagingSleevesImg, description: "Branded wraps for handmade soaps.", isPlaceholder: false },
    { name: "Tray Boxes", image: trayBoxesImg, description: "Open top boxes perfect for product display.", isPlaceholder: false },
    { name: "Kraft Sleeve Boxes", image: kraftSleeveBoxesImg, description: "Eco-friendly kraft slide boxes for a natural look.", isPlaceholder: false },
    { name: "Custom Cone Sleeve", image: customConeSleeveImg, description: "Printed paper sleeves for ice cream cones.", isPlaceholder: false },
];

const productOptions = relatedProducts.map(p => p.name);

const SleevesAndTrays = () => {
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
                                <BreadcrumbPage>Sleeves and Trays</BreadcrumbPage>
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
                                Sleeves and Trays
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Discover our versatile range of sleeves and tray packaging. From sliding drawer boxes to food sleeves, these solutions offer a perfect blend of functionality and premium branding opportunities for retail and food products.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={sleevesTraysHero}
                                        alt="Sleeves and Trays Hero"
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
                            Functional & Stylish
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore packaging solutions that slide, wrap, and protect with elegance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110 ${product.isPlaceholder ? 'opacity-80' : ''}`}
                                        />
                                        {product.isPlaceholder && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                                <span className="bg-white/90 px-2 py-1 text-xs rounded shadow-sm text-foreground/70 font-medium">Image Coming Soon</span>
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

export default SleevesAndTrays;
