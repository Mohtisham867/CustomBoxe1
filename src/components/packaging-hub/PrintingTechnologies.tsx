import React from "react";
import { Badge } from "@/components/ui/badge";
import { Printer, Zap, Layers, Sparkles, Feather, Sun } from "lucide-react";

const PrintingTechnologies = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 px-4 py-1.5 text-sm">
                        Print & Finishes
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Advanced Printing Technologies
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Bring your brand to life. We use state-of-the-art printing methods to ensure your packaging looks as premium as the product inside.
                    </p>
                </div>

                {/* Printing Methods Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Printer className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Offset Printing</h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            The gold standard for high-quality packaging. Ideally suited for large volume runs where color accuracy and detail are paramount.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-center gap-2">✔ Highest image quality</li>
                            <li className="flex items-center gap-2">✔ Cost-effective for 500+ units</li>
                            <li className="flex items-center gap-2">✔ Supports all finishes</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Printing</h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            Perfect for prototypes and short runs. No setup fees means you can order low quantities with fast turnaround times.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-center gap-2">✔ No setup plates required</li>
                            <li className="flex items-center gap-2">✔ Great for variable data</li>
                            <li className="flex items-center gap-2">✔ Faster production time</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Layers className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Flexography</h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            Direct printing onto corrugated board. A cost-efficient solution for simple designs, logos, and shipping cartons.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-center gap-2">✔ Extremely durable ink</li>
                            <li className="flex items-center gap-2">✔ Economical for simple art</li>
                            <li className="flex items-center gap-2">✔ Eco-friendly water-based inks</li>
                        </ul>
                    </div>
                </div>

                {/* Premium Finishes Section */}
                <div className="bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

                    <div className="relative z-10 text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Premium Finishes</h3>
                        <p className="text-slate-300">Elevate your unboxing experience with tactile and visual enhancements.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {/* Spot UV */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all text-center group">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors">
                                <Sun className="w-6 h-6 text-purple-300 group-hover:text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Spot UV</h4>
                            <p className="text-xs text-slate-300">
                                A clear, shiny coating applied to specific areas (like logos) to create a striking contrast against matte backgrounds.
                            </p>
                        </div>

                        {/* Foil Stamping */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all text-center group">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                                <Sparkles className="w-6 h-6 text-yellow-300 group-hover:text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Foil Stamping</h4>
                            <p className="text-xs text-slate-300">
                                Metallic foil (Gold, Silver, Rose Gold) is heat-pressed onto the box for a luxurious, reflective finish.
                            </p>
                        </div>

                        {/* Embossing/Debossing */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all text-center group">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                                <Layers className="w-6 h-6 text-blue-300 group-hover:text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Embossing</h4>
                            <p className="text-xs text-slate-300">
                                Raising (emboss) or indenting (deboss) parts of the design to add physical depth and texture.
                            </p>
                        </div>

                        {/* Soft Touch */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all text-center group">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500 transition-colors">
                                <Feather className="w-6 h-6 text-pink-300 group-hover:text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Soft Touch</h4>
                            <p className="text-xs text-slate-300">
                                A special lamination that feels velvety and smooth to the touch. The ultimate luxury finish.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrintingTechnologies;
