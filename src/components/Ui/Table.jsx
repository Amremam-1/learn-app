const Table = ({ theadData, tbodyData }) => {
  return (
    <div>
      <table className="w-full capitalize lg:text-sm text-[12px] text-[#0A0A0A]">
        <thead className="bg-[#F4F6FB]">
          <tr className="border-b-2 border-[#E5E7EB]">
            {theadData.map((th, idx) => (
              <th
                key={idx}
                colSpan={th.title === "Student Name" ? 2 : 1}
                className={`py-2 pr-2 lg:pr-0 text-left font-normal ${idx === 0 ? "pl-1" : "pl-0"}`}
              >
                {th.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbodyData?.map((item, idx) => (
            <tr className="text-left border-b border-[#E5E7EB]" key={idx}>
              <td className="lg:pl-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={item.photo}
                  alt={item.name}
                />
              </td>
              <td className="lg:py-4 py-2 px-2 lg:px-0" colSpan={2}>
                <h2 className="font-medium">{item.name}</h2>
                <span className="text-[#6A7282]">{item.subtitle}</span>
              </td>
              <td className="pr-1 lg:pr-0">{item.quiz1}/100</td>
              <td className="pr-2 lg:pr-0">{item.quiz2}/100</td>
              <td className="pr-1 lg:pr-0">{item.quiz3}/100</td>
              <td className="pr-1 lg:pr-0">{item.midterm}/100</td>
              <td className="pr-1 lg:pr-0">{item.final}/100</td>
              <td className="pr-1 lg:pr-0">{item.average}%</td>
              <td>
                <span
                  className={`${
                    item.grade === "A"
                      ? "bg-[#EBF3FD] text-[#2563EB]"
                      : item.grade === "B"
                        ? "bg-[#F0FDF4] text-[#22C55E]"
                        : item.grade === "C"
                          ? "bg-[#FEFCE8] text-[##F59E0B]"
                          : item.grade === "F"
                            ? "bg-red-50 text-red-500"
                            : ""
                  } rounded-[7.56px] lg:px-2 px-1 py-1 `}
                >
                  {item.grade}
                </span>
              </td>
              <td className="lg:text-left text-center">
                <span
                  className={`py-1 px-1 rounded-full text-xs font-medium ${
                    item.status.toLowerCase() === "passed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-500"
                  } `}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
