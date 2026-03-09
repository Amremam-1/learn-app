import React from "react"
import Button from "../Ui/Button"

const IntroSection = () => {
  return (
    <div className="py-12 flex md:justify-between flex-wrap flex-col lg:flex-row">
      {/* Intro Text */}
      <div className="space-y-5 flex-1">
        <div className="h-[24px] w-fit px-2 py-4 text-primary rounded-full bg-[rgba(19,91,236,0.1)] flex items-center overflow-hidden">
          <p className="relative font-bold text-[10px] md:text-sm uppercase ps-5 tracking-widest">
            New: AI-Powered Learning Paths
            <span className="absolute top-[5px] left-[2px] w-[8px] h-[8px] rounded-full bg-primary" />
          </p>
        </div>

        <h1 className="text-5xl lg:text-7xl text-textCo font-bold md:leading-normal leading-[80px]">
          Master Your <br />
          Future With <br />
          <span className="text-primary">Expert-Led</span> <br />
          Courses
        </h1>

        <p className="text-desc">
          Join 10k+ learners gaining real-world skills from industry leaders.
          Access over 300+ courses designed by professionals to accelerate your
          career.
        </p>

        <div className="flex items-center gap-2.5 text-white md:text-sm text-[12px]">
          <Button>Get Started Now</Button>

          <Button variant="secondary" className="text-textCo">
            View All Courses
          </Button>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <img
          src="/images/Container.png"
          alt="intro_image"
          className="max-w-full"
        />
      </div>
    </div>
  )
}

export default IntroSection
