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

import heroImage from "@/assets/stationery-boxes/stationery-boxes-hero.png";

// Product images
import businessCards from "@/assets/stationery-boxes/custom-business-cards.png";
import documentFolder from "@/assets/stationery-boxes/document-folder.png";
import penGiftBoxes from "@/assets/stationery-boxes/pen-gift-boxes.png";
import mailingEnvelopes from "@/assets/stationery-boxes/mailing-envelopes.png";
import invitationBoxes from "@/assets/stationery-boxes/invitation-boxes.png";
import markerBoxes from "@/assets/stationery-boxes/marker-boxes.png";
import stapleBoxes from "@/assets/stationery-boxes/staple-boxes.png";
import cardboardPencilBoxes from "@/assets/stationery-boxes/cardboard-pencil-boxes.png";
import packagingInserts from "@/assets/stationery-boxes/packaging-inserts.png";
import pencilBoxes from "@/assets/stationery-boxes/pencil-boxes.png";
import customBookmarks from "@/assets/stationery-boxes/custom-bookmarks.png";
import bookBoxes from "@/assets/stationery-boxes/book-boxes.png";

const relatedProducts = [
    { name: "Custom Business Cards", image: businessCards, description: "Professional cards for networking and branding." },
    { name: "Document Folder", image: documentFolder, description: "Organized storage for important documents." },
    { name: "Pen Gift Boxes", image: penGiftBoxes, description: "Elegant packaging for premium pens." },
    { name: "Mailing Envelopes", image: mailingEnvelopes, description: "Secure envelopes for professional correspondence." },
    { name: "Invitation Boxes", image: invitationBoxes, description: "Premium boxes for special event invitations." },
    { name: "Marker Boxes", image: markerBoxes, description: "Protective packaging for marker sets." },
    { name: "Staple Boxes", image: stapleBoxes, description: "Compact boxes for office staples." },
    { name: "Cardboard Pencil Boxes", image: cardboardPencilBoxes, description: "Eco-friendly pencil storage solutions." },
    { name: "Packaging Inserts", image: packagingInserts, description: "Custom inserts for organized packaging." },
    { name: "Pencil Boxes", image: pencilBoxes, description: "Durable boxes for pencil storage." },
    { name: "Custom Bookmarks", image: customBookmarks, description: "Branded bookmarks for promotional use." },
    { name: "Book Boxes", image: bookBoxes, description: "Protective packaging for books and publications." },
];

const productOptions = [
    "Custom Business Cards",
    "Document Folder",
    "Pen Gift Boxes",
    "Mailing Envelopes",
    "Invitation Boxes",
    "Marker Boxes",
    "Staple Boxes",
    "Cardboard Pencil Boxes",
    "Packaging Inserts",
    "Pencil Boxes",
    "Custom Bookmarks",
    "Book Boxes",
];

const StationeryBoxes = () => {
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
                                <BreadcrumbPage>Stationery Boxes</BreadcrumbPage>
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
                                Stationery Boxes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4">
                                Professional, durable, and organized packaging for office supplies and documents.
                                Keep your workspace tidy and your brand professional with our custom stationery packaging solutions.
                            </p>
                            <div className="pt-4">
                                <img
                                    src={heroImage}
                                    alt="Stationery Boxes Packaging"
                                    className="w-[480px] h-[300px] object-cover rounded-lg shadow-lg"
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
                            Stationery Packaging Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our comprehensive range of stationery packaging solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default StationeryBoxes;
