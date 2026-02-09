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
import childResistantPackaging from "@/assets/box-shapes/child-resistant-packaging.webp";
import customBags from "@/assets/box-shapes/custom-bags.webp";
import customMylarBags from "@/assets/box-shapes/custom-mylar-bags.webp";
import customPaperBags from "@/assets/box-shapes/custom-paper-bags.webp";
import customShapeBoxes from "@/assets/box-shapes/custom-shape-boxes.webp";
import displayBoxes from "@/assets/box-shapes/display-boxes.webp";
import gableBoxes from "@/assets/box-shapes/gable-boxes.webp";
import hangTags from "@/assets/box-shapes/hang-tags.webp";
import mailerBoxes from "@/assets/box-shapes/mailer-boxes.webp";
import pillowBoxes from "@/assets/box-shapes/pillow-boxes.webp";
import rigidBoxes from "@/assets/box-shapes/rigid-boxes.webp";
import shippingBoxes from "@/assets/box-shapes/shipping-boxes.webp";
import sleeveAndTray from "@/assets/box-shapes/sleeve-and-tray.webp";
import stickersAndLabels from "@/assets/box-shapes/stickers-and-labels.webp";
import subscriptionBoxes from "@/assets/box-shapes/subscription-boxes.webp";
import tuckBoxes from "@/assets/box-shapes/tuck-boxes.webp";
import weedBags from "@/assets/box-shapes/weed-bags.webp";
import windowPackaging from "@/assets/box-shapes/window-packaging.webp";
import heroBackground from "@/assets/shapes-styles-hero-bg.webp";

const shapesStyles = [
  { name: "Child Resistant Packaging", image: childResistantPackaging, link: "/shapes-styles/child-resistant-packaging" },
  { name: "Custom Bags", image: customBags, link: "/shapes-styles/custom-bags" },
  { name: "Custom Mylar Bags", image: customMylarBags, link: "/categories/custom-mylar-bags" },
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"
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

      {/* Detailed SEO Content Section - 1000+ Words */}
      <section className="py-16 px-5 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Custom Packaging Shapes & Styles: Structural Innovation Meets Brand Expression
          </h2>

          <div className="prose prose-lg prose-slate max-w-none
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
                [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-800 [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>li]:text-gray-800 [&>li]:text-[15px]">

            <p className="mt-0">
              The shape and style of your packaging are fundamental to brand recognition, product protection, and customer experience. Beyond mere aesthetics, packaging structure determines assembly efficiency, shipping durability, retail presentation, and unboxing satisfaction. At CustomPackMakers, we offer an extensive portfolio of packaging shapes and styles—each engineered for specific functional requirements while providing unlimited customization possibilities. This comprehensive guide explores the structural characteristics, practical applications, and design opportunities of our most popular packaging formats, helping you select the ideal solution for your brand.
            </p>

            <h3>Tuck Boxes: Versatile, Secure, and Cost-Effective</h3>
            <p>
              Tuck boxes represent one of the most versatile and widely used packaging structures across industries. The defining characteristic of tuck boxes is their interlocking flap closure system, which provides secure product containment without requiring adhesives or additional fasteners. This design offers several practical advantages: quick assembly, reliable closure, easy opening and reclosing, and efficient flat storage before assembly.
            </p>
            <p>
              The most common tuck box variation is the reverse tuck end (RTE), where the top and bottom flaps tuck in opposite directions. This configuration provides balanced structural integrity and allows for continuous graphic designs across the front panel. Straight tuck end (STE) boxes feature flaps that tuck in the same direction, ideal for products requiring frequent access or display-oriented packaging where the back panel serves as a stand.
            </p>
            <p>
              Tuck boxes are manufactured from various paperboard weights depending on product requirements. Lightweight cosmetics and pharmaceuticals typically use 12-16pt SBS (solid bleached sulfate) board, while heavier products may require 18-24pt board or even corrugated materials. The tuck closure mechanism can be enhanced with locking tabs, thumb notches for easy opening, or perforated tear strips for tamper evidence.
            </p>
            <ul>
              <li><strong>Reverse Tuck End (RTE):</strong> Top and bottom flaps tuck in opposite directions for balanced structure</li>
              <li><strong>Straight Tuck End (STE):</strong> Flaps tuck in the same direction, ideal for display packaging</li>
              <li><strong>Auto-Lock Bottom:</strong> Self-locking bottom panel for faster assembly and enhanced stability</li>
              <li><strong>Tuck Top Snap Lock Bottom:</strong> Combines easy-access top with secure bottom closure</li>
            </ul>

            <h3>Rigid Boxes: Premium Construction for Luxury Brands</h3>
            <p>
              Rigid boxes—also called set-up boxes or gift boxes—represent the pinnacle of packaging luxury and durability. Unlike folding cartons that ship and store flat, rigid boxes are delivered fully assembled with permanent structural integrity. This construction method creates a substantial, high-quality feel that immediately communicates premium positioning and justifies higher price points.
            </p>
            <p>
              The manufacturing process for rigid boxes involves wrapping printed paper, fabric, or specialty materials around thick chipboard (typically 36pt to 120pt). This wrapped board creates walls that are 3-4 times thicker than standard folding cartons, providing exceptional crush resistance and a luxurious tactile experience. The rigid structure protects delicate products during shipping and creates impressive retail presentation.
            </p>
            <p>
              Rigid boxes offer extensive customization opportunities. Magnetic closures provide satisfying opening experiences with secure closure. Ribbon pulls add functional elegance while facilitating easy access. Interior compartments, foam inserts, or custom-molded trays secure products in precise positions, preventing movement and damage. Exterior finishing options include embossing, debossing, foil stamping, spot UV, and specialty materials like linen, leather, or velvet textures.
            </p>
            <p>
              Common rigid box styles include lift-off lid boxes (separate top and bottom), hinged lid boxes (attached lid with ribbon or fabric hinge), drawer boxes (sliding drawer within outer sleeve), and book-style boxes (side-opening with magnetic closure). Each style creates distinct unboxing experiences suited to different product categories and brand narratives.
            </p>
            <ul>
              <li><strong>Lift-Off Lid:</strong> Separate top and bottom pieces for dramatic reveal moments</li>
              <li><strong>Hinged Lid:</strong> Attached lid with ribbon or fabric hinge for reusable presentation</li>
              <li><strong>Drawer Box:</strong> Sliding inner drawer within outer sleeve for luxury unboxing</li>
              <li><strong>Book-Style:</strong> Side-opening magnetic closure resembling a hardcover book</li>
            </ul>

            <h3>Sleeve and Tray Boxes: Elegant Reveal Experiences</h3>
            <p>
              Sleeve and tray boxes consist of two separate components: an outer sleeve that slides over an inner tray. This two-piece construction creates a dramatic reveal experience as customers slide the tray from the sleeve, building anticipation and enhancing perceived value. The design is particularly popular for gift items, premium cosmetics, electronics, and subscription boxes where unboxing experience drives brand loyalty.
            </p>
            <p>
              The sleeve component typically features full-surface printing with brand messaging, product information, and visual storytelling. The inner tray can be printed with complementary designs, brand patterns, or contrasting colors that create visual surprise when revealed. This dual-surface design opportunity allows brands to communicate more information and create layered brand experiences.
            </p>
            <p>
              Structural variations include full-overlap sleeves that completely cover the tray, partial sleeves that expose portions of the tray for visual interest, and windowed sleeves that preview the product while maintaining protective coverage. Trays can incorporate dividers, custom inserts, or molded pulp fitments to organize multiple products or components.
            </p>
            <p>
              Material selection for sleeve and tray boxes depends on product weight and desired presentation. Lightweight products work well with standard paperboard (18-24pt), while heavier items require rigid board construction. The sleeve must be precisely sized to slide smoothly over the tray while maintaining snug fit—typically requiring 1-2mm clearance on each side.
            </p>

            <h3>Mailer Boxes: E-Commerce Packaging Excellence</h3>
            <p>
              Mailer boxes have become the standard for e-commerce packaging, combining shipping durability with brand presentation in a single package that eliminates the need for additional outer shipping boxes. The defining feature of mailer boxes is their one-piece construction with integrated closure flaps, allowing for tool-free assembly and secure closure without tape or adhesives.
            </p>
            <p>
              Structurally, mailer boxes utilize corrugated cardboard (typically E-flute or B-flute) that provides cushioning and protection during shipping while remaining lightweight to minimize shipping costs. The self-locking design features interlocking tabs that create secure closure, with some designs incorporating tuck flaps, friction locks, or adhesive strips for additional security.
            </p>
            <p>
              The full exterior surface of mailer boxes serves as a branding canvas. High-quality printing transforms shipping packages into marketing assets that create excitement before customers even open their deliveries. Interior printing—often overlooked in traditional packaging—becomes a critical touchpoint in mailer boxes, with brands using inside panels for welcome messages, usage instructions, social media prompts, or brand storytelling.
            </p>
            <p>
              Mailer box variations include standard rectangular formats, cube shapes for compact products, shallow designs for apparel and textiles, and custom-sized boxes engineered to specific product dimensions. Perforated tear strips facilitate easy opening, while reinforced corners and double-wall construction provide enhanced protection for fragile items.
            </p>

            <h3>Gable Boxes: Portable Presentation with Built-In Handles</h3>
            <p>
              Gable boxes feature distinctive peaked tops with integrated handles, creating portable packaging that's both functional and visually distinctive. The handle-top design makes gable boxes ideal for food service, party favors, gift packaging, and retail products where customers need to carry items immediately after purchase.
            </p>
            <p>
              The structural design of gable boxes allows them to ship and store flat, then assemble quickly by folding panels and locking the handle closure. This efficiency makes them popular for high-volume applications like bakeries, catering services, and event packaging. The handle closure also serves as a tamper-evident seal—once closed, the box cannot be opened without visible evidence.
            </p>
            <p>
              Gable boxes offer excellent branding opportunities with four vertical panels providing ample space for logos, product information, and decorative designs. Window options can be incorporated into any panel to showcase contents while maintaining structural integrity. Material options range from kraft paperboard for natural, eco-friendly presentation to coated stocks with full-color printing for vibrant brand expression.
            </p>

            <h3>Pillow Boxes: Unique Silhouettes for Gift Presentation</h3>
            <p>
              Pillow boxes feature curved edges and a distinctive pillow-like shape that immediately differentiates them from standard rectangular packaging. This unique silhouette creates visual interest on retail shelves and conveys gift-worthy presentation without requiring additional wrapping. The structure consists of a tubular body with curved end flaps that tuck closed, creating the characteristic pillow shape.
            </p>
            <p>
              Despite their elegant appearance, pillow boxes are remarkably easy to assemble from flat die-cut sheets. The simple fold-and-tuck construction requires no adhesives or tools, making them efficient for both small-batch artisan production and large-scale manufacturing. The curved surfaces accept printing beautifully, with designs wrapping seamlessly around the contoured shape.
            </p>
            <p>
              Pillow boxes work best for lightweight products with some flexibility—jewelry, cosmetics samples, candies, small accessories, and promotional items. The curved structure provides less stacking stability than rectangular boxes, making them better suited for individual presentation than bulk shipping. Size options range from small favor boxes (2-3 inches) to large gift boxes (12+ inches).
            </p>

            <h3>Display Boxes: Retail Visibility and Counter Presence</h3>
            <p>
              Display boxes are engineered specifically for retail environments, maximizing product visibility and encouraging impulse purchases. These structures include counter displays, shelf-ready packaging (SRP), and point-of-purchase (POP) displays designed to showcase products while providing organized presentation in retail settings.
            </p>
            <p>
              Counter display boxes typically feature open-top designs with angled fronts that present products at optimal viewing angles. The structure may include dividers to organize multiple SKUs, header cards for branding and product information, and reinforced bases to support product weight. Many designs incorporate perforated sections that allow retailers to adjust display height as inventory depletes.
            </p>
            <p>
              Shelf-ready packaging serves dual purposes: protecting products during shipping and transforming into retail displays upon arrival at stores. These designs feature perforated tear-away panels that convert shipping boxes into attractive shelf displays, reducing labor costs and ensuring consistent brand presentation across retail locations.
            </p>

            <h3>Specialty Shapes: Custom Bags, Mylar Bags, and Window Packaging</h3>
            <p>
              Beyond traditional box structures, our portfolio includes specialty packaging formats designed for specific product requirements. Custom bags—including paper bags with handles, stand-up pouches, and flat-bottom bags—provide flexible, cost-effective packaging for food products, retail merchandise, and promotional items. These formats offer excellent printability and can incorporate features like resealable zippers, tear notches, and degassing valves.
            </p>
            <p>
              Mylar bags utilize multi-layer barrier films that provide superior protection against moisture, oxygen, and light. These bags are essential for products requiring extended shelf life, including coffee, dried foods, cannabis, and pharmaceuticals. The barrier properties preserve product freshness while the printable surface allows for vibrant branding and compliance labeling.
            </p>
            <p>
              Window packaging incorporates transparent panels—typically PET or acetate films—that allow product visibility while maintaining protective enclosure. Windows can be die-cut in custom shapes, positioned strategically to showcase key product features, and combined with printed graphics that frame and highlight the visible product.
            </p>

            <h3>Customization, Materials, and Finishing Options</h3>
            <p>
              Every packaging shape in our collection is fully customizable in dimensions, materials, and finishing. Choose from kraft paperboard for eco-friendly aesthetics, SBS for bright white printing surfaces, corrugated cardboard for shipping durability, or rigid board for luxury presentation. Material weights range from lightweight 12pt for simple folding cartons to heavy 120pt chipboard for premium rigid boxes.
            </p>
            <p>
              Printing options include offset printing for large runs with precise color matching, digital printing for short runs and variable data, and flexographic printing for corrugated materials. Finishing techniques transform standard packaging into premium brand experiences: matte or gloss lamination for protection and visual appeal, spot UV for contrast and texture, foil stamping in metallic or holographic finishes, embossing and debossing for tactile dimension, and soft-touch coating for luxurious feel.
            </p>
            <p>
              Our design and production teams work collaboratively with brands to engineer packaging solutions that balance aesthetic goals, functional requirements, budget constraints, and production timelines. From initial concept sketches through prototyping, sampling, and full-scale production, we ensure your packaging achieves both structural integrity and brand excellence. Partner with CustomPackMakers to create packaging shapes and styles that protect your products, elevate your brand, and create memorable customer experiences.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShapesStyles;
