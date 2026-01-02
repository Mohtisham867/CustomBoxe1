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

// Placeholder images - using generic placeholders initially
// Ideally these should be replaced with actual assets when available
import cardstockHero from "@/assets/corrugated-boxes-hero.png"; // Placeholder
import whiteCardstock from "@/assets/white-corrugated-boxes.png"; // Placeholder
import kraftCardstock from "@/assets/kraft-corrugated-boxes.png"; // Placeholder

const cardstockProducts = [
    "White Cardstock Boxes",
    "Kraft Cardstock Boxes",
    "Printed Cardstock Boxes",
    "Custom Shape Cardstock",
];

const relatedProducts = [
    { name: "White Cardstock Boxes", image: whiteCardstock, description: "Smooth, clean white finish for premium retail packaging." },
    { name: "Kraft Cardstock Boxes", image: kraftCardstock, description: "Natural look, lightweight and eco-friendly." },
    { name: "Printed Cardstock Boxes", image: whiteCardstock, description: "High-quality printing surface for vibrant branding." },
    { name: "Custom Shape Cardstock", image: whiteCardstock, description: "Die-cut to any shape for unique product presentation." },
];

const CardstockBoxes = () => {
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
                                <BreadcrumbPage>Cardstock Boxes</BreadcrumbPage>
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
                                Custom Cardstock Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Lightweight, versatile, and excellent for printing. Our custom cardstock boxes are the perfect choice for retail products, cosmetics, and lightweight gifts, offering a premium feel and vibrant print quality.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={cardstockHero}
                                        alt="Cardstock Boxes Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Instant Quote Form */}
                            <div className="flex justify-end">
                                <InstantQuoteFormCompact customProducts={cardstockProducts} />
                            </div>
                        </div>

                        {/* Brand Rating Section - Outside the grid column logic if meant to be full width? 
                            Wait, the previous files had this nested structure which I'm replicating to match style.
                            Actually, putting BrandRating here makes it part of the grid if not carefully placed.
                            However, based on CorrugatedBoxes, it seems they want it nested in that main container structure.
                            But standard practice suggests breaking out of the 2-col grid.
                            Ref CorrugatedBoxes: It was inside layout. I will place it after the grid for better structure here, 
                            but to match previous files I might need to conform. 
                            Let's place it outside the grid logic -> actually CorrugatedBoxes had a weird structure. 
                            I'll stick to a clean structure here: Grid for Hero, then new Sections.
                        */}
                    </div>

                    <BrandRating />

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Premium Cardstock Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our range of cardstock packaging options, designed for elegance and functionality.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CardstockBoxes;
