import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Ruler, ArrowRight, Box } from "lucide-react";

const SizeGuide = () => {
    const standardSizes = [
        {
            size: "Small (S)",
            dimensionsIn: "4\" x 4\" x 2\"",
            dimensionsMm: "102 x 102 x 51 mm",
            bestFor: "Jewelry, small cosmetics, business cards",
        },
        {
            size: "Medium (M)",
            dimensionsIn: "8\" x 6\" x 3\"",
            dimensionsMm: "203 x 152 x 76 mm",
            bestFor: "Skincare sets, phone cases, small electronics",
        },
        {
            size: "Large (L)",
            dimensionsIn: "10\" x 8\" x 4\"",
            dimensionsMm: "254 x 203 x 102 mm",
            bestFor: "Clothing (T-shirts), books, gift sets",
        },
        {
            size: "Extra Large (XL)",
            dimensionsIn: "12.5\" x 10\" x 5\"",
            dimensionsMm: "318 x 254 x 127 mm",
            bestFor: "Hoodies, shoes, multiple items",
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-4 py-1.5 text-sm">
                        Measurements
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Size & Measurements Guide
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ensure a perfect fit. Use our standard sizes or request custom dimensions for your specific product needs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* How to Measure Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Ruler className="w-6 h-6 text-primary" />
                            How to Measure a Box
                        </h3>

                        <div className="relative aspect-video bg-slate-100 rounded-xl mb-8 flex items-center justify-center p-8">
                            {/* CSS Box Representation */}
                            <div className="relative w-48 h-32 bg-orange-100 border-2 border-orange-300 transform perspective-1000 rotate-x-12">

                                {/* Length Arrows */}
                                <div className="absolute -bottom-8 left-0 w-full flex flex-col items-center">
                                    <div className="w-full h-px bg-slate-400 relative">
                                        <div className="absolute left-0 -top-1 w-px h-3 bg-slate-400"></div>
                                        <div className="absolute right-0 -top-1 w-px h-3 bg-slate-400"></div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 mt-1">Length (L)</span>
                                </div>

                                {/* Width Arrows */}
                                <div className="absolute top-0 -right-8 h-full flex flex-row items-center">
                                    <div className="h-full w-px bg-slate-400 relative">
                                        <div className="absolute top-0 -left-1 h-px w-3 bg-slate-400"></div>
                                        <div className="absolute bottom-0 -left-1 h-px w-3 bg-slate-400"></div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 ml-2 rotate-90">Width (W)</span>
                                </div>

                                {/* Depth Indicator (3D effect simulation) */}
                                <div className="absolute -top-8 left-0 w-full text-center">
                                    <span className="text-xs font-bold text-slate-600">Depth (D)</span>
                                    <p className="text-[10px] text-slate-400">(Top to Bottom)</p>
                                </div>

                                <Box className="w-12 h-12 text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Length (L)</h4>
                                    <p className="text-sm text-slate-600">The longest side of the opening of the box.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Width (W)</h4>
                                    <p className="text-sm text-slate-600">The shorter side of the opening.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Depth (D)</h4>
                                    <p className="text-sm text-slate-600">The measurement from the top of the opening to the bottom.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
                            <strong>Note:</strong> Always measure the <em>internal</em> dimensions of the box to ensure your product fits snugly.
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Standard Industry Sizes</h3>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <Table className="min-w-[500px]">
                                    <TableHeader className="bg-slate-50">
                                        <TableRow>
                                            <TableHead className="font-bold text-slate-900">Size Category</TableHead>
                                            <TableHead className="font-bold text-slate-900">Dimensions (Inches)</TableHead>
                                            <TableHead className="font-bold text-slate-900">Dimensions (mm)</TableHead>
                                            <TableHead className="font-bold text-slate-900">Best Application</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {standardSizes.map((item, index) => (
                                            <TableRow key={index} className="hover:bg-slate-50">
                                                <TableCell className="font-medium text-primary">{item.size}</TableCell>
                                                <TableCell>{item.dimensionsIn}</TableCell>
                                                <TableCell className="text-slate-500">{item.dimensionsMm}</TableCell>
                                                <TableCell className="text-slate-600">{item.bestFor}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold text-lg text-slate-900 mb-2">Need Custom Sizes?</h4>
                            <p className="text-slate-600 mb-4">We specialize in custom dimensions. No matter how big or small your product is, we can create the perfect box.</p>
                            <button className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                                Get a Custom Quote <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SizeGuide;
