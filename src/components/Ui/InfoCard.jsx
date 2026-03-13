import { cn } from "../../utils/utils";

export default function InfoCard({
  icon,
  title,
  description,
  variant = "default",
  className,
}) {
  const variants = {
    primary: {
      container: "bg-primaryLight",
      icon: "text-primary",
      title: "text-primary",
    },
    default: {
      container: "bg-background border border-grayBorderLight",
      icon: "text-grayMuted",
      title: "text-gray",
    },
  };

  const styles = variants[variant] || variants.default;

  return (
    <div
      className={cn("rounded-xl p-6 flex gap-4", styles.container, className)}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div>
        {title && (
          <h4
            className={cn(
              "text-xs font-bold tracking-wider mb-2 uppercase",
              styles.title,
            )}
          >
            {title}
          </h4>
        )}
        {description && (
          <p className="text-sm text-gray leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
