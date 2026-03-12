import { useState } from "react";
import CreateQuizStep2 from "../../components/quiz/CreateQuizStep2";
import QuizHeader from "../../components/quiz/QuizHeader";
import StepProgress from "../../components/quiz/StepProgress";
import StepActions from "../../components/quiz/StepActions";

const TOTAL_STEPS = 2;

export default function QuizzesInstructer() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Published!");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <QuizHeader />

      <div className="flex flex-col gap-6">
        <StepProgress step={step} totalSteps={TOTAL_STEPS} />

        {step === 1 && <div>Step 1 content</div>}
        {step === 2 && <CreateQuizStep2 />}

        <StepActions step={step} totalSteps={TOTAL_STEPS} onNext={handleNext} />
      </div>
    </div>
  );
}
