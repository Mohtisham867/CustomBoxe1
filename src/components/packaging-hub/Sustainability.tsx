import React from "react";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, HeartHandshake, TreeDeciduous } from "lucide-react";

const Sustainability = () => {
    return (
        <section className="py-20 bg-green-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-1.5 text-sm">
                        Eco-Minded
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Sustainability Hub
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        The future of packaging is green. We are committed to reducing environmental impact through innovative materials and responsible sourcing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Recycle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">100% Recyclable</h3>
                        <p className="text-slate-600 text-sm">
                            Our corrugated and cardstock boxes are fully recyclable. We use water-based inks that don't contaminate the recycling stream.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Biodegradable</h3>
                        <p className="text-slate-600 text-sm">
                            Materials that naturally break down over time without leaving harmful toxins, returning to the earth safely.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <TreeDeciduous className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">FSC Certified Papers</h3>
                        <p className="text-slate-600 text-sm">
                            We source paper from responsibly managed forests that provide environmental, social, and economic benefits.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HeartHandshake className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Plastic-Free</h3>
                        <p className="text-slate-600 text-sm">
                            We offer completely plastic-free alternatives, including paper tape and cellulose-based laminates.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-green-700 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Switch to Green Packaging Today</h3>
                        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                            Did you know that 70% of consumers prefer brands that use eco-friendly packaging? Make the switch not just for the planet, but for your brand's reputation.
                        </p>
                    </div>
                    {/* Decorative background elements can go here */}
                    <Leaf className="absolute -bottom-10 -right-10 w-64 h-64 text-green-600 opacity-20 rotate-12" />
                    <Recycle className="absolute -top-10 -left-10 w-48 h-48 text-green-600 opacity-20 -rotate-12" />
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
