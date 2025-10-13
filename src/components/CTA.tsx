import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Join 10,000+ Businesses Already Using BillGPT</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Experience the Future of{" "}
            <span className="text-gradient">Inventory Management</span> Today
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't let outdated systems hold your business back. Start your free trial and discover 
            how AI-powered intelligence can transform your inventory management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white px-8 py-6 text-lg rounded-xl shadow-glow hover:scale-105 transition-spring group animate-glow"
            >
              Start Free Trial — No Credit Card
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary transition-smooth"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            ✓ 14-day free trial &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
