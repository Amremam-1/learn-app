import Button from "../../../Ui/Button";

export default function FormButtons({
    step,
    totalSteps,
    handleNext,
    handleCancel
}) {

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between mt-5 space-y-2 box-border">

            <Button
                onClick={handleCancel}
                className="w-full lg:w-[15%] bg-bgLight text-dark border border-borderInput justify-center"
            >
                {step === 1 ? "Cancel" : "Back"}
            </Button>

            <Button
                onClick={handleNext}
                className="w-full lg:w-[15%]"
            >
                {step === totalSteps ? "Finish" : "Next"}
            </Button>

        </div>
    );
}