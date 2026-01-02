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
import mylarBagsHero from "@/assets/mylar-bags/mylar-bags-hero.png";
import dispensaryMylarBags from "@/assets/mylar-bags/dispensary-mylar-bags.png";
import dieCutMylarBags from "@/assets/mylar-bags/die-cut-mylar-bags.png";
import mylarVacuumSealBags from "@/assets/mylar-bags/mylar-vacuum-seal-bags.png";
import mylarFoodStorageBags from "@/assets/mylar-bags/mylar-food-storage-bags.png";
import blackMylarBags from "@/assets/mylar-bags/black-mylar-bags.png";
import smellProofMylarBags from "@/assets/mylar-bags/smell-proof-mylar-bags.png";
import childResistantMylarBags from "@/assets/mylar-bags/child-resistant-mylar-bags.png";
import exoticMylarBags from "@/assets/mylar-bags/exotic-mylar-bags.png";
import smallMylarBags from "@/assets/mylar-bags/small-mylar-bags.png";
import holographicMylarBags from "@/assets/mylar-bags/holographic-mylar-bags.png";
import kraftMylarBags from "@/assets/mylar-bags/kraft-mylar-bags.png";
import mylarZiplockBags from "@/assets/mylar-bags/mylar-ziplock-bags.png";
import clearMylarBags from "@/assets/mylar-bags/clear-mylar-bags.png";

const relatedProducts = [
    { name: "Dispensary Mylar Bags", image: dispensaryMylarBags, description: "Professional, compliant packaging for dispensaries." },
    { name: "Die Cut Mylar Bags", image: dieCutMylarBags, description: "Custom-shaped bags for unique brand identity." },
    { name: "Mylar Vacuum Seal Bags", image: mylarVacuumSealBags, description: "Airtight sealing for maximum freshness and longevity." },
    { name: "Mylar Food Storage Bags", image: mylarFoodStorageBags, description: "Durable bags for long-term food preservation." },
    { name: "Black Mylar Bags", image: blackMylarBags, description: "Sleek, premium matte black finish for high-end products." },
    { name: "Smell Proof Mylar Bags", image: smellProofMylarBags, description: "Advanced odor-locking technology for total discretion." },
    { name: "Child Resistant Mylar Bags", image: childResistantMylarBags, description: "Safe, compliant packaging with secure locking mechanisms." },
    { name: "Exotic Mylar Bags", image: exoticMylarBags, description: "Vibrant, artistic designs to catch the customer's eye." },
    { name: "Small Mylar Bags", image: smallMylarBags, description: "Compact pouches for single servings or small items." },
    { name: "Holographic Mylar Bags", image: holographicMylarBags, description: "Eye-catching rainbow reflective finish." },
    { name: "Kraft Mylar Bags", image: kraftMylarBags, description: "Eco-friendly look with the protection of mylar." },
    { name: "Mylar Ziplock Bags", image: mylarZiplockBags, description: "Convenient resealable ziplock closure." },
    { name: "Clear Mylar Bags", image: clearMylarBags, description: "Transparent combination for product visibility." },
];

const productOptions = relatedProducts.map(p => p.name);

const MylarBags = () => {
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Mylar Bags</BreadcrumbPage>
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
                                Custom Mylar Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Premium quality custom printed Mylar bags for every need. From food storage to retail packaging, our odor-proof, durable, and customizable bags ensure your products stay fresh and stand out on the shelf.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={mylarBagsHero}
                                        alt="Custom Mylar Bags Hero"
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
                            Styles & Shapes
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our diverse range of Mylar bag styles, sizes, and finishes.
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

export default MylarBags;
