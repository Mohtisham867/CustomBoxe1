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
import customShapeHero from "@/assets/custom-shape-boxes/custom-shape-boxes-hero.png";
import placeholder from "@/assets/custom-shape-boxes/placeholder.png";
import customHandleBoxesImg from "@/assets/custom-shape-boxes/custom-handle-boxes.jpg";
import customPieBoxesImg from "@/assets/custom-shape-boxes/custom-pie-boxes.jpg";
import braceletSquareBoxesImg from "@/assets/custom-shape-boxes/bracelet-square-boxes.jpg";
import customDieCutBoxesImg from "@/assets/custom-shape-boxes/custom-die-cut-boxes.jpg";
import squareSoapBoxesImg from "@/assets/custom-shape-boxes/square-soap-boxes.jpg";
import customPyramidBoxesImg from "@/assets/custom-shape-boxes/custom-pyramid-boxes.jpg";
import hexagonBoxesImg from "@/assets/custom-shape-boxes/hexagon-boxes.jpg";
import rectangularBoxesImg from "@/assets/custom-shape-boxes/rectangular-boxes.jpg";
import triangleBoxesImg from "@/assets/custom-shape-boxes/triangle-boxes.jpg";
import octagonBoxesImg from "@/assets/custom-shape-boxes/octagon-boxes.jpg";
import squareBoxesImg from "@/assets/custom-shape-boxes/square-boxes.jpg";
import cubeBoxesImg from "@/assets/custom-shape-boxes/cube-boxes.jpg";

// Placeholder assignments
const customHandle = customHandleBoxesImg;
const customPie = customPieBoxesImg;
const braceletSquare = braceletSquareBoxesImg;
const customDieCut = customDieCutBoxesImg;
const squareSoap = squareSoapBoxesImg;
const customPyramid = customPyramidBoxesImg;
const hexagonBox = hexagonBoxesImg;
const rectangularBox = rectangularBoxesImg;
const triangleBox = triangleBoxesImg;
const octagonBox = octagonBoxesImg;
const squareBox = squareBoxesImg;
const cubeBox = cubeBoxesImg;

const relatedProducts = [
    { name: "Custom Handle Boxes", image: customHandle, description: "Boxes with integrated handles for convenient carrying." },
    { name: "Custom Pie Boxes", image: customPie, description: "Sturdy triangular or square packaging for pies and pastries." },
    { name: "Bracelet Square Boxes", image: braceletSquare, description: "Elegant square boxes perfectly sized for jewelry." },
    { name: "Custom Die-Cut Boxes", image: customDieCut, description: "Precision-cut shapes tailored to your specific product." },
    { name: "Square Soap Boxes", image: squareSoap, description: "Classic square packaging for artisanal soaps." },
    { name: "Custom Pyramid Boxes", image: customPyramid, description: "Unique pyramid shape for distinctive gift packaging." },
    { name: "Hexagon Boxes", image: hexagonBox, description: "Six-sided boxes providing a modern, geometric look." },
    { name: "Rectangular Boxes", image: rectangularBox, description: "Versatile rectangular shape for widely varied products." },
    { name: "Triangle Box", image: triangleBox, description: "Eye-catching triangular packaging for novelty items." },
    { name: "Octagon Box", image: octagonBox, description: "Eight-sided boxes for a premium, multi-faceted presentation." },
    { name: "Square Boxes", image: squareBox, description: "Standard square boxes adaptable to any branding." },
    { name: "Cube Boxes", image: cubeBox, description: "Perfectly symmetrical cubes for compact products." },
];

const productOptions = relatedProducts.map(p => p.name);

const CustomShapeBoxes = () => {
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
                                <BreadcrumbPage>Custom Shape Boxes</BreadcrumbPage>
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
                                Custom Shape Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Break the mold with unique packaging shapes. From pyramids to hexagons, our custom die-cut boxes are designed to stand out on the shelf and create a memorable unboxing moment.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={customShapeHero}
                                        alt="Custom Shape Boxes Hero"
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
                            Geometric & Unique Designs
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Select a shape that perfectly complements your product's character.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110 ${product.image === placeholder ? 'opacity-80' : ''}`}
                                        />
                                        {product.image === placeholder && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                                <span className="bg-white/90 px-2 py-1 text-xs rounded shadow-sm text-foreground/70 font-medium">Image Coming Soon</span>
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

            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CustomShapeBoxes;
