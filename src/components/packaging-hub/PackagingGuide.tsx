import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, Box, Layers, Weight, Leaf } from "lucide-react";

const PackagingGuide = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm">
                        Knowledge Base
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        The Ultimate Packaging Guide
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        From e-commerce mailers to heavy-duty shipping cartons, understand the engineering behind premium packaging.
                    </p>
                </div>

                <Tabs defaultValue="styles" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                            <TabsTrigger value="styles" className="text-base">Box Styles</TabsTrigger>
                            <TabsTrigger value="materials" className="text-base">Material Science</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="styles" className="space-y-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Box className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Mailer Boxes</CardTitle>
                                    <CardDescription>The E-Commerce Standard</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-600">
                                        Mailer boxes are self-locking and durable, designed to withstand the rigors of shipping without needing external adhesive tape. They provide an excellent unboxing experience.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            Double-wall front protection
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            Interlocking flaps for security
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            Ideal for subscription boxes
                                        </li>
                                    </ul>
                                    <div className="bg-slate-100 p-4 rounded-lg mt-4">
                                        <p className="text-xs font-semibold text-slate-900 uppercase mb-1">Best For:</p>
                                        <p className="text-sm text-slate-600">Clothing, electronics, gifts, cosmetics.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <Package className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Product Boxes</CardTitle>
                                    <CardDescription>Retail & Display</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-600">
                                        Also known as folding cartons, these are lightweight, high-quality printed boxes used for retail shelves. They are typically made from cardstock rather than corrugated board.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                            High-resolution print quality
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                            Sleek & lightweight
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                            Cost-effective for high volume
                                        </li>
                                    </ul>
                                    <div className="bg-slate-100 p-4 rounded-lg mt-4">
                                        <p className="text-xs font-semibold text-slate-900 uppercase mb-1">Best For:</p>
                                        <p className="text-sm text-slate-600">Cosmetics, food, supplements, medicine.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <Truck className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Shipping Cartons</CardTitle>
                                    <CardDescription>Heavy Duty Transit</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-600">
                                        The standard Regular Slotted Container (RSC). Built for bulk transport, moving, and heavy items. Focus is on protection and stacking strength rather than aesthetics.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                            Maximum impact protection
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                            High stacking strength
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                            Economical for large items
                                        </li>
                                    </ul>
                                    <div className="bg-slate-100 p-4 rounded-lg mt-4">
                                        <p className="text-xs font-semibold text-slate-900 uppercase mb-1">Best For:</p>
                                        <p className="text-sm text-slate-600">Wholesale distribution, moving, heavy appliances.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="materials" className="space-y-12">

                        {/* GSM Section */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Weight className="w-6 h-6 text-primary" />
                                    Understanding GSM
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    GSM stands for <strong>Grams per Square Meter</strong>. It measures the weight and density of the paper used in your packaging. A higher GSM means a thicker, sturdier box.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">1</div>
                                        <div>
                                            <strong className="block text-slate-900">250-300 GSM</strong>
                                            <span className="text-sm text-slate-500">Standard for lightweight cosmetic and retail boxes.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">2</div>
                                        <div>
                                            <strong className="block text-slate-900">350-400 GSM</strong>
                                            <span className="text-sm text-slate-500">Premium retail boxes with a luxury feel.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">3</div>
                                        <div>
                                            <strong className="block text-slate-900">120-150 GSM (Flute Liner)</strong>
                                            <span className="text-sm text-slate-500">Used as the inner and outer layers of corrugated board.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                                <h4 className="font-bold text-lg mb-4">Pro Tip: GSM vs. Strength</h4>
                                <p className="text-slate-600 mb-4 italic">
                                    "Don't confuse GSM with structural strength. For shipping, the <span className="text-primary font-semibold">Flute Type</span> matters more than the GSM of the paper liner."
                                </p>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-3/4"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>Lightweight</span>
                                    <span>Heavy Duty</span>
                                </div>
                            </div>
                        </div>

                        {/* Flute Types */}
                        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Layers className="w-6 h-6 text-primary" />
                                Corrugated Flute Types
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="text-4xl font-black text-slate-200 mb-2">E</div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">E-Flute (1.6mm)</h4>
                                    <p className="text-sm text-slate-600">
                                        Fine flute. Excellent for printing. Used for retail packaging and small mailer boxes (e.g., pizza boxes, cosmetics).
                                    </p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="text-4xl font-black text-slate-200 mb-2">B</div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">B-Flute (3.2mm)</h4>
                                    <p className="text-sm text-slate-600">
                                        The most common for mailer boxes. Good crush resistance and stacking strength. Great for subscription boxes.
                                    </p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="text-4xl font-black text-slate-200 mb-2">C</div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">C-Flute (4.0mm)</h4>
                                    <p className="text-sm text-slate-600">
                                        Thicker and stronger. Used for shipping cartons and heavy items. Provides maximum cushioning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Paper Types */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Leaf className="w-6 h-6 text-primary" />
                                Paper & Finishes
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-[#d4bbb1] rounded-lg shadow-inner flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Natural Kraft</h4>
                                        <p className="text-slate-600 text-sm mt-1">
                                            Unbleached, brown appearance. Eco-friendly and rustic. High tear resistance. Best for minimal, organic branding.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-white border border-slate-200 rounded-lg shadow-inner flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Bleached White</h4>
                                        <p className="text-slate-600 text-sm mt-1">
                                            Smooth white surface. Perfect for vibrant, full-color printing (CMYK). Offers a clean, premium look.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default PackagingGuide;
