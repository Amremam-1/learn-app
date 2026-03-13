
import {NeedsAttentionFromInstructor} from '../../data/mockData'

export default function NeedsAttention() {
  return (
    <>
      <section>
        <div className="bg-white pt-4 rounded-xl shadow">
          <div className="p-4 text-[18px] font-bold">
              <p>Top Performing Students</p>
          </div>
      
          <div className="py-4">
              {NeedsAttentionFromInstructor.map((item ) =>(
                      
                  <div key={item.id} className="flex items-center justify-between border-t-2 border-[#E5E7EB] pt-6 p-4">
      
                      <div className="flex items-center">
                          <div className={`${item.colorBg} w-10 h-10 flex items-center justify-center me-4 rounded-full`}>
                              <p className={`${item.color} font-bold`}>{item.initials}</p>
                          </div>
                          <div>
                              <p className="font-bold">{item.name}</p>
                              <p className={`${item.colorText} text-[12px]`}>{item.performance}</p>
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
