import { cn } from "../../utils/utils";

export default function HoverCard({ children, className, tabIndex }) {
  return (
    <div className={cn("relative group", className)} tabIndex={tabIndex}>
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-xl border-2 border-brandBlue shadow-[0_6px_18px_rgba(47,128,237,0.08)] opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
