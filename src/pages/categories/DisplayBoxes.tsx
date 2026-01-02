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
import brochureDisplayHolder from "@/assets/display-boxes/brochure-display-holder.jpg";
import customCandleDisplayBoxes from "@/assets/display-boxes/custom-candle-display-boxes.jpg";
import customPreRollDisplayBoxes from "@/assets/display-boxes/custom-pre-roll-display-boxes.jpg";
import vapeDisplayBoxes from "@/assets/display-boxes/vape-display-boxes.jpg";
import cardboardDisplayBoxes from "@/assets/display-boxes/cardboard-display-boxes.jpg";
import counterDisplayBoxes from "@/assets/display-boxes/counter-display-boxes.jpg";
import jewelryDisplayBoxes from "@/assets/display-boxes/jewelry-display-boxes.jpg";
import cbdDisplayBoxes from "@/assets/display-boxes/cbd-display-boxes.jpg";
import lollipopDisplayBoxes from "@/assets/display-boxes/lollipop-display-boxes.jpg";
import cigaretteDisplayBoxes from "@/assets/display-boxes/cigarette-display-boxes.jpg";
import cosmeticDisplayBoxes from "@/assets/display-boxes/cosmetic-display-boxes.jpg";
import clearLidBoxes from "@/assets/display-boxes/clear-lid-boxes.jpg";
import productDisplayBoxes from "@/assets/display-boxes/product-display-boxes.jpg";
import countertopDisplayBoxes from "@/assets/display-boxes/countertop-display-boxes.jpg";
import watchDisplayBoxes from "@/assets/display-boxes/watch-display-boxes.jpg";
import healthCounterDisplayBoxes from "@/assets/display-boxes/health-counter-display-boxes.jpg";
import candyDisplayBoxes from "@/assets/display-boxes/candy-display-boxes.jpg";
import displayBoxesHero from "@/assets/display-boxes/display-boxes-hero.png";


const relatedProducts = [
    { name: "Brochure Display Holder", image: brochureDisplayHolder, description: "Professional holders for brochures and flyers." },
    { name: "Custom Candle Display Boxes", image: customCandleDisplayBoxes, description: "Attractive display boxes for candles." },
    { name: "Custom Pre Roll Display Boxes", image: customPreRollDisplayBoxes, description: "Secure display packaging for pre-rolls." },
    { name: "Vape Display Boxes", image: vapeDisplayBoxes, description: "Custom displays for vape products." },
    { name: "Cardboard Display Boxes", image: cardboardDisplayBoxes, description: "Eco-friendly cardboard display solutions." },
    { name: "Counter Display Boxes", image: counterDisplayBoxes, description: "Eye-catching boxes for counter placement." },
    { name: "Jewelry Display Boxes", image: jewelryDisplayBoxes, description: "Elegant displays for jewelry items." },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Custom packaging for CBD product displays." },
    { name: "Lollipop Display Boxes", image: lollipopDisplayBoxes, description: "Fun and functional lollipop displays." },
    { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, description: "Organized display units for cigarette packs." },
    { name: "Cosmetic Display Boxes", image: cosmeticDisplayBoxes, description: "Stylish displays for cosmetic lines." },
    { name: "Clear Lid Boxes", image: clearLidBoxes, description: "Boxes with clear lids for product visibility." },
    { name: "Product Display Boxes", image: productDisplayBoxes, description: "Versatile boxes for various retail products." },
    { name: "Countertop Display Boxes", image: countertopDisplayBoxes, description: "Compact displays for limited counter space." },
    { name: "Watch Display Boxes", image: watchDisplayBoxes, description: "Premium display boxes for watches." },
    { name: "Health Counter Display Boxes", image: healthCounterDisplayBoxes, description: "Clean and professional health product displays." },
    { name: "Candy Display Boxes", image: candyDisplayBoxes, description: "Bright and appealing candy display boxes." },
];

const productOptions = [
    "Brochure Display Holder",
    "Custom Candle Display Boxes",
    "Custom Pre Roll Display Boxes",
    "Vape Display Boxes",
    "Cardboard Display Boxes",
    "Counter Display Boxes",
    "Jewelry Display Boxes",
    "CBD Display Boxes",
    "Lollipop Display Boxes",
    "Cigarette Display Boxes",
    "Cosmetic Display Boxes",
    "Clear Lid Boxes",
    "Product Display Boxes",
    "Countertop Display Boxes",
    "Watch Display Boxes",
    "Health Counter Display Boxes",
    "Candy Display Boxes",
];

const DisplayBoxes = () => {
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
                                <BreadcrumbPage>Display Boxes</BreadcrumbPage>
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
                                Display Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Custom, attractive, and robust packaging solutions designed to showcase products effectively in retail and counter settings.
                            </p>
                            <div className="pt-4">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={displayBoxesHero}
                                        alt="Display Boxes Hero"
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
                            Display Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our comprehensive selection of display packaging solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Product image placeholder - intentionally empty */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
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

export default DisplayBoxes;
