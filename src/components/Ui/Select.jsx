import { cn } from "../../utils/utils";

export default function Select({
  options = [],
  placeholder,
  value,
  onChange,
  className,
  ...props
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <select
        className="w-full rounded-base border border-borderInput p-4 appearance-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Custom arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
        <svg
          className="w-6 h-6 text-textMuted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
