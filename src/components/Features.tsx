import { Brain, TrendingUp, Package, Bell, BarChart3, Zap, Cloud, MessageSquare, ShoppingBag, Repeat } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Restocking Predictions",
    description: "AI analyzes patterns and automatically predicts when to restock, preventing stockouts and overstock situations."
  },
  {
    icon: TrendingUp,
    title: "Sales Trend Analysis",
    description: "Identify emerging trends and seasonal patterns to optimize your inventory strategy and maximize profits."
  },
  {
    icon: Zap,
    title: "Fastest-Selling Product Insights",
    description: "Real-time insights into your best performers help you focus on what drives revenue."
  },
  {
    icon: BarChart3,
    title: "Automatic Demand Forecasting",
    description: "Machine learning models predict future demand with stunning accuracy, reducing waste and improving cash flow."
  },
  {
    icon: Package,
    title: "Real-Time Inventory Tracking",
    description: "Monitor stock levels across all locations instantly with synchronized, cloud-based tracking."
  },
  {
    icon: Bell,
    title: "AI-Powered Alerts & Recommendations",
    description: "Receive intelligent notifications and actionable recommendations to stay ahead of inventory challenges."
  },
  {
    icon: Repeat,
    title: "Multi-Store Synchronization",
    description: "Seamlessly manage inventory across multiple locations with automatic synchronization and centralized control."
  },
  {
    icon: BarChart3,
    title: "Data Visualization Dashboard",
    description: "Beautiful, intuitive charts and graphs transform complex data into clear, actionable insights."
  },
  {
    icon: ShoppingBag,
    title: "POS & E-commerce Integration",
    description: "Connect with Shopify, WooCommerce, and leading POS systems for unified inventory management."
  },
  {
    icon: MessageSquare,
    title: "Voice & Chat AI Assistant",
    description: "Ask questions and get instant answers about your inventory using natural language — no complex queries needed."
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Features That{" "}
            <span className="text-gradient">Transform Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the next generation of inventory management with intelligent automation and predictive analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl gradient-card border border-border hover:border-primary/50 transition-smooth hover:shadow-premium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
