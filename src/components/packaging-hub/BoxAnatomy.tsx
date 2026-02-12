import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BoxAnatomy = () => {
    const [activePart, setActivePart] = useState<string | null>(null);

    const parts = [
        { id: "dust-flap", label: "Dust Flap", description: "Prevents dust from entering and adds structural stability." },
        { id: "tuck-flap", label: "Tuck-in Tab", description: "The primary closure mechanism that tucks into the box." },
        { id: "crease", label: "Crease Line", description: "Pre-folded lines that ensure easy and accurate assembly." },
        { id: "glue-area", label: "Glue Area", description: "The strip where adhesive is applied to bond the box." },
        { id: "panel", label: "Main Panel", description: "The primary face of the box, ideal for branding." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200 px-4 py-1.5 text-sm">
                        Technical Specs
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Anatomy of a Mailer Box
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Interactive dieline diagram. Hover over the parts to understand the technical components of a standard mailer box.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Legend / Info Panel */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Component Breakdown</h3>
                        {parts.map((part) => (
                            <div
                                key={part.id}
                                className={`p-4 rounded-lg border transition-all cursor-pointer ${activePart === part.id
                                    ? "bg-primary/5 border-primary shadow-sm"
                                    : "bg-white border-slate-100 hover:border-slate-300"
                                    }`}
                                onMouseEnter={() => setActivePart(part.id)}
                                onMouseLeave={() => setActivePart(null)}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-semibold text-slate-900">{part.label}</span>
                                    {activePart === part.id && <Info className="w-4 h-4 text-primary" />}
                                </div>
                                <p className="text-sm text-slate-500">{part.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Visual Diagram */}
                    <div className="lg:col-span-2 relative bg-slate-50 rounded-2xl p-12 border border-slate-200 overflow-hidden flex items-center justify-center min-h-[500px]">
                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        {/* Dieline Representation (Simplified CSS Art) */}
                        <div className="relative w-full max-w-md aspect-square">

                            {/* Main Body Panel (Center) */}
                            <div
                                className={`absolute top-1/3 left-1/4 w-1/2 h-1/3 border-4 border-slate-800 bg-white transition-colors duration-300 z-10 ${activePart === 'panel' ? 'bg-blue-100 border-blue-600' : ''}`}
                                onMouseEnter={() => setActivePart('panel')}
                                onMouseLeave={() => setActivePart(null)}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-slate-500 tracking-wider">MAIN PANEL</div>
                            </div>

                            {/* Top Lid */}
                            <div
                                className={`absolute top-0 left-1/4 w-1/2 h-1/3 border-4 border-slate-800 border-b-0 border-dashed rounded-t-xl bg-white transition-colors duration-300 flex items-center justify-center ${activePart === 'panel' ? 'bg-blue-50' : ''}`}
                            >
                                <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">LID</span>
                            </div>

                            {/* Tuck Flap (Top of Lid) */}
                            <div
                                className={`absolute -top-[15%] left-[35%] w-[30%] h-[15%] border-4 border-slate-800 border-b-0 rounded-t-3xl bg-white transition-colors duration-300 ${activePart === 'tuck-flap' ? 'bg-orange-200 border-orange-600' : ''}`}
                                onMouseEnter={() => setActivePart('tuck-flap')}
                                onMouseLeave={() => setActivePart(null)}
                            >
                            </div>

                            {/* Dust Flaps (Sides of Lid) */}
                            <div
                                className={`absolute top-1/6 left-[10%] w-[15%] h-[16%] border-4 border-slate-800 rounded-l-xl bg-white origin-right rotate-12 transition-colors duration-300 hover:rotate-0 z-20 ${activePart === "dust-flap" ? 'bg-purple-200 border-purple-600' : ''}`}
                                style={{ top: '5%', left: '10%' }}
                                onMouseEnter={() => setActivePart('dust-flap')}
                                onMouseLeave={() => setActivePart(null)}
                            ></div>
                            <div
                                className={`absolute top-1/6 right-[10%] w-[15%] h-[16%] border-4 border-slate-800 rounded-r-xl bg-white origin-left -rotate-12 transition-colors duration-300 hover:rotate-0 z-20 ${activePart === "dust-flap" ? 'bg-purple-200 border-purple-600' : ''}`}
                                style={{ top: '5%', right: '10%' }}
                                onMouseEnter={() => setActivePart('dust-flap')}
                                onMouseLeave={() => setActivePart(null)}
                            ></div>


                            {/* Side Walls */}
                            <div className="absolute top-1/3 left-[5%] w-[20%] h-1/3 border-2 border-slate-400 border-r-0 border-dashed bg-white/50 flex items-center justify-center">
                                <span className="text-[10px] -rotate-90 font-mono font-bold text-slate-400">SIDE WALL</span>
                            </div>
                            <div className="absolute top-1/3 right-[5%] w-[20%] h-1/3 border-2 border-slate-400 border-l-0 border-dashed bg-white/50 flex items-center justify-center">
                                <span className="text-[10px] rotate-90 font-mono font-bold text-slate-400">SIDE WALL</span>
                            </div>

                            {/* Glue Area */}
                            <div
                                className={`absolute bottom-[33%] -left-[5%] w-[10%] h-1/3 border-2 border-slate-400 bg-stripes-gray opacity-50 flex items-center justify-center transition-all ${activePart === 'glue-area' ? 'opacity-100 border-red-600 bg-red-100' : ''}`}
                                style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '10px 10px' }}
                                onMouseEnter={() => setActivePart('glue-area')}
                                onMouseLeave={() => setActivePart(null)}
                            >
                            </div>

                            {/* Crease Lines (Visual Indicators) */}
                            <div
                                className={`absolute top-1/3 left-1/4 w-1/2 h-0 border-t-2 border-dashed border-slate-400 transition-colors z-20 ${activePart === 'crease' ? 'border-red-500 border-solid scale-x-110' : ''}`}
                                onMouseEnter={() => setActivePart('crease')}
                                onMouseLeave={() => setActivePart(null)}
                            ></div>
                            <div
                                className={`absolute bottom-1/3 left-1/4 w-1/2 h-0 border-t-2 border-dashed border-slate-400 transition-colors z-20 ${activePart === 'crease' ? 'border-red-500 border-solid scale-x-110' : ''}`}
                                onMouseEnter={() => setActivePart('crease')}
                                onMouseLeave={() => setActivePart(null)}
                            ></div>
                        </div>
                    </div>

                    {/* Floating Labels (Pointer Lines) */}
                    <div className="absolute top-20 right-20 bg-white px-3 py-1 rounded shadow text-xs font-bold text-slate-600 border border-slate-200">
                        Front View

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoxAnatomy;
