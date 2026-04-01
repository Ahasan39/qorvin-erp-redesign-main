import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import qorvinLogo from "@/assets/qorvin-logo.png";

const pricingData = [
  { sn: 1, name: "Free Package", type: "N/A", duration: "15 Days", amount: "0", note: "which is free for 15 days" },
  { sn: 2, name: "HR & Account", type: "Monthly", duration: "1 Month", amount: "200" },
  { sn: 3, name: "Inventory & Account", type: "Monthly", duration: "1 Month", amount: "200" },
  { sn: 4, name: "Inventory & HR", type: "Monthly", duration: "1 Month", amount: "200" },
  { sn: 5, name: "Only Inventory", type: "Monthly", duration: "1 Month", amount: "100" },
  { sn: 6, name: "Only Account", type: "Monthly", duration: "1 Month", amount: "100" },
  { sn: 7, name: "Only HR", type: "Monthly", duration: "1 Month", amount: "100" },
  { sn: 8, name: "General", type: "Monthly", duration: "1 Month", amount: "500" },
];

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      {/* Header */}
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
            <Link to="/pricing" className="text-sm font-medium text-primary">
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
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Package Management</h1>
              <p className="text-muted-foreground">Manage and view all available business software packages.</p>
            </div>
            <Button size="lg" className="shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
              Create New Package
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show</span>
                <select className="h-9 w-16 rounded-md border border-input bg-background px-1 text-sm outline-none focus:ring-1 focus:ring-primary">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="text-sm text-muted-foreground">entries</span>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search packages..." className="pl-9 bg-background/50" />
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border bg-background/30">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[80px] font-bold">SN.</TableHead>
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Type</TableHead>
                    <TableHead className="font-bold">Duration</TableHead>
                    <TableHead className="font-bold">Amount</TableHead>
                    <TableHead className="text-right font-bold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((pkg) => (
                    <TableRow key={pkg.sn} className="group transition-colors hover:bg-muted/30">
                      <TableCell className="font-medium">{pkg.sn}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {pkg.name}
                          </span>
                          {pkg.note && (
                            <span className="text-xs text-muted-foreground italic">
                              {pkg.note}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{pkg.type}</TableCell>
                      <TableCell>{pkg.duration}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          ৳{pkg.amount}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary transition-all">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
              <p>Showing 1 to 8 of 8 entries</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 mt-auto">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Qorvin It Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
