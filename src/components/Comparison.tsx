import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "AI-Powered Predictions", billgpt: true, traditional: false, competitors: "Limited" },
  { feature: "Real-Time Multi-Store Sync", billgpt: true, traditional: false, competitors: true },
  { feature: "Automatic Demand Forecasting", billgpt: true, traditional: false, competitors: "Basic" },
  { feature: "Natural Language AI Assistant", billgpt: true, traditional: false, competitors: false },
  { feature: "Beautiful iOS-Level UI", billgpt: true, traditional: false, competitors: "Moderate" },
  { feature: "One-Click Integrations", billgpt: true, traditional: false, competitors: "Complex" },
  { feature: "Predictive Restocking Alerts", billgpt: true, traditional: false, competitors: "Manual" },
  { feature: "Advanced Analytics Dashboard", billgpt: true, traditional: "Basic", competitors: true },
  { feature: "24/7 Cloud Access", billgpt: true, traditional: false, competitors: true },
  { feature: "Free Plan Available", billgpt: true, traditional: false, competitors: "Limited" }
];

export const Comparison = () => {
  return (
    <section className="py-24 bg-muted/30" id="comparison">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">BillGPT</span> Leads the Market
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we outperform traditional systems and competitors in speed, intelligence, and automation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-2xl shadow-premium overflow-hidden">
              <thead>
                <tr className="gradient-primary text-white">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">BillGPT</th>
                  <th className="py-4 px-6 text-center font-semibold">Traditional Systems</th>
                  <th className="py-4 px-6 text-center font-semibold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-smooth"
                  >
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {row.billgpt === true ? (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">{row.billgpt}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {row.traditional === false ? (
                          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                            <X className="w-5 h-5 text-destructive" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">{row.traditional}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-muted-foreground text-sm">
                      {typeof row.competitors === "boolean" ? (
                        <div className="flex justify-center">
                          {row.competitors ? (
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="w-5 h-5 text-primary" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                              <X className="w-5 h-5 text-destructive" />
                            </div>
                          )}
                        </div>
                      ) : (
                        row.competitors
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
