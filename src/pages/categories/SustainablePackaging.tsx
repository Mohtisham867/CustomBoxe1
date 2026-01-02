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

// Images
import heroImage from "@/assets/sustainable-packaging-hero.png";
import customKraftSoapBoxes from "@/assets/custom-kraft-soap-boxes.png";
import kraftGiftBoxes from "@/assets/kraft-gift-boxes.png";
import kraftMylarBags from "@/assets/kraft-mylar-bags.png";
import kraftFoodBoxes from "@/assets/kraft-food-boxes.png";
import kraftPieBoxes from "@/assets/kraft-pie-boxes.png";
import kraftTuckTopBoxes from "@/assets/kraft-tuck-top-boxes.png";
import kraftMailerBoxes from "@/assets/kraft-mailer-boxes.png";

const relatedProducts = [
    { name: "Custom Kraft Soap Boxes", image: customKraftSoapBoxes, description: "Eco-friendly kraft soap packaging." },
    { name: "Kraft Gift Boxes", image: kraftGiftBoxes, description: "Natural look gift boxes for all occasions." },
    { name: "Kraft Mylar Bags", image: kraftMylarBags, description: "Sustainable flexible packaging solutions." },
    { name: "Kraft Food Boxes", image: kraftFoodBoxes, description: "Food-safe biodegradable kraft boxes." },
    { name: "Kraft Pie Boxes", image: kraftPieBoxes, description: "Sturdy kraft boxes for pastries and pies." },
    { name: "Kraft Tuck Top Boxes", image: kraftTuckTopBoxes, description: "Versatile tuck top boxes in natural kraft." },
    { name: "Kraft Mailer Boxes", image: kraftMailerBoxes, description: "Durable shipping solutions made from recycled materials." },
];

const productOptions = [
    "Custom Kraft Soap Boxes",
    "Kraft Gift Boxes",
    "Kraft Mylar Bags",
    "Kraft Food Boxes",
    "Kraft Pie Boxes",
    "Kraft Tuck Top Boxes",
    "Kraft Mailer Boxes",
];

const SustainablePackaging = () => {
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
                                <BreadcrumbPage>Sustainable Packaging</BreadcrumbPage>
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
                                Sustainable Packaging
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Embrace eco-friendly solutions with our sustainable packaging options.
                                Specializing in recyclable and biodegradable materials like Kraft,
                                we help you reduce your environmental footprint while maintaining premium quality.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Sustainable Packaging"
                                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg"
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
                            Sustainable Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our range of eco-conscious packaging solutions designed for a greener future.
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

export default SustainablePackaging;
