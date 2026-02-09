import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/primary-packaging-hero-bg.webp";
import glassSerumBottle from "@/assets/primary-packaging/glass-serum-bottle-premium.webp";
import plasticCleanserTube from "@/assets/primary-packaging/plastic-cleanser-tube-premium.webp";
import plasticMistBottle from "@/assets/primary-packaging/plastic-mist-bottle-premium.webp";
import glassRollOnBottle from "@/assets/primary-packaging/glass-roll-on-bottle-premium.webp";
import plasticShampooBottle from "@/assets/primary-packaging/plastic-shampoo-bottle-premium.webp";
import paperTubes from "@/assets/primary-packaging/paper-tubes-premium.webp";
import glassCandleJars from "@/assets/primary-packaging/glass-candle-jars-premium.webp";
import glassPerfumeBottle from "@/assets/primary-packaging/glass-perfume-bottle-premium.webp";
import plasticCapsuleBottle from "@/assets/primary-packaging/plastic-capsule-bottle-premium.webp";
import moisturizerJar from "@/assets/primary-packaging/moisturizer-jar-premium.webp";
import plasticLotionBottle from "@/assets/primary-packaging/plastic-lotion-bottle-premium.webp";
import glassCreamJars from "@/assets/primary-packaging/glass-cream-jars-premium.webp";
import customPreRollTubes from "@/assets/primary-packaging/custom-pre-roll-tubes-premium.webp";
import dropperBottles from "@/assets/primary-packaging/dropper-bottles-premium.webp";
import jarsWithPump from "@/assets/primary-packaging/jars-with-pump-premium.webp";

import { Link } from "react-router-dom";

const primaryPackaging = [
  { name: "Glass Serum Bottle", image: glassSerumBottle, link: "/primary-packaging/glass-serum-bottle" },
  { name: "Plastic Cleanser Tube", image: plasticCleanserTube, link: "/primary-packaging/plastic-cleanser-tube" },
  { name: "Plastic Mist Bottle", image: plasticMistBottle, link: "/primary-packaging/plastic-mist-bottle" },
  { name: "Glass Roll on Bottle", image: glassRollOnBottle, link: "/primary-packaging/glass-roll-on-bottle" },
  { name: "Plastic Shampoo Bottle", image: plasticShampooBottle, link: "/primary-packaging/plastic-shampoo-bottle" },
  { name: "Paper Tubes", image: paperTubes, link: "/primary-packaging/paper-tubes" },
  { name: "Glass Candle Jars", image: glassCandleJars, link: "/primary-packaging/glass-candle-jars" },
  { name: "Glass Perfume Bottle", image: glassPerfumeBottle, link: "/primary-packaging/glass-perfume-bottle" },
  { name: "Plastic Capsule Bottle", image: plasticCapsuleBottle, link: "/primary-packaging/plastic-capsule-bottle" },
  { name: "Moisturizer Jar", image: moisturizerJar, link: "/primary-packaging/moisturizer-jar" },
  { name: "Plastic Lotion Bottle", image: plasticLotionBottle, link: "/primary-packaging/plastic-lotion-bottle" },
  { name: "Glass Cream Jars", image: glassCreamJars, link: "/primary-packaging/glass-cream-jars" },
  { name: "Custom Pre Roll Tubes", image: customPreRollTubes, link: "/primary-packaging/custom-pre-roll-tubes" },
  { name: "Dropper Bottles", image: dropperBottles, link: "/primary-packaging/dropper-bottles" },
  { name: "Jars with Pump", image: jarsWithPump, link: "/primary-packaging/jars-with-pump" },
];

const PrimaryPackaging = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center mt-[120px] md:mt-[160px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Primary Packaging</h1>
          <p className="text-xl md:text-2xl text-white/90">Durable and Aesthetic Primary Packaging Solutions</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Primary Packaging</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pack your Products In durable and Aesthetic Primary packaging boxes</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of primary packaging solutions designed to protect and showcase your products with exceptional quality and style.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryPackaging.map((item, index) => (
            <Link to={item.link} key={index} className="block h-full">
              <Card
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-center group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </section>

      <QuoteForm />

      <section className="py-16 px-[50px] bg-white border-t border-slate-100">
        <div className="w-full mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Primary Packaging: Materials, Safety, and Shelf-Ready Presentation
          </h2>

          <div className="prose prose-lg prose-slate max-w-none
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
                [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-800 [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>li]:text-gray-800 [&>li]:text-[15px]">

            <p className="mt-0">
              Primary packaging sits closest to the product — it is the first physical interface between your item and the consumer. Whether it’s a glass serum bottle, a plastic tube, or a food-grade pouch, materials that contact the product must combine inertness, sterilizability, and structural integrity. This section outlines the material choices, sterilization pathways, and design considerations that ensure safety, compliance, and retail appeal.
            </p>

            <h3>Direct-Contact Materials & Food-Safe Polymers</h3>
            <p>
              Materials that come into direct contact with consumable or topical products are selected for chemical inertness and low migration. Common primary packaging substrates include pharmaceutical‑grade glass, HDPE/LDPE, PET, and engineered polymers formulated for cosmetic or food-contact use. Each substrate offers trade-offs: glass is non‑porous and chemically stable, making it ideal for serums and perfumes; PET and HDPE provide excellent impact resistance and are preferred for retail bottles and jars.
            </p>
            <p>
              For food or ingestible products, certification of polymer grades (FDA, EU FCM) and documentation of additive migration limits are essential. We partner with material suppliers who provide full declarations of conformity to streamline regulatory filing and ensure product safety on a global scale.
            </p>

            <h3>Sterilization, Cleanline Processes & Production Controls</h3>
            <p>
              Sterility and cleanliness begin long before filling. Primary packaging intended for sterile or aseptic products must be compatible with the intended sterilization method—autoclave, gamma irradiation, ethylene oxide, or validated chemical sterilants. For heat-stable glass, autoclaving is common; certain polymers tolerate irradiation but must be tested for changes in mechanical properties or leachables.
            </p>
            <p>
              Our production lines support cleanroom filling environments and validated cleaning procedures to minimize particulate and microbial contamination. We also provide guidance on pre-treatment, sterilization validation, and shelf stability studies to ensure the packaged product remains safe throughout its lifecycle.
            </p>

            <h3>Retail Presentation & Structural Protection</h3>
            <p>
              Primary packaging must protect the product through distribution while projecting the correct brand message on shelf. Structural features—shoulder profiles, tamper-evident caps, inner seals, and integrated pumps—combine with high-quality printing and finishing to create a cohesive retail experience. Barrier liners and seal integrity prevent leakage and protect formulations from oxygen and moisture ingress.
            </p>
            <p>
              For cosmetics and topical products, finishes like soft-touch lamination, metallic foils, and embossed logos enhance perceived value. For food and nutraceuticals, clear labeling, tamper bands, and functional closures (dispensing caps, flip-tops, droppers) improve usability and compliance.
            </p>

            <h3>Protective Barriers & Compatibility Testing</h3>
            <p>
              Selecting a protective barrier requires compatibility testing against the specific product chemistry. Some active ingredients or solvents may interact with plastics, causing stress cracking or extractables. We run migration and extractables studies where necessary and recommend barrier coatings, liner films, or alternate substrates when incompatibilities are detected.
            </p>
            <p>
              Barrier strategies can also include inner heat-seal liners for jars, foiled induction seals for tamper evidence, and oxygen-scavenging layers for oxidation-sensitive formulas. The correct combination preserves efficacy and extends shelf life without compromising consumer safety.
            </p>

            <h3>Supply Chain, Sustainability & Scale</h3>
            <p>
              Supply chain resilience and sustainability are equally important. We help brands select recycled-content polymers, lightweight glass options, and mono-material solutions that simplify recycling. Our sourcing team evaluates lead times, validates supplier qualifications, and provides traceability documentation to support large-scale rollouts with consistent quality across production runs.
            </p>

            <p>
              In short, primary packaging is where material science meets regulatory responsibility and brand storytelling. If your project requires validated sterilization pathways, compatibility testing, or premium retail finishes, our team can guide you through material selection, prototyping, and scale production to ensure the final package protects the product and elevates your shelf presence.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryPackaging;
