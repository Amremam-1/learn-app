import React from "react";
import Button from "../Ui/Button";

export default function SaveButton({ onClick, isSaving, showMessage }) {
  return (
    <div className="pt-10 flex flex-col items-end w-full">
      <Button
        onClick={onClick}
        className="px-6 py-3 rounded-base bg-[#5B4CE6] text-white font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] flex items-center justify-center w-full sm:w-[200px]"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Course"}
      </Button>

      {showMessage && (
        <p className="text-success font-semibold mt-2 animate-fade-in">
          Course saved successfully!
        </p>
      )}
    </div>
  );
}
