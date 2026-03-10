import Container from "../../components/Ui/Container"
import React from "react"
import Button from "../../components/Ui/Button"
import IntroSection from "../../components/Home/IntroSection"
import StatsSection from "../../components/Home/StatsSection"
import FeaturesSection from "../../components/Home/FeaturesSection"
import PopularCoursesSection from "../../components/Home/PopularCoursesSection"

const Home = () => {
  return (
    <section className="bg-background">
      <Container className="">
        <IntroSection />
      </Container>

      <StatsSection />
      <Container>
        <FeaturesSection />
      </Container>
      <PopularCoursesSection />
    </section>
  )
}

export default Home
