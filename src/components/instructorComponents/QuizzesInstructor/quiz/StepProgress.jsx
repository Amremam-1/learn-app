import { cn } from "../../../../utils/utils"

export default function StepProgress({ step, totalSteps }) {
  return (
    <>
      <p className="text-sm text-gray-600">
        Step {step} of {totalSteps}
      </p>

      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 flex-1 rounded-full transition-colors",
              step >= i + 1 ? "bg-primary" : "bg-gray/10"
            )}
          />
        ))}
      </div>
    </>
  )
}
