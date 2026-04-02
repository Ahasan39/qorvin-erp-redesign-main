import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md space-y-8 py-2">
      <div className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
        <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
        <p className="text-sm text-slate-500 font-medium">Access your business dashboard</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <Label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Email / Phone Number
          </Label>
          <Input
            id="email"
            type="text"
            placeholder="Enter email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          <Label htmlFor="password" className="text-sm font-semibold text-slate-800">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all duration-200"
          />
        </div>

        <div className="flex items-center justify-between opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer select-none">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Forgot password?
          </a>
        </div>

        <div className="pt-2 opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
          <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200" size="lg">
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
        <p className="text-sm text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-bold text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
