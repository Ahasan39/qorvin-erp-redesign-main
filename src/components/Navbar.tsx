import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import qorvinLogo from "@/assets/qorvin-logo.png";

interface NavLinkItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navLinks: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { 
    label: "Solutions", 
    href: "/solutions",
    children: [
      { label: "Inventory", href: "/solutions/inventory", description: "Manage stock & warehouse" },
      { label: "HR & Payroll", href: "/solutions/hr", description: "Employee management" },
      { label: "Accounting", href: "/solutions/accounting", description: "Financial management" },
      { label: "CRM", href: "/solutions/crm", description: "Customer relations" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActivePath = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-transform hover:scale-105 z-50"
          >
            <img 
              src={qorvinLogo} 
              alt="Qorvin" 
              className="h-8 sm:h-10 lg:h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors relative py-2",
                    isActivePath(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === link.label && "rotate-180"
                    )} />
                  )}
                  {isActivePath(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="font-medium text-sm text-foreground">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <Link to="/">Sign In</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all"
            >
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md border-t border-border animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-6 h-full overflow-y-auto">
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActivePath(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                    onClick={(e) => {
                      if (link.children) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.label ? null : link.label);
                      }
                    }}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === link.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Mobile Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary/20 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 px-4 pt-6 border-t border-border">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-primary/30 text-primary hover:bg-primary/10"
              >
                <Link to="/">Sign In</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
