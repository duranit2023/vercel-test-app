import Link from "next/link";

function RolesTable({role}) {
    return (
        <>
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

                    
                       
                    }
                
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default RolesTable;

