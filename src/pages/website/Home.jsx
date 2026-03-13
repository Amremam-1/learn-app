import Container from "../../components/Ui/Container"
import React from "react"
import Button from "../../components/Ui/Button"
import IntroSection from "../../components/Home/IntroSection"
import StatsSection from "../../components/Home/StatsSection"
import FeaturesSection from "../../components/Home/FeaturesSection"
import PopularCoursesSection from "../../components/Home/PopularCoursesSection"
import Testimonials from "../../components/Home/testimonials"
import CTASection from "../../components/Home/CTASection"
import Footer from "../../components/Footer"
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

      <Container>
        <Testimonials />
        <CTASection />
      </Container>

      <Footer  />
    </section>
  )
}

export default Home
