import { LuFileQuestion } from "react-icons/lu";

export default function EmptyQuestions() {
  return (
    <div className="border-2 border-dashed border-[#E2E8F0] rounded-lg p-16 text-center mb-6 ">
      <LuFileQuestion className="mx-auto text-3xl text-gray-400 mb-3 text-primary bg-[#EFF6FF] h-12 w-12 p-2 rounded-[50%] " />

      <p className="font-medium text-gray-600">No questions added yet</p>

      <p className="text-sm text-gray-400">
        Add your first question to preview it here
      </p>
    </div>
  );
}
