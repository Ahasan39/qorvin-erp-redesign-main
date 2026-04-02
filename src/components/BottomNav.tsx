import { Home, LayoutGrid, CreditCard, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: LayoutGrid, label: "Solutions", path: "/solutions" },
    { icon: CreditCard, label: "Pricing", path: "/pricing" },
    { icon: User, label: "Me", path: "/sign-in" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-lg border-t border-border px-4 py-2 flex items-center justify-around pb-safe">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "flex flex-col items-center justify-center gap-1 transition-all duration-300 min-w-[64px]",
            isActive(item.path) 
              ? "text-primary scale-110" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <div className={cn(
            "p-1.5 rounded-xl transition-colors",
            isActive(item.path) ? "bg-primary/10" : "bg-transparent"
          )}>
            <item.icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
