import { cn } from "../../utils/utils";

export default function FormSelect({
  label,
  options = [],
  placeholder,
  error,
  className,
  register,
  value,
  onChange,
  ...props
}) {
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectProps = register
    ? { ...register }
    : { value, onChange: (e) => onChange?.(e.target.value), ...props };

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-grayMedium mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          className={cn(
            "w-full rounded-base border border-borderInput px-4 py-3 pr-12 appearance-none text-sm sm:text-base bg-white",
            error ? "border-danger" : "",
            className
          )}
          {...selectProps}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {normalizedOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-textMuted"
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
      {error && <span className="text-danger text-xs mt-1 block">{error}</span>}
    </div>
  );
}
