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
import childResistantPackaging from "@/assets/box-shapes/child-resistant-packaging.png";
import customBags from "@/assets/box-shapes/custom-bags.jpg";
import customMylarBags from "@/assets/box-shapes/custom-mylar-bags.jpg";
import customPaperBags from "@/assets/box-shapes/custom-paper-bags.jpg";
import customShapeBoxes from "@/assets/box-shapes/custom-shape-boxes.jpg";
import displayBoxes from "@/assets/box-shapes/display-boxes.jpg";
import gableBoxes from "@/assets/box-shapes/gable-boxes.jpg";
import hangTags from "@/assets/box-shapes/hang-tags.jpg";
import mailerBoxes from "@/assets/box-shapes/mailer-boxes.jpg";
import pillowBoxes from "@/assets/box-shapes/pillow-boxes.jpg";
import rigidBoxes from "@/assets/box-shapes/rigid-boxes.png";
import shippingBoxes from "@/assets/box-shapes/shipping-boxes.jpg";
import sleeveAndTray from "@/assets/box-shapes/sleeve-and-tray.jpg";
import stickersAndLabels from "@/assets/box-shapes/stickers-and-labels.jpg";
import subscriptionBoxes from "@/assets/box-shapes/subscription-boxes.jpg";
import tuckBoxes from "@/assets/box-shapes/tuck-boxes.jpg";
import weedBags from "@/assets/box-shapes/weed-bags.jpg";
import windowPackaging from "@/assets/box-shapes/window-packaging.jpg";
import heroBackground from "@/assets/shapes-styles-hero-bg.jpg";

const shapesStyles = [
  { name: "Child Resistant Packaging", image: childResistantPackaging, link: "/shapes-styles/child-resistant-packaging" },
  { name: "Custom Bags", image: customBags, link: "/shapes-styles/custom-bags" },
  { name: "Custom Mylar Bags", image: customMylarBags, link: "/industries/mylar-bags" },
  { name: "Custom Paper Bags", image: customPaperBags, link: "/industries/custom-paper-bags" },
  { name: "Custom Shape Boxes", image: customShapeBoxes, link: "/shapes-styles/custom-shape-boxes" },
  { name: "Display Boxes", image: displayBoxes, link: "/industries/display-boxes" },
  { name: "Gable Boxes", image: gableBoxes, link: "/shapes-styles/gable-boxes" },
  { name: "Hang Tags", image: hangTags, link: "/shapes-styles/hang-tags" },
  { name: "Mailer Boxes", image: mailerBoxes, link: "/industries/mailer-boxes" },
  { name: "Pillow Boxes", image: pillowBoxes, link: "/shapes-styles/pillow-boxes" },
  { name: "Rigid Boxes", image: rigidBoxes, link: "/industries/rigid-boxes" },
  { name: "Shipping Boxes", image: shippingBoxes, link: "/shapes-styles/shipping-boxes" },
  { name: "Sleeve and Tray", image: sleeveAndTray, link: "/shapes-styles/sleeves-and-trays" },
  { name: "Stickers and Labels", image: stickersAndLabels, link: "/shapes-styles/stickers-and-labels" },
  { name: "Subscription Boxes", image: subscriptionBoxes, link: "/shapes-styles/subscription-boxes" },
  { name: "Tuck Boxes", image: tuckBoxes, link: "/industries/tuck-boxes" },
  { name: "Weed Bags", image: weedBags, link: "/shapes-styles/weed-bags" },
  { name: "Window Packaging", image: windowPackaging, link: "/shapes-styles/window-packaging" },
];

const ShapesStyles = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Shapes & Styles</h1>
          <p className="text-xl md:text-2xl text-white/90">Discover Unique Packaging Designs</p>
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
                <BreadcrumbPage>All Shapes & Styles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Box by Shape & Style Section */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Box by Shape & Style
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore our diverse collection of packaging shapes and styles, from classic designs to innovative custom solutions. Each option is crafted to enhance your product presentation and brand identity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shapesStyles.map((shape, index) => (
              <Link key={index} to={shape.link || "#"}>
                <Card
                  className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer h-full"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={shape.image}
                        alt={shape.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center border-t border-border">
                      <h3 className="font-semibold text-foreground text-sm">
                        {shape.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <QuoteForm />
      <Footer />
    </div>
  );
};

export default ShapesStyles;
