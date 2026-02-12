import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, PenTool, Factory, Truck } from "lucide-react";

const ProcessFlow = () => {
    const steps = [
        {
            id: 1,
            title: "Consultation & Quote",
            description: "Share your vision, dimensions, and quantity. We'll provide a custom quote and expert advice.",
            icon: MessageSquare,
            color: "bg-blue-500",
        },
        {
            id: 2,
            title: "Design & Prototyping",
            description: "We create a dieline for your artwork. Request a physical 3D sample to verify size and print quality.",
            icon: PenTool,
            color: "bg-purple-500",
        },
        {
            id: 3,
            title: "Mass Production",
            description: "Once approved, we start manufacturing using our advanced offset or digital printing presses.",
            icon: Factory,
            color: "bg-orange-500",
        },
        {
            id: 4,
            title: "Quality Check & Ship",
            description: "Every box undergoes a strict quality control check before being packed and shipped to your door.",
            icon: Truck,
            color: "bg-green-500",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-1.5 text-sm">
                        How It Works
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Your Customization Journey
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From a sketch to a tangible product. We streamline the process to make custom packaging easy and stress-free.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center text-white mb-6 mx-auto shadow-lg relative`}>
                                    <step.icon className="w-7 h-7" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                                        {step.id}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
