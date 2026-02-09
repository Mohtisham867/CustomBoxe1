import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOContent } from "@/components/SEOContent";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 w-full font-sans text-gray-900">
            <Header />


            {/* Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/src/assets/industries-hero-v3.webp"
                        alt="Data Security Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 pt-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
                    {/* <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">Last Updated: {lastUpdated}</p> */}
                </div>
            </div>

            {/* Main Content */}
            <main className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-left prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 transition-colors">
                        <p className="lead text-xl text-gray-600 mb-12">
                            At CustomPackMakers ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website and use our custom packaging services.
                        </p>

                        <p>
                            By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access the site.
                        </p>

                        <Separator className="my-12" />

                        <section id="information-collection" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                We collect information that you provide directly to us when you register for an account, request a quote, place an order, or subscribe to our newsletter. This information may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>Personal Identification:</strong> Name, email address, phone number, and billing/shipping address.</li>
                                <li><strong>Business Information:</strong> Company name, industry, and branding assets (logos, designs).</li>
                                <li><strong>Transaction Data:</strong> Payment details (processed securely via third-party gateways) and order history.</li>
                                <li><strong>Communication Data:</strong> Inquiries, feedback, and customer support interactions.</li>
                            </ul>
                        </section>

                        <section id="data-usage" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
                            <p className="mb-4">
                                We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li>Process and fulfill your custom packaging orders, including sending proofs and shipping updates.</li>
                                <li>Communicate with you regarding your account, orders, and inquiries.</li>
                                <li>Send you marketing communications, such as newsletters and special offers (you may opt-out at any time).</li>
                                <li>Analyze usage patterns to improve our website functionality and user experience.</li>
                                <li>Prevent fraudulent transactions and monitor against theft.</li>
                            </ul>
                        </section>

                        <section id="cookies" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">3. Cookies and Tracking Technologies</h2>
                            <p className="mb-4">
                                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                            </p>
                            <p className="mb-8">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                            </p>
                        </section>

                        <section id="sharing" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
                            <p className="mb-4">
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described below:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., payment processors, shipping carriers), so long as those parties agree to keep this information confidential.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.</li>
                            </ul>
                        </section>

                        <section id="security" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                            <p className="mb-8">
                                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We utilize SSL technology to ensure that your data is encrypted during transmission.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <ul className="list-none pl-0 space-y-2 mb-8">
                                <li><strong>Email:</strong> <a href="mailto:sales@custompackmakers.com" className="text-primary hover:underline">sales@custompackmakers.com</a></li>
                                <li><strong>Visit Us:</strong> <a href="/contact" className="text-primary hover:underline">Contact Page</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <SEOContent>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold mb-2">Committed to Your Privacy</h3>
                    <p className="text-gray-600">At CustomPackMakers, trust is the foundation of our business. We understand that your designs and business strategies are proprietary, and we treat your intellectual property with the utmost confidentiality.</p>
                </div>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
