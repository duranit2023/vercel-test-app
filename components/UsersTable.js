import Link from "next/link";

function UsersTable(params) {
    return (
        <>
            <div className="container mt-5 mb-5">
                <h1>User Management</h1>
                <div className="card-body">
                <Link href={'/createUser'}><button className="btn btn-success">Create New User</button></Link>
                <table class="rwd-table">
                    <tbody>
                    <tr>
                        <th>UserID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>


                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default UsersTable;