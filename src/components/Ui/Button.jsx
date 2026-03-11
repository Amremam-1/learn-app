import { cn } from "../../utils/utils"

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base = "px-6 py-3 rounded-xl font-medium transition"

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white border border-grayLight",
    three: "bg-three text-textCo",
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
