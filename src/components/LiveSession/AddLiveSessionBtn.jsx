import React from "react";
import Button from "../Ui/Button";
import { FaCirclePlus } from "react-icons/fa6";

export default function AddLiveSessionBtn({ onClick }) {
  return (
    <div className="w-full sm:w-auto">
      <Button
        onClick={onClick}
        className="w-full sm:w-[224px] px-6 py-3 rounded-base bg-[#5B4CE6] text-white font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] flex items-center justify-center gap-2"
      >
        <FaCirclePlus className="size-5" />
        Add Live Session
      </Button>
    </div>
  );
}
