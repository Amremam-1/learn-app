import { recentActivities } from "../../../data/mockData"

export default function RecentActivities() {
  return (
    <>
      <section>
        <div className="bg-white p-4 rounded-xl shadow">
          <p>Recent Activity</p>
          <div>
            {recentActivities.map((item) => (
              <div key={item.id} className=" py-3 ">
                <div className="bg-[#F4F6FB] min-h-20 p-3 space-y-2 rounded-2xl">
                  <div className="flex justify-start items-center space-y-2">
                    <div
                      style={{ background: item.color }}
                      className=" p-1.5 me-2 rounded-full"
                    ></div>
                    <div className="space-y-2">
                      <p>{item.message}</p>
                      <p className="text-[10px]">{item.time}</p>
                    </div>
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
