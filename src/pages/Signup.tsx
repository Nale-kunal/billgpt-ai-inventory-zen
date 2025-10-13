import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, ChevronLeft, Sparkles, TrendingUp, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const signupSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(100),
  confirmPassword: z.string(),
  companyName: z.string().max(100).optional(),
  plan: z.string(),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const [formData, setFormData] = useState<Partial<SignupFormData>>({
    plan: "free",
    terms: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof SignupFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = signupSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Account created successfully!", {
        description: "Welcome to AI Inventory System",
      });
      
      console.log("Form submitted:", validatedData);
      // Here you would typically make an API call to create the account
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof SignupFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof SignupFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form for errors");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full gradient-light dark:gradient-dark transition-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">Back to Home</span>
            </Link>
          </div>
          
          <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BillGPT
            </span>
          </Link>
          
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 animate-fade-in">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Join the Future
                </h1>
                <p className="text-muted-foreground text-lg">
                  AI-powered inventory management starts here
                </p>
              </div>

              <div className="glass rounded-2xl shadow-premium border border-border/50 p-8 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName || ""}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="transition-smooth focus:shadow-glow"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="transition-smooth focus:shadow-glow"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password || ""}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="transition-smooth focus:shadow-glow"
                    />
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword || ""}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="transition-smooth focus:shadow-glow"
                    />
                    {errors.confirmPassword && (
                      <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name (Optional)</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company"
                      value={formData.companyName || ""}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="transition-smooth focus:shadow-glow"
                    />
                  </div>

                  {/* Plan Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="plan">Select Plan</Label>
                    <Select
                      value={formData.plan}
                      onValueChange={(value) => handleInputChange("plan", value)}
                    >
                      <SelectTrigger className="transition-smooth focus:shadow-glow">
                        <SelectValue placeholder="Choose a plan" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="basic">Basic - $29/mo</SelectItem>
                        <SelectItem value="pro">Pro - $99/mo</SelectItem>
                        <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {errors.terms && (
                    <p className="text-sm text-destructive">{errors.terms}</p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-semibold shadow-premium hover:shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-primary font-semibold hover:underline transition-smooth"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </div>

              {/* AI Tagline */}
              <div className="mt-6 text-center flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Empowered by AI predictions — Smarter inventory starts here</span>
              </div>
            </div>

            {/* Right Side - Visual Illustration */}
            <div className="hidden lg:block animate-fade-in-up">
              <div className="relative">
                {/* Floating AI Dashboard Preview */}
                <div className="glass rounded-3xl shadow-premium border border-border/50 p-8 backdrop-blur-xl animate-float">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow animate-glow">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">AI Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Real-time predictions</p>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-card rounded-xl p-4 border border-border shadow-card">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-xs text-muted-foreground">Sales Forecast</span>
                        </div>
                        <p className="text-2xl font-bold">+24%</p>
                      </div>
                      
                      <div className="bg-card rounded-xl p-4 border border-border shadow-card">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-accent" />
                          <span className="text-xs text-muted-foreground">AI Accuracy</span>
                        </div>
                        <p className="text-2xl font-bold">98.5%</p>
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium">Inventory Optimization</span>
                        <span className="text-xs text-primary">Live</span>
                      </div>
                      <div className="h-32 flex items-end justify-between gap-2">
                        {[40, 70, 45, 80, 60, 90, 65].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-card rounded-xl p-4 border border-border shadow-card">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium mb-1">AI Insight</p>
                          <p className="text-xs text-muted-foreground">
                            Stock levels optimal. Predicted demand increase next week.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 gradient-primary rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass border-t border-border/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 AI Inventory System. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/help" className="hover:text-primary transition-smooth">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
