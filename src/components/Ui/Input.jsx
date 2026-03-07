import { cn } from "../../utils/utils";

export default function Input({
  type = "text",
  placeholder,
  className,
  icon,
  ...props
}) {
  const base =
    "w-full rounded-base border border-borderInput py-[16px] px-[14px]";

  if (icon) {
    return (
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className={cn(base, "pl-[40px]", className)}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(base, className)}
      {...props}
    />
  );
}
