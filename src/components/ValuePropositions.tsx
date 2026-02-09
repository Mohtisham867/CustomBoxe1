import valuePropsImage from "@/assets/value-props-boxes.webp";

export const ValuePropositions = () => {
  const values = [
    {
      title: "Rapid Prototyping & Delivery",
      description:
        "Bring your brand to life with industry-leading turnaround times. From 3D mockups to door-step delivery across the USA, we move as fast as your business.",
    },
    {
      title: "Dedicated Design Assistance",
      description:
        "Our structural engineers and creative designers work with you 24/7 to ensure your packaging isn't just a box, but a premium brand experience.",
    },
    {
      title: "Business-Friendly MOQs",
      description:
        "Scale at your own pace. We offer flexible low minimum order quantities, making premium custom packaging accessible for startups and enterprises alike.",
    },
    {
      title: "Elite Quality, Fair Pricing",
      description:
        "Get the best of both worlds: high-end material durability and luxury finishes without the premium price tag. Quality is our promise, affordability is our edge.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Your Vision, Our Craft | 360° Custom Packaging Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={valuePropsImage}
              alt="Custom packaging boxes in various colors and designs"
              className="w-full max-w-2xl rounded-lg shadow-lg" loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
