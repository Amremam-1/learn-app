
import { cardsInstructerData } from "../../../data/mockData"

export default function CardsInstructer() {
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {cardsInstructerData.map((card, index) => {
            const Icon = card.icon;
            return (
            <div key={index}
              className="flex items-center p-3 border-1 border-[#6B7280] shadow-md rounded-md gap-2">
              <div className={`${card.color} text-white p-3 rounded-md`}>
                <Icon />
              </div>
              <div>
                <p className="text-[#2B2E33] text-2xl font-bold">{card.number}</p>
                <p className="text-[#6B7280] text-[14px]">{card.title}</p>
              </div>
            </div>
          )})}

        </div>
    </>
  )
}
