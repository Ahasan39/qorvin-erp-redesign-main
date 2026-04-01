import {
  Package, Users, Calculator, UserCheck, UtensilsCrossed, Hotel,
  Stethoscope, Pill, Monitor, GraduationCap, Truck, Building2,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import ModuleCard from "@/components/ModuleCard";
import SignInForm from "@/components/SignInForm";
import qorvinLogo from "@/assets/qorvin-logo.png";

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
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
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
      <main className="flex flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Modules */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                All-in-One Business
                <span className="block text-primary">Software Solutions</span>
              </h1>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
                We provide all kinds of business software to streamline your operations.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {modules.map((mod, i) => (
                <ModuleCard key={mod.label} icon={mod.icon} label={mod.label} index={i} />
              ))}
            </div>
          </div>

          {/* Right - Sign In */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-5 sm:p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
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
