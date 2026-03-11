import { FaArrowTrendUp } from "react-icons/fa6";
import {CoursesInstructerData} from "../../data/mockData"

export default function CourseCompletionCard() {
    const average =
        CoursesInstructerData.reduce((sum, item) => sum + item.percent, 0) /
        CoursesInstructerData.length;
  return (
    <>
      <section>
        <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center gap-2 pb-4">
                <FaArrowTrendUp className="text-[#5B4CE6] text-xl"/> 
                <p className="text-[18px] font-bold">Course Completion Rate</p>
            </div>
            
            {CoursesInstructerData.map((item , index) =>(
            <div key={index} className="pt-1">
                <div className=" flex justify-between pt-2">
                    <p className="text-[14px] ">{item.name}</p>
                    <p className="text-[12px] ">{item.students} students</p>
                </div>
                <div className="bg-[#F3F4F6] h-[12px] rounded-3xl flex items-center justify-between "> 
                    <div className="bg-[#5B4CE6] h-[12px] rounded-3xl" style={{width:`${item.percent}%`}}></div>
                    <div className="text-[#5B4CE6] text-sm">{item.percent}%</div>
                </div>
            </div>
            ))}
            {/* Average Completion */}
            <div className=" flex justify-between pt-8">
                <p >Average Completion</p>
                <p className="  text-[#5B4CE6] font-bold">{average} %</p>
            </div>
        </div>
      </section>
    </>
  )
}
