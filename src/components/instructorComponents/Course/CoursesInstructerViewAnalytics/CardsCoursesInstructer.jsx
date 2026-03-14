import { cardsDataInstructor } from "../../../../data/mockData"
import EngagementCard from "./chartInstructerCard"

export default function CardsCoursesInstructer() {
  return (
    <>
      <section>
        <div className="flex flex-wrap justify-between gap-4 mt-4">
          {/* 2 cards */}
          {cardsDataInstructor.slice(0, 2).map((card, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-48 md:w-72 p-3 border-1 border-[#6B7280] shadow-md rounded-md gap-2"
              >
                <div className="flex justify-between">
                  <p className="text-[#64748B]">{card.title}</p>
                  <p
                    className={`${card.percentChangeColor} ${card.percentChangeBgColor} text-[12px] font-bold px-2 py-1 rounded-full`}
                  >
                    {card.percentChange}
                  </p>
                </div>

                <div>
                  <p className=" text-2xl font-bold py-2 flex items-center">
                    {card.value}%
                  </p>
                  <div className="bg-[#F3F4F6] h-[6px] rounded-3xl flex items-center justify-between ">
                    <div
                      style={{ width: `${card.value}%` }}
                      className={`${card.barColor} h-[6px] rounded-3xl`}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* 1 card charts */}
          <div className="w-full sm:w-48 md:w-72 p-3 border-1 border-[#6B7280] shadow-md rounded-md gap-2">
            <div className="flex justify-between">
              <p className="text-[#64748B]">{cardsDataInstructor[2].title}</p>
              <p className="text-[#94A3B8] w-16 text-[12px] font-bold ">
                {cardsDataInstructor[2].percentChange}
              </p>
            </div>

            <div>
              <p className=" text-2xl font-bold ">
                {cardsDataInstructor[2].value}h
              </p>
              <EngagementCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
