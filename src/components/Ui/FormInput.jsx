import { cn } from "../../utils/utils";

export default function FormInput({
  label,
  type = "text",
  placeholder,
  error,
  className,
  icon,
  register,
  value,
  onChange,
  ...props
}) {
  const base =
    "w-full h-[48px] rounded-base border border-borderInput px-4 py-3 text-[14px] sm:text-[16px]";
  const inputClasses = cn(
    base,
    error ? "border-danger" : "",
    type === "date" || type === "time" ? "text-gray" : "",
    icon && "pl-10",
    className
  );

  const inputProps = register
    ? { ...register, ...props }
    : { value, onChange, ...props };

  const inputElement = (
    <input
      type={type}
      placeholder={placeholder}
      className={inputClasses}
      {...inputProps}
    />
  );

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-grayMedium mb-1">
          {label}
        </label>
      )}
      {icon ? (
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted text-sm sm:text-base">
            {icon}
          </span>
          {inputElement}
        </div>
      ) : (
        inputElement
      )}
      {error && <span className="text-danger text-xs mt-1 block">{error}</span>}
    </div>
  );
}
