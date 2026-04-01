import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  icon: LucideIcon;
  label: string;
  index?: number;
}

const ModuleCard = ({ icon: Icon, label, index = 0 }: ModuleCardProps) => {
  return (
    <div
      className="group flex flex-col items-center gap-1.5 sm:gap-2 rounded-lg border border-border bg-card/50 p-2.5 sm:p-4 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "forwards" }}
    >
      <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(221,83%,53%,0.4)]" />
      <span className="text-[10px] sm:text-xs font-medium text-foreground/80 text-center leading-tight transition-colors duration-200 group-hover:text-foreground">{label}</span>
    </div>
  );
};

export default ModuleCard;
