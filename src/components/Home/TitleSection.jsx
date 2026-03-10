import { cn } from "../../utils/utils"

const TitleSection = ({ label, title, className }) => {
  return (
    <div className={cn("space-y-2 mb-12", className)}>
      <p className="text-primary text-sm font-semibold uppercase tracking-widest">
        {label}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-textCo">{title}</h2>
    </div>
  )
}

export default TitleSection
