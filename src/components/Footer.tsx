import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Star, Award, CreditCard } from "lucide-react";
import logo from "@/assets/logo.png";
import googleReviewsBadge from "@/assets/google_reviews_badge.webp";
import trustpilotBadge from "@/assets/trustpilot_reviews_badge.webp";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border font-sans">


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center cursor-pointer">
              <img src={logo} alt="CustomPackMakers" className="h-16 w-auto object-contain transition-transform " loading="lazy" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CustomPackMakers provides premium packaging solutions to elevate your brand. We combine innovative designs with high-quality materials for every box. Your vision, our packaging—delivering excellence across every shipment..
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-white border border-border hover:border-primary hover:text-primary p-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white border border-border hover:border-primary hover:text-primary p-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white border border-border hover:border-primary hover:text-primary p-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white border border-border hover:border-primary hover:text-primary p-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Home</Link></li>
              <li><Link to="/packaging-hub" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Packaging Hub</Link></li>
              <li><Link to="/insights" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Insights</Link></li>
              <li><Link to="/contact" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Privacy Policy</Link></li>
              {/* <li><Link to="/terms-of-service" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Terms of Service</Link></li> */}
              {/* <li><a href="#quote" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Get a Quote</a></li> */}
            </ul>
          </div>

          {/* Popular Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Popular Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Custom Boxes</Link></li>
              <li><Link to="/industries/mailer-boxes" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Mailer Boxes</Link></li>
              <li><Link to="/industries/rigid-boxes" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Rigid Boxes</Link></li>
              <li><Link to="/shapes-styles/stickers-and-labels" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Stickers & Labels</Link></li>
              <li><Link to="/industries/sustainable-packaging" className="block py-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all">Eco-Friendly Packaging</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 py-1">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground mt-1">123 Packaging Street, Design City, DC 12345</span>
              </li>
              <li className="flex items-center gap-3 py-1">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 py-1">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:sales@custompackmakers.com" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  sales@custompackmakers.com
                </a>
              </li>
            </ul>

            {/* Trust Badges */}
            <div className="mt-3 flex flex-row gap-1 items-center">
              <img src={googleReviewsBadge} alt="Google Reviews" loading="lazy" className="h-[80px] w-[160px] object-contain mix-blend-multiply" />
              <img src={trustpilotBadge} alt="Trustpilot Reviews" loading="lazy" className="h-[80px] w-[160px] object-contain mix-blend-multiply" />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright - Left */}
          <p className="text-sm text-muted-foreground text-center md:text-left justify-self-start">
            © {currentYear} CustomPackMakers. All rights reserved.
          </p>

          {/* Payment Methods - Center */}
          <div className="flex items-center justify-center gap-3 justify-self-center">
            <div className="bg-white border text-blue-800 border-gray-200 rounded px-2 h-6 flex items-center justify-center" aria-label="Visa">
              <span className="font-bold italic text-xs">VISA</span>
            </div>
            <div className="bg-white border text-gray-700 border-gray-200 rounded px-2 h-6 flex items-center justify-center gap-1" aria-label="Mastercard">
              <div className="flex -space-x-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80"></div>
              </div>
              <span className="font-bold text-[10px]">Mastercard</span>
            </div>
            <div className="bg-white border text-blue-900 border-gray-200 rounded px-2 h-6 flex items-center justify-center gap-0.5" aria-label="PayPal">
              <span className="font-bold italic text-xs text-blue-800">Pay</span>
              <span className="font-bold italic text-xs text-cyan-600">Pal</span>
            </div>
            <div className="bg-white border text-indigo-600 border-gray-200 rounded px-2 h-6 flex items-center justify-center" aria-label="Stripe">
              <span className="font-bold text-xs">stripe</span>
            </div>
            <div className="bg-white border text-blue-500 border-gray-200 rounded px-2 h-6 flex items-center justify-center" aria-label="Amex">
              <span className="font-bold text-[8px] tracking-tighter border border-blue-500 px-0.5">AMEX</span>
            </div>
          </div>

          {/* Links - Right */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-muted-foreground justify-self-end">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            {/* <a href="#" className="hover:text-primary transition-colors">Sitemap</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
