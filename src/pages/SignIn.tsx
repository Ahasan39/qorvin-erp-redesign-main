import {
  Package, Users, Calculator, UserCheck, UtensilsCrossed, Hotel,
  Stethoscope, Pill, Monitor, GraduationCap, Truck, Building2,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail,
} from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Navbar from "@/components/Navbar";
import SignInForm from "@/components/SignInForm";

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

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left - Modules */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in hidden lg:block">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Manage Your Business
                <span className="block text-primary">Effortlessly</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg max-w-xl">
                Sign in to access your modules and keep your business running smoothly with Qorvin IT ERP.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
              {modules.map((mod, i) => (
                <ModuleCard key={mod.label} icon={mod.icon} label={mod.label} index={i} />
              ))}
            </div>
          </div>

          {/* Right - Sign In Form */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-5 sm:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 pt-8 pb-24 sm:pb-8 sm:px-6 lg:px-12 mt-auto">
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

export default SignIn;
