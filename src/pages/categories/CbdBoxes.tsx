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

import heroImage from "@/assets/cbd-boxes-hero.png";
import cbdCapsuleBoxes from "@/assets/cbd-products/custom-cbd-capsule-boxes.jpg";
import cbdCreamBoxes from "@/assets/cbd-products/custom-cbd-cream-boxes.jpg";
import cbdLotionBoxes from "@/assets/cbd-products/custom-cbd-lotion-boxes.jpg";
import cbdOilBoxes from "@/assets/cbd-products/cbd-oil-boxes.jpg";
import essentialOilBoxes from "@/assets/cbd-products/essential-oil-boxes.jpg";
import cbdIsolateBoxes from "@/assets/cbd-products/custom-cbd-isolate-boxes.jpg";
import cbdPodBoxes from "@/assets/cbd-products/custom-cbd-pod-boxes.jpg";
import cbdLollipopBoxes from "@/assets/cbd-products/cbd-lollipop-boxes.jpg";
import cbdGummiesBoxes from "@/assets/cbd-products/cbd-gummies-boxes.jpg";
import delta8ThcBoxes from "@/assets/cbd-products/delta-8-thc-boxes.jpg";
import cbdDisplayBoxes from "@/assets/cbd-products/cbd-display-boxes.jpg";
import tinctureBoxes from "@/assets/cbd-products/tincture-boxes.jpg";
import bluntBoxes from "@/assets/cbd-products/blunt-boxes.jpg";
import cbdTinctureBoxes from "@/assets/cbd-products/cbd-tincture-boxes.jpg";
import dropperBottleBoxes from "@/assets/cbd-products/dropper-bottle-boxes.jpg";
import cbdChocolateBoxes from "@/assets/cbd-products/cbd-chocolate-boxes.jpg";
import cbdMailerBoxes from "@/assets/cbd-products/cbd-mailer-boxes.jpg";
import cbdHempOilBoxes from "@/assets/cbd-products/cbd-hemp-oil-boxes.jpg";
import cbdSoapBoxes from "@/assets/cbd-products/cbd-soap-boxes.jpg";
import delta9Packaging from "@/assets/cbd-products/delta-9-packaging.jpg";
import cbdVapeBoxes from "@/assets/cbd-products/cbd-vape-boxes.jpg";
import cbdPreRollBoxes from "@/assets/cbd-products/cbd-pre-roll-boxes.jpg";
import concentratePackaging from "@/assets/cbd-products/concentrate-packaging.jpg";
import cbdSubscriptionBoxes from "@/assets/cbd-products/cbd-subscription-boxes.jpg";
import cbdBathBombBoxes from "@/assets/cbd-products/cbd-bath-bomb-boxes.jpg";

// Placeholder image for new products
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f0f0f0' width='400' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

const productOptions = [
    "Custom CBD Capsule Boxes",
    "Custom CBD Cream Boxes",
    "Custom CBD Lotion Boxes",
    "CBD Oil Boxes",
    "Essential Oil Boxes",
    "Custom CBD Isolate Boxes",
    "Custom CBD Pod Boxes",
    "CBD Lollipop Boxes",
    "CBD Gummies Boxes",
    "Delta 8 THC Boxes",
    "CBD Display Boxes",
    "Tincture Boxes",
    "Blunt Boxes",
    "CBD Tincture Boxes",
    "Dropper Bottle Boxes",
    "CBD Chocolate Boxes",
    "CBD Mailer Boxes",
    "CBD Hemp Oil Boxes",
    "CBD Soap Boxes",
    "Delta 9 Packaging",
    "CBD Vape Boxes",
    "CBD Pre-Roll Boxes",
    "Concentrate Packaging",
    "CBD Subscription Boxes",
    "CBD Bath Bomb Boxes",
];

const relatedProducts = [
    { name: "Custom CBD Capsule Boxes", image: cbdCapsuleBoxes, description: "Secure packaging for CBD capsules and supplements." },
    { name: "Custom CBD Cream Boxes", image: cbdCreamBoxes, description: "Premium boxes for CBD creams and topicals." },
    { name: "Custom CBD Lotion Boxes", image: cbdLotionBoxes, description: "Elegant packaging for CBD lotions and heavy bottles." },
    { name: "CBD Oil Boxes", image: cbdOilBoxes, description: "Protective boxes for CBD oil droppers and tinctures." },
    { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "Custom packaging designed for essential oil bottles." },
    { name: "Custom CBD Isolate Boxes", image: cbdIsolateBoxes, description: "Specialized packaging for CBD isolate containers." },
    { name: "Custom CBD Pod Boxes", image: cbdPodBoxes, description: "Sleek boxes for CBD vape pods and cartridges." },
    { name: "CBD Lollipop Boxes", image: cbdLollipopBoxes, description: "Fun and safe packaging for CBD-infused lollipops." },
    { name: "CBD Gummies Boxes", image: cbdGummiesBoxes, description: "Attractive packaging for CBD gummies and edibles." },
    { name: "Delta 8 THC Boxes", image: delta8ThcBoxes, description: "Compliant packaging for Delta 8 THC products." },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Eye-catching display boxes for retail CBD products." },
    { name: "Tincture Boxes", image: tinctureBoxes, description: "Protective packaging for tincture bottles." },
    { name: "Blunt Boxes", image: bluntBoxes, description: "Custom boxes for pre-rolled blunts." },
    { name: "CBD Tincture Boxes", image: cbdTinctureBoxes, description: "Specialized boxes for CBD tincture droppers." },
    { name: "Dropper Bottle Boxes", image: dropperBottleBoxes, description: "Secure packaging for dropper bottles." },
    { name: "CBD Chocolate Boxes", image: cbdChocolateBoxes, description: "Premium boxes for CBD-infused chocolates." },
    { name: "CBD Mailer Boxes", image: cbdMailerBoxes, description: "Durable shipping boxes for CBD products." },
    { name: "CBD Hemp Oil Boxes", image: cbdHempOilBoxes, description: "Custom packaging for hemp oil products." },
    { name: "CBD Soap Boxes", image: cbdSoapBoxes, description: "Elegant boxes for CBD-infused soaps." },
    { name: "Delta 9 Packaging", image: delta9Packaging, description: "Compliant packaging for Delta 9 products." },
    { name: "CBD Vape Boxes", image: cbdVapeBoxes, description: "Sleek boxes for CBD vape products." },
    { name: "CBD Pre-Roll Boxes", image: cbdPreRollBoxes, description: "Protective packaging for CBD pre-rolls." },
    { name: "Concentrate Packaging", image: concentratePackaging, description: "Specialized boxes for CBD concentrates." },
    { name: "CBD Subscription Boxes", image: cbdSubscriptionBoxes, description: "Custom boxes for CBD subscription services." },
    { name: "CBD Bath Bomb Boxes", image: cbdBathBombBoxes, description: "Beautiful packaging for CBD bath bombs." },
];

const CbdBoxes = () => {
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
                                <BreadcrumbPage>Custom CBD Boxes</BreadcrumbPage>
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
                                Custom CBD Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Elevate your CBD brand with premium, compliant custom packaging. Our child-resistant and
                                eco-friendly boxes ensure safety and freshness for oils, creams, and edibles, while
                                showcasing your unique brand identity with professional printing and high-quality finishes.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Custom CBD Boxes"
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
                            Prove The Quality Experience Of CBD Products
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Discover our range of compliant CBD packaging solutions designed for safety, freshness, and brand impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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

export default CbdBoxes;
