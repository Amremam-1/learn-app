import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { examSchema } from "../utils/validation/courseValidation";

export default function useExamForm() {

    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(examSchema),
        defaultValues: {
            examTitle: "",
            course: "",
            stage: "",
            level: "",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Exam Data:", data);
    };

    const handleNext = async () => {

        const step1Fields = [
            "examTitle",
            "course",
            "stage",
            "level",
            "duration",
            "startDate",
            "startTime",
            "endDate",
            "endTime"
        ];

        const isValid = await trigger(step1Fields);

        if (isValid && step < totalSteps) {
            setStep(prev => prev + 1);
        }
    };

    const handleCancel = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };

    return {
        step,
        totalSteps,
        register,
        handleSubmit,
        errors,
        onSubmit,
        handleNext,
        handleCancel
    };
}