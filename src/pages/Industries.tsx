import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
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
import apparelBoxes from "@/assets/industries/apparel-boxes.jpg";
import automotiveBoxes from "@/assets/industries/automotive-boxes.jpg";
import bakeryBoxes from "@/assets/industries/bakery-boxes.jpg";
import beveragePackaging from "@/assets/industries/beverage-packaging.jpg";
import candleBoxes from "@/assets/industries/candle-boxes.jpg";
import cannabisPackaging from "@/assets/industries/cannabis-packaging.jpg";
import chocolateBoxes from "@/assets/industries/chocolate-boxes.jpg";
import christmasBoxes from "@/assets/industries/christmas-boxes.jpg";
import cigaretteBoxes from "@/assets/industries/cigarette-boxes.jpg";
import cosmeticBoxes from "@/assets/industries/cosmetic-boxes.jpg";
import customCandyBoxes from "@/assets/industries/custom-candy-boxes.jpg";
import customCbdBoxes from "@/assets/industries/custom-cbd-boxes.jpg";
import customHempBoxes from "@/assets/industries/custom-hemp-boxes.jpg";
// Use product asset as fallback since industry asset missing
import displayBoxes from "@/assets/products/display-boxes.jpg";
import eCommerce from "@/assets/industries/e-commerce.jpg";
import electronicsBoxes from "@/assets/industries/electronics-boxes.jpg";
import foodBoxes from "@/assets/industries/food-boxes.jpg";
import fragranceBoxes from "@/assets/industries/fragrance-boxes.jpg";
import gameBoxes from "@/assets/industries/game-boxes.jpg";
import giftBoxes from "@/assets/industries/gift-boxes.jpg";
import holidayBoxes from "@/assets/industries/holiday-boxes.jpg";
import jewelryBoxes from "@/assets/industries/jewelry-boxes.jpg";
import marijuanaPackaging from "@/assets/industries/marijuana-packaging.jpg";
// Use product asset as fallback since industry asset missing
import mailerBoxes from "@/assets/products/mailer-boxes.jpg";
import pharmaPackaging from "@/assets/industries/pharma-packaging.jpg";
import preRollBoxes from "@/assets/industries/pre-roll-boxes.jpg";
import retailBoxes from "@/assets/industries/retail-boxes.jpg";
import soapBoxes from "@/assets/industries/soap-boxes.jpg";
import sportsBoxes from "@/assets/industries/sports-boxes.jpg";
import stationeryBoxes from "@/assets/industries/stationery-boxes.jpg";
import sustainablePackaging from "@/assets/industries/sustainable-packaging.jpg";
import teaCoffeeCups from "@/assets/industries/tea-coffee-cups.jpg";
import vapeBoxes from "@/assets/industries/vape-boxes.jpg";
import weedBoxes from "@/assets/industries/weed-boxes.jpg";
import heroBackground from "@/assets/industries-hero-bg.jpg";

const industries = [
  { name: "Apparel Boxes", image: apparelBoxes },
  { name: "Automotive Boxes", image: automotiveBoxes },
  { name: "Bakery Boxes", image: bakeryBoxes },
  { name: "Beverage Boxes", image: beveragePackaging },
  { name: "Candle Boxes", image: candleBoxes },
  { name: "Cannabis Packaging", image: cannabisPackaging },
  { name: "Chocolate Boxes", image: chocolateBoxes },
  { name: "Christmas Boxes", image: christmasBoxes },
  { name: "Cigarette Boxes", image: cigaretteBoxes },
  { name: "Cosmetic Boxes", image: cosmeticBoxes },
  { name: "Custom Candy Boxes", image: customCandyBoxes },
  { name: "Custom CBD Boxes", image: customCbdBoxes },
  { name: "Custom Paper Bags", image: apparelBoxes }, // Placeholder using existing asset
  { name: "Custom Hemp Boxes", image: customHempBoxes },
  { name: "E-Commerce", image: eCommerce },
  { name: "Electronics Boxes", image: electronicsBoxes },
  { name: "Food Boxes", image: foodBoxes },
  { name: "Fragrance Boxes", image: fragranceBoxes },
  { name: "Game Boxes", image: gameBoxes },
  { name: "Gift Boxes", image: giftBoxes },
  { name: "Holiday Boxes", image: holidayBoxes },
  { name: "Jewelry Boxes", image: jewelryBoxes },
  { name: "Marijuana Packaging", image: marijuanaPackaging },
  { name: "Pharma Packaging", image: pharmaPackaging },
  { name: "Pre Roll Boxes", image: preRollBoxes },
  { name: "Retail Boxes", image: retailBoxes },
  { name: "Soap Boxes", image: soapBoxes },
  { name: "Sports Boxes", image: sportsBoxes },
  { name: "Stationery Boxes", image: stationeryBoxes },
  { name: "Sustainable Packaging", image: sustainablePackaging },
  { name: "Tea & Coffee Cups", image: teaCoffeeCups },
  { name: "Vape Boxes", image: vapeBoxes },
  { name: "Weed Boxes", image: weedBoxes },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center mt-[120px] md:mt-[160px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">All Industries</h1>
          <p className="text-xl md:text-2xl text-white/90">Exceptional Product Packaging To Set You Apart</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                <BreadcrumbPage>All Industries</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Shop by Industries Section */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Browse our extensive library of custom boxes crafted with quality materials & printing precision to help you tame the packaging innovation for your industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const industrySlug = industry.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              const industryPath = `/industries/${industrySlug}`;

              return (
                <Link to={industryPath} key={index}>
                  <Card
                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-white">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 text-center border-t border-border">
                        <h3 className="font-semibold text-foreground text-sm">
                          {industry.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Industries;
