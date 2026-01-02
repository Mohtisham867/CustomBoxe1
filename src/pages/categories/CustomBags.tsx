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
import heroImage from "@/assets/custom_bags/custom-bags-hero.png";
import heatSealMylar from "@/assets/custom_bags/heat-seal-mylar-bags.png";
import weedMylar from "@/assets/custom_bags/weed-mylar-bags.png";
import edibleMylar from "@/assets/custom_bags/edible-mylar-bags.png";
import paperBagsHandle from "@/assets/custom_bags/paper-bags-with-handles.png";
import holographicBags from "@/assets/custom_bags/holographic-bags.png";
import kraftBags from "@/assets/custom_bags/kraft-bags.png";
import takeOutBags from "@/assets/custom_bags/take-out-bags.png";
import tShirtBags from "@/assets/custom_bags/t-shirt-bags.png";
import paperGroceryBags from "@/assets/custom_bags/paper-grocery-bags.png";
import vacuumSealWebBags from "@/assets/custom_bags/vacuum-seal-weed-bags.png";
import smellProofWeedBags from "@/assets/custom_bags/smell-proof-weed-bags.png";
import weedBags35 from "@/assets/custom_bags/weed-bags-3-5.png";
import sachetPackaging from "@/assets/custom_bags/sachet-packaging.png";
import coffeeBags from "@/assets/custom_bags/coffee-bags.png";
import flatBottomBags from "@/assets/custom_bags/flat-bottom-bags.png";
import tinTiePaperBags from "@/assets/custom_bags/tin-tie-paper-bags.png";

const products = [
    {
        name: "Heat Seal Mylar Bags",
        image: heatSealMylar,
        description: "Durable, airtight heat seal mylar bags perfect for preserving freshness and protecting products.",
    },
    {
        name: "Weed Mylar Bags",
        image: weedMylar,
        description: "Custom branded mylar bags designed specifically for cannabis flower and infused products.",
    },
    {
        name: "Edible Mylar Bags",
        image: edibleMylar,
        description: "Child-resistant and vibrant packaging solutions for edible cannabis products.",
    },
    {
        name: "Paper Bags With Handles",
        image: paperBagsHandle,
        description: "Eco-friendly retail paper bags with twisted handles for a premium shopping experience.",
    },
    {
        name: "Holographic Bags",
        image: holographicBags,
        description: "Eye-catching holographic pouches that stand out on retail shelves with iridescent finish.",
    },
    {
        name: "Kraft Bags",
        image: kraftBags,
        description: "Sustainable kraft paper bags offering a natural, rustic look for various products.",
    },
    {
        name: "Take Out Bags",
        image: takeOutBags,
        description: "Reliable and spacious bags ideal for food service and restaurant take-out orders.",
    },
    {
        name: "T Shirt Bags",
        image: tShirtBags,
        description: "Classic and economical handled carrier bags widely used for grocery and retail shopping.",
    },
    {
        name: "Paper Grocery Bags",
        image: paperGroceryBags,
        description: "Heavy-duty paper bags designed to hold groceries and bulky items securely.",
    },
    {
        name: "Vacuum Seal Weed Bags",
        image: vacuumSealWebBags,
        description: "Clear or opaque vacuum seal bags that unwanted odors locked in and oxygen out.",
    },
    {
        name: "Smell Proof Weed Bags",
        image: smellProofWeedBags,
        description: "Odor-locking technology ensured to keep cannabis products discreet and compliant.",
    },
    {
        name: "Weed Bags 3.5",
        image: weedBags35,
        description: "Perfectly sized eighth bags combining compliance with stunning custom graphic design.",
    },
    {
        name: "Sachet Packaging",
        image: sachetPackaging,
        description: "Single-serving sachet pouches ideal for samples, powders, and small edible doses.",
    },
    {
        name: "Coffee Bags",
        image: coffeeBags,
        description: "Premium bags with degassing valves to keep roasted coffee beans fresh and aromatic.",
    },
    {
        name: "Flat Bottom Bags",
        image: flatBottomBags,
        description: "Box pouch bags with a flat base for excellent shelf stability and high fill volume.",
    },
    {
        name: "Tin Tie Paper Bags",
        image: tinTiePaperBags,
        description: "Classic bakery-style bags with reclosable metal ties to maintain product freshness.",
    },
];

const productOptions = products.map((product) => product.name);

const CustomBags = () => {
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
                                <BreadcrumbPage>Custom Bags</BreadcrumbPage>
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
                                Custom Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Elevate your brand with our wide selection of custom bags. From secure mylar pouches to eco-friendly paper options, we provide durable and customizable packaging solutions tailored to your specific product needs.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={heroImage}
                                        alt="Custom Bags Hero"
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

            {/* Products Grid */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Bag Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our versatile range of high-quality custom bags for every industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
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

export default CustomBags;
