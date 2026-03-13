const ResultInstructorCard = ({ icon, title, AvgNum, colorBgIcon }) => {
  return (
    <div className="rounded-xl border border-[#0000001A] lg:p-6 p-2 flex lg:gap-4 gap-2">
      <div
        className={`bg-[${colorBgIcon}] text-white rounded-xl flex items-center justify-center lg:h-14 lg:w-14 w-10 h-10 lg:text-xl`}
      >
        {icon}
      </div>
      <div className="flex flex-col lg:gap-0.5">
        <h1 className="font-bold lg:text-2xl">{AvgNum}</h1>
        <h2 className="text-[#6A7282] lg:text-[14px] text-[10px]">{title}</h2>
      </div>
    </div>
  );
};

export default ResultInstructorCard;
