import { FiUserCheck } from "react-icons/fi";
import { LuUserX } from "react-icons/lu";
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';


export default function Cards() {
  
      // Cards
      const cards = [
      {
        number: "2,847",
        title: "Total Passed students",
        icon: <FiUserCheck />,
        color: "bg-[#22C55E]"
      },
      {
        number: "434",
        title: "Total Failed Students",
        icon: <LuUserX />,
        color: "bg-[#EB1A1A]"
      },
      {
        number: "87%",
        title: "Pass Rate Progress",
        icon: <FaArrowTrendUp />,
        color: "bg-[#22C55E]"
      },
      {
        number: "13%",
        title: "Fail Rate Comparison",
        icon: <FaArrowTrendDown />,
        color: "bg-[#EB1A1A]"
      }
    ];
    
  
   return (
    <>
        {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cards.map((card, index) => (
          <div key={index}
            className="flex items-center p-3 border-1 border-[#6B7280] shadow-md rounded-md gap-2">
            <div className={`${card.color} text-white p-3 rounded-md`}>
              {card.icon}
            </div>
            <div>
              <p className="text-[#2B2E33] text-2xl font-bold">{card.number}</p>
              <p className="text-[#6B7280] text-[14px]">{card.title}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

