import Button from "../../Ui/Button";
import { TfiArrowRight } from "react-icons/tfi";

export default function StepActions({ step, totalSteps, onNext }) {
  const isLastStep = step === totalSteps;

  return (
    <div className="flex justify-between gap-4 mt-6">
      <Button variant="secondary">
        {step === 1 ? "Cancel" : "Save as Draft"}
      </Button>

      <Button
        variant="primary"
        className="hover:bg-primaryHover flex items-center gap-2 group"
        onClick={onNext}
      >
        {isLastStep ? (
          <>
            Publish
            <TfiArrowRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </>
        ) : (
          "Next"
        )}
      </Button>
    </div>
  );
}
