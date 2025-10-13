import { Cloud, Target, Palette, Link2, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Cloud,
    title: "24/7 Cloud Access",
    description: "Access your inventory data anytime, anywhere, from any device with secure cloud infrastructure."
  },
  {
    icon: Target,
    title: "Predictive Accuracy",
    description: "Our AI models achieve 95%+ accuracy in demand forecasting, ensuring optimal stock levels."
  },
  {
    icon: Palette,
    title: "Beautiful iOS-Level UI",
    description: "Experience a stunning, intuitive interface designed with Apple's precision and elegance."
  },
  {
    icon: Link2,
    title: "Easy Integration",
    description: "Connect with your existing tools in minutes — Shopify, WooCommerce, QuickBooks, and more."
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with encryption, compliance, and infrastructure that grows with you."
  },
  {
    icon: Users,
    title: "Trusted by Businesses",
    description: "Join thousands of businesses worldwide who trust BillGPT to manage their inventory intelligently."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30" id="resources">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses Choose{" "}
            <span className="text-gradient">BillGPT</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with cutting-edge technology and designed for exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-card transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto shadow-glow">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
