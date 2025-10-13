import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 100 products",
      "Basic inventory tracking",
      "1 store location",
      "Email support",
      "Mobile app access"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "For small businesses",
    features: [
      "Up to 1,000 products",
      "AI-powered predictions",
      "3 store locations",
      "Priority email support",
      "Basic analytics dashboard",
      "POS integration"
    ],
    cta: "Start 14-Day Trial",
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "For growing businesses",
    features: [
      "Up to 10,000 products",
      "Advanced AI forecasting",
      "10 store locations",
      "24/7 priority support",
      "Advanced analytics & reports",
      "All integrations included",
      "Multi-store synchronization",
      "Voice & chat AI assistant",
      "Custom alerts & notifications"
    ],
    cta: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "per month",
    description: "For large organizations",
    features: [
      "Unlimited products",
      "Enterprise AI models",
      "Unlimited store locations",
      "Dedicated account manager",
      "White-label options",
      "Custom integrations",
      "API access",
      "Advanced security features",
      "Custom training & onboarding",
      "SLA guarantee"
    ],
    cta: "Contact Sales",
    popular: false
  },
  {
    name: "Custom",
    price: "Let's Talk",
    period: "",
    description: "Tailored to your needs",
    features: [
      "Everything in Enterprise",
      "Custom feature development",
      "Dedicated infrastructure",
      "Advanced compliance tools",
      "Custom AI model training",
      "Priority feature requests"
    ],
    cta: "Contact Us",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl gradient-card border transition-smooth hover:shadow-premium animate-scale-in group ${
                plan.popular 
                  ? "border-primary shadow-glow scale-105" 
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl transition-spring ${
                  plan.popular
                    ? "gradient-primary text-white hover:scale-105"
                    : "border-2 border-border hover:border-primary"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
