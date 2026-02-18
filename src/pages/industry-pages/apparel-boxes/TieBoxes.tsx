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

// Import professional product images
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

const TieBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
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

    const productImages = [
        { src: tieBoxes, alt: "Tie Boxes - Main View" },
        { src: tieBoxes, alt: "Tie Boxes - Side Angle" },
        { src: tieBoxes, alt: "Tie Boxes - Top View" },
        { src: tieBoxes, alt: "Tie Boxes - Detail Shot" },
        { src: tieBoxes, alt: "Tie Boxes - Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
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
                                <BreadcrumbPage>Tie Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Tie Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose">
                                Professional tie packaging that preserves shape and prevents wrinkles, perfect for retail presentation and luxury branding.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl bg-muted">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <img
                                    src={tieBoxes}
                                    alt="Custom Tie Boxes - Premium Packaging"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-[30px]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Product Overview
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                Our custom tie boxes are expertly designed to maintain the pristine condition of neckties while delivering a sophisticated presentation that reflects your brand's commitment to quality. Each box is precision-engineered with internal supports that prevent wrinkles and preserve the tie's shape during storage and transport.
                            </p>
                            <p>
                                Crafted from premium materials, these boxes offer the perfect balance of protection and elegance. Whether you're packaging silk ties, knit ties, or bow ties, our customizable solutions ensure your products arrive in perfect condition. The sleek design and high-quality construction make these boxes ideal for retail displays, gift packaging, and luxury brand presentations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-16 bg-accent/10" id="quote-form">
                <div className="container mx-auto px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT SIDE: Product Gallery */}
                        <div className="space-y-4">
                            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl bg-gray-100">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium">
                                    PRODUCT IMAGE PLACEHOLDER
                                </div>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="grid grid-cols-5 gap-3">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border-2 transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md scale-105'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 font-medium p-1 text-center">
                                            VIEW {index + 1}
                                        </div>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Sticky Quote Form */}
                        <div className="lg:sticky lg:top-24">
                            <Card className="shadow-2xl border-border overflow-hidden">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-5">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="length" className="text-sm font-medium">
                                                    Length (inches)
                                                </Label>
                                                <Input
                                                    id="length"
                                                    type="number"
                                                    placeholder="15"
                                                    className="border-gray-300 focus:border-primary"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="width" className="text-sm font-medium">
                                                    Width (inches)
                                                </Label>
                                                <Input
                                                    id="width"
                                                    type="number"
                                                    placeholder="4"
                                                    className="border-gray-300 focus:border-primary"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="depth" className="text-sm font-medium">
                                                    Depth (inches)
                                                </Label>
                                                <Input
                                                    id="depth"
                                                    type="number"
                                                    placeholder="1"
                                                    className="border-gray-300 focus:border-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="quantity" className="text-sm font-medium">
                                                Quantity
                                            </Label>
                                            <Input
                                                id="quantity"
                                                type="number"
                                                placeholder="500"
                                                className="border-gray-300 focus:border-primary"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium">
                                                Your Name
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="border-gray-300 focus:border-primary"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="border-gray-300 focus:border-primary"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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

            {/* SEO CONTENT SECTION */}
            <SEOContent>
                <h2>The Importance of Premium Tie Packaging</h2>
                <p>
                    In the world of men's fashion accessories, presentation is everything. Custom tie boxes serve as the first impression of your brand's commitment to quality and attention to detail. Premium tie packaging not only protects delicate fabrics from wrinkles and damage but also elevates the entire customer experience, transforming a simple purchase into a memorable unboxing moment.
                </p>
                <p>
                    Our custom tie boxes are meticulously engineered to meet the exacting standards of luxury fashion brands and retailers. Each box features precision-cut internal supports that maintain the tie's natural drape and prevent creasing during storage and transport. The structural design ensures that whether your ties are silk, wool, or synthetic blends, they arrive at their destination in pristine, retail-ready condition.
                </p>

                <h3>Superior Material Selection & Construction</h3>
                <p>
                    The foundation of exceptional tie packaging lies in material quality. We offer premium substrate options specifically selected for their protective properties and visual appeal:
                </p>
                <ul>
                    <li>
                        <strong>Rigid Chipboard:</strong> Our most popular choice for luxury tie packaging, offering exceptional structural integrity and a premium feel that communicates quality.
                    </li>
                    <li>
                        <strong>SBS Cardstock:</strong> Bright white finish provides the perfect canvas for vibrant brand graphics and maintains a clean, professional appearance.
                    </li>
                    <li>
                        <strong>Textured Specialty Papers:</strong> Linen, felt, or leather-textured finishes add tactile dimension and sophisticated visual interest.
                    </li>
                    <li>
                        <strong>Sustainable Kraft:</strong> Eco-friendly option that appeals to environmentally conscious consumers while maintaining protective qualities.
                    </li>
                </ul>

                <h3>Customization Options for Brand Differentiation</h3>
                <p>
                    Stand out in competitive retail environments with fully customized tie packaging that reflects your unique brand identity:
                </p>
                <ul>
                    <li>
                        <strong>Precision Sizing:</strong> Custom dimensions to accommodate standard ties, skinny ties, bow ties, or specialty neckwear perfectly.
                    </li>
                    <li>
                        <strong>Window Cutouts:</strong> Die-cut windows with clear PET film allow customers to preview tie patterns while maintaining protection.
                    </li>
                    <li>
                        <strong>Interior Inserts:</strong> Custom-shaped foam or cardboard inserts keep ties positioned perfectly and prevent movement during handling.
                    </li>
                    <li>
                        <strong>Magnetic Closures:</strong> Premium closure systems add luxury appeal and ensure secure packaging for high-end products.
                    </li>
                </ul>

                <h3>Advanced Printing & Premium Finishes</h3>
                <p>
                    Transform your tie boxes into powerful brand ambassadors with our comprehensive printing and finishing capabilities:
                </p>
                <ul>
                    <li>
                        <strong>Full-Color Offset Printing:</strong> Achieve photographic quality reproduction of logos, patterns, and brand imagery with precise CMYK color matching.
                    </li>
                    <li>
                        <strong>Pantone Matching:</strong> Ensure perfect brand color consistency across all packaging materials with exact Pantone color reproduction.
                    </li>
                    <li>
                        <strong>Foil Stamping:</strong> Metallic gold, silver, or holographic foils add luxury appeal and create eye-catching shelf presence.
                    </li>
                    <li>
                        <strong>Embossing & Debossing:</strong> Add dimensional depth to logos and design elements for premium tactile quality.
                    </li>
                    <li>
                        <strong>Soft-Touch Lamination:</strong> Velvety matte finish provides luxurious feel while protecting against scuffs and fingerprints.
                    </li>
                    <li>
                        <strong>Spot UV Coating:</strong> Create striking contrast with high-gloss accents on matte backgrounds, highlighting key brand elements.
                    </li>
                </ul>

                <h3>Wholesale Pricing & Scalable Production</h3>
                <p>
                    Whether you're a boutique menswear brand or a large-scale retailer, our flexible production capabilities scale to meet your needs. We offer competitive pricing on runs as small as 100 units and substantial volume discounts for wholesale orders. Our streamlined manufacturing process ensures consistent quality across all production runs while maintaining fast turnaround times to meet your inventory requirements.
                </p>
            </SEOContent>

            {/* RELATED PRODUCTS CAROUSEL */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-[30px]">
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

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default TieBoxes;
