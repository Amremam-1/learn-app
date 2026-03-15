
import {recentActivity} from "../../../data/mockData"

export default function RecentActivity() {

    // Recent Activity
    

  return (
    <>
       {/* 4 div Recent Activity */}
        <div className="border-[1px] border-[#DFE0E2] p-5 shadow-md rounded-xl mt-4">
          <p className="text-[#2B2E33] text-xl font-bold pb-2">Recent Activity</p>  
          {/* 4 div */}
          <div className="space-y-2">
            {/* 1 div */}
            {recentActivity.map((item , index)=>{
              const Icon = item.icon
              return(
                <div key={index} className={`flex justify-between items-center gap-3 p-3 rounded-lg ${item.bgColor} border-s-[4px] ${item.borderColor}`}>
                  {/* icon */}
                  <div className="flex items-center gap-3">
                    <div className={`${item.color} bg-white p-2 text-xl rounded-lg`}>
                      <Icon />
                    </div>
                  {/* << text */}
                    <div>
                      <p className="text-[#2B2E33] font-bold">{item.title1}</p>
                      <p className="text-[#5B616D] text-[14px]">{item.title2}</p>
                    </div>
                  </div>
                  {/* text >> */}
                  <div>
                    <p className="text-[#2B2E33] text-[12px]">{item.date}</p>
                  </div>
                </div>
              )
            })}
      
          </div>
        </div>

    </>
  )
}

