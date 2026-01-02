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

// Product Images
import reverseTuckEnd from "@/assets/tuck-boxes/reverse-tuck-end.png";
import reverseTuckEndBoxes from "@/assets/tuck-boxes/reverse-tuck-end-boxes.png";
import straightTuckEnd from "@/assets/tuck-boxes/straight-tuck-end.png";
import straightTuckEndBoxes from "@/assets/tuck-boxes/straight-tuck-end-boxes.png";
import tuckTopBox from "@/assets/tuck-boxes/tuck-top-box.png";
import tuckTopBoxes from "@/assets/tuck-boxes/tuck-top-boxes.png";
import tuckTopSnapBottom from "@/assets/tuck-boxes/tuck-top-snap-bottom-box.png";
import tuckTopAutoBottom from "@/assets/tuck-boxes/tuck-top-auto-bottom-box.png";
import tuckFrontBoxes from "@/assets/tuck-boxes/tuck-front-boxes.png";
import doubleWallTuckFront from "@/assets/tuck-boxes/double-wall-tuck-front.png";
import doubleWallTuckTopBoxes from "@/assets/tuck-boxes/double-wall-tuck-top-boxes.png";
import straightTuckHangTab from "@/assets/tuck-boxes/straight-tuck-with-hang-tab.png";
import reverseTuckHangTab from "@/assets/tuck-boxes/reverse-tuck-with-hang-tab.png";
import straightTuckWindow from "@/assets/tuck-boxes/straight-tuck-with-customize-window.png";
import reverseTuckWindow from "@/assets/tuck-boxes/reverse-tuck-with-customize-window.png";

const tuckBoxProducts = [
    "Reverse Tuck End",
    "Reverse Tuck End Boxes",
    "Straight Tuck End",
    "Straight Tuck End Boxes",
    "Tuck Top Box",
    "Tuck Top Boxes",
    "Tuck Top Snap Bottom Box",
    "Tuck Top Auto Bottom Box",
    "Tuck Front Boxes",
    "Double Wall Tuck Front",
    "Double Wall Tuck Top Boxes",
    "Straight Tuck with Hang Tab",
    "Reverse Tuck with Hang Tab",
    "Straight Tuck with Customize Window",
    "Reverse Tuck with Customize Window",
];

const relatedProducts = [
    { name: "Reverse Tuck End", image: reverseTuckEnd, description: "Classic reverse tuck closure for secure packaging." },
    { name: "Reverse Tuck End Boxes", image: reverseTuckEndBoxes, description: "Versatile reverse tuck boxes for various products." },
    { name: "Straight Tuck End", image: straightTuckEnd, description: "Clean straight tuck design for a premium look." },
    { name: "Straight Tuck End Boxes", image: straightTuckEndBoxes, description: "Standard straight tuck packaging solutions." },
    { name: "Tuck Top Box", image: tuckTopBox, description: "Simple and effective tuck top closure." },
    { name: "Tuck Top Boxes", image: tuckTopBoxes, description: "Reliable tuck top boxes for retail display." },
    { name: "Tuck Top Snap Bottom Box", image: tuckTopSnapBottom, description: "Secure snap bottom with easy tuck top access." },
    { name: "Tuck Top Auto Bottom Box", image: tuckTopAutoBottom, description: "Quick-assembly auto bottom with tuck top." },
    { name: "Tuck Front Boxes", image: tuckFrontBoxes, description: "Durable tuck front design for enhanced protection." },
    { name: "Double Wall Tuck Front", image: doubleWallTuckFront, description: "Extra sturdy double wall construction." },
    { name: "Double Wall Tuck Top Boxes", image: doubleWallTuckTopBoxes, description: "Reinforced top tuck for heavier items." },
    { name: "Straight Tuck with Hang Tab", image: straightTuckHangTab, description: "Retail-ready with integrated hang tab." },
    { name: "Reverse Tuck with Hang Tab", image: reverseTuckHangTab, description: "Reverse tuck style with convenient hang tab." },
    { name: "Straight Tuck with Customize Window", image: straightTuckWindow, description: "Showcase products with a custom clear window." },
    { name: "Reverse Tuck with Customize Window", image: reverseTuckWindow, description: "Reverse tuck box featuring a product window." },
];

const TuckBoxes = () => {
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
                                    <Link to="/shapes-styles">Shapes & Style</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Tuck Boxes</BreadcrumbPage>
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
                                Tuck Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover versatile tuck boxes featuring easy-to-assemble designs with standard tuck-in flaps.
                                Perfect for small to medium-sized products across retail and pharmaceutical industries, our tuck packaging offers convenience and reliability.
                                From reverse tuck end to auto-lock styles, customize your packaging solution.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={tuckTopBoxes}
                                        alt="Tuck Boxes Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={tuckBoxProducts} />
                        </div>
                    </div>

                    {/* Brand Rating Section */}
                    <BrandRating />

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Versatile Tuck Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom tuck boxes designed to
                            provide easy assembly, secure closure, and professional presentation for your products.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                >
                                    <CardContent className="p-0">
                                        <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                            />
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

export default TuckBoxes;
