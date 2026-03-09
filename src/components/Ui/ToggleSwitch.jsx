import { cn } from "../../utils/utils";

export default function ToggleSwitch({ checked, onChange, className }) {
  return (
    <label
      className={cn(
        "relative inline-block w-[36px] h-[20px] sm:w-[40px] sm:h-[24px] flex-shrink-0",
        className,
      )}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />

      <span
        className="
          absolute inset-0 cursor-pointer rounded-full bg-borderInput
          transition-all duration-300
          peer-checked:bg-primary
          peer-focus:shadow-[0_0_1px_#2196F3]
          "
      ></span>

      <span
        className="
          absolute left-[3px] sm:left-[4px] top-1/2 -translate-y-1/2
          h-[12px] w-[12px] sm:h-[16px] sm:w-[16px]
          rounded-full bg-white
          transition-all duration-300
          peer-checked:translate-x-[18px] sm:peer-checked:translate-x-[16px]        
          "
      />
    </label>
  );
}
