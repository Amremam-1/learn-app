import { cn } from "../../utils/utils";

export default function FormInput({
  label,
  type = "text",
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
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary",
          error ? "border-danger" : "border-grayLight",
          type === "date" || type === "time" ? "text-gray" : "",
        )}
        {...register}
        {...props}
      />
      {error && <span className="text-danger text-xs mt-1 block">{error}</span>}
    </div>
  );
}
