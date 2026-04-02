import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import qorvinLogo from "@/assets/qorvin-logo.png";
import { getWhatsAppLink, whatsAppMessages } from "@/lib/whatsapp";

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
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-transform hover:scale-105 z-50 px-1"
          >
            <img 
              src={qorvinLogo} 
              alt="Qorvin" 
              className="h-7 sm:h-9 lg:h-12 w-auto" 
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
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all"
            >
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Actions Header */}
          <div className="lg:hidden flex items-center gap-2 z-50">
            <a 
              href={getWhatsAppLink(whatsAppMessages.contact.support)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[3.5rem] bg-background/98 backdrop-blur-md animate-in slide-in-from-right duration-300 z-40">
          <div className="container mx-auto px-6 py-8 flex flex-col h-full overflow-y-auto pb-24">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Quick Menu</p>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-4 rounded-xl text-lg font-semibold transition-all active:scale-[0.98]",
                      isActivePath(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent border border-transparent"
                    )}
                    onClick={(e) => {
                      if (link.children && activeDropdown !== link.label) {
                        e.preventDefault();
                        setActiveDropdown(link.label);
                      }
                    }}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={cn(
                        "h-5 w-4 transition-transform",
                        activeDropdown === link.label && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Mobile Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-primary/20 pl-4 animate-in fade-in slide-in-from-left-2 duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-3 text-base text-muted-foreground hover:text-primary transition-colors border-b border-border last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Account Actions</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl border-primary/30 text-primary font-bold h-14"
                >
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl bg-primary text-primary-foreground font-bold h-14 shadow-lg shadow-primary/20"
                >
                  <Link to="/sign-up">Sign Up</Link>
                </Button>
              </div>
            </div>

            <div className="mt-auto py-8 text-center space-y-2">
              <p className="text-sm text-muted-foreground">Need immediate help?</p>
              <a href="tel:+8801842299275" className="text-xl font-black text-primary hover:underline">+8801842299275</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
