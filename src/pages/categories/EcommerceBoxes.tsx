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

import heroImage from "@/assets/ecommerce-boxes-hero.png";
import mailerBoxes from "@/assets/box-shapes/mailer-boxes.jpg";
import subscriptionBoxes from "@/assets/box-shapes/subscription-boxes.jpg";
import shippingBoxes from "@/assets/box-shapes/shipping-boxes.jpg";
import productBoxes from "@/assets/box-shapes/tuck-boxes.jpg";
import corrugatedBoxes from "@/assets/box-shapes/shipping-boxes.jpg"; // Reusing shipping boxes as they are corrugated
import insertsDividers from "@/assets/candle-products/candle-boxes-inserts.jpg";

const relatedProducts = [
    { name: "Custom Mailer Boxes", image: mailerBoxes, description: "Durable and stylish mailers for brand impact." },
    { name: "Subscription Boxes", image: subscriptionBoxes, description: "Curated packaging experiences for subscribers." },
    { name: "Shipping Boxes", image: shippingBoxes, description: "Heavy-duty protection for transit." },
    { name: "E-commerce Product Boxes", image: productBoxes, description: "Versatile boxes for various retail products." },
    { name: "Corrugated Boxes", image: corrugatedBoxes, description: "Strong and lightweight corrugated solutions." },
    { name: "Custom Inserts & Dividers", image: insertsDividers, description: "Organize and protect items inside the box." },
];

const productOptions = [
    "Custom Mailer Boxes",
    "Subscription Boxes",
    "Shipping Boxes",
    "E-commerce Product Boxes",
    "Corrugated Boxes",
    "Custom Inserts & Dividers",
];

const EcommerceBoxes = () => {
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
                                <BreadcrumbPage>E-Commerce</BreadcrumbPage>
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
                                E-Commerce
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Elevate your online business with our secure and brandable E-Commerce packaging solutions.
                                Designed for durability during shipping, our custom boxes offering a premium unboxing experience
                                that delights customers and reinforces your brand identity.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="E-Commerce Packaging"
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
                            Logistics & Retail Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Complete packaging solutions optimized for e-commerce, ensuring your products arrive safely and in style.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

export default EcommerceBoxes;
