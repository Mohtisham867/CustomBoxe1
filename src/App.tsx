import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import ShapesStyles from "./pages/ShapesStyles";
import PrimaryPackaging from "./pages/PrimaryPackaging";
import PackagingHub from "./pages/PackagingHub";
import ApparelBoxes from "./pages/categories/ApparelBoxes";
import AutomotiveBoxes from "./pages/categories/AutomotiveBoxes";
import BakeryBoxes from "./pages/categories/BakeryBoxes";
import BeverageBoxes from "./pages/categories/BeverageBoxes";
import CandleBoxes from "./pages/categories/CandleBoxes";
import CannabisPackaging from "./pages/categories/CannabisPackaging";
import ChocolateBoxes from "./pages/categories/ChocolateBoxes";
import ChristmasBoxes from "./pages/categories/ChristmasBoxes";
import CigaretteBoxes from "./pages/categories/CigaretteBoxes";
import CosmeticBoxes from "./pages/categories/CosmeticBoxes";
import CandyBoxes from "./pages/categories/CandyBoxes";
import CbdBoxes from "./pages/categories/CbdBoxes";
import HempBoxes from "./pages/categories/HempBoxes";
import EcommerceBoxes from "./pages/categories/EcommerceBoxes";
import ElectronicsBoxes from "./pages/categories/ElectronicsBoxes";
import FoodBoxes from "./pages/categories/FoodBoxes";
import FragranceBoxes from "./pages/categories/FragranceBoxes";
import GameBoxes from "./pages/categories/GameBoxes";
import GiftBoxes from "./pages/categories/GiftBoxes";
import HolidayBoxes from "./pages/categories/HolidayBoxes";
import JewelryBoxes from "./pages/categories/JewelryBoxes";
import MarijuanaPackaging from "./pages/categories/MarijuanaPackaging";
import PharmaPackaging from "./pages/categories/PharmaPackaging";
import PreRollBoxes from "./pages/categories/PreRollBoxes";
import RetailBoxes from "./pages/categories/RetailBoxes";
import SoapBoxes from "./pages/categories/SoapBoxes";
import SportsBoxes from "./pages/categories/SportsBoxes";
import StationeryBoxes from "./pages/categories/StationeryBoxes";
import DisplayBoxes from "./pages/categories/DisplayBoxes";
import MailerBoxes from "./pages/categories/MailerBoxes";
import GableBoxes from "./pages/categories/GableBoxes";
// ... in imports

// ... in routes
<Route path="/shapes-styles/gable-boxes" element={<GableBoxes />} />
import RigidBoxes from "./pages/categories/RigidBoxes";
import TuckBoxes from "./pages/categories/TuckBoxes";
import CustomMylarBags from "./pages/categories/CustomMylarBags";
import CardboardBoxes from "./pages/categories/CardboardBoxes";
import SustainablePackaging from "./pages/categories/SustainablePackaging";
import TeaCoffeeCups from "./pages/categories/TeaCoffeeCups";
import ShippingBoxes from "./pages/categories/ShippingBoxes";
import VapeBoxes from "./pages/categories/VapeBoxes";
import WeedBoxes from "./pages/categories/WeedBoxes";
import SubscriptionBoxes from "./pages/categories/SubscriptionBoxes";
import CustomShapeBoxes from "./pages/categories/CustomShapeBoxes";
import StickersAndLabels from "./pages/categories/StickersAndLabels";
import SleevesAndTrays from "./pages/categories/SleevesAndTrays";
import CardstockBoxes from "./pages/categories/CardstockBoxes";
import ChildResistantPackaging from "./pages/categories/ChildResistantPackaging";
import CorrugatedBoxes from "./pages/categories/CorrugatedBoxes";
import CustomKraftBoxes from "./pages/categories/CustomKraftBoxes";
import CustomBags from "./pages/categories/CustomBags";
import HolographicBoxes from "./pages/categories/HolographicBoxes";
import CustomPaperBags from "./pages/categories/CustomPaperBags";
import HangTags from "./pages/categories/HangTags";
import PillowBoxes from "./pages/categories/PillowBoxes";
import WeedBags from "./pages/categories/WeedBags";
import WindowPackaging from "./pages/categories/WindowPackaging";
import GlassSerumBottle from "./pages/categories/GlassSerumBottle";
import PlasticCleanserTube from "./pages/categories/PlasticCleanserTube";
import PlasticMistBottle from "./pages/categories/PlasticMistBottle";
import GlassRollOnBottle from "./pages/categories/GlassRollOnBottle";
import PlasticShampooBottle from "./pages/categories/PlasticShampooBottle";
import PaperTubes from "./pages/categories/PaperTubes";
import GlassCandleJars from "./pages/categories/GlassCandleJars";
import GlassPerfumeBottle from "./pages/categories/GlassPerfumeBottle";
import PlasticCapsuleBottle from "./pages/categories/PlasticCapsuleBottle";
import MoisturizerJar from "./pages/categories/MoisturizerJar";
import PlasticLotionBottle from "./pages/categories/PlasticLotionBottle";
import GlassCreamJars from "./pages/categories/GlassCreamJars";
import CustomPreRollTubes from "./pages/categories/CustomPreRollTubes";
import DropperBottles from "./pages/categories/DropperBottles";
import JarsWithPump from "./pages/categories/JarsWithPump";
import BoxByMaterials from "./pages/BoxByMaterials";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/apparel-boxes" element={<ApparelBoxes />} />
          <Route path="/industries/automotive-boxes" element={<AutomotiveBoxes />} />
          <Route path="/industries/bakery-boxes" element={<BakeryBoxes />} />
          <Route path="/industries/beverage-boxes" element={<BeverageBoxes />} />
          <Route path="/industries/candle-boxes" element={<CandleBoxes />} />
          <Route path="/industries/cannabis-packaging" element={<CannabisPackaging />} />
          <Route path="/industries/cardboard-boxes" element={<CardboardBoxes />} />
          <Route path="/industries/chocolate-boxes" element={<ChocolateBoxes />} />
          <Route path="/industries/christmas-boxes" element={<ChristmasBoxes />} />
          <Route path="/industries/cigarette-boxes" element={<CigaretteBoxes />} />
          <Route path="/industries/cosmetic-boxes" element={<CosmeticBoxes />} />
          <Route path="/industries/custom-candy-boxes" element={<CandyBoxes />} />
          <Route path="/industries/custom-cbd-boxes" element={<CbdBoxes />} />
          <Route path="/industries/custom-hemp-boxes" element={<HempBoxes />} />
          <Route path="/industries/corrugated-boxes" element={<CorrugatedBoxes />} />
          <Route path="/industries/custom-kraft-boxes" element={<CustomKraftBoxes />} />
          <Route path="/industries/cardstock-boxes" element={<CardstockBoxes />} />
          <Route path="/industries/display-boxes" element={<DisplayBoxes />} />
          <Route path="/industries/e-commerce" element={<EcommerceBoxes />} />
          <Route path="/industries/electronics-boxes" element={<ElectronicsBoxes />} />
          <Route path="/industries/food-boxes" element={<FoodBoxes />} />
          <Route path="/industries/fragrance-boxes" element={<FragranceBoxes />} />
          <Route path="/industries/game-boxes" element={<GameBoxes />} />
          <Route path="/industries/gift-boxes" element={<GiftBoxes />} />
          <Route path="/industries/holographic-boxes" element={<HolographicBoxes />} />
          <Route path="/industries/holiday-boxes" element={<HolidayBoxes />} />
          <Route path="/industries/jewelry-boxes" element={<JewelryBoxes />} />
          <Route path="/industries/mailer-boxes" element={<MailerBoxes />} />
          <Route path="/industries/marijuana-packaging" element={<MarijuanaPackaging />} />
          <Route path="/categories/custom-mylar-bags" element={<CustomMylarBags />} />
          <Route path="/shapes-styles/weed-bags" element={<WeedBags />} />
          <Route path="/shapes-styles/pillow-boxes" element={<PillowBoxes />} />
          <Route path="/shapes-styles/window-packaging" element={<WindowPackaging />} />
          <Route path="/industries/custom-paper-bags" element={<CustomPaperBags />} />
          <Route path="/shapes-styles/hang-tags" element={<HangTags />} />
          <Route path="/industries/pharma-packaging" element={<PharmaPackaging />} />
          <Route path="/industries/pre-roll-boxes" element={<PreRollBoxes />} />
          <Route path="/industries/retail-boxes" element={<RetailBoxes />} />
          <Route path="/industries/rigid-boxes" element={<RigidBoxes />} />
          <Route path="/industries/soap-boxes" element={<SoapBoxes />} />
          <Route path="/shapes-styles/shipping-boxes" element={<ShippingBoxes />} />
          <Route path="/industries/sports-boxes" element={<SportsBoxes />} />
          <Route path="/industries/stationery-boxes" element={<StationeryBoxes />} />
          <Route path="/shapes-styles/subscription-boxes" element={<SubscriptionBoxes />} />
          <Route path="/industries/sustainable-packaging" element={<SustainablePackaging />} />
          <Route path="/industries/tea-and-coffee-cups" element={<TeaCoffeeCups />} />
          <Route path="/industries/tuck-boxes" element={<TuckBoxes />} />
          <Route path="/industries/vape-boxes" element={<VapeBoxes />} />
          <Route path="/industries/weed-boxes" element={<WeedBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes" element={<CustomShapeBoxes />} />
          <Route path="/shapes-styles/stickers-and-labels" element={<StickersAndLabels />} />
          <Route path="/shapes-styles/sleeves-and-trays" element={<SleevesAndTrays />} />
          <Route path="/shapes-styles" element={<ShapesStyles />} />
          <Route path="/shapes-styles/gable-boxes" element={<GableBoxes />} />
          <Route path="/shapes-styles/child-resistant-packaging" element={<ChildResistantPackaging />} />
          <Route path="/shapes-styles/custom-bags" element={<CustomBags />} />
          <Route path="/packaging-hub" element={<PackagingHub />} />
          <Route path="/primary-packaging" element={<PrimaryPackaging />} />
          <Route path="/primary-packaging/glass-serum-bottle" element={<GlassSerumBottle />} />
          <Route path="/primary-packaging/plastic-cleanser-tube" element={<PlasticCleanserTube />} />
          <Route path="/primary-packaging/plastic-mist-bottle" element={<PlasticMistBottle />} />
          <Route path="/primary-packaging/glass-roll-on-bottle" element={<GlassRollOnBottle />} />
          <Route path="/primary-packaging/plastic-shampoo-bottle" element={<PlasticShampooBottle />} />
          <Route path="/primary-packaging/paper-tubes" element={<PaperTubes />} />
          <Route path="/primary-packaging/glass-candle-jars" element={<GlassCandleJars />} />
          <Route path="/primary-packaging/glass-perfume-bottle" element={<GlassPerfumeBottle />} />
          <Route path="/primary-packaging/plastic-capsule-bottle" element={<PlasticCapsuleBottle />} />
          <Route path="/primary-packaging/moisturizer-jar" element={<MoisturizerJar />} />
          <Route path="/primary-packaging/plastic-lotion-bottle" element={<PlasticLotionBottle />} />
          <Route path="/primary-packaging/glass-cream-jars" element={<GlassCreamJars />} />
          <Route path="/primary-packaging/custom-pre-roll-tubes" element={<CustomPreRollTubes />} />
          <Route path="/primary-packaging/dropper-bottles" element={<DropperBottles />} />
          <Route path="/primary-packaging/jars-with-pump" element={<JarsWithPump />} />
          <Route path="/box-by-materials" element={<BoxByMaterials />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
