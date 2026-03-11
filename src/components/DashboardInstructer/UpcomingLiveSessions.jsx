import { upcomingSessions } from "../../data/mockData"

export default function UpcomingLiveSessions() {
  return (
    <>
      <section>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>Upcoming Live Sessions</p>
          <div>
            {upcomingSessions.map((item) => (
              <div key={item.id} className=" py-3 ">
                <div className="bg-[#F4F6FB] min-h-20 p-3 space-y-2 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <p>{item.course}</p>
                    <p className="text-[#5B4CE6]">{item.time}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>{item.date}</p>
                    <p className="text-[#22C55E] text-[10px] bg-[#DCFCE7] px-2 py-1 rounded-full">
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
