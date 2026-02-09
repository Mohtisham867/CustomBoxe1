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
import apparelBoxes from "@/assets/industries/apparel-boxes.webp";
import automotiveBoxes from "@/assets/industries/automotive-boxes.webp";
import bakeryBoxes from "@/assets/industries/bakery-boxes.webp";
import beveragePackaging from "@/assets/industries/beverage-packaging.webp";
import candleBoxes from "@/assets/industries/candle-boxes.webp";
import cannabisPackaging from "@/assets/industries/cannabis-packaging.webp";
import chocolateBoxes from "@/assets/industries/chocolate-boxes.webp";
import christmasBoxes from "@/assets/industries/christmas-boxes.webp";
import cigaretteBoxes from "@/assets/industries/cigarette-boxes.webp";
import cosmeticBoxes from "@/assets/industries/cosmetic-boxes.webp";
import customCandyBoxes from "@/assets/industries/custom-candy-boxes.webp";
import customCbdBoxes from "@/assets/industries/custom-cbd-boxes.webp";
import customHempBoxes from "@/assets/industries/custom-hemp-boxes.webp";
// Use product asset as fallback since industry asset missing
import displayBoxes from "@/assets/products/display-boxes.webp";
import eCommerce from "@/assets/industries/e-commerce.webp";
import electronicsBoxes from "@/assets/industries/electronics-boxes.webp";
import foodBoxes from "@/assets/industries/food-boxes.webp";
import fragranceBoxes from "@/assets/industries/fragrance-boxes.webp";
import gameBoxes from "@/assets/industries/game-boxes.webp";
import giftBoxes from "@/assets/industries/gift-boxes.webp";
import holidayBoxes from "@/assets/industries/holiday-boxes.webp";
import jewelryBoxes from "@/assets/industries/jewelry-boxes.webp";
import marijuanaPackaging from "@/assets/industries/marijuana-packaging.webp";
// Use product asset as fallback since industry asset missing
import mailerBoxes from "@/assets/products/mailer-boxes.webp";
import pharmaPackaging from "@/assets/industries/pharma-packaging.webp";
import preRollBoxes from "@/assets/industries/pre-roll-boxes.webp";
import retailBoxes from "@/assets/industries/retail-boxes.webp";
import soapBoxes from "@/assets/industries/soap-boxes.webp";
import sportsBoxes from "@/assets/industries/sports-boxes.webp";
import stationeryBoxes from "@/assets/industries/stationery-boxes.webp";
import sustainablePackaging from "@/assets/industries/sustainable-packaging.webp";
import teaCoffeeCups from "@/assets/industries/tea-coffee-cups.webp";
import vapeBoxes from "@/assets/industries/vape-boxes.webp";
import weedBoxes from "@/assets/industries/weed-boxes.webp";
import heroBackground from "@/assets/industries-hero-v3.webp";

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
                          className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110" loading="lazy"
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

      {/* Detailed SEO Content Section - 1000+ Words */}
      <section className="py-16 px-5 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Industry-Specific Custom Packaging Solutions: Elevating Brands Across Every Sector
          </h2>

          <div className="prose prose-lg prose-slate max-w-none
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
                [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-800 [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>li]:text-gray-800 [&>li]:text-[15px]">

            <p className="mt-0">
              In today's competitive marketplace, packaging is far more than a protective vessel—it's a strategic brand asset that communicates value, ensures product integrity, and creates memorable customer experiences. At CustomPackMakers, we understand that each industry faces unique challenges, regulatory requirements, and consumer expectations. Our comprehensive portfolio of custom packaging solutions is designed to address the specific needs of diverse sectors, from cosmetics and food & beverage to CBD, pharmaceuticals, retail, and beyond. This guide explores how industry-tailored packaging drives brand recognition, ensures compliance, and delivers measurable business results.
            </p>

            <h3>Cosmetics & Beauty Packaging: Luxury Meets Functionality</h3>
            <p>
              The cosmetics and beauty industry demands packaging that reflects the premium nature of the products inside. First impressions matter tremendously in this sector, where consumers make split-second purchasing decisions based on visual appeal and perceived quality. Our cosmetic packaging solutions combine aesthetic excellence with practical functionality, offering brands the tools they need to stand out on crowded retail shelves and create Instagram-worthy unboxing experiences.
            </p>
            <p>
              For skincare brands, we provide elegant rigid boxes, magnetic closure boxes, and drawer-style packaging that convey sophistication and luxury. These structures are ideal for high-end serums, face creams, and treatment sets where the packaging itself becomes part of the product experience. We offer premium finishing options including soft-touch lamination, spot UV highlighting, metallic foil stamping in gold, rose gold, or silver, and embossed or debossed logos that add tactile dimension.
            </p>
            <p>
              Makeup brands benefit from our custom compact boxes, palette packaging, and lipstick boxes designed with precise internal fitments to secure products during shipping while maintaining pristine presentation. Window packaging options allow customers to preview product shades and textures, reducing returns and increasing purchase confidence. For fragrance brands, our perfume boxes feature luxurious materials, custom inserts, and finishing techniques that match the elegance of the scents they protect.
            </p>
            <ul>
              <li><strong>Rigid Boxes:</strong> Premium construction with magnetic closures, ribbon pulls, and custom foam or cardboard inserts</li>
              <li><strong>Sleeve & Tray Boxes:</strong> Dramatic reveal experience with full customization of both inner and outer components</li>
              <li><strong>Sustainable Options:</strong> Recycled materials, soy-based inks, and biodegradable coatings for eco-conscious brands</li>
              <li><strong>Custom Shapes:</strong> Unique structural designs that differentiate your brand and create shelf impact</li>
            </ul>

            <h3>Food & Beverage Packaging: Safety, Freshness, and Brand Appeal</h3>
            <p>
              Food and beverage packaging must balance multiple critical requirements: product safety, freshness preservation, regulatory compliance, and brand differentiation. Our food-grade packaging solutions utilize FDA-approved materials and food-safe inks to ensure complete compliance with health and safety standards while delivering exceptional visual appeal that drives purchase decisions.
            </p>
            <p>
              For bakery and confectionery brands, we offer custom cake boxes, pastry boxes, chocolate boxes, and candy packaging with grease-resistant coatings and structural designs that protect delicate items during transport. Window options showcase your products while maintaining hygiene standards. Our bakery boxes feature secure closures, easy assembly, and optional handles for customer convenience.
            </p>
            <p>
              Beverage brands benefit from our custom bottle carriers, six-pack holders, and specialty packaging for craft beers, wines, and artisanal beverages. These solutions provide secure product protection while offering ample space for brand storytelling, ingredient transparency, and marketing messages. For premium spirits and wine, our rigid boxes and wooden crates create gift-worthy presentations that justify premium pricing.
            </p>
            <p>
              Specialty food brands—including organic, gourmet, and health-focused products—require packaging that communicates quality and authenticity. We provide kraft boxes, eco-friendly packaging, and custom-printed solutions that align with natural brand positioning while incorporating modern design elements that appeal to contemporary consumers. Barrier coatings and moisture-resistant materials ensure product freshness from production to consumption.
            </p>
            <ul>
              <li><strong>Food-Safe Materials:</strong> FDA-approved substrates with documented compliance for direct food contact</li>
              <li><strong>Barrier Protection:</strong> Grease-resistant, moisture-resistant, and oxygen-barrier coatings to extend shelf life</li>
              <li><strong>Temperature Resistance:</strong> Materials suitable for refrigerated, frozen, or hot-fill applications</li>
              <li><strong>Sustainable Solutions:</strong> Compostable, recyclable, and biodegradable options for environmentally conscious brands</li>
            </ul>

            <h3>CBD & Cannabis Packaging: Compliance, Safety, and Brand Trust</h3>
            <p>
              The CBD and cannabis industry operates within a complex regulatory landscape that varies by state and country. Packaging in this sector must meet stringent compliance requirements while building consumer trust and differentiating brands in an increasingly crowded market. Our cannabis packaging solutions address these unique challenges with child-resistant options, odor-proof materials, and compliant labeling systems.
            </p>
            <p>
              Child-resistant packaging is mandatory in most jurisdictions for cannabis products. We offer certified CR packaging including push-and-turn caps, squeeze-and-slide mechanisms, and blister packs that meet ASTM D3475 and ISO 8317 standards. These solutions provide the required safety features without compromising user experience for adult consumers.
            </p>
            <p>
              For CBD brands, packaging serves as a critical trust-building tool. Consumers in this space seek transparency, quality assurance, and professional presentation. Our CBD boxes feature clean, modern designs with ample space for compliance information, dosage instructions, QR codes linking to lab results, and brand storytelling. Premium finishing options help CBD brands position themselves as legitimate wellness products rather than novelty items.
            </p>
            <p>
              Cannabis flower packaging requires odor-proof materials to maintain product freshness and discretion. Our mylar bags, glass jars with airtight seals, and specialty containers incorporate barrier technologies that preserve terpene profiles and prevent moisture loss. Pre-roll tubes, vape cartridge boxes, and edibles packaging are designed with product-specific requirements in mind, ensuring optimal protection and presentation.
            </p>
            <ul>
              <li><strong>Child-Resistant Certification:</strong> ASTM and ISO certified mechanisms for regulatory compliance</li>
              <li><strong>Odor-Proof Technology:</strong> Multi-layer barrier films and airtight sealing systems</li>
              <li><strong>Tamper-Evident Features:</strong> Seals and closures that provide visible evidence of package integrity</li>
              <li><strong>Compliance Labeling:</strong> Design support for required warnings, dosage information, and regulatory text</li>
            </ul>

            <h3>Retail & E-Commerce Packaging: Creating Memorable Unboxing Experiences</h3>
            <p>
              Retail and e-commerce packaging serves dual purposes: protecting products during shipping and creating brand experiences that drive customer loyalty and social sharing. In the e-commerce era, your packaging is often the first physical touchpoint between your brand and customers, making it a critical component of your marketing strategy.
            </p>
            <p>
              Mailer boxes have become the gold standard for e-commerce packaging, offering structural durability, easy assembly, and full-surface customization. Our mailer boxes feature reinforced corners, secure closures, and interior printing options that create "wow moments" when customers open their deliveries. Brands use these boxes to communicate values, share stories, include promotional inserts, and encourage social media sharing with hashtag prompts and photo-worthy designs.
            </p>
            <p>
              For retail environments, shelf presence is paramount. Our retail packaging solutions incorporate structural innovation, bold graphics, and premium finishes that capture attention and communicate value at point of purchase. Display boxes with built-in stands, window packaging that showcases products, and counter displays that maximize limited retail space all contribute to increased visibility and sales conversion.
            </p>
            <p>
              Subscription box brands require packaging that creates anticipation and delight with every delivery. We design custom subscription boxes with seasonal themes, personalization options, and structural features that enhance the unboxing ritual. Interior compartments, tissue paper, custom inserts, and branded tape all contribute to a cohesive experience that justifies subscription pricing and reduces churn.
            </p>

            <h3>Pharmaceutical & Healthcare Packaging: Safety, Compliance, and Information</h3>
            <p>
              Pharmaceutical packaging must meet the highest standards for product protection, tamper evidence, and regulatory compliance. Our pharmaceutical packaging solutions incorporate serialization capabilities, tamper-evident seals, and materials compatible with sterilization processes. We provide design support for complex labeling requirements including drug facts, warnings, dosage instructions, and multilingual text.
            </p>
            <p>
              For over-the-counter medications and supplements, packaging serves as the primary information source for consumers. Clear hierarchy, legible typography, and organized information architecture ensure customers can quickly find dosage instructions, ingredients, and safety warnings. Our designs balance regulatory requirements with brand differentiation, helping your products stand out while maintaining professional credibility.
            </p>

            <h3>Specialty Industries: Electronics, Jewelry, Apparel & Beyond</h3>
            <p>
              Electronics packaging requires anti-static materials, shock-absorbing inserts, and clear product visibility. Jewelry packaging demands luxury presentation with secure closures and protective interiors. Apparel brands need packaging that reflects fashion-forward aesthetics while providing practical functionality. Whatever your industry, we develop custom solutions that address your specific product requirements, brand positioning, and customer expectations.
            </p>

            <h3>Material Selection, Customization & Production Excellence</h3>
            <p>
              Every custom box we produce starts with material selection tailored to your industry requirements. Choose from kraft paperboard for natural aesthetics, corrugated cardboard for shipping durability, rigid board for luxury presentation, or specialty materials including metallic stocks, textured papers, and sustainable alternatives. Our printing capabilities include offset, digital, and flexographic processes with full CMYK color matching and Pantone accuracy.
            </p>
            <p>
              Finishing options transform standard packaging into premium brand experiences. Matte or gloss lamination provides protection and visual appeal. Spot UV coating creates contrast and highlights key design elements. Foil stamping in metallic or holographic finishes adds luxury and shelf impact. Embossing and debossing create tactile dimension that engages multiple senses. Soft-touch coating delivers a velvety feel that communicates premium quality.
            </p>
            <p>
              Our production capabilities support both small-batch orders for product launches and testing, and large-scale production runs with consistent quality across millions of units. We maintain rigorous quality control processes, provide prototyping and sampling services, and offer design consultation to ensure your packaging achieves both functional and aesthetic objectives. Partner with CustomPackMakers to create industry-specific packaging that protects your products, elevates your brand, and drives measurable business results.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
