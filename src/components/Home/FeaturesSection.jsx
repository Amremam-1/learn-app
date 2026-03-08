import React from "react"
import TitleSection from "../Home/TitleSection"
import { featuresData } from "../../data/homeData"

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <TitleSection
        label="Why Choose Learnova"
        title="Learn Smarter, Not Harder"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-bdColor"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
              <item.icon size={20} />
            </div>
            <h3 className="font-semibold text-lg text-textCo mb-2">
              {item.title}
            </h3>

            <p className="text-desc text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
