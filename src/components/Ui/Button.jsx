import { cn } from "../../utils/utils";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base = "px-6 py-2 rounded-md font-semibold text-sm transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-primaryHover",
    secondary:
      "bg-white border border-grayLight text-grayMedium hover:bg-background",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
