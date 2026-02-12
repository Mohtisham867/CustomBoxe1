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

import sleevesTraysHero from "@/assets/sleeves-and-trays/Sleeves and Trays hero.png";
import placeholder from "@/assets/sleeves-and-trays/placeholder.webp";
import rollEndTrayImg from "@/assets/sleeves-and-trays/roll-end-tray.webp";
import customBowlSleevesImg from "@/assets/sleeves-and-trays/custom-bowl-sleeves.webp";
import customDrawerPaperBoxesImg from "@/assets/sleeves-and-trays/custom-drawer-paper-boxes.webp";
import paperFoodTraysImg from "@/assets/sleeves-and-trays/paper-food-trays.webp";
import hotDogSleevesImg from "@/assets/sleeves-and-trays/hot-dog-sleeves.webp";
import cupSleevesImg from "@/assets/sleeves-and-trays/cup-sleeves.webp";
import coffeeSleevesImg from "@/assets/sleeves-and-trays/coffee-sleeves.webp";
import packagingSleevesImg from "@/assets/sleeves-and-trays/packaging-sleeves.webp";
import soapSleevesImg from "@/assets/sleeves-and-trays/soap-sleeves.webp";
import giftCardSleevesImg from "@/assets/sleeves-and-trays/gift-card-sleeves.webp";
import packagingInsertsImg from "@/assets/sleeves-and-trays/packaging-inserts.webp";
import foamInsertsImg from "@/assets/sleeves-and-trays/foam-inserts.webp";
import slideBoxesImg from "@/assets/sleeves-and-trays/slide-boxes.webp";
import sleeveBoxesImg from "@/assets/sleeves-and-trays/sleeve-boxes.webp";
import customShrinkSleevesImg from "@/assets/sleeves-and-trays/custom-shrink-sleeves.webp";
import soapPackagingSleevesImg from "@/assets/sleeves-and-trays/soap-packaging-sleeves.webp";
import trayBoxesImg from "@/assets/sleeves-and-trays/tray-boxes.webp";
import kraftSleeveBoxesImg from "@/assets/sleeves-and-trays/kraft-sleeve-boxes.webp";
import customConeSleeveImg from "@/assets/sleeves-and-trays/custom-cone-sleeve.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Roll End Tray", image: rollEndTrayImg, description: "Self-locking tray box for retail and food featuring reinforced corners and easy-stacking structural design", isPlaceholder: false },
    { name: "Custom Bowl Sleeves", image: customBowlSleevesImg, description: "Branded sleeves for takeout bowls and containers designed for heat insulation and high-impact food branding", isPlaceholder: false },
    { name: "Custom Drawer Paper Boxes", image: customDrawerPaperBoxesImg, description: "Premium sliding drawer boxes for luxury gifts featuring smooth-glide action and elegant ribbon pull tabs", isPlaceholder: false },
    { name: "Paper Food Trays", image: paperFoodTraysImg, description: "Disposable trays for street food and events designed with moisture-resistant coatings and easy-carry edges", isPlaceholder: false },
    { name: "Hot Dog Sleeves", image: hotDogSleevesImg, description: "Convenient paper sleeves for hot dogs and sausages featuring grease-proof linings and vibrant food graphics", isPlaceholder: false },
    { name: "Cup Sleeves", image: cupSleevesImg, description: "Protective sleeves for hot beverage cups designed with insulating corrugated texture and custom brand marks", isPlaceholder: false },
    { name: "Coffee Sleeves", image: coffeeSleevesImg, description: "Insulating sleeves for coffee cups with custom print featuring recycled materials and superior heat protection", isPlaceholder: false },
    { name: "Packaging Sleeves", image: packagingSleevesImg, description: "Versatile paper sleeves to brand any box or item featuring cost-effective customization and premium finishes", isPlaceholder: false },
    { name: "Soap Sleeves", image: soapSleevesImg, description: "Minimalist packaging band for soap bars featuring elegant textures and organic-style branding for retail", isPlaceholder: false },
    { name: "Gift Card Sleeves", image: giftCardSleevesImg, description: "Small sleeves designed to hold gift cards elegantly featuring precise die-cuts and luxury paper finishes", isPlaceholder: false },
    { name: "Packaging Inserts", image: packagingInsertsImg, description: "Custom inserts to secure products within a box featuring custom-fitted shapes and protective cushioning", isPlaceholder: false },
    { name: "Foam Inserts", image: foamInsertsImg, description: "Protective foam cutouts for delicate items featuring precision laser-cutting for a perfect snug fit", isPlaceholder: false },
    { name: "Slide Boxes", image: slideBoxesImg, description: "Two-piece boxes with a sliding tray mechanism designed for a premium unboxing experience and high security", isPlaceholder: false },
    { name: "Sleeve Boxes", image: sleeveBoxesImg, description: "Tray and sleeve combination for a premium unboxing featuring sleek slide-out action and durable construction", isPlaceholder: false },
    { name: "Custom Shrink Sleeves", image: customShrinkSleevesImg, description: "Full-body labels that shrink to fit container contours featuring 360-degree graphics and tamper evidence", isPlaceholder: false },
    { name: "Soap Packaging Sleeves", image: soapPackagingSleevesImg, description: "Branded wraps for handmade soaps featuring moisture-proof coatings and vibrant full-color custom designs", isPlaceholder: false },
    { name: "Tray Boxes", image: trayBoxesImg, description: "Open top boxes perfect for product display featuring sturdy sidewalls and high-impact interior printing", isPlaceholder: false },
    { name: "Kraft Sleeve Boxes", image: kraftSleeveBoxesImg, description: "Eco-friendly kraft slide boxes for a natural look featuring biodegradable material and minimalist branding", isPlaceholder: false },
    { name: "Custom Cone Sleeve", image: customConeSleeveImg, description: "Printed paper sleeves for ice cream cones featuring food-safe materials and colorful child-friendly designs", isPlaceholder: false },
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
                                        className="w-full h-full object-cover" loading="lazy"
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
                                    <div className="w-full aspect-square overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${product.isPlaceholder ? 'opacity-80' : ''}`} loading="lazy"
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

            {/* Brand Rating */}

            <BrandRating />

            <QuoteForm />

            <SEOContent>

                <h2>The Ultimate Guide to Sleeves And Trays</h2>
                <p>
                    Elevate your brand presence with our premium <strong>Sleeves And Trays</strong>.
                    Designed to meet the highest standards of quality and aesthetics, our solutions provide the perfect blend of functionality and style.
                    Whether for retail, shipping, or promotional use, we deliver products that effectively communicate your brand's value to your customers.
                </p>

                <h3>Premium Material Quality</h3>
                <p>
                    We believe that quality starts with the right materials. Our Sleeves And Trays are manufactured using top-tier stocks selected for their durability and finish.
                    Rigorous quality control ensures consistent performance, whether you need weather resistance, structural strength, or a refined surface for printing.
                </p>
                <ul>
                    <li><strong>Durable Construction:</strong> Built to withstand handling and transit without compromising appearance.</li>
                    <li><strong>Eco-Friendly Options:</strong> Sustainable choices available for environmentally conscious brands.</li>
                    <li><strong>Versatile Substrates:</strong> A wide range of material options tailored to your specific application needs.</li>
                </ul>

                <h3>Customization & Printing Excellence</h3>
                <p>
                    Your brand is unique, and your packaging should be too. We offer comprehensive customization options to bring your vision to life.
                    Our advanced printing technology ensures sharp, vibrant visuals that capture attention.
                </p>
                <ul>
                    <li><strong>Full Color Printing:</strong> High-resolution reproduction of your logos and varied artwork.</li>
                    <li><strong>Custom Sizes & Shapes:</strong> Tailored dimensions to fit your specific requirements perfectly.</li>
                    <li><strong>Professional Finishes:</strong> Options like lamination, coating, and texturing to enhance the final look and feel.</li>
                </ul>

                <h3>Why Partner With Us?</h3>
                <p>
                    We are dedicated to your success. From design consultation to final delivery, our team supports you every step of the way.
                    Enjoy competitive wholesale pricing, reliable turnaround times, and a commitment to quality that helps your business grow.
                </p>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default SleevesAndTrays;
