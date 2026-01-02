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
import walletBoxes from "@/assets/rigid-boxes/wallet-boxes.jpg";
import flipTopBoxes from "@/assets/rigid-boxes/flip-top-boxes.jpg";
import rigidGiftBoxes from "@/assets/rigid-boxes/rigid-gift-boxes.jpg";
import creditCardBoxes from "@/assets/rigid-boxes/credit-card-boxes.jpg";
import rigidSetupBoxes from "@/assets/rigid-boxes/rigid-setup-boxes.jpg";
import ribbonBoxes from "@/assets/rigid-boxes/ribbon-boxes.jpg";
import magneticClosureBoxes from "@/assets/rigid-boxes/magnetic-closure-boxes.jpg";
import rigidPaperBoxes from "@/assets/rigid-boxes/rigid-paper-boxes.jpg";
import flipTopMagneticClosure from "@/assets/rigid-boxes/flip-top-magnetic-closure.jpg";
import heroImage from "@/assets/rigid-boxes/rigid-boxes-hero.jpg";

// Product list for dropdown
const rigidBoxProducts = [
    "Wallet Boxes",
    "Flip Top Boxes",
    "Rigid Gift Boxes",
    "Credit Card Boxes",
    "Rigid Setup Boxes",
    "Ribbon Boxes",
    "Magnetic Closure Boxes",
    "Rigid Paper Boxes",
    "Flip Top Boxes With Magnetic Closure",
];

const relatedProducts = [
    { name: "Wallet Boxes", image: walletBoxes, description: "Premium wallet packaging" },
    { name: "Flip Top Boxes", image: flipTopBoxes, description: "Elegant flip-top rigid boxes" },
    { name: "Rigid Gift Boxes", image: rigidGiftBoxes, description: "Luxury gift box solutions" },
    { name: "Credit Card Boxes", image: creditCardBoxes, description: "Secure credit card packaging", useCover: true },
    { name: "Rigid Setup Boxes", image: rigidSetupBoxes, description: "High-end setup boxes", useCover: true },
    { name: "Ribbon Boxes", image: ribbonBoxes, description: "Decorative ribbon closure boxes", useCover: true },
    { name: "Magnetic Closure Boxes", image: magneticClosureBoxes, description: "Premium magnetic closure packaging", useCover: true },
    { name: "Rigid Paper Boxes", image: rigidPaperBoxes, description: "Durable rigid paperboard boxes", useCover: true },
    { name: "Flip Top Boxes With Magnetic Closure", image: flipTopMagneticClosure, description: "Flip-top with magnetic seal", useCover: true },
];

const RigidBoxes = () => {
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
                                <BreadcrumbPage>Rigid Boxes</BreadcrumbPage>
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
                                Rigid Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Elevate your brand with premium rigid boxes crafted from thick, non-collapsible paperboard.
                                Perfect for luxury goods, high-end gifts, and electronics, our rigid packaging delivers superior strength and perceived value.
                                From magnetic closure boxes to elegant ribbon designs, customize your premium packaging solution.
                            </p>
                            <div className="max-w-lg">
                                <div className="flex justify-center lg:justify-start">
                                    <div className="w-full max-w-[480px] h-[300px] rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={heroImage}
                                            alt="Rigid Boxes Collection"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={rigidBoxProducts} />
                        </div>
                    </div>

                    {/* Brand Rating Section */}
                    <BrandRating />

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Discover Premium Rigid Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom rigid boxes designed to
                            showcase your products with elegance, provide exceptional protection, and deliver a premium unboxing experience.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                >
                                    <CardContent className="p-0">
                                        <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className={`h-full w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300`}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                    <span className="text-gray-400 text-xs">Image Placeholder</span>
                                                </div>
                                            )}
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
            </main>

            {/* Main Quote Form at Bottom */}
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default RigidBoxes;
