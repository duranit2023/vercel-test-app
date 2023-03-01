import Link from "next/link";

function RolesTable(params) {
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

                
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default RolesTable;