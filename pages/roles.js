import Navbar from "@/components/Navbar"
import RolesTable from "@/components/RolesTable"
import Link from "next/link"

function roles({roles}) {
 
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
            <h1>Manage User Roles</h1>
            <Link href={'/createRole'}><button className="btn btn-success">Create New Role</button></Link>
            <div className="card-body">
                <table class="rwd-table">
                    <tbody>
                    <tr>
                        <th>RoleID</th>
                        <th>Role Name</th>
                        <th>Action</th>
                    </tr>
                    {
                        roles && roles.map(role => {
                        return (
                            <tr key={role}>
                            <td>
                                {role.id}
                            </td>
                            <td>
                                {role.name}
                            </td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                            </td>
                            </tr>

                        )
                        })
                    }
                
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default roles


export async function getServerSideProps() {
  const response = await fetch("https://vercel-test-app-rose.vercel.app/api/roles");
  const roles = await response.json();
  return {
    props: {
      roles: roles
    }
  }
}