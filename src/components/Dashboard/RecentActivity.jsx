
import { FaRegCheckCircle } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";
import { PiClipboardText, PiFileText } from "react-icons/pi";

export default function RecentActivity() {

    // Recent Activity
    const recentActivity = [
      {
        title1: "New quiz created",
        title2: "Mathematics Level 2",
        icon: <PiClipboardText />,
        borderColor:"border-[#EF4444]",
        bgColor:'bg-[#FEF2F2]',
        color: "text-[#EB1A1A]",
        date: "5 minutes ago"
      },
      {
        title1: "Results published",
        title2: "Physics Level 3",
        icon: <FaRegCheckCircle />,
        borderColor:"border-[#22C55E]",
        bgColor:'bg-[#F0FDF4]',
        color: "text-[#10B981]",
        date: "23 minutes ago"
      },
      {
        title1: "New student enrolled",
        title2: "Chemistry Level 1",
        icon: <LuUserPlus />,
        borderColor:"border-[#F59E0B]",
        bgColor:'bg-[#FEFCE8]',
        color: "text-[#F59E0B]",
        date: "1 hour ago"
      },
      {
        title1: "Lesson updated",
        title2: "Biology Level 2",
        icon: <PiFileText />,
        borderColor:"border-[#0E2D6B]",
        bgColor:'bg-[#EFF1F5]',
        color: "text-[#000]",
        date: "2 hours ago"
      },
    
    ]
    

  return (
    <>
       {/* 4 div Recent Activity */}
        <div className="border-[1px] border-[#DFE0E2] p-5 shadow-md rounded-xl mt-4">
          <p className="text-[#2B2E33] text-xl font-bold pb-2">Recent Activity</p>  
          {/* 4 div */}
          <div className="space-y-2">
            {/* 1 div */}
            {recentActivity.map((item , index)=>{
              return(
                <div key={index} className={`flex justify-between items-center gap-3 p-3 rounded-lg ${item.bgColor} border-s-[4px] ${item.borderColor}`}>
                  {/* icon */}
                  <div className="flex items-center gap-3">
                    <div className={`${item.color} bg-white p-2 text-xl rounded-lg`}>
                      {item.icon}
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

