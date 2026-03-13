import { cn } from "../../../../utils/utils";

export default function StepProgress({ step, totalSteps }) {

  return (
    <div className="flex gap-2">

      {[...Array(totalSteps)].map((_, index) => {

        const isActive = index + 1 <= step;

        return (
          <span
            key={index}
            className={cn(
              "w-full h-1 block rounded-xl transition-all duration-300",
              isActive ? "bg-primary" : "bg-borderInput"
            )}
          />
        );
      })}

    </div>
  );
}