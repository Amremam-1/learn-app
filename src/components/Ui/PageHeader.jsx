import { cn } from "../../utils/utils";

export default function PageHeader({
  breadcrumbs = [],
  title,
  highlightedText,
  className,
}) {
  return (
    <div
      className={cn("mb-6 rounded-xl bg-white p-6 relative group", className)}
      tabIndex={0}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-xl border-2 border-brandBlue opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none"
      />
      {breadcrumbs.length > 0 && (
        <div className="text-sm text-gray mb-2">
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-1">&gt;</span>}
              <span
                className={cn(
                  index === breadcrumbs.length - 1
                    ? "font-medium text-grayDark"
                    : "",
                )}
              >
                {item}
              </span>
            </span>
          ))}
        </div>
      )}
      <h1 className="text-3xl font-bold text-grayDark">
        {title}{" "}
        {highlightedText && (
          <span className="bg-secondaryLight text-grayDark px-2 rounded-sm">
            {highlightedText}
          </span>
        )}
      </h1>
    </div>
  );
}
