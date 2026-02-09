import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const InstantQuoteFormCompact = ({ customProducts }: { customProducts?: string[] }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    products: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for compact form
      const templateParams = {
        to_email: import.meta.env.VITE_RECEIVER_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        product_type: formData.products || "N/A",
        quantity: formData.quantity,
        message: formData.description || "No additional message",
        material: "N/A",
        dimensions: "N/A",
        printing: "N/A",
        lamination: "N/A",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you shortly with your instant quote.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        products: "",
        description: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-xl w-full max-w-[460px] h-auto md:h-[450px]"
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-bold text-foreground mb-4">Get an Instant Quote</h3>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 text-sm"
                placeholder="Name"
              />
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-10 text-sm"
                placeholder="Email"
              />
            </div>

            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-10 text-sm"
              placeholder="+1 123-123-1234"
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                id="quantity"
                type="number"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="h-10 text-sm"
                placeholder="Quantity"
              />
              <Select
                value={formData.products}
                onValueChange={(value) => setFormData({ ...formData, products: value })}
              >
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Products" />
                </SelectTrigger>
                <SelectContent>
                  {customProducts ? (
                    customProducts.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))
                  ) : (
                    <>
                      <SelectItem value="custom-boxes">Custom Boxes</SelectItem>
                      <SelectItem value="mailer-boxes">Mailer Boxes</SelectItem>
                      <SelectItem value="display-boxes">Display Boxes</SelectItem>
                      <SelectItem value="rigid-boxes">Rigid Boxes</SelectItem>
                      <SelectItem value="apparel-boxes">Apparel Boxes</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="text-sm resize-none"
              rows={4}
              placeholder="Description"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-10 mt-4 disabled:opacity-50">
            {isSubmitting ? "Sending..." : "Submit Now"}
          </Button>
        </form>
      </div>
    </div>
  );
};
