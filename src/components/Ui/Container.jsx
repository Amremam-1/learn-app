import { cn } from "../../utils/utils"

export default function Container({ children, className }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  )
}
