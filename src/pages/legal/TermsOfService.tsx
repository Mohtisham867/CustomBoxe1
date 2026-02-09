import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOContent } from "@/components/SEOContent";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 w-full font-sans text-gray-900">
            <Header />

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/src/assets/legal_hero_bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 pt-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
                    {/* <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">Last Updated: {lastUpdated}</p> */}
                </div>
            </div>

            {/* Main Content */}
            <main className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-left prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 transition-colors">
                        <section id="introduction" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                            <p className="mb-8">
                                Welcome to CustomPackMakers. These Terms of Service ("Terms") govern your use of our website located at customboxe.com (the "Service") operated by CustomPackMakers. By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                        </section>

                        <Separator className="my-12" />

                        <section id="user-accounts" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
                            <p className="mb-4">
                                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                            </p>
                            <p className="mb-8">
                                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                            </p>
                        </section>

                        <section id="custom-orders" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">3. Custom Orders & Proofing</h2>
                            <p className="mb-4">
                                As a provider of custom packaging solutions, specific terms apply to your key interactions with our production process:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>Artwork Submission:</strong> You are responsible for the accuracy of your design files, including spelling, layout, and image resolution. We are not liable for errors in the final product caused by errors in the submitted artwork.</li>
                                <li><strong>Digital Proofs:</strong> We provide digital proofs for your approval before production begins. Once a proof is approved, the order enters production, and no further changes can be made. We are not responsible for errors that were present in the approved proof.</li>
                                <li><strong>Color Accuracy:</strong> While we strive for color accuracy, due to the limitations of CMYK printing and screen calibration, we cannot guarantee a 100% color match to what you see on your screen. Slight variations may occur.</li>
                                <li><strong>Tolerances:</strong> Standard industry production tolerances for cutting, folding, and gluing apply (typically &plusmn; 1/16 inch).</li>
                            </ul>
                        </section>

                        <section id="payment" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                            <p className="mb-8">
                                We accept various forms of payment including credit cards and bank transfers. Full payment is required before production begins for most custom orders. Prices are subject to change without notice, but confirmed orders will be honored at the agreed price.
                            </p>
                        </section>

                        <section id="shipping" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">5. Shipping & Returns</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>Shipping:</strong> Delivery dates given are estimates only. We are not liable for delays caused by shipping carriers, weather conditions, or customs clearance.</li>
                                <li><strong>Returns:</strong> Due to the custom nature of our products, we do not accept returns or exchanges unless the product is defective or does not match the approved proof due to a production error on our part.</li>
                                <li><strong>Claims:</strong> Any claims for defective goods must be made within 5 business days of receipt of the order.</li>
                            </ul>
                        </section>

                        <section id="intellectual-property" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                            <p className="mb-8">
                                The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of CustomPackMakers and its licensors. You warrant that you have the right to use any logos, trademarks, or copyrighted material you submit to us for printing.
                            </p>
                        </section>

                        <section id="liability" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                            <p className="mb-8">
                                In no event shall CustomPackMakers, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>
                        </section>

                        <section id="changes" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">8. Changes</h2>
                            <p className="mb-8">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <SEOContent>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold mb-2">Transparency and Trust</h3>
                    <p className="text-gray-600">Our goal is to build long-term relationships with our clients. These terms are designed to set clear expectations and protect both parties throughout the custom manufacturing process.</p>
                </div>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default TermsOfService;
