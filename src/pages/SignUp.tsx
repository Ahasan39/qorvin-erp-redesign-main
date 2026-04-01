import { useState } from "react";
import {
  Package, Users, Calculator, UserCheck, UtensilsCrossed, Hotel,
  Stethoscope, Pill, Monitor, GraduationCap, Truck, Building2,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ModuleCard from "@/components/ModuleCard";
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

const businessTypes = [
  "Retail", "Restaurant", "Hotel", "Hospital", "Pharmacy",
  "School", "Courier", "Manufacturing", "Other",
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-16 items-start">
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

          {/* Right - Sign Up Form */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-5 sm:p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="space-y-6">
                <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <h2 className="text-2xl font-bold text-foreground">Sign Up Your Business Now!</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Create your account to get started</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" type="text" placeholder="Enter Your Business Name" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
                    <div className="space-y-2">
                      <Label htmlFor="signupEmail">Email</Label>
                      <Input id="signupEmail" type="email" placeholder="example@gmail.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select value={formData.businessType} onValueChange={(v) => handleChange("businessType", v)}>
                        <SelectTrigger className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10">
                          <SelectValue placeholder="Select Business Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
                    <div className="space-y-2">
                      <Label htmlFor="signupPassword">Password</Label>
                      <Input id="signupPassword" type="password" placeholder="Enter Password" value={formData.password} onChange={(e) => handleChange("password", e.target.value)} className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                      I read and agree to <a href="#" className="text-primary hover:underline">Terms & Conditions</a>
                    </label>
                  </div>

                  <div className="opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
                    <Button type="submit" className="w-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]" size="lg">
                      Sign Up
                    </Button>
                  </div>
                </form>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/" className="text-primary hover:underline">Sign In</Link>
                </p>
              </div>
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

export default SignUp;
