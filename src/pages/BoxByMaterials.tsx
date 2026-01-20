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
import heroBg from "@/assets/hero-packaging.jpg";
import kraftBoxesHero from "@/assets/kraft-boxes/kraft-boxes-hero.png";
import cardboardBoxesHero from "@/assets/cardboard-boxes-hero.png";
import corrugatedBoxesHero from "@/assets/corrugated-boxes-hero.png";
import rigidBoxesHero from "@/assets/rigid-boxes/rigid-boxes-hero.jpg";
import holographicBoxesHero from "@/assets/holographic-boxes-hero.png";

import { Link } from "react-router-dom";

interface MaterialCategory {
  name: string;
  image: string;
  link: string;
  description?: string; // Optional description for accessibility and future use
}

const materialCategories: MaterialCategory[] = [
  { 
    name: "Kraft Boxes", 
    image: kraftBoxesHero, 
    link: "/industries/custom-kraft-boxes",
    description: "Eco-friendly kraft packaging with natural brown finish and sustainable appeal"
  },
  { 
    name: "Cardboard Boxes", 
    image: cardboardBoxesHero, 
    link: "/industries/cardboard-boxes",
    description: "Versatile cardboard solutions with excellent printability and cost-effectiveness"
  },
  { 
    name: "Corrugated Boxes", 
    image: corrugatedBoxesHero, 
    link: "/industries/corrugated-boxes",
    description: "Maximum durability with fluted construction for superior shipping protection"
  },
  { 
    name: "Rigid Boxes", 
    image: rigidBoxesHero, 
    link: "/industries/rigid-boxes",
    description: "Premium luxury packaging with dense chipboard construction and elegant presentation"
  },
  { 
    name: "Metallic Paper Boxes", 
    image: holographicBoxesHero, 
    link: "/industries/holographic-boxes",
    description: "Eye-catching metallic finishes with dynamic visual effects and premium appeal"
  },
];

const BoxByMaterials = () => {
  return (
    <div className="min-h-screen bg-background px-[10px]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center mt-[120px] md:mt-[160px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 text-center text-white px-[10px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-4"> Solutions by Material</h1>
          <p className="text-xl md:text-2xl text-white/90">Choose from our diverse range of high-quality materials tailored to protect and present your brand.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-[10px] py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Box by Materials</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-[10px] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Premium Packaging Solutions by Material</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our diverse range of high-quality materials tailored to protect and present your brand.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialCategories.map((item, index) => (
            <Link to={item.link} key={index} className="block h-full">
              <Card
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.description || item.name}`}
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
      
      {/* SEO Content Section */}
      <section className="py-16 px-[50px] bg-white border-t border-slate-100">
        <div className="w-full mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Material Selection: The Foundation of Effective Packaging Solutions
          </h2>

          <div className="prose prose-lg prose-slate max-w-none
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4
                [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-800 [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>li]:text-gray-800 [&>li]:text-[15px]">

              <p className="mt-0">
                The choice of packaging material fundamentally determines the protection, presentation, and performance of your product throughout its lifecycle. From the sustainable appeal of kraft paper to the premium luxury of rigid construction, each material offers distinct advantages that align with specific brand positioning and functional requirements. Understanding these material properties enables informed decisions that balance cost, sustainability, and brand impact.
              </p>

              <h3>Kraft Materials: Sustainable Strength and Natural Appeal</h3>
              <p>
                Kraft packaging represents the intersection of environmental responsibility and functional performance. Made from virgin wood fibers through the kraft pulping process, these materials offer exceptional tear resistance and structural integrity while maintaining a natural, eco-friendly aesthetic. Kraft boxes excel in applications requiring moderate protection with strong sustainability messaging, making them ideal for organic products, artisanal goods, and brands emphasizing environmental stewardship.
              </p>
              <p>
                The natural brown color of kraft material provides an authentic, unbleached appearance that resonates with environmentally conscious consumers. Additionally, kraft materials accept printing and finishing treatments well, allowing for custom branding while preserving the sustainable character that defines this material category.
              </p>

              <h3>Cardboard Solutions: Versatile Performance for Everyday Applications</h3>
              <p>
                Cardboard packaging delivers reliable protection and printability across a broad spectrum of applications. Constructed from recycled paper fibers and virgin pulp, cardboard offers excellent structural stability while remaining cost-effective for medium to high-volume production runs. The smooth surface finish provides superior print quality for detailed graphics, making cardboard ideal for retail packaging where shelf appeal is paramount.
              </p>
              <p>
                Modern cardboard formulations incorporate barrier coatings and moisture-resistant treatments that extend product protection without compromising recyclability. This versatility makes cardboard suitable for everything from food packaging to electronics, providing dependable performance across diverse industry applications.
              </p>

              <h3>Corrugated Construction: Maximum Durability for Shipping and Storage</h3>
              <p>
                Corrugated packaging represents the gold standard for protective shipping and storage applications. The distinctive fluted construction creates exceptional crush resistance and impact absorption, making corrugated materials indispensable for e-commerce fulfillment and distribution logistics. The air-filled channels provide natural insulation properties while maintaining lightweight characteristics that minimize shipping costs.
              </p>
              <p>
                Single-wall, double-wall, and triple-wall corrugated options allow precise matching of protection levels to specific shipping requirements. This scalable durability, combined with excellent printability and die-cutting capabilities, makes corrugated packaging the preferred choice for brands requiring maximum product protection during transit and storage.
              </p>

              <h3>Rigid Box Luxury: Premium Presentation and Unboxing Experience</h3>
              <p>
                Rigid box construction elevates packaging from functional necessity to premium brand experience. Built with dense chipboard cores and wrapped in high-quality papers or specialty finishes, rigid boxes provide unmatched structural integrity and luxury presentation. The substantial feel and precise construction communicate quality and attention to detail, making rigid packaging essential for luxury goods, gift items, and premium product launches.
              </p>
              <p>
                Rigid boxes support advanced finishing techniques including soft-touch lamination, metallic foiling, embossing, and magnetic closures. These premium features create memorable unboxing experiences that reinforce brand value and encourage customer loyalty through tactile and visual engagement.
              </p>

              <h3>Metallic and Specialty Materials: Innovation in Visual Impact</h3>
              <p>
                Metallic paper and holographic materials push the boundaries of visual impact and shelf presence. These specialty substrates incorporate metallic particles or holographic films that create dynamic visual effects under varying lighting conditions. The result is packaging that commands attention and communicates innovation, making metallic materials particularly effective for technology products, cosmetics, and limited-edition releases.
              </p>
              <p>
                Beyond visual appeal, metallic materials often provide enhanced barrier properties that protect light-sensitive products while delivering the premium aesthetic that justifies higher price points. The combination of functional protection and striking appearance makes metallic packaging a powerful tool for brand differentiation in competitive markets.
              </p>

              <h3>Material Selection Strategy: Balancing Performance, Cost, and Brand Alignment</h3>
              <p>
                Effective material selection requires careful consideration of product requirements, brand positioning, and market expectations. Corrugated materials excel where maximum protection is essential, while rigid construction serves luxury positioning and gift applications. Kraft materials support sustainability messaging, cardboard provides versatile everyday performance, and metallic options deliver premium visual impact.
              </p>

              <p>
                The optimal material choice aligns functional requirements with brand strategy, ensuring that packaging not only protects the product but actively reinforces brand values and market positioning. Whether prioritizing sustainability, luxury, protection, or visual impact, the right material selection transforms packaging from commodity to competitive advantage.
              </p>

            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoxByMaterials;