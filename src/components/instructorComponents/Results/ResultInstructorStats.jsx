import { results } from "../../../data/resultData";
const ResultInstructorStats = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-7 gap-3">
      {results.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="rounded-xl border border-[#0000001A] lg:p-6 p-2 flex lg:gap-4 gap-2"
          >
            <div
              className={`bg-[${item.colorBgIcon}] text-white rounded-xl flex items-center justify-center lg:h-14 lg:w-14 w-10 h-10 lg:text-xl`}
            >
              <Icon />
            </div>
            <div className="flex flex-col lg:gap-0.5">
              <h1 className="font-bold lg:text-2xl">{item.avgNum}</h1>
              <h2 className="text-[#6A7282] lg:text-[14px] text-[10px]">
                {item.title}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultInstructorStats;
