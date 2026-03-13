import { useState } from "react"
import AddQuestionButtons from "./quiz/AddQuestionButtons"
import QuizSettings from "./quiz/QuizSettings"
import EmptyQuestions from "./quiz/EmptyQuestions"
import QuestionCard from "./quiz/QuestionCard"
import StepActions from "./quiz/StepActions"

export default function CreateQuizStep2({ data }) {
  const [questions, setQuestions] = useState([])

  const addQuestion = () => {
    setQuestions([...questions, {}])
  }

  const handlePublish = () => {
    const finalQuiz = {
      ...data,
      questions,
    }

    console.log(finalQuiz)
  }
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold">{data?.title}</h2>

      <p className="text-gray-500 mb-4">
        {data?.course} • {data?.topic}
      </p>

      <AddQuestionButtons onAdd={addQuestion} />

      {questions.length === 0 ? (
        <EmptyQuestions />
      ) : (
        <div className="space-y-4">
          {questions.map((q, index) => (
            <QuestionCard key={index} index={index} />
          ))}
        </div>
      )}

      <QuizSettings />

      <StepActions step={2} totalSteps={2} onNext={() => handlePublish()} />
    </div>
  )
}
