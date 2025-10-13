import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, DollarSign, Clock, Package } from "lucide-react";

export const ROICalculator = () => {
  const [revenue, setRevenue] = useState("500000");
  const [employees, setEmployees] = useState("5");

  const calculateROI = () => {
    const annualRevenue = parseInt(revenue) || 0;
    const timeSaved = parseInt(employees) * 15; // 15 hours per employee per week
    const costReduction = annualRevenue * 0.08; // 8% average cost reduction
    const totalSavings = Math.round(costReduction + (timeSaved * 52 * 25)); // $25/hour rate

    return {
      timeSaved,
      costReduction: Math.round(costReduction),
      totalSavings
    };
  };

  const roi = calculateROI();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Form */}
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Calculate Your{" "}
                  <span className="text-gradient">Potential ROI</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how much time and money BillGPT could save your business annually.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-2xl gradient-card border border-border">
                <div>
                  <Label htmlFor="revenue" className="text-base mb-2 block">
                    Annual Revenue ($)
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="text-lg"
                    placeholder="500000"
                  />
                </div>

                <div>
                  <Label htmlFor="employees" className="text-base mb-2 block">
                    Number of Employees Managing Inventory
                  </Label>
                  <Input
                    id="employees"
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                    className="text-lg"
                    placeholder="5"
                  />
                </div>

                <Button className="w-full gradient-primary text-white text-lg py-6 rounded-xl hover:scale-105 transition-spring">
                  Get Your Custom ROI Report
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="p-8 rounded-2xl gradient-card border-2 border-primary shadow-glow animate-scale-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Annual Savings</p>
                    <p className="text-4xl font-bold text-gradient">
                      ${roi.totalSavings.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on industry averages and typical BillGPT customer results
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl gradient-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{roi.timeSaved}hrs</p>
                  <p className="text-sm text-muted-foreground">Saved Weekly</p>
                </div>

                <div className="p-6 rounded-xl gradient-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold mb-1">87%</p>
                  <p className="text-sm text-muted-foreground">Fewer Stockouts</p>
                </div>

                <div className="p-6 rounded-xl gradient-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold mb-1">95%</p>
                  <p className="text-sm text-muted-foreground">Forecast Accuracy</p>
                </div>

                <div className="p-6 rounded-xl gradient-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold mb-1">${Math.round(roi.costReduction / 1000)}K</p>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
