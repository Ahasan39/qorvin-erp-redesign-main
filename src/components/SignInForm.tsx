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
    <div className="w-full max-w-md space-y-6">
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <h2 className="text-2xl font-bold text-foreground">Sign In</h2>
        <p className="mt-1 text-sm text-muted-foreground">Access your business dashboard</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Label htmlFor="email">Email / Phone Number</Label>
          <Input
            id="email"
            type="text"
            placeholder="Enter email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10"
          />
        </div>

        <div className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="transition-all duration-200 focus:shadow-md focus:shadow-primary/10"
          />
        </div>

        <div className="flex items-center justify-between opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <Button type="submit" className="w-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]" size="lg">
            Sign In
          </Button>
        </div>
      </form>

      <p className="text-center text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
