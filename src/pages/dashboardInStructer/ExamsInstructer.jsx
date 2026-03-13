
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Container from '../../components/Ui/Container';
import { ExamInstucterInput } from '../../data/mockData';
import FormField from "../../components/DashboardInstructer/DashboardInstructer/ExamForm/FormField";
import StepProgress from "../../components/DashboardInstructer/DashboardInstructer/ExamForm/StepProgress";
import FormButtons from "../../components/DashboardInstructer/DashboardInstructer/ExamForm/FormButtons";
import useExamForm from '../../hooks/useExamForm';

export default function ExamsInstructer() {
  const {
    step,
    totalSteps,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleNext,
    handleCancel
  } = useExamForm();


  return (
    <Container>
      <header>
        <h1 className='flex items-center gap-3 font-semibold py-4 '>
          <FaArrowLeft className='cursor-pointer' />
          Creat New Exam
        </h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center text-sm py-3'>
          <h6>Step {step} of {totalSteps}</h6>
          <h6 className='text-textMuted'>Basic Info</h6>
        </div>

        <StepProgress step={step} totalSteps={totalSteps} />

        <div className='my-2 lg:my-10 space-y-5'>
          {step === 1 && ExamInstucterInput.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">

              <label className="text-sm font-medium text-grayLabel">{item.label}</label>

              <FormField
                item={item}
                register={register}
                errors={errors}
              />

            </div>
          ))}
        </div>

        <hr className='w-full h-[1px] bg-borderInput rounded-2xl border-0 mt-5 lg:mt-0' />

        <FormButtons
          step={step}
          totalSteps={totalSteps}
          handleNext={handleNext}
          handleCancel={handleCancel}
        />
      </form>
    </Container>
  )
}
