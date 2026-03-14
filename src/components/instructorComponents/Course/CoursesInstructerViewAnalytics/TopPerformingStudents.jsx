import { TopPerformingStudentsFromInstructor } from "../../../../data/mockData"

export default function TopPerformingStudents() {
  return (
    <>
      <section>
        <div className="bg-white pt-4 rounded-xl shadow">
          <div className="p-4 text-[18px] font-bold">
            <p>Top Performing Students</p>
          </div>

          <div className="py-4">
            {TopPerformingStudentsFromInstructor.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-t-2 border-[#E5E7EB] pt-6 p-4"
              >
                <div className="flex items-center">
                  <div className="bg-[#F1F5F9] w-10 h-10 flex items-center justify-center me-4 rounded-full">
                    <p className={`${item.color} font-bold`}>{item.initials}</p>
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-[#64748B] text-[12px]">
                      {item.performance}
                    </p>
                  </div>
                </div>

                <div className="text-[#CBD5E1] text-3xl">
                  <item.icon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
