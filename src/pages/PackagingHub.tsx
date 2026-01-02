import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
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

// Icons for brand placeholder
import { Circle, User } from "lucide-react";

// Images
import cardboardHero from "@/assets/cardboard-boxes-hero.png";
import rigidHero from "@/assets/rigid-boxes/rigid-boxes-hero.jpg";
import cosmeticHero from "@/assets/cosmetic-boxes-hero.png";
import apparelHero from "@/assets/apparel-boxes-hero.png";
import cannabisTinctureBoxes from "@/assets/cannabis-products/cannabis-tincture-boxes.jpg";
import hairExtensionBoxes from "@/assets/cosmetic-boxes/hair-extension-boxes.png";
import glassCandleJars from "@/assets/primary-packaging/glass-candle-jars.jpg";
import chocolateBoxes from "@/assets/chocolate-boxes-hero.png"; // Assuming exist or similar
import kraftBoxes from "@/assets/cardboard-boxes-hero.png"; // Reusing for now to ensure load, can swap if custom-kraft exists

const inspirationItems = [
    {
        title: "Cardboard Boxes",
        author: "WK Creative",
        image: cardboardHero,
    },
    {
        title: "Straight Tuck Tincture Box",
        author: "Green IVe",
        image: cannabisTinctureBoxes,
    },
    {
        title: "Rigid Boxes",
        author: "Veronix",
        image: rigidHero,
    },
    {
        title: "Cosmetic Tuck Boxes",
        author: "Belapel Cosmetics",
        image: cosmeticHero,
    },
    {
        title: "Hair Extension Packaging",
        author: "Luxe Locks",
        image: hairExtensionBoxes,
    },
    {
        title: "Luxury Candle Box",
        author: "Lumina Wax",
        image: glassCandleJars,
    },
    {
        title: "Apparel Gift Boxes",
        author: "Fashion Forward",
        image: apparelHero,
    },
    {
        title: "Kraft Eco Boxes",
        author: "Boldora",
        image: kraftBoxes, // Reusing cardboard hero
    },
];

const PackagingHub = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Breadcrumb Area */}
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
                                <BreadcrumbPage>Packaging Hub</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Main Content */}
            <main className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Headline */}
                    <div className="mb-12 text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Packaging Hub.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light">
                            Packaging inspiration and solutions for your industry.
                        </p>
                    </div>

                    {/* Inspiration Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {inspirationItems.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                {/* Image Card */}
                                <Card className="overflow-hidden border-none shadow-none bg-transparent mb-4">
                                    <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Overlay slightly on hover for effect? Optional. Keeping clean as requested. */}
                                    </div>
                                </Card>

                                {/* Content */}
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-[#991b1b] leading-tight group-hover:underline decoration-[#991b1b]/30 underline-offset-4 transition-all">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                                            {/* Placeholder circular logo */}
                                            <User className="w-3 h-3 text-gray-400" />
                                        </div>
                                        <span className="text-sm text-gray-500 font-medium">
                                            {item.author}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Quote Form Section (Light Background) */}
            <section className="bg-secondary/20 py-16 border-t border-border/50">
                <div className="container mx-auto px-4">
                    <QuoteForm />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PackagingHub;
