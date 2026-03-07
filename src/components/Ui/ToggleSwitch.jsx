import { cn } from "../../utils/utils";

export default function ToggleSwitch({ checked, onChange, className }) {
  return (
    <label className={cn("relative inline-block w-[40px] h-[24px]", className)}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />

      <span
        className="
        absolute inset-0 cursor-pointer rounded-full bg-borderInput
        transition duration-300
        peer-checked:bg-primary
        peer-focus:shadow-[0_0_1px_#2196F3]
      "
      ></span>

      <span
        className="
        absolute left-[4px] bottom-[4px] h-[16px] w-[16px]
        rounded-full bg-white
        transition duration-300
        peer-checked:translate-x-[16px]
      "
      ></span>
    </label>
  );
}
