import React from "react"

const TitleSection = ({ label, title }) => {
  return (
    <div className="text-center space-y-2 mb-12">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest">
        {label}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-textCo">{title}</h2>
    </div>
  )
}

export default TitleSection
