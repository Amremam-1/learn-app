import { useState } from "react";
import { IoMdShuffle } from "react-icons/io";
import { BiShow } from "react-icons/bi";
import { LuTimer } from "react-icons/lu";
import { IoChevronForward } from "react-icons/io5";
import ToggleSwitch from "../../components/Ui/ToggleSwitch";

export default function QuizSettings() {
  const [shuffle, setShuffle] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [time, setTime] = useState("30s");
  const [openTime, setOpenTime] = useState(false);

  const times = ["10s", "20s", "30s", "45s", "60s"];

  return (
    <div className="mt-10 space-y-4">
      <h3 className="font-semibold text-lg">Quiz Settings</h3>
      <div className="border-b border-[#E2E8F0]"></div>

      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#EFF6FF] rounded-full p-2 flex items-center justify-center">
            <IoMdShuffle className="text-primary text-lg" />
          </div>
          <p>Shuffle Questions</p>
        </div>

        <ToggleSwitch checked={shuffle} onChange={() => setShuffle(!shuffle)} />
      </div>

      <div className="border-b border-[#E2E8F0]"></div>

      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#EFF6FF] rounded-full p-2 flex items-center justify-center">
            <BiShow className="text-primary text-lg" />
          </div>
          <p>Show Results Immediately</p>
        </div>

        <ToggleSwitch
          checked={showResults}
          onChange={() => setShowResults(!showResults)}
        />
      </div>

      <div className="border-b border-[#E2E8F0]"></div>

      <div className="relative">
        <div
          onClick={() => setOpenTime(!openTime)}
          className="flex justify-between items-center py-2 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#EFF6FF] rounded-full p-2 flex items-center justify-center">
              <LuTimer className="text-primary text-lg" />
            </div>
            <p>Time Limit per Question</p>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <span>{time}</span>
            <IoChevronForward />
          </div>
        </div>

        {openTime && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-md">
            {times.map((t) => (
              <div
                key={t}
                onClick={() => {
                  setTime(t);
                  setOpenTime(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-[#E2E8F0]"></div>
    </div>
  );
}
