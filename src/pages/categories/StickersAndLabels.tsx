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
import stickersLabelsHero from "@/assets/stickers-and-labels/stickers-and-labels-hero.jpg";
import preRollLabelsImg from "@/assets/stickers-and-labels/pre-roll-labels.jpg";
import foodLabelsImg from "@/assets/stickers-and-labels/food-labels.jpg";
import circleLabelsImg from "@/assets/stickers-and-labels/circle-labels.jpg";
import dieCutStickersImg from "@/assets/stickers-and-labels/die-cut-stickers.jpg";
import soapBarLabelsImg from "@/assets/stickers-and-labels/soap-bar-labels.jpg";
import tableTentsImg from "@/assets/stickers-and-labels/table-tents.jpg";
import christmasStickersImg from "@/assets/stickers-and-labels/christmas-stickers.jpg";
import paperStickersImg from "@/assets/stickers-and-labels/paper-stickers.jpg";
import businessLabelsImg from "@/assets/stickers-and-labels/business-labels.jpg";
import candleLabelsImg from "@/assets/stickers-and-labels/candle-labels.jpg";
import soapLabelsImg from "@/assets/stickers-and-labels/soap-labels.jpg";
import wineLabelsImg from "@/assets/stickers-and-labels/wine-labels.jpg";
import kraftLabelsImg from "@/assets/stickers-and-labels/kraft-labels.jpg";
import chapstickLabelsImg from "@/assets/stickers-and-labels/chapstick-labels.jpg";
import metallicLabelsImg from "@/assets/stickers-and-labels/metallic-labels.jpg";
import bottleLabelsImg from "@/assets/stickers-and-labels/bottle-labels.jpg";
import cosmeticLabelsImg from "@/assets/stickers-and-labels/cosmetic-labels.jpg";
import sprayBottleLabelsImg from "@/assets/stickers-and-labels/spray-bottle-labels.jpg";
import bagLabelsImg from "@/assets/stickers-and-labels/bag-labels.jpg";
import iceCreamLabelsImg from "@/assets/stickers-and-labels/ice-cream-labels.jpg";
import honeyLabelsImg from "@/assets/stickers-and-labels/honey-labels.jpg";
import bodyButterLabelsImg from "@/assets/stickers-and-labels/body-butter-labels.jpg";
import cookieLabelsImg from "@/assets/stickers-and-labels/cookie-labels.jpg";
import lotionLabelsImg from "@/assets/stickers-and-labels/lotion-labels.jpg";
import bathBombLabelsImg from "@/assets/stickers-and-labels/bath-bomb-labels.jpg";
import colorLabelsImg from "@/assets/stickers-and-labels/color-labels.jpg";
import vinylStickersImg from "@/assets/stickers-and-labels/vinyl-stickers.jpg";
import customRollLabelsImg from "@/assets/stickers-and-labels/custom-roll-labels.jpg";
import waterproofLabelsImg from "@/assets/stickers-and-labels/waterproof-labels.jpg";
import packagingLabelsImg from "@/assets/stickers-and-labels/packaging-labels.jpg";
import decalsImg from "@/assets/stickers-and-labels/decals.jpg";
import privateLabelPackagingImg from "@/assets/stickers-and-labels/private-label-packaging.jpg";
import placeholder from "@/assets/stickers-and-labels/placeholder.png";
import { SEOContent } from "@/components/SEOContent";

// Placeholder assignments
const preRollLabels = preRollLabelsImg;
const foodLabels = foodLabelsImg;
const circleLabels = circleLabelsImg;
const circleStickers = circleLabelsImg;
const dieCutStickers = dieCutStickersImg;
const soapBarLabels = soapBarLabelsImg;
const tableTents = tableTentsImg;
const christmasStickers = christmasStickersImg;
const paperStickers = paperStickersImg;
const businessLabels = businessLabelsImg;
const businessStickers = businessLabelsImg;
const candleLabels = candleLabelsImg;
const soapLabels = soapLabelsImg;
const wineLabels = wineLabelsImg;
const kraftLabels = kraftLabelsImg;
const chapstickLabels = chapstickLabelsImg;
const metallicLabels = metallicLabelsImg;
const bottleLabels = bottleLabelsImg;
const lipBalmLabels = chapstickLabelsImg;
const cosmeticLabels = cosmeticLabelsImg;
const sprayBottleLabels = sprayBottleLabelsImg;
const bagLabels = bagLabelsImg;
const iceCreamLabels = iceCreamLabelsImg;
const honeyLabels = honeyLabelsImg;
const bodyButterLabels = bodyButterLabelsImg;
const cookieLabels = cookieLabelsImg;
const lotionLabels = lotionLabelsImg;
const bathBombLabels = bathBombLabelsImg;
const colorLabels = colorLabelsImg;
const vinylStickers = vinylStickersImg;
const customRollLabels = customRollLabelsImg;
const waterproofLabels = waterproofLabelsImg;
const packagingLabels = packagingLabelsImg;
const decals = decalsImg;
const privateLabelPackaging = privateLabelPackagingImg;

const relatedProducts = [
    { name: "Pre Roll Packaging Labels", image: preRollLabels, description: "Professional labels for pre-roll tubes and containers featuring durable high-tack adhesive and compliant legal text" },
    { name: "Food Labels", image: foodLabels, description: "Compliant and appetizing labels for food products featuring moisture-resistant liners and vibrant non-toxic inks" },
    { name: "Circle Labels", image: circleLabels, description: "Versatile round labels for logos and branding featuring precision die-cuts and premium protective gloss finishes" },
    { name: "Circle Stickers", image: circleStickers, description: "Fun and effective round stickers for promotion featuring durable vinyl material and high-impact custom graphics" },
    { name: "Die Cut Stickers", image: dieCutStickers, description: "Custom shaped stickers cut precisely to your design featuring weather-resistant vinyl and easy-peel backing" },
    { name: "Soap Bar Labels", image: soapBarLabels, description: "Elegant labels wrapping perfectly around soap bars featuring textured paper stocks and moisture-resistant coatings" },
    { name: "Table Tents", image: tableTents, description: "Freestanding display cards for menus or promotions featuring sturdy cardstock and high-resolution double-sided print" },
    { name: "Christmas Stickers", image: christmasStickers, description: "Festive stickers to add holiday cheer to packaging featuring metallic foil accents and vibrant seasonal designs" },
    { name: "Paper Stickers", image: paperStickers, description: "Cost-effective, classic paper-based stickers featuring versatile matte finishes and reliable permanent adhesive" },
    { name: "Business Labels", image: businessLabels, description: "Professional labels for office and branding needs featuring clean typography and high-quality thermal-ready stock" },
    { name: "Business Stickers", image: businessStickers, description: "Promotional stickers to boost brand visibility featuring durable materials and eye-catching full-color printing" },
    { name: "Candle Labels", image: candleLabels, description: "Heat-resistant labels designed for candle jars featuring specialized adhesives and elegant luxury textures" },
    { name: "Soap Labels", image: soapLabels, description: "Water-resistant labels perfect for soap packaging featuring durable poly-stocks and smudge-proof ink technology" },
    { name: "Wine Labels", image: wineLabels, description: "Premium labels for wine bottles with refined finishes featuring textured stocks and elegant gold foil stamping" },
    { name: "Kraft Labels", image: kraftLabels, description: "Eco-friendly, rustic labels with a natural look featuring biodegradable material and organic-style branding" },
    { name: "Chapstick Labels", image: chapstickLabels, description: "Small, precise labels for lip balm tubes featuring protective coatings and vibrant high-resolution graphics" },
    { name: "Metallic Labels", image: metallicLabels, description: "Shiny foil labels for a luxury, high-end appeal featuring mirror-like finishes and deep-embossed detailing" },
    { name: "Bottle Labels", image: bottleLabels, description: "Durable labels suitable for glass and plastic bottles featuring squeeze-resistant materials and waterproof ink" },
    { name: "Lip Balm Labels", image: lipBalmLabels, description: "Custom tags for various lip balm containers featuring precise die-cuts and high-impact small-format branding" },
    { name: "Cosmetic Labels", image: cosmeticLabels, description: "Beautiful labels enhancing beauty product packaging featuring luxury finishes and smudge-resistant surfaces" },
    { name: "Spray Bottle Labels", image: sprayBottleLabels, description: "Waterproof labels for cleaning or cosmetic sprays featuring chemical-resistant liners and durable poly material" },
    { name: "Bag Labels", image: bagLabels, description: "Identity labels for paper or plastic retail bags featuring strong adhesives and high-visibility brand marks" },
    { name: "Ice Cream Labels", image: iceCreamLabels, description: "Cold-resistant labels for frozen treat containers featuring specialized low-temperature adhesive technology" },
    { name: "Honey Labels", image: honeyLabels, description: "Sweet designs for honey jars and bottles featuring golden-tone prints and durable moisture-proof paper" },
    { name: "Body Butter Labels", image: bodyButterLabels, description: "Grease-resistant labels for skincare tubs featuring luxury textures and high-impact cosmetic branding" },
    { name: "Cookie Labels", image: cookieLabels, description: "Charming labels for bakery boxes and bags featuring food-safe materials and colorful artisanal graphics" },
    { name: "Lotion Labels", image: lotionLabels, description: "Moisture-proof labels for lotion bottles and pumps featuring elegant textures and durable protective coatings" },
    { name: "Bath Bomb Labels", image: bathBombLabels, description: "Fun, vibrant labels for bath bomb packaging featuring moisture-resistant stocks and bright playful colors" },
    { name: "Color Labels", image: colorLabels, description: "Full-color printed labels for vivid branding featuring high-fidelity color matching and premium finishes" },
    { name: "Vinyl Stickers", image: vinylStickers, description: "Durable, weather-resistant stickers for outdoor use featuring high-grade vinyl and UV-protective coatings" },
    { name: "Custom Roll Labels", image: customRollLabels, description: "Efficient labeling solution on rolls for high volume featuring automatic application ready technology" },
    { name: "Waterproof Labels", image: waterproofLabels, description: "Labels that withstand moisture and washing featuring durable synthetic materials and specialized adhesives" },
    { name: "Packaging Labels", image: packagingLabels, description: "Essential information and branding for shipping boxes featuring high-visibility print and strong adhesive" },
    { name: "Decals", image: decals, description: "High-quality transfer stickers for display featuring precision cutting and durable outdoor-grade materials" },
    { name: "Private Label Packaging", image: privateLabelPackaging, description: "Custom labeling for your exclusive product usage featuring premium materials and tailored brand graphics" },
];

const productOptions = relatedProducts.map(p => p.name);

const StickersAndLabels = () => {
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
                                <BreadcrumbPage>Stickers and Labels</BreadcrumbPage>
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
                                Custom Stickers & Labels
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Make your brand stick with high-quality custom labels and stickers. From durable vinyl decals to elegant product labels, we offer a wide range of materials and finishes to perfectly match your packaging needs.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={stickersLabelsHero}
                                        alt="Stickers and Labels Hero"
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

            {/* Related Products Section */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Diverse Labeling Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Find the perfect label or sticker for any application, surface, or industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                            >
                                <CardContent className="p-0">
                                    <div className="w-full aspect-square overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110 ${product.image === placeholder ? 'opacity-80' : ''}`}
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

            {/* Brand Rating */}

            <BrandRating />

            <QuoteForm />

            <SEOContent>

                <h2>The Ultimate Guide to Stickers And Labels</h2>
                <p>
                    Elevate your brand presence with our premium <strong>Stickers And Labels</strong>.
                    Designed to meet the highest standards of quality and aesthetics, our solutions provide the perfect blend of functionality and style.
                    Whether for retail, shipping, or promotional use, we deliver products that effectively communicate your brand's value to your customers.
                </p>

                <h3>Premium Material Quality</h3>
                <p>
                    We believe that quality starts with the right materials. Our Stickers And Labels are manufactured using top-tier stocks selected for their durability and finish.
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

export default StickersAndLabels;
