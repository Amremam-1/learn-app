import { cn } from "../../utils/utils";

export default function FormSelect({
  label,
  options = [],
  placeholder,
  error,
  className,
  register,
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-grayMedium mb-1">
          {label}
        </label>
      )}
      <select
        className={cn(
          "w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary bg-white",
          error ? "border-danger" : "border-grayLight",
        )}
        {...register}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-danger text-xs mt-1 block">{error}</span>}
    </div>
  );
}
