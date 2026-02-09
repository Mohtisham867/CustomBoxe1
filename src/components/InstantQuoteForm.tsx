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
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export const InstantQuoteForm = () => {
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
      // Prepare template parameters for small form
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
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg sticky top-24">
      <h3 className="text-2xl font-bold text-foreground mb-4">Get an Instant Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="name" className="text-sm">Name *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 h-11"
              placeholder="Name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 h-11"
              placeholder="Email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 h-11"
            placeholder="+1 123-123-1234"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="quantity" className="text-sm">Quantity *</Label>
            <Input
              id="quantity"
              type="number"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="mt-1 h-11"
              placeholder="Quantity"
            />
          </div>

          <div>
            <Label htmlFor="products" className="text-sm">Products *</Label>
            <Select
              value={formData.products}
              onValueChange={(value) => setFormData({ ...formData, products: value })}
            >
              <SelectTrigger className="mt-1 h-9">
                <SelectValue placeholder="Select Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom-boxes">Custom Boxes</SelectItem>
                <SelectItem value="mailer-boxes">Mailer Boxes</SelectItem>
                <SelectItem value="display-boxes">Display Boxes</SelectItem>
                <SelectItem value="rigid-boxes">Rigid Boxes</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-sm">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 text-sm"
            rows={2}
            placeholder="Description"
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full h-10 disabled:opacity-50">
          {isSubmitting ? "Sending..." : "Submit Now"}
        </Button>
      </form>
    </div>
  );
};
