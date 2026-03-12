import { useState } from "react";
import AddQuestionButtons from "./AddQuestionButtons";
import QuizSettings from "./QuizSettings";
import EmptyQuestions from "./EmptyQuestions";
import QuestionCard from "./QuestionCard";

export default function CreateQuizStep2() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, {}]);
  };

  return (
    <div className="  p-5">
      <h2 className="text-xl font-semibold mb-4">Add Questions</h2>

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
    </div>
  );
}
