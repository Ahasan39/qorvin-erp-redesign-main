import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import qorvinLogo from "@/assets/qorvin-logo.png";

const pricingPlans = [
  {
    id: 1,
    name: "Trial Period",
    duration: "15 Days",
    price: "Free",
    amount: 0,
    popular: false,
    description: "Try all features free for 15 days",
    features: [
      "Access to all modules",
      "Full feature access",
      "Email support",
      "No credit card required",
      "Cancel anytime"
    ]
  },
  {
    id: 2,
    name: "Monthly Plan",
    duration: "1 Month",
    price: "৳600",
    amount: 600,
    popular: false,
    description: "Perfect for getting started",
    features: [
      "All modules included",
      "Unlimited users",
      "Priority support",
      "Regular updates"
    ]
  },
  {
    id: 3,
    name: "Half-Yearly Plan",
    duration: "6 Months",
    price: "৳3,000",
    amount: 3000,
    popular: true,
    description: "Best value for growing businesses",
    savings: "Save ৳600",
    features: [
      "All modules included",
      "Unlimited users",
      "Premium support",
      "Priority feature requests"
    ]
  },
  {
    id: 4,
    name: "Yearly Plan",
    duration: "1 Year",
    price: "৳5,000",
    amount: 5000,
    popular: false,
    description: "Maximum savings for established businesses",
    savings: "Save ৳2,200",
    features: [
      "All modules included",
      "Unlimited users",
      "24/7 Premium support",
      "Priority feature requests"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={qorvinLogo} alt="Qorvin" className="h-8 sm:h-10 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/solutions" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Solutions
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
            <Link to="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <Link to="/" className="rounded-lg border border-primary/30 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-primary transition hover:bg-primary/10">
            Sign In
          </Link>
          <Link to="/sign-up" className="rounded-lg bg-primary px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. Start with a free trial and scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in flex flex-col h-full ${
                  plan.popular
                    ? "border-primary bg-card shadow-xl shadow-primary/20 scale-105"
                    : "border-border bg-card/80 hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-4 pb-6 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.amount > 0 && (
                        <span className="text-muted-foreground">/{plan.duration}</span>
                      )}
                    </div>
                    {plan.savings && (
                      <p className="text-sm font-medium text-green-600 mt-1">{plan.savings}</p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="py-6 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full transition-all duration-200 mt-auto ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.amount === 0 ? "Start Free Trial" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <p className="text-sm text-muted-foreground">
              All plans include access to our complete ERP suite with modules for Inventory, HR & Payroll, Accounting, CRM, and more.
            </p>
            <p className="text-sm text-muted-foreground">
              Need a custom plan? <Link to="/contact" className="text-primary font-medium hover:underline">Contact our sales team</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 mt-auto">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Qorvin It Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
