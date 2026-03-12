import { FiEdit, FiZap } from "react-icons/fi";
import { cn } from "../../utils/utils";
import { WiStars } from "react-icons/wi";
import { CiCirclePlus } from "react-icons/ci";

export default function AddQuestionButtons({ onAdd }) {
  return (
    <div className="space-y-3 mb-6">
      <div className="border-b border-[#E2E8F0]"></div>

      <button
        onClick={onAdd}
        className={cn(
          "w-full flex items-center justify-between gap-3 p-3   ",
          "hover:bg-gray-50 transition",
        )}
      >
        <div className="flex items-center gap-3 ">
          <FiEdit className="text-xl text-primary bg-[#EFF6FF] p-2 rounded-md w-10 h-10" />

          <div className="text-left">
            <p className="font-medium">Type Manually</p>

            <p className="text-sm text-gray-500">
              Craft each question yourself
            </p>
          </div>
        </div>
        <CiCirclePlus className="text-xl text-primary w-7 h-7 " />
      </button>
      <div className="border-b border-[#E2E8F0]"></div>
      <div className="border-b border-[#E2E8F0]"></div>
      <button className="w-full flex items-center justify-between p-3  hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <WiStars className="text-xl text-primary bg-[#EFF6FF] p-1 rounded-md w-10 h-10" />

          <div className="text-left">
            <p className="font-medium">AI Generate from Topic</p>

            <p className="text-sm text-gray-500">Generate using AI prompts</p>
          </div>
        </div>
        <FiZap className="text-xl text-primary w-7 h-5" />
      </button>
      <div className="border-b border-[#E2E8F0]"></div>
    </div>
  );
}
