import Container from "../../components/Ui/Container"
import React from "react"
import Button from "../../components/Ui/Button"

const Home = () => {
  return (
    <section>
      <Container className="bg-primary py-3">
        <h1>Master Your Future</h1>
      </Container>
      <Button>Get Started Now →</Button>

      <Button variant="secondary">View All Courses</Button>
    </section>
  )
}

export default Home
