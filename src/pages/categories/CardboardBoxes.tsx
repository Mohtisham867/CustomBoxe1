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
import hempCardboardBoxes from "@/assets/hemp-cardboard-boxes.jpg";
import cardboardCigaretteBoxes from "@/assets/cardboard-cigarette-boxes.jpg";
import cardboardGiftBoxes from "@/assets/cardboard-gift-boxes.jpg";
import blackCardboardBoxes from "@/assets/black-cardboard-boxes.jpg";
import whiteCardboardBoxes from "@/assets/box-shapes/white-cardboard-boxes.jpg";
import cardboardDividerBoxes from "@/assets/box-shapes/cardboard-divider-boxes.jpg";
import cardboardJewelryBoxes from "@/assets/box-shapes/cardboard-jewelry-boxes.jpg";
import cardboardBoxWithHandle from "@/assets/box-shapes/cardboard-box-with-handle.jpg";
import ammoCardboardBoxes from "@/assets/box-shapes/ammo-cardboard-boxes.jpg";
import cardboardInserts from "@/assets/box-shapes/cardboard-inserts.jpg";
import paperboardBoxes from "@/assets/box-shapes/paperboard-boxes.jpg";
import cardboardShoeBoxes from "@/assets/box-shapes/cardboard-shoe-boxes.jpg";
import cardboardBoxWithInserts from "@/assets/box-shapes/cardboard-box-with-inserts.jpg";
import cardboardCigarBoxes from "@/assets/box-shapes/cardboard-cigar-boxes.jpg";
import cosmeticCardboardBoxes from "@/assets/box-shapes/cosmetic-cardboard-boxes.jpg";
import cardboardSoapBoxes from "@/assets/box-shapes/cardboard-soap-boxes.jpg";
import cardboardBoxesHero from "@/assets/cardboard-boxes-hero.png";

// Product list for dropdown
const cardboardBoxProducts = [
    "Hemp Cardboard Boxes",
    "Cardboard Cigarette Boxes",
    "Cardboard Gift Boxes",
    "Black Cardboard Boxes",
    "White Cardboard Boxes",
    "Cardboard Divider Boxes",
    "Cardboard Jewelry Boxes",
    "Cardboard Box With Handle",
    "Ammo Cardboard Boxes",
    "Cardboard Inserts",
    "Paperboard Boxes",
    "Cardboard Shoe Boxes",
    "Cardboard Box With Inserts",
    "Cardboard Cigar Boxes",
    "Cosmetic Cardboard Boxes",
    "Cardboard Soap Boxes",
];

const relatedProducts = [
    { name: "Hemp Cardboard Boxes", image: hempCardboardBoxes, description: "Eco-friendly hemp cardboard packaging" },
    { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, description: "Custom cigarette cardboard boxes" },
    { name: "Cardboard Gift Boxes", image: cardboardGiftBoxes, description: "Decorative gift cardboard boxes" },
    { name: "Black Cardboard Boxes", image: blackCardboardBoxes, description: "Sleek black cardboard packaging" },
    { name: "White Cardboard Boxes", image: whiteCardboardBoxes, description: "Clean white cardboard boxes" },
    { name: "Cardboard Divider Boxes", image: cardboardDividerBoxes, description: "Boxes with custom dividers" },
    { name: "Cardboard Jewelry Boxes", image: cardboardJewelryBoxes, description: "Elegant jewelry cardboard boxes" },
    { name: "Cardboard Box With Handle", image: cardboardBoxWithHandle, description: "Convenient handled cardboard boxes" },
    { name: "Ammo Cardboard Boxes", image: ammoCardboardBoxes, description: "Secure ammunition packaging" },
    { name: "Cardboard Inserts", image: cardboardInserts, description: "Custom cardboard insert solutions" },
    { name: "Paperboard Boxes", image: paperboardBoxes, description: "Versatile paperboard packaging" },
    { name: "Cardboard Shoe Boxes", image: cardboardShoeBoxes, description: "Durable shoe cardboard boxes" },
    { name: "Cardboard Box With Inserts", image: cardboardBoxWithInserts, description: "Boxes with protective inserts" },
    { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, description: "Premium cigar cardboard boxes" },
    { name: "Cosmetic Cardboard Boxes", image: cosmeticCardboardBoxes, description: "Beauty product cardboard packaging" },
    { name: "Cardboard Soap Boxes", image: cardboardSoapBoxes, description: "Custom soap cardboard boxes" },
];

const CardboardBoxes = () => {
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
                                <BreadcrumbPage>Cardboard Boxes</BreadcrumbPage>
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
                                Cardboard Boxes
                            </h1>
                            <p className="text-muted-foreground leading-relaxed text-[16px] px-4 lg:px-0">
                                Discover highly customizable and economical cardboard packaging solutions made from durable paperboard.
                                Suitable for almost any product, our cardboard boxes offer exceptional versatility in size, shape, and printing options.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full max-w-[480px] h-[300px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={cardboardBoxesHero}
                                        alt="Cardboard Boxes Hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={cardboardBoxProducts} />
                        </div>
                    </div>

                    {/* Brand Rating Section */}
                    <BrandRating />

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Versatile Cardboard Box Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our comprehensive range of custom cardboard boxes designed to
                            provide economical packaging, exceptional customization, and reliable protection for your products.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                >
                                    <CardContent className="p-0">
                                        <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                    <span className="text-gray-400 text-xs">Image Placeholder</span>
                                                </div>
                                            )}
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

            {/* Main Quote Form at Bottom */}
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CardboardBoxes;
