import {
  Package, Users, Calculator, UserCheck, UtensilsCrossed, Hotel,
  Stethoscope, Pill, Monitor, GraduationCap, Truck, Building2,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail,
  CheckCircle2, Zap, Shield, Headphones, Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ModuleCard from "@/components/ModuleCard";
import SignInForm from "@/components/SignInForm";
import Navbar from "@/components/Navbar";
import { getWhatsAppLink, whatsAppMessages } from "@/lib/whatsapp";

const modules = [
  { icon: Package, label: "Inventory" },
  { icon: Users, label: "HR & Payroll" },
  { icon: Calculator, label: "Accounting" },
  { icon: UserCheck, label: "CRM" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Hotel, label: "Hotel" },
  { icon: Stethoscope, label: "Hospital" },
  { icon: Pill, label: "Pharmacy" },
  { icon: Monitor, label: "POS" },
  { icon: GraduationCap, label: "School & College" },
  { icon: Truck, label: "Courier" },
  { icon: Building2, label: "ERP" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures your business operations run smoothly without any delays.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-level security with encrypted data storage and regular automated backups.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you succeed.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: CheckCircle2,
    title: "Easy to Use",
    description: "Intuitive interface designed for users of all technical skill levels.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];


const testimonials = [
  {
    name: "Ahmed Rahman",
    company: "Rahman Electronics",
    role: "Owner",
    image: "👤",
    rating: 5,
    text: "Qorvin IT ERP has transformed our business operations. Inventory management is now a breeze, and our sales have increased by 35%!",
  },
  {
    name: "Fatima Khatun",
    company: "Green Valley Restaurant",
    role: "Manager",
    image: "👤",
    rating: 5,
    text: "The restaurant management system is incredible. Order processing is faster, and our customers are happier than ever.",
  },
  {
    name: "Kamal Hossain",
    company: "City Hospital",
    role: "Administrator",
    image: "👤",
    rating: 5,
    text: "Patient management has never been easier. The system is reliable, secure, and the support team is outstanding!",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Sign Up Free",
    description: "Start your 15-day free trial. No credit card required.",
  },
  {
    step: "2",
    title: "Setup Your Business",
    description: "Our team helps you configure the system for your needs.",
  },
  {
    step: "3",
    title: "Start Growing",
    description: "Begin managing your business efficiently from day one.",
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

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 pt-10 pb-5 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  All-in-One Business
                  <span className="block text-primary">Software Solutions</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Streamline your operations with our comprehensive ERP system. From inventory to HR, accounting to CRM - manage everything in one place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
                  <Link to="/solutions">View All Solutions</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-sm">
                      👤
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">500+ Businesses</div>
                  <div>Trust Qorvin IT</div>
                </div>
              </div>
            </div>

            {/* Right - Modules Grid */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                {modules.map((mod, i) => (
                  <ModuleCard key={mod.label} icon={mod.icon} label={mod.label} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sign In Section */}
      <section className="px-4 pt-5 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits for Existing Users */}
            <div className="space-y-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Already a <span className="text-primary">Customer</span>?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Sign in to access your dashboard and manage your business operations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Access All Modules</h3>
                    <p className="text-sm text-muted-foreground">Manage inventory, HR, accounting, and more from one place</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Real-Time Data</h3>
                    <p className="text-sm text-muted-foreground">Get instant insights into your business performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Secure Access</h3>
                    <p className="text-sm text-muted-foreground">Your data is protected with bank-level security</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Need help? <a href={getWhatsAppLink(whatsAppMessages.contact.support)} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Contact Support</a>
                </p>
              </div>
            </div>

            {/* Right - Sign In Form */}
            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500">
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-10 sm:py-16 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Why Choose <span className="text-primary">Qorvin IT</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help your business grow faster and operate more efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-10 sm:py-16 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Get Started in <span className="text-primary italic">3 Simple Steps</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start your journey to better business management today with our streamlined onboarding process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className="group relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5 hover:bg-card/80 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 group-hover:scale-110">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-1">
                  {item.description}
                </p>

                {/* Desktop Connector */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-[44%] -right-4 w-8 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                
                {/* Mobile Connector */}
                {index < howItWorks.length - 1 && (
                  <div className="md:hidden absolute left-12 -bottom-6 w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied businesses using Qorvin IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Start your 15-day free trial today. No credit card required. Get full access to all features.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/30">
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

            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>15-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 pt-8 pb-24 sm:pb-8 sm:px-6 lg:px-12">
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

export default Index;
