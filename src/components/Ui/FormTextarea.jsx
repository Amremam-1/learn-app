import { cn } from "../../utils/utils";

export default function FormTextarea({
  label,
  placeholder,
  rows = 4,
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
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary resize-none",
          error ? "border-danger" : "border-grayLight",
        )}
        {...register}
        {...props}
      />
      {error && <span className="text-danger text-xs mt-1 block">{error}</span>}
    </div>
  );
}
