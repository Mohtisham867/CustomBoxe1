import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/primary-packaging-hero-bg.jpg";
import glassSerumBottle from "@/assets/primary-packaging/glass-serum-bottle.jpg";
import plasticCleanserTube from "@/assets/primary-packaging/plastic-cleanser-tube.jpg";
import plasticMistBottle from "@/assets/primary-packaging/plastic-mist-bottle.jpg";
import glassRollOnBottle from "@/assets/primary-packaging/glass-roll-on-bottle.jpg";
import plasticShampooBottle from "@/assets/primary-packaging/plastic-shampoo-bottle.jpg";
import paperTubes from "@/assets/primary-packaging/paper-tubes.jpg";
import glassCandleJars from "@/assets/primary-packaging/glass-candle-jars.jpg";
import glassPerfumeBottle from "@/assets/primary-packaging/glass-perfume-bottle.jpg";
import plasticCapsuleBottle from "@/assets/primary-packaging/plastic-capsule-bottle.jpg";
import moisturizerJar from "@/assets/primary-packaging/moisturizer-jar.jpg";
import plasticLotionBottle from "@/assets/primary-packaging/plastic-lotion-bottle.jpg";
import glassCreamJars from "@/assets/primary-packaging/glass-cream-jars.jpg";
import customPreRollTubes from "@/assets/primary-packaging/custom-pre-roll-tubes.jpg";
import dropperBottles from "@/assets/primary-packaging/dropper-bottles.jpg";
import jarsWithPump from "@/assets/primary-packaging/jars-with-pump.jpg";

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
      <Footer />
    </div>
  );
};

export default PrimaryPackaging;
