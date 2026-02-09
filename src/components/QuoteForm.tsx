import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    materials: "",
    length: "",
    width: "",
    height: "",
    dimensionUnit: "",
    companyName: "",
    printingSides: "",
    cardThickness: "",
    glossyLamination: "",
    extraFinishing: "",
    message: "",
    file: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for large form
      const templateParams = {
        to_email: import.meta.env.VITE_RECEIVER_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        material: formData.materials || "N/A",
        dimensions: `${formData.length || "N/A"} x ${formData.width || "N/A"} x ${formData.height || "N/A"} ${formData.dimensionUnit || ""}`.trim(),
        printing: formData.printingSides || "N/A",
        lamination: formData.glossyLamination || "N/A",
        quantity: "N/A", // Large form doesn't have quantity field
        message: formData.message || "No additional message",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Quote request submitted! We'll contact you within 24 hours.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        materials: "",
        length: "",
        width: "",
        height: "",
        dimensionUnit: "",
        companyName: "",
        printingSides: "",
        cardThickness: "",
        glossyLamination: "",
        extraFinishing: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to submit quote request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      toast.success(`File "${file.name}" attached successfully`);
    }
  };

  return (
    <section id="quote" className="py-20 bg-[#E5E5E5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Get Custom Quote</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form & request your personalized quote for designer boxes. Our custom packaging design experts will contact you to consult you on every aspect of your box specifications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="h-12 bg-background border-input"
              />
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="h-12 bg-background border-input"
              />
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 123-123-1234"
                className="h-12 bg-background border-input"
              />
            </div>

            {/* Row 2: Materials, Length, Width, Height, Dimension Unit, Company Name */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <Select value={formData.materials} onValueChange={(value) => setFormData({ ...formData, materials: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Materials" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="materials">Materials</SelectItem>
                  <SelectItem value="consultation">Need Consultation</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="kraft">Kraft</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                placeholder="Length"
                className="h-12 bg-background border-input"
              />
              <Input
                value={formData.width}
                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                placeholder="Width"
                className="h-12 bg-background border-input"
              />
              <Input
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                placeholder="Height"
                className="h-12 bg-background border-input"
              />
              <Select value={formData.dimensionUnit} onValueChange={(value) => setFormData({ ...formData, dimensionUnit: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Dimension Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inches">Inches</SelectItem>
                  <SelectItem value="cm">Centimeters</SelectItem>
                  <SelectItem value="mm">Millimeters</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Company Name"
                className="h-12 bg-background border-input"
              />
            </div>

            {/* Row 3: Printing Sides, Card Thickness, Glossy Lamination, Extra Finishing */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={formData.printingSides} onValueChange={(value) => setFormData({ ...formData, printingSides: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Printing Sides" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Printing</SelectItem>
                  <SelectItem value="inside">Inside Only</SelectItem>
                  <SelectItem value="outside">Outside Only</SelectItem>
                  <SelectItem value="both">Both Sides</SelectItem>
                </SelectContent>
              </Select>
              <Select value={formData.cardThickness} onValueChange={(value) => setFormData({ ...formData, cardThickness: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Card Thickness" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="14pt">14pt</SelectItem>
                  <SelectItem value="16pt">16pt</SelectItem>
                  <SelectItem value="18pt">18pt</SelectItem>
                  <SelectItem value="24pt">24pt</SelectItem>
                </SelectContent>
              </Select>
              <Select value={formData.glossyLamination} onValueChange={(value) => setFormData({ ...formData, glossyLamination: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Glossy lamination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="gloss">Gloss</SelectItem>
                  <SelectItem value="matte">Matte</SelectItem>
                  <SelectItem value="soft-touch">Soft Touch</SelectItem>
                </SelectContent>
              </Select>
              <Select value={formData.extraFinishing} onValueChange={(value) => setFormData({ ...formData, extraFinishing: value })}>
                <SelectTrigger className="h-12 bg-background border-input">
                  <SelectValue placeholder="Extra Finishing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="embossing">Embossing</SelectItem>
                  <SelectItem value="debossing">Debossing</SelectItem>
                  <SelectItem value="foil">Foil Stamping</SelectItem>
                  <SelectItem value="spot-uv">Spot UV</SelectItem>
                  <SelectItem value="window">Die-Cut Window</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Row 4: Message and File Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Enter your Message"
                rows={5}
                className="bg-background border-input resize-none"
              />
              <div className="space-y-4">
                <div className="relative h-full min-h-[120px] border-2 border-dashed border-input rounded-md bg-background hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.ai,.eps,.psd"
                  />
                  <label
                    htmlFor="file-upload"
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer text-muted-foreground"
                  >
                    <span className="text-sm font-medium">Choose File</span>
                    <span className="text-xs mt-1">Attach Your Design</span>
                    {formData.file && (
                      <span className="text-xs mt-2 text-primary font-medium">{formData.file.name}</span>
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center w-full">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-12 font-semibold uppercase tracking-wide disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Get Inquiry"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
