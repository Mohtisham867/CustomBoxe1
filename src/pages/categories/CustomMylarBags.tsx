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
// Images
import mylarBagsHero from "@/assets/mylar-bags/mylar-bags-hero.webp";
import dispensaryMylarBags from "@/assets/mylar-bags/dispensary-mylar-bags-premium.webp";
import dieCutMylarBags from "@/assets/mylar-bags/die-cut-mylar-bags-premium.webp";
import mylarVacuumSealBags from "@/assets/mylar-bags/mylar-vacuum-seal-bags-premium.webp";
import mylarFoodStorageBags from "@/assets/mylar-bags/mylar-food-storage-bags-premium.webp";
import blackMylarBags from "@/assets/mylar-bags/black-mylar-bags-premium-v2.webp";
import smellProofMylarBags from "@/assets/mylar-bags/smell-proof-mylar-bags-premium.webp";
import childResistantMylarBags from "@/assets/mylar-bags/child-resistant-mylar-bags-premium-v2.webp";
import exoticMylarBags from "@/assets/mylar-bags/exotic-mylar-bags-premium.webp";
import smallMylarBags from "@/assets/mylar-bags/small-mylar-bags-premium.webp";
import holographicMylarBags from "@/assets/mylar-bags/holographic-mylar-bags-premium.webp";
import kraftMylarBags from "@/assets/mylar-bags/kraft-mylar-bags-premium.webp";
import mylarZiplockBags from "@/assets/mylar-bags/mylar-ziplock-bags-premium.webp";
import clearMylarBags from "@/assets/mylar-bags/clear-mylar-bags-premium.webp";
import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Dispensary Mylar Bags", image: dispensaryMylarBags, description: "Professional, compliant packaging for dispensaries featuring high-barrier protection and secure seals" },
    { name: "Die Cut Mylar Bags", image: dieCutMylarBags, description: "Custom-shaped mylar bags designed for unique brand identity and maximum retail shelf impact" },
    { name: "Mylar Vacuum Seal Bags", image: mylarVacuumSealBags, description: "Airtight sealing for maximum freshness and longevity using premium multi-layer barrier technology" },
    { name: "Mylar Food Storage Bags", image: mylarFoodStorageBags, description: "Durable bags for long-term food preservation featuring moisture-proof and oxygen-blocking materials" },
    { name: "Black Mylar Bags", image: blackMylarBags, description: "Sleek, premium matte black finish for high-end products requiring opacity and luxury aesthetic" },
    { name: "Smell Proof Mylar Bags", image: smellProofMylarBags, description: "Advanced odor-locking technology for total discretion and maintenance of product aromatic profiles" },
    { name: "Child Resistant Mylar Bags", image: childResistantMylarBags, description: "Safe, compliant packaging with secure locking mechanisms designed to meet regulatory safety standards" },
    { name: "Exotic Mylar Bags", image: exoticMylarBags, description: "Vibrant, artistic designs and high-gloss finishes to catch the customer's eye on crowded retail shelves" },
    { name: "Small Mylar Bags", image: smallMylarBags, description: "Compact pouches for single servings or small items featuring easy-tear notches and secure heat seals" },
    { name: "Holographic Mylar Bags", image: holographicMylarBags, description: "Eye-catching rainbow reflective finish providing a futuristic and premium look for limited editions" },
    { name: "Kraft Mylar Bags", image: kraftMylarBags, description: "Eco-friendly natural look combined with the superior moisture and light protection of mylar lining" },
    { name: "Mylar Ziplock Bags", image: mylarZiplockBags, description: "Convenient resealable ziplock closure for repeated use while maintaining product freshness levels" },
    { name: "Clear Mylar Bags", image: clearMylarBags, description: "Transparent combination for full product visibility with the high-barrier performance of mylar" },
];

const productOptions = relatedProducts.map(p => p.name);

const CustomMylarBags = () => {
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
                                <BreadcrumbPage>Mylar Bags</BreadcrumbPage>
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
                                Custom Mylar Bags
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Premium quality custom printed Mylar bags for every need. From food storage to retail packaging, our odor-proof, durable, and customizable bags ensure your products stay fresh and stand out on the shelf.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={mylarBagsHero}
                                        alt="Custom Mylar Bags Hero"
                                        className="w-full h-full object-cover" loading="lazy"
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
                            Styles & Shapes
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our diverse range of Mylar bag styles, sizes, and finishes.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
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

            {/* Brand Rating */}

            <BrandRating />

            <QuoteForm />

            <section className="py-16 px-[50px] bg-white border-t border-slate-100">
                <div className="w-full mx-auto text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                        Premium Custom Mylar Bags: The Ultimate Packaging Solution
                    </h2>
                    <div className="prose prose-lg prose-slate max-w-none
                            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-800 [&>p]:mb-6
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>li]:text-gray-800 [&>li]:text-[15px]">

                        <p className="mt-0">
                            Custom Mylar bags are a cornerstone of modern flexible packaging, marrying visual branding with industrial-grade protection. At the heart of every high-performance Mylar pouch is a carefully engineered multi-layer structure—typically combining a printable PET outer layer, a foil or metallized barrier layer, and a food-safe inner sealant such as LLDPE. This composite delivers the toughness and print fidelity brands need, while creating an impervious barrier to gases, moisture, and light.
                        </p>

                        <h3>Material Durability & Recommended Thickness</h3>
                        <p>
                            Material selection is driven by the product you package and the shelf-life goals you set. For many retail and long-term storage applications we recommend PET laminates in the <strong>4ml–5ml</strong> range—this gauge strikes an optimal balance between puncture resistance, dimensional stability, and print quality. Thicker constructions (6–7ml and above) are available for high-abuse items or heavy-fill products, while lighter gauges serve short-run retail and trial-size offerings.
                        </p>
                        <p>
                            The PET outer layer provides a smooth, high-definition surface for rotogravure or digital print processes. Beneath that, a metallized or aluminum foil layer (VMPET/AL) acts as the primary gas barrier, interrupting oxygen and UV transmission. The inner heat-seal layer—usually LLDPE or similar food-grade polymer—ensures safe direct contact with foodstuffs and reliable, leak-free closure.
                        </p>

                        <h3>Smell‑Proof Zippers & Closure Engineering</h3>
                        <p>
                            Zipper performance is equally important to barrier performance. Our smell‑proof zippers employ multi-channel sealing profiles with enhanced compression tolerances that minimize odor migration and prevent micro-leakage. For cannabis, aroma-sensitive food, or aromatic botanicals, we recommend double-track or multi‑lip zippers paired with an internal odor barrier layer—this combination preserves discretion while allowing repeated reseals without degrading the barrier properties.
                        </p>

                        <h3>Oxygen Absorbers & Long-Term Shelf Life</h3>
                        <p>
                            Oxygen absorbers are an economical, proven method to extend shelf life when paired with high-barrier pouches. When properly calculated for pouch volume and headspace, absorbers can remove residual oxygen to levels that dramatically slow oxidation and microbial growth. Under ideal conditions—proper moisture control and storage—this strategy has been shown to support shelf stability for dried goods measured in decades, with examples of <strong>20–30 years</strong> cited for certain low-moisture products. It’s essential to match absorber capacity to the product and to use validated packing procedures to achieve these timelines.
                        </p>

                        <h3>Food‑Grade Safety & Regulatory Considerations</h3>
                        <p>
                            All inner sealant layers and inks intended to contact food must meet relevant regulatory standards. We work with FDA-compliant polymers and food‑contact-safe adhesives to ensure migration limits are respected and that printed surfaces do not compromise product safety. For applications involving direct food contact, we recommend barrier laminates specifically certified for food use and production on dedicated lines when cross-contamination is a concern.
                        </p>

                        <h3>Wholesale Customization & Functional Add‑Ons</h3>
                        <p>
                            Beyond material and sealing choices, scale and brand impact matter. We offer wholesale customization including high-fidelity rotogravure print, digital short-run solutions, matte or gloss finishes, clear window options, tear notches, hang holes, and child-resistant zipper variants. Packaging engineers can advise on right‑sizing films, testing seal integrity, and selecting the correct absorber quantity to meet your shelf‑life goals.
                        </p>

                        <h3>Performance Testing & Quality Assurance</h3>
                        <p>
                            Rigorous testing underpins reliable packaging. Our QA protocols include seal strength testing, oxygen transmission rate (OTR) analysis, water vapor transmission rate (WVTR) measurements, and accelerated shelf-life studies. These data points guide material selection and optimize constructions for each SKU.
                        </p>

                        <p>
                            If you need packaging that preserves aroma, extends shelf life, and projects a premium brand image, our Mylar solutions provide a flexible, proven platform. Contact our technical team to request samples, absorber sizing guidance, and seal validation testing to ensure your product meets its intended shelf and retail performance targets.
                        </p>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CustomMylarBags;
