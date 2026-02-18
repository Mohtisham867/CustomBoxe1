import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Import professional product images
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import cufflinkBoxes from "@/assets/apparel-boxes/cufflink-boxes.webp";
import tieBoxes from "@/assets/apparel-boxes/tie-boxes.webp";
import beltBoxes from "@/assets/apparel-boxes/belt-boxes.webp";
import clothingBoxes from "@/assets/apparel-boxes/clothing-boxes.webp";
import lingerieBoxes from "@/assets/apparel-boxes/lingerie-boxes.webp";
import underwearBoxes from "@/assets/apparel-boxes/underwear-boxes.webp";
import tshirtBoxes from "@/assets/apparel-boxes/tshirt-boxes.webp";
import socksBoxes from "@/assets/apparel-boxes/socks-boxes.webp";
import clothingHangTags from "@/assets/apparel-boxes/clothing-hang-tags.webp";
import hatShippingBoxes from "@/assets/apparel-boxes/hat-shipping-boxes.webp";
import sunglassesBoxes from "@/assets/apparel-boxes/sunglasses-boxes.webp";
import apparelGiftBoxes from "@/assets/apparel-boxes/apparel-gift-boxes.webp";
import hoodiePackaging from "@/assets/apparel-boxes/hoodie-packaging.webp";
import weddingDressBoxes from "@/assets/apparel-boxes/wedding-dress-boxes.webp";
import hatBoxes from "@/assets/apparel-boxes/hat-boxes.webp";
import luxuryApparelBoxes from "@/assets/apparel-boxes/luxury-apparel-boxes.webp";

// Specific product images for Custom Shoe Boxes
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.jpg";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.jpg";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.jpg";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe 4.webp";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.jpg";

// Technical Specifications Images
import offsetPress from "@/assets/Technical-Specifications-images/OffsetPress.jpg";
import digitalPrinting from "@/assets/Technical-Specifications-images/digital-printing.webp";
import screenPrinting from "@/assets/Technical-Specifications-images/Screen-Printing.webp";

// Technical Specifications Images - Inks
import metallicInks from "@/assets/Technical-Specifications-images/Metallic-Inks.webp";
import fluorescentInks from "@/assets/Technical-Specifications-images/Fluorescent-Color-Inks.webp";
import soyBasedInks from "@/assets/Technical-Specifications-images/Soy-based-inks.avif";
import oilBasedInks from "@/assets/Technical-Specifications-images/Oil-based-inks.jpg";
import waterBasedInks from "@/assets/Technical-Specifications-images/Water-based-inks.jpg";
import uvInks from "@/assets/Technical-Specifications-images/UV-inks.jpg";
import foodSafeInks from "@/assets/Technical-Specifications-images/Food-safe-inks.webp";
import pmsColors from "@/assets/Technical-Specifications-images/PMS-color-Matching.webp";

// Technical Specifications Images - Finishing
import glossLamination from "@/assets/Technical-Specifications-images/gloss-lamination-page.jpg";
import matteLamination from "@/assets/Technical-Specifications-images/Matte-Lamination.jpg";
import spotUV from "@/assets/Technical-Specifications-images/Spot-UV-Coating.jpg";
import foilStamping from "@/assets/Technical-Specifications-images/Foil-Stamping.webp";

// Technical Specifications Images - Add-Ons
import customInserts from "@/assets/Technical-Specifications-images/Custom-Inserts.webp";
import ribbons from "@/assets/Technical-Specifications-images/Ribbons.webp";
import stickersLabels from "@/assets/Technical-Specifications-images/Stickers-and-labels.webp";
import perforation from "@/assets/Technical-Specifications-images/Perforation.webp";
import windowCutOuts from "@/assets/Technical-Specifications-images/Window-Cut-Outs.webp";
import tamperSeals from "@/assets/Technical-Specifications-images/Tamper-Evident-Seals.webp";
import customHandles from "@/assets/Technical-Specifications-images/Custom-Handles.webp";
import wrapsSleeves from "@/assets/Technical-Specifications-images/Wraps-or-Sleeves.webp";
//FAQ image
import FAQimage from "@/assets/FAQ-image.png";

// Related products from Apparel Boxes category
const relatedProducts = [
    { name: "Custom Shoe Boxes", image: customShoeBoxes, description: "Premium shoe packaging that protects footwear while showcasing your brand with style and durability", link: "/apparel-boxes/custom-shoe-boxes" },
    { name: "Cufflink Boxes", image: cufflinkBoxes, description: "Elegant boxes for luxury cufflinks featuring refined finishes and protective cushioned interiors", link: "/apparel-boxes/cufflink-boxes" },
    { name: "Tie Boxes", image: tieBoxes, description: "Professional tie packaging that preserves shape and prevents wrinkles for retail presentation", link: "/apparel-boxes/tie-boxes" },
    { name: "Belt Boxes", image: beltBoxes, description: "Stylish belt boxes designed to protect and display premium accessories with upscale finishes", link: "/apparel-boxes/belt-boxes" },
    { name: "Clothing Boxes", image: clothingBoxes, description: "Versatile packaging for folded garments, retail displays, and gift presentation with quality construction" },
    { name: "Lingerie Boxes", image: lingerieBoxes, description: "Delicate lingerie packaging with soft-touch interiors and tasteful premium presentation design" },
    { name: "Underwear Boxes", image: underwearBoxes, description: "Secure underwear packaging ideal for retail and subscription services with sustainable materials" },
    { name: "T Shirt Boxes", image: tshirtBoxes, description: "Custom t-shirt boxes keeping garments neatly folded and retail-ready with enhanced branding options" },
    { name: "Socks Boxes", image: socksBoxes, description: "Creative sock packaging for pairs and gift sets offering protection and attractive shelf presence" },
    { name: "Clothing Hang Tags", image: clothingHangTags, description: "Premium hang tags conveying brand quality, printed on sturdy stock with crisp professional finishes" },
    { name: "Hat Shipping Boxes", image: hatShippingBoxes, description: "Rugged shipping boxes designed to prevent crushing ensuring hats arrive in perfect retail condition" },
    { name: "Sunglasses Boxes", image: sunglassesBoxes, description: "Protective cases with cushioned interiors and secure closures guarding eyewear from scratches" },
    { name: "Apparel Gift Boxes", image: apparelGiftBoxes, description: "Premium gift packaging elevating the unboxing experience with luxe finishes and structural protection" },
    { name: "Hoodie Packaging", image: hoodiePackaging, description: "Custom hoodie boxes sized for folded sweatshirts offering durable protection and branding options" },
    { name: "Wedding Dress Boxes", image: weddingDressBoxes, description: "Luxury preservation boxes protecting wedding gowns long-term using archival materials and spacious design" },
    { name: "Hat Boxes", image: hatBoxes, description: "Classic hat boxes preserving shape and protecting from dust in round or square sturdy formats" },
    { name: "Luxury Apparel Boxes", image: luxuryApparelBoxes, description: "High-end packaging with premium finishes and bespoke structures reflecting luxury fashion standards" },
];

const CustomShoeBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState("Specification");
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Product images for gallery with specific local paths as requested
    const productImages = [
        { src: shoeBox1, alt: "Custom Shoe Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Shoe Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Shoe Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Shoe Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Shoe Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Shoe Boxes | Branded Footwear Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom shoe boxes & luxury sneaker packaging wholesale. Premium branded footwear boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom shoe packaging, luxury sneaker boxes, wholesale apparel boxes, custom branded footwear packaging, shoe box manufacturer" />
                <meta property="og:title" content="Custom Shoe Boxes | Branded Footwear Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom shoe packaging for footwear brands. Rigid boxes, magnetic closures, full-color printing & eco-friendly options. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
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
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/apparel-boxes">Apparel Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Shoe Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Shoe Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded footwear packaging engineered for durability, brand impact, and premium unboxing — built to scale with your business.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={shoeBoxHero}
                                    alt="Custom Shoe Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Custom Shoe Packaging Built for Footwear Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom shoe boxes</strong> are precision-engineered for B2B footwear brands that refuse to compromise on quality. Constructed from rigid chipboard, premium SBS cardstock, and specialty kraft materials, each box delivers the structural strength your supply chain demands — while projecting the brand identity your customers remember. Whether you're launching a luxury sneaker line or scaling a wholesale apparel operation, our <strong className="text-foreground">custom branded footwear packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From athletic sneakers and high-end dress shoes to casual lifestyle footwear, our <strong className="text-foreground">custom shoe packaging</strong> solutions accommodate every size, silhouette, and style. Each box features reinforced corners, precision-cut inserts, and optional magnetic closures — ensuring your product arrives in showroom condition, every time. With full-color CMYK printing, foil stamping, embossing, and matte or gloss lamination, your <strong className="text-foreground">luxury sneaker boxes</strong> become a powerful brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-20 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

                        {/* LEFT SIDE: Product Gallery */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>

                    <div className="w-full">
                        {/* Tab Navigation */}
                        <div className="flex flex-nowrap overflow-x-auto border-b border-slate-200 mb-8 pb-1 scrollbar-hide">
                            {["Specification", "Material / Paper Stock", "Printing Methods", "Inks", "Finishing", "Add-Ons"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${activeTab === tab
                                        ? "border-primary text-primary"
                                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-slate-300"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8 animate-in fade-in duration-300">
                            {activeTab === "Specification" && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Product Specifications</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <tbody>
                                                <tr className="border-b border-slate-200">
                                                    <td className="py-3 pr-4 font-medium text-slate-900 w-1/3">Sizes</td>
                                                    <td className="py-3 text-slate-600">Fully Customizable (L x W x H)</td>
                                                </tr>
                                                <tr className="border-b border-slate-200">
                                                    <td className="py-3 pr-4 font-medium text-slate-900">Paper Thickness</td>
                                                    <td className="py-3 text-slate-600">10pt to 24pt (60lb to 400lb)</td>
                                                </tr>
                                                <tr className="border-b border-slate-200">
                                                    <td className="py-3 pr-4 font-medium text-slate-900">Proof</td>
                                                    <td className="py-3 text-slate-600">Flat View, 3D Mock-up, Physical Sampling (On request)</td>
                                                </tr>
                                                <tr className="border-b border-slate-200">
                                                    <td className="py-3 pr-4 font-medium text-slate-900">Turnaround Time</td>
                                                    <td className="py-3 text-slate-600">8-10 Business Days (Standard), 4-6 Days (Rush)</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 pr-4 font-medium text-slate-900">Quantities</td>
                                                    <td className="py-3 text-slate-600">100 - 500,000+</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Material / Paper Stock" && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Available Materials</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-slate-700">10pt to 28pt Eco-Friendly Kraft</span>
                                        </li>
                                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-slate-700">E-flute Corrugated</span>
                                        </li>
                                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-slate-700">Bux Board</span>
                                        </li>
                                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-slate-700">Cardstock</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === "Printing Methods" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Printing Options</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-full aspect-video bg-slate-100 relative group">
                                                <img src={offsetPress} alt="Offset Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-primary mb-2">Offset Printing</h4>
                                                <p className="text-sm text-slate-600">High-quality, cost-effective for large runs. Best for detailed imagery and exact color matching.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-full aspect-video bg-slate-100 relative group">
                                                <img src={digitalPrinting} alt="Digital Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-primary mb-2">Digital Printing</h4>
                                                <p className="text-sm text-slate-600">Perfect for short runs and fast turnaround. Great for variable data and prototypes.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-full aspect-video bg-slate-100 relative group">
                                                <img src={screenPrinting} alt="Screen Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-primary mb-2">Screen Printing</h4>
                                                <p className="text-sm text-slate-600">Ideal for bold, solid colors on kraft or textured materials. Durable and vibrant.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Inks" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Ink Selections</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                        {[
                                            { title: "Metallic Inks", image: metallicInks },
                                            { title: "Fluorescent Color Inks", image: fluorescentInks },
                                            { title: "Soy-based inks", image: soyBasedInks },
                                            { title: "Oil-based inks", image: oilBasedInks },
                                            { title: "Water-based inks", image: waterBasedInks },
                                            { title: "UV inks", image: uvInks },
                                            { title: "Food-safe inks", image: foodSafeInks },
                                            { title: "PMS color Matching", image: pmsColors },
                                        ].map((item) => (
                                            <div key={item.title} className="group cursor-default">
                                                <div className="w-full aspect-[4/3] bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-3">
                                                    <div className="w-full h-full bg-slate-50 relative">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="text-center font-semibold text-slate-800 text-sm group-hover:text-primary transition-colors duration-300">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "Finishing" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Premium Finishes</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { title: "Gloss Lamination", image: glossLamination },
                                            { title: "Matte Lamination", image: matteLamination },
                                            { title: "Spot UV Coating", image: spotUV },
                                            { title: "Foil Stamping", image: foilStamping },
                                        ].map((finish) => (
                                            <div key={finish.title} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                                <div className="w-full aspect-square bg-slate-100 relative">
                                                    <img
                                                        src={finish.image}
                                                        alt={finish.title}
                                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                                <div className="p-3 text-center">
                                                    <span className="block text-sm font-medium text-slate-800">{finish.title}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "Add-Ons" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Packaging Add-Ons</h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                        {[
                                            { title: "Custom Inserts", image: customInserts },
                                            { title: "Ribbons", image: ribbons },
                                            { title: "Stickers and labels", image: stickersLabels },
                                            { title: "Perforation", image: perforation },
                                            { title: "Window Cut Outs", image: windowCutOuts },
                                            { title: "Tamper Evident Seals", image: tamperSeals },
                                            { title: "Custom Handles", image: customHandles },
                                            { title: "Wraps or Sleeves", image: wrapsSleeves },
                                        ].map((addon) => (
                                            <div key={addon.title} className="group cursor-default">
                                                <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-3">
                                                    <div className="w-full h-full bg-slate-50 relative">
                                                        <img
                                                            src={addon.image}
                                                            alt={addon.title}
                                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="text-center font-semibold text-slate-800 text-sm group-hover:text-primary transition-colors duration-300">
                                                    {addon.title}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO CONTENT SECTION */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Importance of Premium Packaging for Footwear Brands
                    </h2>

                    {/* Scrollable content box */}
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In today's competitive retail landscape, packaging has evolved far beyond its traditional role as a simple container.
                                For footwear brands, custom shoe boxes represent a critical touchpoint in the customer journey—one that can significantly
                                influence brand perception, customer loyalty, and ultimately, your bottom line. Premium packaging communicates quality,
                                attention to detail, and brand values before the customer even opens the box.
                            </p>
                            <p>
                                Our custom shoe boxes are designed with this understanding at their core. Every element, from the structural design to
                                the finishing touches, is carefully considered to create an unboxing experience that delights customers and reinforces
                                your brand identity. Whether you're a boutique shoe designer or a large-scale athletic footwear manufacturer, investing
                                in high-quality packaging demonstrates your commitment to excellence and creates lasting impressions that drive repeat purchases.
                            </p>

                            <h3>Unmatched Material Quality &amp; Structural Durability</h3>
                            <p>
                                The foundation of exceptional shoe packaging begins with superior materials. We offer a comprehensive range of premium
                                substrates, each selected for specific performance characteristics and aesthetic qualities:
                            </p>
                            <ul>
                                <li><strong>E-Flute Corrugated Board:</strong> Our most popular choice for shoe packaging, E-flute offers the perfect balance between strength and printability. The fine flute structure provides excellent crush resistance while maintaining a smooth printing surface for vibrant graphics.</li>
                                <li><strong>Rigid Chipboard:</strong> For luxury footwear brands, rigid chipboard delivers an unparalleled premium feel. This thick, sturdy material creates a solid, high-end presentation that communicates luxury and exclusivity.</li>
                                <li><strong>Kraft Cardstock:</strong> Eco-conscious brands appreciate our sustainable kraft options. These biodegradable, recyclable materials offer a natural, authentic aesthetic while maintaining structural integrity.</li>
                                <li><strong>SBS (Solid Bleached Sulfate):</strong> For maximum print quality and a bright white finish, SBS cardstock provides exceptional color reproduction and a premium appearance ideal for retail environments.</li>
                            </ul>
                            <p>
                                Each material undergoes rigorous testing for compression strength, edge crush resistance, and moisture resistance,
                                ensuring your footwear arrives at its destination in perfect condition regardless of shipping conditions or handling.
                            </p>

                            <h3>Customization Options That Elevate Your Brand</h3>
                            <p>
                                True differentiation comes from customization. Our advanced manufacturing capabilities allow for virtually unlimited
                                design possibilities, enabling you to create packaging that perfectly aligns with your brand identity:
                            </p>
                            <ul>
                                <li><strong>Custom Dimensions:</strong> We engineer boxes to fit your exact shoe specifications, from children's sizes to oversized athletic footwear. Precise sizing minimizes material waste and ensures optimal product protection.</li>
                                <li><strong>Window Cutouts:</strong> Strategically placed die-cut windows with clear PET film allow customers to preview the product while maintaining protection, building trust and driving purchase decisions.</li>
                                <li><strong>Interior Compartments:</strong> Custom inserts and dividers keep shoes positioned perfectly, prevent movement during transit, and can accommodate accessories like shoe horns, care instructions, or promotional materials.</li>
                                <li><strong>Unique Closure Systems:</strong> Choose from magnetic closures, ribbon ties, tuck-top designs, or innovative auto-lock mechanisms that enhance functionality while adding a premium touch.</li>
                            </ul>

                            <h3>Advanced Printing &amp; Finishing Techniques</h3>
                            <p>
                                Transform your shoe boxes into powerful marketing assets with our state-of-the-art printing and finishing capabilities.
                                We utilize both offset and digital printing technologies to achieve stunning, color-accurate results that make your brand stand out on crowded retail shelves:
                            </p>
                            <ul>
                                <li><strong>Full-Color CMYK Printing:</strong> Achieve photographic-quality images and vibrant brand colors with our precision printing processes. Perfect for detailed product photography and complex graphics.</li>
                                <li><strong>Pantone Color Matching:</strong> Ensure perfect brand color consistency across all packaging with exact Pantone color matching, critical for maintaining brand standards.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Add luxury and visual impact with gold, silver, copper, or holographic foil accents that catch light and draw attention to logos and key design elements.</li>
                                <li><strong>Spot UV Coating:</strong> Create striking contrast and tactile interest by applying high-gloss UV coating to specific areas against a matte background, highlighting logos or patterns.</li>
                                <li><strong>Embossing &amp; Debossing:</strong> Add dimensional depth and premium tactile quality with raised or recessed design elements that customers can feel.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Our velvety soft-touch matte finish provides a luxurious feel that communicates quality and sophistication while protecting against scuffs and fingerprints.</li>
                            </ul>

                            <h3>Sustainable Packaging Solutions</h3>
                            <p>
                                Environmental responsibility is no longer optional—it's essential. We're committed to helping brands reduce their
                                environmental impact without compromising on quality or aesthetics. Our sustainable packaging options include:
                            </p>
                            <ul>
                                <li>100% recyclable and biodegradable materials sourced from responsibly managed forests</li>
                                <li>Soy-based and vegetable-based inks that eliminate harmful VOCs</li>
                                <li>Optimized structural designs that minimize material usage while maintaining strength</li>
                                <li>Water-based coatings and adhesives that support recyclability</li>
                                <li>FSC-certified materials available upon request for brands with strict sustainability requirements</li>
                            </ul>

                            <h3>Wholesale Pricing &amp; Scalable Production</h3>
                            <p>
                                Whether you're a startup testing the market with a small initial run or an established brand requiring tens of
                                thousands of units monthly, our flexible production capabilities scale to meet your needs. We offer competitive
                                pricing on short runs (as low as 100 units) and substantial volume discounts for wholesale orders.
                            </p>
                            <p>
                                Partnering with us means gaining a dedicated packaging team committed to your success. From initial design consultation
                                through final delivery, we provide expert guidance, proactive communication, and quality assurance at every step.
                                Let us help you create custom shoe boxes that protect your products, elevate your brand, and delight your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Related Products from Apparel Boxes
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our complete range of premium apparel packaging solutions designed to protect and showcase your products.
                        </p>
                    </div>

                    <div className="relative px-4">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnInteraction: false,
                                    stopOnMouseEnter: true,
                                }),
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {relatedProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="h-full">
                                            {product.link ? (
                                                <Link to={product.link} className="block h-full">
                                                    <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                        <CardContent className="p-0 flex flex-col h-full">
                                                            <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                            <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                                <h3 className="font-semibold text-foreground text-base mb-2">
                                                                    {product.name}
                                                                </h3>
                                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                                    {product.description}
                                                                </p>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                                >
                                                                    View Product
                                                                </Button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ) : (
                                                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                    <CardContent className="p-0 flex flex-col h-full">
                                                        <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                            <h3 className="font-semibold text-foreground text-base mb-2">
                                                                {product.name}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                                {product.description}
                                                            </p>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                            >
                                                                View Product
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* Dot Navigation */}
                            <div className="flex justify-center gap-2 mt-8 flex-wrap">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"
                                            }`}
                                        onClick={() => api?.scrollTo(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                {/* Subtle decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    {/* Centered Section Header */}
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* LEFT: Luxury editorial typography */}
                        <div className="space-y-5">

                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom shoe box</strong> we produce is built from rigid chipboard, premium SBS cardstock, and specialty textured stocks — materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                        Tailored Perfection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two footwear lines are identical — and neither are our solutions. We engineer <strong>custom branded footwear packaging</strong> to your exact SKU dimensions, with precision-cut tissue inserts, heel cradles, and bespoke structural forms that eliminate movement and protect finish. Your brand's packaging spec, executed flawlessly at scale.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                        Eco-Friendly Elegance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's footwear buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>wholesale apparel boxes</strong> deliver the same luxury look and structural performance — while reducing your brand's environmental footprint and meeting the ESG expectations of modern retail partners and conscious consumers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customShoeBoxes}
                                    alt="Premium Custom Shoe Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATE YOUR SHOES SECTION */}
            <section className="py-20 lg:py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={shoeBoxHero}
                                    alt="Differentiate Your Shoes"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Shoes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium offset and digital printing techniques. Our team of experts works closely with you to determine the perfect shoe box dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like custom textures, high-end finishes, and sustainable materials, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What Are The Outcomes Of Using These Boxes?",
                                        answer: "Using our custom shoe boxes significantly enhances your brand visibility and customer unboxing experience. They provide robust protection for your footwear during shipping and storage, reduce return rates due to damage, and serve as a mobile billboard for your brand, ultimately driving customer loyalty and repeat sales."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture My Order?",
                                        answer: "Our standard turnaround time is 8-10 business days after design approval. We also offer expedited rush options (4-6 business days) for time-sensitive launches. Shipping times depend on your location and chosen delivery method."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What Paper Material Is Perfect For Shipping And Storage?",
                                        answer: "For shipping and storage, we highly recommend our corrugated cardboard (E-flute) or rigid chipboard materials. E-flute offers excellent crush resistance for transit, while rigid chipboard provides superior durability and a premium feel for long-term storage and luxury presentation."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What Modern Color Schemes Do You Have For Us?",
                                        answer: "We offer full-color CMYK printing and Pantone Color Matching (PMS), allowing for virtually any color scheme you desire. From minimalist monochromatic matte finishes to vibrant, high-gloss gradients and metallic accents, we can perfectly replicate your brand's modern color palette."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Are The Shipping Charges For Calgary?",
                                        answer: "We strive to offer simple and transparent pricing. For many standard orders, we offer free shipping to major cities including Calgary. For large wholesale pallets or expedited requirements, shipping costs are calculated based on weight and volume—please request a custom quote for the most accurate rates."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Shoe Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};

export default CustomShoeBoxes;
