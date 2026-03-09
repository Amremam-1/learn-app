import Container from "../../components/Ui/Container"
import React from "react"
import Button from "../../components/Ui/Button"
import IntroSection from "../../components/Home/IntroSection"
import StatsSection from "../../components/Home/StatsSection"
import FeaturesSection from "../../components/Home/FeaturesSection"

const Home = () => {
  return (
    <section>
      <Container className="">
        <IntroSection />
      </Container>

      <StatsSection />
      <Container>
        <FeaturesSection />
      </Container>
    </section>
  )
}

export default Home
