import Navbar from "@/components/Navbar"
import RoleCreate from "@/components/RoleCreate"

function createRole({ roles }) {
  return (
    <>
      <Navbar />
      <RoleCreate />
    </>
  )
}

export default createRole
