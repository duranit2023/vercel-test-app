import Navbar from "@/components/Navbar"
import UserCreate from "@/components/UserCreate"


function createRole({ roles }) {
  return (
    <>
      <Navbar />
      <UserCreate />
    </>
  )
}

export default createRole
