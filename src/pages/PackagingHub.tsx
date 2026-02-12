import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// New Knowledge Hub Components
import PackagingGuide from "@/components/packaging-hub/PackagingGuide";
import BoxAnatomy from "@/components/packaging-hub/BoxAnatomy";
import SizeGuide from "@/components/packaging-hub/SizeGuide";
import PrintingTechnologies from "@/components/packaging-hub/PrintingTechnologies";
import Sustainability from "@/components/packaging-hub/Sustainability";
import ProcessFlow from "@/components/packaging-hub/ProcessFlow";

// Images
import rigidHero from "@/assets/rigid-boxes/rigid-boxes-hero-v2.webp";
import cosmeticHero from "@/assets/cosmetic-boxes/hero.webp";
import mailerBoxes from "@/assets/mailer-boxes/mailer-boxes-hero.webp";
import mylarBags from "@/assets/mylar-bags/mylar-bags-hero.webp";
import apparelHero from "@/assets/apparel-boxes/Apparel boxe hero.png";
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
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20">
            <Header />

            {/* Hero Section */}
            <section className="mt-[80px] pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-white/90">
                        Packaging <span className="text-primary font-semibold">Hub</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        The ultimate resource for custom packaging knowledge. <br className="hidden md:block" />
                        Explore materials, printing technologies, and sustainable solutions.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-7 rounded-full text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105"
                            onClick={() => {
                                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Start Your Project
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-black border-black/20 hover:bg-white/10 hover:text-white px-10 py-7 rounded-full text-lg backdrop-blur-sm transition-all hover:scale-105"
                            onClick={() => {
                                const searchInput = document.getElementById('search-input');
                                if (searchInput) {
                                    searchInput.focus();
                                    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                            }}
                        >
                            Browse Products
                        </Button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Area - Now Below Hero */}
            <div className="border-b border-slate-100 bg-white">
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

            {/* Main Knowledge Center Components */}
            <main>
                <PackagingGuide />
                <BoxAnatomy />
                <PrintingTechnologies />
                <SizeGuide />
                <ProcessFlow />
                <Sustainability />

                {/* Browse Products Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Browse by Category</h2>
                            <p className="text-lg text-slate-600">Find the perfect packaging for your industry.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="group cursor-pointer block"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl mb-4">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                            {item.category}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">Customizable</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-16">
                            <Button
                                variant="outline"
                                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                View All Products
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Quote Form Section */}
            <section id="quote-form" className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <QuoteForm />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PackagingHub;
