import { ShoppingBag, Package, CreditCard, Smartphone, Database, Zap } from "lucide-react";

const integrations = [
  { name: "Shopify", icon: ShoppingBag, color: "bg-green-500" },
  { name: "WooCommerce", icon: ShoppingBag, color: "bg-purple-500" },
  { name: "Amazon", icon: Package, color: "bg-orange-500" },
  { name: "QuickBooks", icon: CreditCard, color: "bg-blue-500" },
  { name: "Square POS", icon: Smartphone, color: "bg-gray-800" },
  { name: "Salesforce", icon: Database, color: "bg-blue-400" },
  { name: "Stripe", icon: CreditCard, color: "bg-indigo-500" },
  { name: "Zapier", icon: Zap, color: "bg-orange-400" }
];

export const Integrations = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Seamless Integration with Your Favorite Tools
          </h3>
          <p className="text-muted-foreground">
            Connect BillGPT with the platforms you already use — setup takes minutes, not hours.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-10 h-10 rounded-lg ${integration.color} flex items-center justify-center group-hover:scale-110 transition-spring`}>
                <integration.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">{integration.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            + 50 more integrations available via API
          </p>
        </div>
      </div>
    </section>
  );
};
