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

import heroImage from "@/assets/food-boxes-hero.png";

// Specific images
import chineseTakeout from "@/assets/chinese_takeout_box.png";
import donutBoxes from "@/assets/donut_box_packaging.png";
import popcornBoxes from "@/assets/custom_popcorn_boxes.png";
import dietarySupplements from "@/assets/dietary_supplement_packaging.png";
import pizzaSliceBoxes from "@/assets/custom_pizza_slice_boxes.png";
import paperFoodBags from "@/assets/custom_paper_food_bags.png";
import paperFoodTrays from "@/assets/paper_food_trays.png";
import miniCerealBoxes from "@/assets/mini_cereal_boxes.png";


const relatedProducts = [
    { name: "Chinese Takeout Boxes", image: chineseTakeout, description: "Classic and durable takeout containers." },
    { name: "Donut Boxes", image: donutBoxes, description: "Delightful packaging for bakery treats." },
    { name: "Custom Popcorn Boxes", image: popcornBoxes, description: "Eye-catching boxes for cinema snacks." },
    { name: "Dietary Supplement Packaging", image: dietarySupplements, description: "Secure packaging for health products." },
    { name: "Custom Pizza Slice Boxes", image: pizzaSliceBoxes, description: "Convenient single-slice pizza holders." },
    { name: "Custom Paper Food Bags", image: paperFoodBags, description: "Eco-friendly bags for takeaway food." },
    { name: "Paper Food Trays", image: paperFoodTrays, description: "Versatile trays for street food and snacks." },
    { name: "Mini Cereal Boxes", image: miniCerealBoxes, description: "Compact cereal packaging for single servings." },
];

const productOptions = [
    "Chinese Takeout Boxes",
    "Donut Boxes",
    "Custom Popcorn Boxes",
    "Dietary Supplement Packaging",
    "Custom Pizza Slice Boxes",
    "Custom Paper Food Bags",
    "Paper Food Trays",
    "Mini Cereal Boxes",
];

const FoodBoxes = () => {
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
                                <BreadcrumbPage>Food Boxes</BreadcrumbPage>
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
                                Food Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Keep your culinary creations fresh and appetizing with our sanitary and temperature-retaining food packaging.
                                Our customizable food boxes are designed for safety and convenience, offering reliable solutions
                                for restaurants, bakeries, and takeout services.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Food Packaging"
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
                            Food Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            High-quality, food-safe packaging options for all your delicious products.
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

export default FoodBoxes;
