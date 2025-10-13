import { Shield, Award, Lock, Zap, Globe, HeadphonesIcon } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Certified",
    description: "Enterprise-grade security"
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Your data is protected"
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Reliable & always available"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time synchronization"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Used in 50+ countries"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We're always here to help"
  }
];

export const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
