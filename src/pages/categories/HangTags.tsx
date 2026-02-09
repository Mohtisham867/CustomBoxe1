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
import hangTagsHero from "@/assets/hang-tags/hang-tags-hero.webp";

import customDoorHangers from "@/assets/hang-tags/custom-door-hangers.webp";
import christmasTags from "@/assets/hang-tags/christmas-tags.webp";
import giftTags from "@/assets/hang-tags/gift-tags.webp";
import paperTags from "@/assets/hang-tags/paper-tags.webp";
import clothingHangTags from "@/assets/hang-tags/clothing-hang-tags.webp";
import jewelryHangTags from "@/assets/hang-tags/jewelry-hang-tags.webp";
import customBookmarks from "@/assets/hang-tags/custom-bookmarks.webp";
import shippingTags from "@/assets/hang-tags/shipping-tags.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Custom Door Hangers", image: customDoorHangers, description: "Professional door hangers for marketing and alerts designed with durable cardstock and custom die-cut holes" },
    { name: "Christmas Tags", image: christmasTags, description: "Festive tags for holiday gifts and products featuring seasonal graphics and premium twine attachment holes" },
    { name: "Gift Tags", image: giftTags, description: "Personalized tags for special occasions designed to add a thoughtful touch to any gift or branded package" },
    { name: "Paper Tags", image: paperTags, description: "Versatile paper tags for retail and labeling featuring high-quality print surfaces and multiple string options" },
    { name: "Clothing Hang Tags", image: clothingHangTags, description: "Brand-enhancing tags for apparel and garments designed to convey quality and vital brand information at a glance" },
    { name: "Jewelry Hang Tags", image: jewelryHangTags, description: "Elegant small tags for jewelry items featuring precise die-cutting and smooth surfaces for price or brand marks" },
    { name: "Custom Bookmarks", image: customBookmarks, description: "Durable and creative bookmarks for readers featuring vibrant double-sided printing and premium protective coatings" },
    { name: "Shipping Tags", image: shippingTags, description: "Robust tags for identifying shipping items engineered to withstand transit rigors with reinforced attachment points" },
];

const productOptions = relatedProducts.map(p => p.name);

const HangTags = () => {
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
                                <BreadcrumbPage>Hang Tags</BreadcrumbPage>
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
                                Hang Tags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Premium custom hang tags for branding, retail, and events. Available in various shapes, sizes, and materials to perfectly complement your products and packaging.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={hangTagsHero}
                                        alt="Hang Tags Hero"
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
                            Explore Our Tags
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Discover our versatile collection of hang tags and bookmarks designed to elevate your brand identity.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                                        {/* Product image placeholder */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
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

            {/* Brand Rating */}

            <BrandRating />

            <QuoteForm />

            <SEOContent>

                <h2>The Ultimate Guide to Hang Tags</h2>
                <p>
                    Elevate your brand presence with our premium <strong>Hang Tags</strong>.
                    Designed to meet the highest standards of quality and aesthetics, our solutions provide the perfect blend of functionality and style.
                    Whether for retail, shipping, or promotional use, we deliver products that effectively communicate your brand's value to your customers.
                </p>

                <h3>Premium Material Quality</h3>
                <p>
                    We believe that quality starts with the right materials. Our Hang Tags are manufactured using top-tier stocks selected for their durability and finish.
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

export default HangTags;
