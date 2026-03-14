import React, { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import QuizForm from "../../components/instructorComponents/QuizzesInstructor/QuizForm"
import CreateQuizStep2 from "../../components/instructorComponents/QuizzesInstructor/CreateQuizStep2"

const QuizzesInstructer = () => {
  const [steps, setSteps] = useState(1)
  const [quizData, setQuizData] = useState(null)

  const handleNext = (data) => {
    setQuizData(data)
    setSteps(2)
  }

  return (
    <div className="flex flex-col p-6 gap-8">
      <h1 className="flex gap-4 items-center text-xl font-semibold">
        <FaArrowLeft
          className="text-zinc-700 hover:text-zinc-600 cursor-pointer hover:transition-colors"
          onClick={() => setSteps(1)}
        />
        Create New Quiz
      </h1>

      <div className="">
        <div className="flex justify-between text-sm mb-2">
          <p>Step 1 of 2</p>
          <p className="text-zinc-500">Basic Info</p>
        </div>

        <div className="flex gap-2 w-full h-2">
          <div
            className={`w-1/2 h-2 rounded-full ${
              steps >= 1 ? "bg-indigo-600" : "bg-zinc-300"
            }`}
          />
          <div
            className={`w-1/2 h-2 rounded-full ${
              steps >= 2 ? "bg-indigo-600" : "bg-zinc-300"
            }`}
          />
        </div>
      </div>

      <p className="text-sm text-zinc-700 max-w-sm">
        Let's start with the essentials. Provide the core details for your new
        assessment.
      </p>
      {steps === 1 && <QuizForm onNext={handleNext} defaultValues={quizData} />}
      {steps === 2 && <CreateQuizStep2 data={quizData} />}
    </div>
  )
}

export default QuizzesInstructer
