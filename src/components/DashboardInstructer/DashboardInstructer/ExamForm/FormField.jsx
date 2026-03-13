import Input from "../../../Ui/Input";

export default function FormField({ item, register, errors }) {

    return (
        <>
            {item.type === "text" && (
                <>
                    <Input
                        {...register(item.name)}
                        type="text"
                        placeholder={item.placeholder}
                        className="rounded-xl bg-bgLight border border-borderCard text-sm w-full outline-none text-grayLabel"
                    />

                    {errors[item.name] && (
                        <span className="text-red-500 text-xs">
                            {errors[item.name]?.message}
                        </span>
                    )}
                </>
            )}

            {item.type === "select" && (
                <>
                    <select
                        {...register(item.name)}
                        className="rounded-xl bg-bgLight border border-borderCard text-sm w-full outline-none py-3 ps-2 text-grayLabel"
                    >
                        <option value="" disabled>
                            {item.placeholder}
                        </option>

                        {item.options?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    {errors[item.name] && (
                        <span className="text-red-500 text-xs">
                            {errors[item.name]?.message}
                        </span>
                    )}
                </>
            )}

            {item.type === "range" && (

                <div className="rounded-xl bg-bgLight border border-borderCard p-3">
                    <div className="w-full flex flex-col">
                        <Input
                            type="range"
                            {...register(item.name)}
                            min="0"
                            max="120"
                            step="1"
                            className="w-full h-2 bg-bgLight rounded-lg cursor-pointer 
                       accent-[#6C63FF]"
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-medium">
                        <span>0 min</span>
                        <span>60 min</span>
                        <span>90 min</span>
                        <span>120 min</span>
                    </div>
                </div>
            )}

            {(item.type === "date" || item.type === "time") && (
                <div className="flex gap-3 w-full">

                    <div className="flex-[8]">
                        <Input
                            {...register(item.dateName)}
                            type="date"
                            className="rounded-xl bg-bgLight border border-borderCard text-sm w-full outline-none"
                        />

                        {errors[item.dateName] && (
                            <span className="text-red-500 text-xs">
                                {errors[item.dateName]?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex-[1]">
                        <Input
                            {...register(item.timeName)}
                            type="time"
                            className="rounded-xl bg-bgLight border border-borderCard text-sm w-full outline-none"
                        />

                        {errors[item.timeName] && (
                            <span className="text-red-500 text-xs">
                                {errors[item.timeName]?.message}
                            </span>
                        )}
                    </div>

                </div>
            )}
        </>
    );
}