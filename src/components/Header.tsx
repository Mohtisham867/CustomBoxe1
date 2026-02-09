import { useState, useEffect } from "react";
import { Menu, X, Package, Search, Phone, Mail, Gift, ChevronDown, Shirt, Car, Cake, Wine, Flame, Leaf, Candy, TreePine, Cigarette, Sparkles, ShoppingCart, Laptop, UtensilsCrossed, Flower2, Gamepad2, GiftIcon, Calendar, Gem, Pill, Scroll, Tag } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideMainHeader, setHideMainHeader] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);
      setHideMainHeader(currentScrollY > 100);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{ name: string; url: string }>>([]);

  // Comprehensive product index
  const products = [
    // Box by Industry
    { name: "Apparel Boxes", url: "/industries/apparel-boxes" },
    { name: "Automotive Boxes", url: "/industries/automotive-boxes" },
    { name: "Bakery Boxes", url: "/industries/bakery-boxes" },
    { name: "Beverage Boxes", url: "/industries/beverage-boxes" },
    { name: "Candle Boxes", url: "/industries/candle-boxes" },
    { name: "Cannabis Packaging", url: "/industries/cannabis-packaging" },
    { name: "Chocolate Boxes", url: "/industries/chocolate-boxes" },
    { name: "Christmas Boxes", url: "/industries/christmas-boxes" },
    { name: "Cigarette Boxes", url: "/industries/cigarette-boxes" },
    { name: "Cosmetic Boxes", url: "/industries/cosmetic-boxes" },
    { name: "Custom Candy Boxes", url: "/industries/custom-candy-boxes" },
    { name: "Custom CBD Boxes", url: "/industries/custom-cbd-boxes" },
    { name: "Custom Hemp Boxes", url: "/industries/custom-hemp-boxes" },
    { name: "E-Commerce Boxes", url: "/industries/e-commerce" },
    { name: "Electronics Boxes", url: "/industries/electronics-boxes" },
    { name: "Food Boxes", url: "/industries/food-boxes" },
    { name: "Fragrance Boxes", url: "/industries/fragrance-boxes" },
    { name: "Game Boxes", url: "/industries/game-boxes" },
    { name: "Gift Boxes", url: "/industries/gift-boxes" },
    { name: "Holiday Boxes", url: "/industries/holiday-boxes" },
    { name: "Jewelry Boxes", url: "/industries/jewelry-boxes" },
    { name: "Marijuana Packaging", url: "/industries/marijuana-packaging" },
    { name: "Pharma Packaging", url: "/industries/pharma-packaging" },
    { name: "Pre Roll Boxes", url: "/industries/pre-roll-boxes" },
    { name: "Soap Boxes", url: "/industries/soap-boxes" },
    { name: "Sports Boxes", url: "/industries/sports-boxes" },
    { name: "Stationery Boxes", url: "/industries/stationery-boxes" },
    { name: "Retail Boxes", url: "/industries/retail-boxes" },
    { name: "Vape Boxes", url: "/industries/vape-boxes" },

    // Shapes & Styles
    { name: "Child Resistant Packaging", url: "/shapes-styles/child-resistant-packaging" },
    { name: "Custom Bags", url: "/shapes-styles/custom-bags" },
    { name: "Mylar Bags", url: "/categories/custom-mylar-bags" },
    { name: "Weed Bags", url: "/shapes-styles/weed-bags" },
    { name: "Subscription Boxes", url: "/shapes-styles/subscription-boxes" },
    { name: "Shipping Boxes", url: "/shapes-styles/shipping-boxes" },
    { name: "Mailer Boxes", url: "/industries/mailer-boxes" },
    { name: "Custom Shape Boxes", url: "/shapes-styles/custom-shape-boxes" },
    { name: "Stickers and Labels", url: "/shapes-styles/stickers-and-labels" },
    { name: "Sleeves and Trays", url: "/shapes-styles/sleeves-and-trays" },
    { name: "Pillow Boxes", url: "/shapes-styles/pillow-boxes" },
    { name: "Tuck Boxes", url: "/industries/tuck-boxes" },
    { name: "Window Packaging", url: "/shapes-styles/window-packaging" },
    { name: "Hang Tags", url: "/shapes-styles/hang-tags" },
    { name: "Gable Boxes", url: "/shapes-styles/gable-boxes" },

    // Box by Materials
    { name: "Custom Cardboard Boxes", url: "/industries/cardboard-boxes" },
    { name: "Custom Corrugated Boxes", url: "/industries/corrugated-boxes" },
    { name: "Custom Holographic Boxes", url: "/industries/holographic-boxes" },
    { name: "Custom Kraft Boxes", url: "/industries/custom-kraft-boxes" },
    { name: "Custom Rigid Boxes", url: "/industries/rigid-boxes" },

    // Other Categories
    { name: "Display Boxes", url: "/industries/display-boxes" },
    { name: "Custom Paper Bags", url: "/industries/custom-paper-bags" },
    { name: "Primary Packaging", url: "/primary-packaging" },
    { name: "Sustainable Packaging", url: "/industries/sustainable-packaging" },
    { name: "Tea and Coffee Cups", url: "/industries/tea-and-coffee-cups" },
  ];

  // Search logic
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    if (value.trim() === "") {
      setShowDropdown(false);
      setSearchResults([]);
      return;
    }

    const lowerQuery = value.toLowerCase();

    const filtered = products
      .filter(product => product.name.toLowerCase().includes(lowerQuery))
      .sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        const aStarts = nameA.startsWith(lowerQuery);
        const bStarts = nameB.startsWith(lowerQuery);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return nameA.localeCompare(nameB);
      });

    setSearchResults(filtered);
    setShowDropdown(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    setShowDropdown(false);
    setSearchQuery("");
  };

  const promoOffers = [
    "🎁 Limited Time Offer: Get 20% OFF on orders over 500 boxes | Free Shipping Nationwide",
    "✨ New Customer Special: First Order Gets 15% OFF + Free Design Consultation",
    "📦 Bulk Order Bonus: Order 1000+ boxes and get FREE Custom Printing",
    "🚚 Express Delivery Available: Get your boxes in 48 hours",
    "💚 Eco-Friendly Options: 100% Recyclable Materials Available Now",
  ];

  const navItems = [
    { label: "Box by Industry", href: "/industries", hasDropdown: true },
    { label: "Shapes & Styles", href: "/shapes-styles", hasDropdown: true },
    { label: "Box by Materials", href: "/box-by-materials", hasDropdown: true },
    { label: "Mylar Bags", href: "/categories/custom-mylar-bags", hasDropdown: false },
    { label: "Primary Packaging", href: "/primary-packaging", hasDropdown: false },
    { label: "Packaging Hub", href: "/packaging-hub", hasDropdown: false },
    { label: "Insights", href: "#insights", hasDropdown: false },
    { label: "Help & FAQ", href: "#faq", hasDropdown: false },
  ];

  const industryCategories = [
    { label: "Apparel Boxes", icon: Shirt, href: "/industries/apparel-boxes" },
    { label: "Automotive Boxes", icon: Car, href: "/industries/automotive-boxes" },
    { label: "Bakery Boxes", icon: Cake, href: "/industries/bakery-boxes" },
    { label: "Beverage Boxes", icon: Wine, href: "/industries/beverage-boxes" },
    { label: "Candle Boxes", icon: Flame, href: "/industries/candle-boxes" },
    { label: "Cannabis Packaging", icon: Leaf, href: "/industries/cannabis-packaging" },
    { label: "Chocolate Boxes", icon: Candy, href: "/industries/chocolate-boxes" },
    { label: "Christmas Boxes", icon: TreePine, href: "/industries/christmas-boxes" },
    { label: "Cigarette Boxes", icon: Cigarette, href: "/industries/cigarette-boxes" },
    { label: "Cosmetic Boxes", icon: Sparkles, href: "/industries/cosmetic-boxes" },
    { label: "Custom Candy Boxes", icon: Candy, href: "/industries/custom-candy-boxes" },
    { label: "Custom CBD Boxes", icon: Leaf, href: "/industries/custom-cbd-boxes" },
    { label: "Custom Hemp Boxes", icon: Leaf, href: "/industries/custom-hemp-boxes" },
    { label: "E-Commerce", icon: ShoppingCart, href: "/industries/e-commerce" },
    { label: "Electronics Boxes", icon: Laptop, href: "/industries/electronics-boxes" },
    { label: "Food Boxes", icon: UtensilsCrossed, href: "/industries/food-boxes" },
    { label: "Fragrance Boxes", icon: Flower2, href: "/industries/fragrance-boxes" },
    { label: "Game Boxes", icon: Gamepad2, href: "/industries/game-boxes" },
    { label: "Gift Boxes", icon: GiftIcon, href: "/industries/gift-boxes" },
    { label: "Holiday Boxes", icon: Calendar, href: "/industries/holiday-boxes" },
    { label: "Jewelry Boxes", icon: Gem, href: "/industries/jewelry-boxes" },
    { label: "Marijuana Packaging", icon: Leaf, href: "/industries/marijuana-packaging" },
    { label: "Pharma Packaging", icon: Pill, href: "/industries/pharma-packaging" },
    { label: "Pre Roll Boxes", icon: Scroll, href: "/industries/pre-roll-boxes" },

  ];

  const shapesStylesItems = [
    { label: "Child Resistant Packaging", href: "/shapes-styles/child-resistant-packaging" },
    { label: "Custom Bags", href: "/shapes-styles/custom-bags" },

    { label: "Weed Bags", href: "/shapes-styles/weed-bags" },
    { label: "Subscription Boxes", href: "/shapes-styles/subscription-boxes" },
    { label: "Shipping Boxes", href: "/shapes-styles/shipping-boxes" },
    { label: "Mailer Boxes", href: "/industries/mailer-boxes" },
    { label: "Custom Shape Boxes", href: "/shapes-styles/custom-shape-boxes" },
    { label: "Stickers and Labels", href: "/shapes-styles/stickers-and-labels" },
    { label: "Sleeves and Trays", href: "/shapes-styles/sleeves-and-trays" },
  ];

  const materialItems = [
    { label: "Custom Cardboard Boxes", href: "/industries/cardboard-boxes" },
    { label: "Custom Corrugated Boxes", href: "/industries/corrugated-boxes" },
    { label: "Custom Holographic Boxes", href: "/industries/holographic-boxes" },
    { label: "Custom Kraft Boxes", href: "/industries/custom-kraft-boxes" },
    { label: "Custom Rigid Boxes", href: "/industries/rigid-boxes" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Promotional Banner with Marquee */}
      <div className="bg-primary text-primary-foreground overflow-hidden relative h-[35px] flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...promoOffers, ...promoOffers].map((offer, index) => (
            <div key={index} className="inline-flex items-center mx-8 text-sm font-medium">
              <span>{offer}</span>
              <span className="mx-8 text-primary-foreground/50">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-background border-b border-border transition-all duration-300 relative z-[60] ${hideMainHeader ? '-translate-y-full opacity-0 h-0 overflow-hidden' : 'translate-y-0 opacity-100'
        }`}>
        <div className="container mx-auto px-[10px]">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center group flex-shrink-0 cursor-pointer">
              <img src={logo} alt="CustomPackMakers" className="h-12 md:h-16 w-auto object-contain mr-4 transition-transform hover:scale-105" loading="lazy" />
            </a>

            {/* Search Bar - Desktop */}
            <div className={`hidden md:flex items-center flex-1 max-w-xl mx-8 transition-all ${showDropdown ? 'z-[60]' : ''}`}>

              <div className="relative w-full search-container">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 z-10 transition-colors ${showDropdown ? 'text-primary' : 'text-muted-foreground'}`} />
                <Input
                  type="text"
                  placeholder="Search for custom boxes..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery && setShowDropdown(true)}
                  className={`pl-10 pr-4 h-12 border-2 transition-all duration-200 ${showDropdown
                    ? 'bg-white border-primary shadow-lg ring-4 ring-primary/10 rounded-t-xl rounded-b-none'
                    : 'bg-muted/50 border-transparent focus:bg-background focus:border-primary/50'
                    }`}
                />

                {/* Dropdown Results */}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 p-2 bg-white border border-gray-200 rounded-b-xl shadow-2xl max-h-[400px] overflow-y-auto z-[100] animate-in fade-in slide-in-from-top-1">
                    {searchResults.length > 0 ? (
                      <div className="space-y-1">
                        {searchResults.slice(0, 10).map((result, index) => (
                          <button
                            key={index}
                            onClick={() => handleResultClick(result.url)}
                            className="w-full px-4 py-3 text-left hover:bg-slate-50 rounded-lg transition-all duration-200 flex items-center gap-3 group border border-transparent hover:border-slate-100"
                          >
                            <div className="bg-primary/5 p-2 rounded-md group-hover:bg-primary/10 transition-colors">
                              <Package className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                              {result.name}
                            </span>
                            <ChevronDown className="h-4 w-4 text-slate-300 ml-auto -rotate-90 opacity-0 group-hover:opacity-100 transition-all" />
                          </button>
                        ))}
                        {searchResults.length > 10 && (
                          <div className="px-4 py-3 text-xs font-medium text-muted-foreground border-t border-dashed border-slate-200 mt-2 text-center">
                            Showing 10 of {searchResults.length} results
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <div className="bg-slate-50 p-3 rounded-full mb-3">
                          <Search className="h-6 w-6 text-slate-300" />
                        </div>
                        <p className="text-sm font-medium text-slate-900">No results found</p>
                        <p className="text-xs text-muted-foreground mt-1">We couldn't find matches for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <a href="tel:+1234567890" className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition-colors">
                <Phone className="h-5 w-5 text-foreground" />
              </a>
              <a href="mailto:sales@custompackmakers.com" className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition-colors">
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a href="#quote">
                <Button className="gradient-primary hover:opacity-90 transition-opacity h-10 px-4 md:px-6 text-sm md:text-base">
                  Get a Quote
                </Button>
              </a>

              {/* Mobile Menu Button - Increased touch target */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 -mr-2 text-foreground hover:bg-accent rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Desktop */}
      <div className="hidden md:block bg-accent/30 border-b border-border">
        <div className="container mx-auto px-[10px]">
          <nav className="flex items-center gap-1 relative h-[40px]">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.label === "Box by Industry" || item.label === "Shapes & Styles" || item.label === "Box by Materials") && setActiveMegaMenu(item.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-foreground hover:text-primary font-medium text-[15px] transition-colors group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  )}
                </a>

                {/* Mega Menu for Box by Industry */}
                {item.label === "Box by Industry" && activeMegaMenu === "Box by Industry" && (
                  <div className="absolute left-0 top-full pt-2 z-50 animate-fade-in">
                    <div className="bg-background border border-border rounded-lg shadow-lg p-6 w-[800px]">
                      <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                        {industryCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <a
                              key={category.label}
                              href={category.href}
                              className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-accent transition-colors group"
                            >
                              <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                                {category.label}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <a
                          href="/industries"
                          className="flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View All Industry
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Shapes & Styles */}
                {item.label === "Shapes & Styles" && activeMegaMenu === "Shapes & Styles" && (
                  <div className="absolute left-0 top-full pt-2 z-50 animate-fade-in">
                    <div className="bg-background border border-border rounded-lg shadow-lg p-3 w-[280px]">
                      <div className="flex flex-col">
                        {shapesStylesItems.map((shapeItem) => (
                          <a
                            key={shapeItem.label}
                            href={shapeItem.href}
                            className="px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
                          >
                            {shapeItem.label}
                          </a>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-border">
                        <a
                          href="/shapes-styles"
                          className="flex items-center justify-center px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Box by Materials */}
                {item.label === "Box by Materials" && activeMegaMenu === "Box by Materials" && (
                  <div className="absolute left-0 top-full pt-2 z-50 animate-fade-in">
                    <div className="bg-background border border-border rounded-lg shadow-lg p-3 w-[280px]">
                      <div className="flex flex-col">
                        {materialItems.map((materialItem) => (
                          <a
                            key={materialItem.label}
                            href={materialItem.href}
                            className="px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
                          >
                            {materialItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[115px] bottom-0 bg-background border-b border-border shadow-lg overflow-y-auto z-50">
          {/* Mobile Search */}
          <div className="px-[10px] py-3 border-b border-border sticky top-0 bg-background z-10">
            <div className="relative search-container">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Search for custom boxes..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-4 bg-muted/50 h-12 text-base" // Ensure text-base (16px) to prevent iOS zoom
              />

              {/* Dropdown Results - Mobile */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-xl max-h-[300px] overflow-y-auto z-50">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.slice(0, 10).map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result.url)}
                          className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3 group border-b border-border/50 last:border-0"
                        >
                          <Package className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {result.name}
                          </span>
                        </button>
                      ))}
                      {searchResults.length > 10 && (
                        <div className="px-4 py-2 text-xs text-muted-foreground border-t border-border">
                          Showing 10 of {searchResults.length} results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <nav className="flex flex-col pb-20">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.label === "Box by Materials" ? (
                  <>
                    <div className="flex items-center justify-between w-full border-b border-border/50">
                      <a
                        href="/box-by-materials"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 px-4 py-4 text-foreground hover:bg-accent transition-colors text-base font-medium"
                      >
                        <span className="font-medium">{item.label}</span>
                      </a>
                      <button
                        onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                        className="px-4 py-4 text-foreground hover:bg-accent transition-colors"
                        aria-label="Toggle materials submenu"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isMaterialsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    <div
                      className={`grid transition-all duration-200 ease-in-out overflow-hidden bg-accent/5 ${isMaterialsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="min-h-0">
                        <div className="flex flex-col py-2">
                          {[
                            { label: "Cardboard Boxes", href: "/industries/cardboard-boxes" },
                            { label: "Kraft Boxes", href: "/industries/custom-kraft-boxes" },
                            { label: "Corrugated Boxes", href: "/industries/corrugated-boxes" },
                            { label: "Rigid Boxes", href: "/industries/rigid-boxes" },
                            { label: "Cardstock Boxes", href: "/industries/cardstock-boxes" },
                          ].map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="px-8 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors block"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-foreground hover:bg-accent transition-colors border-b border-border/50 text-base font-medium"
                  >
                    <span className="font-medium">{item.label}</span>
                  </a>
                )}
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4 p-4 mt-2">
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-accent/50 text-foreground font-medium">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a href="mailto:sales@custompackmakers.com" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-accent/50 text-foreground font-medium">
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
