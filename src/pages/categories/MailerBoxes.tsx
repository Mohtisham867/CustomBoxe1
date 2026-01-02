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
import tuckTopMailerBoxes from "@/assets/mailer-boxes/tuck-top-mailer-boxes.jpg";
import vinylRecordMailers from "@/assets/mailer-boxes/vinyl-record-mailers.jpg";
import bubbleMailers from "@/assets/mailer-boxes/bubble-mailers.jpg";
import bubbleMailers4x8 from "@/assets/mailer-boxes/4x8-bubble-mailers.jpg";
import kraftBubbleMailers from "@/assets/mailer-boxes/kraft-bubble-mailers.jpg";
import corrugatedMailerBoxes from "@/assets/mailer-boxes/corrugated-mailer-boxes.jpg";
import earLockMailerBox from "@/assets/mailer-boxes/ear-lock-mailer-box.jpg";
import polyBubbleMailers from "@/assets/mailer-boxes/poly-bubble-mailers.jpg";
import whiteMailerBoxes from "@/assets/mailer-boxes/white-mailer-boxes.jpg";
import kraftMailerBoxes from "@/assets/mailer-boxes/kraft-mailer-boxes.jpg";
import blackMailerBoxes from "@/assets/mailer-boxes/black-mailer-boxes.jpg";
import coloredMailerBoxes from "@/assets/mailer-boxes/colored-mailer-boxes.jpg";
import mailerBoxesHero from "@/assets/mailer-boxes/mailer-boxes-hero.png";

// IMAGES INTENTIONALLY OMITTED - AWAITING USER INSTRUCTION
// Hero image placeholder - to be added later
// Product images placeholders - to be added later

const relatedProducts = [
    { name: "Vinyl Record Mailers", image: vinylRecordMailers, description: "Protective mailers for vinyl records." },
    { name: "Bubble Mailers", image: bubbleMailers, description: "Padded mailers for shipping fragile items." },
    { name: "4x8 Bubble Mailers", image: bubbleMailers4x8, description: "Compact bubble mailers for small goods." },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Eco-friendly kraft paper bubble mailers." },
    { name: "Corrugated Mailer Boxes", image: corrugatedMailerBoxes, description: "Sturdy corrugated boxes for shipping." },
    { name: "Ear Lock Mailer Box", image: earLockMailerBox, description: "Secure ear-lock closure mailer boxes." },
    { name: "Poly Bubble Mailers", image: polyBubbleMailers, description: "Water-resistant poly bubble mailers." },
    { name: "White Mailer Boxes", image: whiteMailerBoxes, description: "Clean, professional white mailer boxes." },
    { name: "Kraft Mailer Boxes", image: kraftMailerBoxes, description: "Sustainable kraft cardboard mailers." },
    { name: "Black Mailer Boxes", image: blackMailerBoxes, description: "Sleek black mailer boxes for premium branding." },
    { name: "Colored Mailer Boxes", image: coloredMailerBoxes, description: "Vibrant colored mailers to stand out." },
    { name: "Tuck Top Mailer Boxes", image: tuckTopMailerBoxes, description: "Classic tuck top style for easy assembly." },
];

const productOptions = [
    "Vinyl Record Mailers",
    "Bubble Mailers",
    "4x8 Bubble Mailers",
    "Kraft Bubble Mailers",
    "Corrugated Mailer Boxes",
    "Ear Lock Mailer Box",
    "Poly Bubble Mailers",
    "White Mailer Boxes",
    "Kraft Mailer Boxes",
    "Black Mailer Boxes",
    "Colored Mailer Boxes",
    "Tuck Top Mailer Boxes",
];

const MailerBoxes = () => {
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
                                <BreadcrumbPage>Mailer Boxes</BreadcrumbPage>
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
                                Mailer Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Strong, lightweight, and customizable corrugated packaging designed specifically for safe and cost-effective shipping and e-commerce fulfillment.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={mailerBoxesHero}
                                        alt="Mailer Boxes Hero"
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
                            Mailing & Shipping Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our durable and customizable mailer box options.
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
                                        {/* Product image placeholder - intentionally empty */}
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                                <p className="text-muted-foreground text-xs">Image placeholder</p>
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

export default MailerBoxes;
