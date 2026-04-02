import { Link } from "react-router-dom";
import {
  Package, Users, Calculator, UserCheck, UtensilsCrossed, Hotel,
  Stethoscope, Pill, Monitor, GraduationCap, Truck, Building2,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { getWhatsAppLink, whatsAppMessages } from "@/lib/whatsapp";

const solutions = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Complete stock control with real-time tracking, automated reordering, and warehouse management.",
    features: ["Stock tracking", "Barcode scanning", "Low stock alerts", "Multi-warehouse"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/solutions/inventory",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description: "Streamline employee management, attendance tracking, payroll processing, and leave management.",
    features: ["Employee records", "Attendance", "Payroll automation", "Leave tracking"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/solutions/hr",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Complete financial management with invoicing, expense tracking, and comprehensive reporting.",
    features: ["Invoicing", "Expense tracking", "Financial reports", "Tax management"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    href: "/solutions/accounting",
  },
  {
    icon: UserCheck,
    title: "CRM",
    description: "Build stronger customer relationships with contact management, sales tracking, and analytics.",
    features: ["Contact management", "Sales pipeline", "Lead tracking", "Customer analytics"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/solutions/crm",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Management",
    description: "Table management, order processing, kitchen display, and menu management for restaurants.",
    features: ["Table booking", "Order management", "Kitchen display", "Menu control"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/solutions/restaurant",
  },
  {
    icon: Hotel,
    title: "Hotel Management",
    description: "Room booking, guest management, housekeeping, and billing for hospitality businesses.",
    features: ["Room booking", "Guest check-in", "Housekeeping", "Billing"],
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    href: "/solutions/hotel",
  },
  {
    icon: Stethoscope,
    title: "Hospital Management",
    description: "Patient records, appointment scheduling, billing, and pharmacy integration for healthcare.",
    features: ["Patient records", "Appointments", "Billing", "Pharmacy"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/solutions/hospital",
  },
  {
    icon: Pill,
    title: "Pharmacy Management",
    description: "Medicine inventory, prescription management, billing, and expiry tracking for pharmacies.",
    features: ["Medicine stock", "Prescriptions", "Expiry alerts", "Billing"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    href: "/solutions/pharmacy",
  },
  {
    icon: Monitor,
    title: "Point of Sale (POS)",
    description: "Fast checkout, inventory sync, multiple payment methods, and sales reporting for retail.",
    features: ["Quick checkout", "Payment methods", "Sales reports", "Receipt printing"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/solutions/pos",
  },
  {
    icon: GraduationCap,
    title: "School & College",
    description: "Student management, attendance, grading, fee collection, and parent communication.",
    features: ["Student records", "Attendance", "Grading", "Fee management"],
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    href: "/solutions/school",
  },
  {
    icon: Truck,
    title: "Courier Management",
    description: "Parcel tracking, delivery management, route optimization, and customer notifications.",
    features: ["Parcel tracking", "Delivery routes", "SMS alerts", "Proof of delivery"],
    color: "text-lime-500",
    bgColor: "bg-lime-500/10",
    href: "/solutions/courier",
  },
  {
    icon: Building2,
    title: "Complete ERP",
    description: "All-in-one enterprise solution integrating all modules for comprehensive business management.",
    features: ["All modules", "Custom workflows", "Advanced reports", "API integration"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: "/solutions/erp",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Mail, href: "#" },
];

const Solutions = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business management solutions tailored for every industry.
              Choose the module that fits your business needs or get them all with our complete ERP.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
              >
                <div className={`w-14 h-14 ${solution.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`h-7 w-7 ${solution.color}`} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>

                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary"
                >
                  <Link to={solution.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Not Sure Which Solution You Need?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with our free trial and explore all modules. Our team will help you choose the perfect setup for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a
                  href={getWhatsAppLink(whatsAppMessages.pricing.trial)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-12 mt-auto">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <span>Support: info@qorvinit.com</span>
            <span>Help Line: +8801842299275</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Connect:</span>
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="text-muted-foreground transition hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Copyright © 2022 to 2024 Qorvin It Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
