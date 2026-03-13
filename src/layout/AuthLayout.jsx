import { Outlet } from "react-router-dom"
import Container from "../components/Ui/Container"

const AuthLayout = () => {
  return (
    <div className="bg-background min-h-screen text-textCo w-full flex items-center justify-center">
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default AuthLayout
