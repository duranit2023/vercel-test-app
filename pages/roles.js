import Navbar from "@/components/Navbar"
import RolesTable from "@/components/RolesTable"

function roles({ roles }) {
  return (
    <>
      <Navbar />
      {
        roles.map(role =>{
          return(
              <RolesTable key = {role} role = {role}  />

          )
        })
      }
      
    </>
  )
}

export default roles

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/roles");
  const roles = await response.json();
  return {
    props: {
      roles: roles
    }
  }
}
