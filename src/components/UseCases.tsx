import { Store, Package2, ShoppingCart, Truck, Building2, Warehouse } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.png";
import warehouseManagement from "@/assets/warehouse-management.png";

const useCases = [
  {
    icon: Store,
    industry: "Retail Stores",
    description: "Multi-location retailers reduce stockouts by 87% and improve customer satisfaction with real-time inventory tracking.",
    metrics: "87% fewer stockouts, 45% faster reordering"
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    description: "Online businesses sync inventory across all sales channels, preventing overselling and automating fulfillment workflows.",
    metrics: "99.9% order accuracy, 3x faster fulfillment"
  },
  {
    icon: Package2,
    industry: "Wholesale Distribution",
    description: "Distributors optimize stock levels with AI forecasting, reducing carrying costs while ensuring product availability.",
    metrics: "62% cost reduction, 40% better forecasting"
  },
  {
    icon: Warehouse,
    industry: "Manufacturing",
    description: "Manufacturers track raw materials and finished goods, automate reordering, and streamline production planning.",
    metrics: "50% less waste, 35% faster production cycles"
  },
  {
    icon: Building2,
    industry: "Healthcare",
    description: "Medical facilities maintain critical supply levels with automated alerts and compliance-ready inventory tracking.",
    metrics: "100% compliance, zero critical shortages"
  },
  {
    icon: Truck,
    industry: "Food & Beverage",
    description: "Restaurants and food businesses track perishables, reduce waste with expiration monitoring, and optimize ordering.",
    metrics: "73% less food waste, $40K annual savings"
  }
];

export const UseCases = () => {
  return (
    <section className="py-24" id="industries">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Across{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From retail to manufacturing, businesses of all types rely on BillGPT to optimize their inventory operations.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl gradient-card border border-border hover:border-primary/50 transition-smooth hover:shadow-premium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.industry}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{useCase.description}</p>
              <p className="text-sm text-primary font-medium">{useCase.metrics}</p>
            </div>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-border group">
            <img
              src={teamCollaboration}
              alt="Business team collaborating with BillGPT inventory analytics"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-1">Collaborative Decision Making</h4>
                <p className="text-sm text-muted-foreground">Real-time insights for your entire team</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-border group">
            <img
              src={warehouseManagement}
              alt="Warehouse inventory management with BillGPT mobile app"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold mb-1">On-the-Go Management</h4>
                <p className="text-sm text-muted-foreground">Access from anywhere, any device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
