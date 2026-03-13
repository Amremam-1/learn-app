import React from "react"
import { FaArrowLeft} from "react-icons/fa"
import QuizForm from "../../components/QuizzesInstructor/QuizForm"



const QuizzesInstructer = () => {
  

  return <div className="flex flex-col p-6 gap-8">
    <h1 className="flex gap-4 items-center text-xl font-semibold">
      <FaArrowLeft className="text-zinc-700 hover:text-zinc-600 cursor-pointer hover:transition-colors"/>
     Create New Quiz
    </h1>

    <div className="">
  <div className="flex justify-between text-sm mb-2">
    <p>
    Step 1 of 2
  </p>
  <p className="text-zinc-500">Basic Info</p>
  </div>

  <div className="flex gap-2 w-full h-2">
    <div className="w-1/2 h-2 bg-indigo-600 rounded-full"/>
    <div className="w-1/2 h-2 bg-zinc-300 rounded-full"/>
  </div>
</div>

<p className="text-sm text-zinc-700 max-w-sm">Let's start with the essentials. Provide the core details for your new assessment.</p>

<QuizForm/>
  </div>
}

export default QuizzesInstructer
