import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/dashboard-laptop.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Revolutionize Your Inventory{" "}
            <span className="text-gradient">with Intelligent AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BillGPT uses cutting-edge predictive intelligence to automate restocking, forecast demand, 
            and deliver actionable insights — saving you time, reducing costs, and empowering smarter business decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8 py-6 text-lg rounded-xl shadow-glow hover:scale-105 transition-spring group"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary transition-smooth"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-3xl font-bold">87%</span>
              </div>
              <p className="text-sm text-muted-foreground">Reduction in Stockouts</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <DollarSign className="w-5 h-5" />
                <span className="text-3xl font-bold">$127K</span>
              </div>
              <p className="text-sm text-muted-foreground">Avg. Annual Savings</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-3xl font-bold">15hrs</span>
              </div>
              <p className="text-sm text-muted-foreground">Saved Per Week</p>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative mt-16 animate-fade-in-slow">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
            <img
              src={heroDashboard}
              alt="BillGPT AI-Powered Inventory Management Dashboard"
              className="relative rounded-2xl shadow-premium border border-border/50 w-full max-w-5xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
