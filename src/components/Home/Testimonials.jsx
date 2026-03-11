import React from "react"
import TitleSection from "./TitleSection"
import { testimonialsData } from "../../data/homeData"
import { FaStar } from "react-icons/fa"

const Testimonials = () => {
  return (
    <section className="py-16">
      <TitleSection
        className="text-center"
        label="Success Stories"
        title="What Our Students Say"
      />

      <div className="grid gird-cols-2 lg:grid-cols-3 gap-5">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="px-3 py-6 space-y-4 overflow-hidden shadow-lg bg-white text-desc rounded-lg flex flex-col justify-between"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={
                    idx < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-sm font-normal">{testimonial.review}</p>

            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px] bg-white rounded-full shadow">
                <img src="" alt="" />
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-textMuted text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
