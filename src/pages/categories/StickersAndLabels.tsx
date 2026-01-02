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
    { name: "Pre Roll Packaging Labels", image: preRollLabels, description: "Professional labels for pre-roll tubes and containers." },
    { name: "Food Labels", image: foodLabels, description: "Compliant and appetizing labels for food products." },
    { name: "Circle Labels", image: circleLabels, description: "Versatile round labels for logos and branding." },
    { name: "Circle Stickers", image: circleStickers, description: "Fun and effective round stickers for promotion." },
    { name: "Die Cut Stickers", image: dieCutStickers, description: "Custom shaped stickers cut precisely to your design." },
    { name: "Soap Bar Labels", image: soapBarLabels, description: "Elegant labels wrapping perfectly around soap bars." },
    { name: "Table Tents", image: tableTents, description: "Freestanding display cards for menus or promotions." },
    { name: "Christmas Stickers", image: christmasStickers, description: "Festive stickers to add holiday cheer to packaging." },
    { name: "Paper Stickers", image: paperStickers, description: "Cost-effective, classic paper-based stickers." },
    { name: "Business Labels", image: businessLabels, description: "Professional labels for office and branding needs." },
    { name: "Business Stickers", image: businessStickers, description: "Promotional stickers to boost brand visibility." },
    { name: "Candle Labels", image: candleLabels, description: "Heat-resistant labels designed for candle jars." },
    { name: "Soap Labels", image: soapLabels, description: "Water-resistant labels perfect for soap packaging." },
    { name: "Wine Labels", image: wineLabels, description: "Premium labels for wine bottles with refined finishes." },
    { name: "Kraft Labels", image: kraftLabels, description: "Eco-friendly, rustic labels with a natural look." },
    { name: "Chapstick Labels", image: chapstickLabels, description: "Small, precise labels for lip balm tubes." },
    { name: "Metallic Labels", image: metallicLabels, description: "Shiny foil labels for a luxury, high-end appeal." },
    { name: "Bottle Labels", image: bottleLabels, description: "Durable labels suitable for glass and plastic bottles." },
    { name: "Lip Balm Labels", image: lipBalmLabels, description: "Custom tags for various lip balm containers." },
    { name: "Cosmetic Labels", image: cosmeticLabels, description: "Beautiful labels enhancing beauty product packaging." },
    { name: "Spray Bottle Labels", image: sprayBottleLabels, description: "Waterproof labels for cleaning or cosmetic sprays." },
    { name: "Bag Labels", image: bagLabels, description: "Identity labels for paper or plastic retail bags." },
    { name: "Ice Cream Labels", image: iceCreamLabels, description: "Cold-resistant labels for frozen treat containers." },
    { name: "Honey Labels", image: honeyLabels, description: "Sweet designs for honey jars and bottles." },
    { name: "Body Butter Labels", image: bodyButterLabels, description: "Grease-resistant labels for skincare tubs." },
    { name: "Cookie Labels", image: cookieLabels, description: "Charming labels for bakery boxes and bags." },
    { name: "Lotion Labels", image: lotionLabels, description: "Moisture-proof labels for lotion bottles and pumps." },
    { name: "Bath Bomb Labels", image: bathBombLabels, description: "Fun, vibrant labels for bath bomb packaging." },
    { name: "Color Labels", image: colorLabels, description: "Full-color printed labels for vivid branding." },
    { name: "Vinyl Stickers", image: vinylStickers, description: "Durable, weather-resistant stickers for outdoor use." },
    { name: "Custom Roll Labels", image: customRollLabels, description: "Efficient labeling solution on rolls for high volume." },
    { name: "Waterproof Labels", image: waterproofLabels, description: "Labels that withstand moisture and washing." },
    { name: "Packaging Labels", image: packagingLabels, description: "Essential information and branding for shipping boxes." },
    { name: "Decals", image: decals, description: "High-quality transfer stickers for display." },
    { name: "Private Label Packaging", image: privateLabelPackaging, description: "Custom labeling for your exclusive product usage." },
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

            {/* Brand Rating */}
            <BrandRating />

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

export default StickersAndLabels;
