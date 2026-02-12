import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// Images
import rigidHero from "@/assets/rigid-boxes/rigid-boxes-hero.webp";
import cosmeticHero from "@/assets/cosmetic-boxes-hero.webp";
import mailerBoxes from "@/assets/mailer-boxes/mailer-boxes-hero.webp";
import mylarBags from "@/assets/mylar-bags/mylar-bags-hero.webp";
import apparelHero from "@/assets/apparel-boxes/hero.webp";
import cannabisHero from "@/assets/cannabis-packaging/hero.webp";
import foodBoxes from "@/assets/food-boxes/hero.webp";
import jewelryBoxes from "@/assets/jewelry-boxes-hero.webp";
import kraftBoxes from "@/assets/kraft-boxes/kraft-boxes-hero-v2.webp";
import soapBoxes from "@/assets/soap-boxes/soap hero.webp";
import giftBoxes from "@/assets/gift-boxes/gift hero.webp";
import holographicBoxes from "@/assets/holographic-boxes-hero.webp";
import preRollBoxes from "@/assets/pre-roll-boxes/hero (pre).webp";
import displayBoxes from "@/assets/display-boxes/display-boxes-hero.webp";
import pharmaPackaging from "@/assets/pharma-packaging/pharma-packaging-hero.webp";
import fragranceBoxes from "@/assets/fragrance-boxes-hero.webp";
import bakeryBoxes from "@/assets/bakery-products/Hero.webp";
import retailBoxes from "@/assets/retail-boxes/hero.webp";

const productItems = [
    {
        title: "Luxury Rigid Boxes",
        category: "Premium",
        image: rigidHero,
        link: "/industries/rigid-boxes",
    },
    {
        title: "Custom Mailer Boxes",
        category: "E-Commerce",
        image: mailerBoxes,
        link: "/industries/mailer-boxes",
    },
    {
        title: "Custom Mylar Bags",
        category: "Cannabis",
        image: mylarBags,
        link: "/categories/custom-mylar-bags",
    },
    {
        title: "Cosmetic Packaging",
        category: "Beauty",
        image: cosmeticHero,
        link: "/industries/cosmetic-boxes",
    },
    {
        title: "Apparel Boxes",
        category: "Fashion",
        image: apparelHero,
        link: "/industries/apparel-boxes",
    },
    {
        title: "Cannabis Packaging",
        category: "Cannabis",
        image: cannabisHero,
        link: "/industries/cannabis-packaging",
    },
    {
        title: "Custom Food Boxes",
        category: "Food & Beverage",
        image: foodBoxes,
        link: "/industries/food-boxes",
    },
    {
        title: "Custom Jewelry Boxes",
        category: "Luxury",
        image: jewelryBoxes,
        link: "/industries/jewelry-boxes",
    },
    {
        title: "Eco-Friendly Kraft Boxes",
        category: "Sustainable",
        image: kraftBoxes,
        link: "/industries/custom-kraft-boxes",
    },
    {
        title: "Custom Soap Boxes",
        category: "Beauty",
        image: soapBoxes,
        link: "/industries/soap-boxes",
    },
    {
        title: "Premium Gift Boxes",
        category: "Special Edition",
        image: giftBoxes,
        link: "/industries/gift-boxes",
    },
    {
        title: "Holographic Luxury Boxes",
        category: "Premium",
        image: holographicBoxes,
        link: "/industries/holographic-boxes",
    },
    {
        title: "Pre Roll Boxes",
        category: "Cannabis",
        image: preRollBoxes,
        link: "/industries/pre-roll-boxes",
    },
    {
        title: "Retail Display Boxes",
        category: "Retail",
        image: displayBoxes,
        link: "/industries/display-boxes",
    },
    {
        title: "Pharmaceutical Packaging",
        category: "Healthcare",
        image: pharmaPackaging,
        link: "/industries/pharma-packaging",
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
            <main className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Enhanced Headline */}
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                            Packaging Hub
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                            Discover premium packaging solutions and design inspiration for every industry. From luxury branding to sustainable options.
                        </p>
                    </div>

                    {/* Professional Grid - 3 columns on desktop, 1 on mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {productItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="group cursor-pointer block"
                            >
                                {/* Image Card with Enhanced Hover */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-2xl mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content with Enhanced Typography */}
                                <div className="space-y-2">
                                    {/* Category Label */}
                                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                                        {item.category}
                                    </p>

                                    {/* Product Title */}
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-16">
                        <Button
                            variant="outline"
                            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                        >
                            Load More
                        </Button>
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
