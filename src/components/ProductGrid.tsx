import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import cosmeticBoxes from "@/assets/products/cosmetic-boxes-new.webp";
import soapBoxes from "@/assets/products/soap-boxes-new.webp";
import candleBoxes from "@/assets/products/candle-boxes-new.webp";
import displayBoxes from "@/assets/products/display-boxes.webp";
import mailerBoxes from "@/assets/products/mailer-boxes-new.webp";
import beveragePackaging from "@/assets/products/beverage-packaging-new.webp";
import cbdBoxes from "@/assets/products/cbd-boxes.webp";
import rigidBoxes from "@/assets/products/rigid-boxes-new.webp";
import tuckBoxes from "@/assets/products/tuck-boxes.webp";
import cigaretteBoxes from "@/assets/products/cigarette-boxes.webp";
import mylarBags from "@/assets/products/mylar-bags-new.webp";
import cardboardBoxes from "@/assets/products/cardboard-boxes-new.webp";

const products = [
  { name: "COSMETIC BOXES", image: cosmeticBoxes, link: "/industries/cosmetic-boxes" },
  { name: "SOAP BOXES", image: soapBoxes, link: "/industries/soap-boxes" },
  { name: "CANDLE BOXES", image: candleBoxes, link: "/industries/candle-boxes" },
  { name: "DISPLAY BOXES", image: displayBoxes, link: "/industries/display-boxes" },
  { name: "MAILER BOXES", image: mailerBoxes, link: "/industries/mailer-boxes" },
  { name: "BEVERAGE PACKAGING", image: beveragePackaging, link: "/industries/beverage-boxes" },
  { name: "CBD BOXES", image: cbdBoxes, link: "/industries/custom-cbd-boxes" },
  { name: "RIGID BOXES", image: rigidBoxes, link: "/industries/rigid-boxes" },
  { name: "TUCK BOXES", image: tuckBoxes, link: "/industries/tuck-boxes" },
  { name: "CIGARETTE BOXES", image: cigaretteBoxes, link: "/industries/cigarette-boxes" },
  { name: "MYLAR BAGS", image: mylarBags, link: "/industries/mylar-bags" },
  { name: "CARDBOARD BOXES", image: cardboardBoxes, link: "/industries/cardboard-boxes" },
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Unbox the Extraordinary Impact With Our Custom Packaging Boxes
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto">
            Whether it's for retail, shipping, or e-commerce we offer a curated selection of high-quality custom design boxes in minimalistic to maximalist designs. Find your picture-perfect custom boxes and packaging that are sure to delight you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            product.link ? (
              <Link key={product.name} to={product.link}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center bg-background">
                      <h3 className="font-bold text-sm tracking-wider">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div key={product.name}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center bg-background">
                      <h3 className="font-bold text-sm tracking-wider">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};
