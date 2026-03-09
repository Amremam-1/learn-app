export default function ToggleSwitch({
  label,
  description,
  register,
  ...props
}) {
  return (
    <div className="border-t border-grayBorder pt-6 mt-6 flex items-center justify-between">
      <div>
        {label && <h3 className="text-sm font-bold text-grayDark">{label}</h3>}
        {description && <p className="text-sm text-gray mt-1">{description}</p>}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          {...register}
          {...props}
        />
        <div className="w-11 h-6 bg-grayBorder peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-grayLight after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>
  );
}
