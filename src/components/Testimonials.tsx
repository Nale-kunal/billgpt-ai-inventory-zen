import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, RetailPro Inc.",
    company: "Multi-location retail chain",
    content: "BillGPT's AI predictions have been a game-changer. We reduced stockouts by 87% and cut excess inventory costs by 62% in just three months. The ROI is incredible.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "TechGear Distribution",
    content: "The speed and accuracy of the forecasting is unmatched. What used to take our team days now happens automatically. The interface is beautiful and incredibly intuitive.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Boutique Fashion Co.",
    content: "As a small business owner, I was skeptical about AI. BillGPT proved me wrong — it's like having a data scientist on my team. The insights help me make confident decisions daily.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Park",
    role: "Supply Chain Director",
    company: "Global Manufacturing Ltd.",
    content: "We manage inventory across 15 locations. BillGPT's multi-store synchronization and predictive alerts have streamlined our entire operation. Customer support is outstanding too.",
    rating: 5,
    avatar: "DP"
  },
  {
    name: "Lisa Thompson",
    role: "E-commerce Manager",
    company: "HomeGoods Online",
    content: "The integration with our Shopify store was seamless. Sales trend analysis helps us understand customer behavior better than ever. Highly recommend for any online business.",
    rating: 5,
    avatar: "LT"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="text-gradient">Thousands</span> of Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers say about their experience with BillGPT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl gradient-card border border-border shadow-premium">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{current.content}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                {current.avatar}
              </div>
              <div>
                <div className="font-semibold text-lg">{current.name}</div>
                <div className="text-sm text-muted-foreground">{current.role}</div>
                <div className="text-sm text-muted-foreground">{current.company}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full hover:border-primary transition-smooth"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex ? "bg-primary w-8" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full hover:border-primary transition-smooth"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
