import { FaArrowLeft } from "react-icons/fa";

export default function QuizHeader() {
  return (
    <div className="flex items-center gap-2 mb-6 cursor-pointer">
      <FaArrowLeft />
      <span className="text-lg font-semibold">Create New Quiz</span>
    </div>
  );
}
