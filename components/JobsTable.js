function JobsTable(params) {
    return (

        <>
        
        <div className="container mt-5 mb-5">
        <h1>Manege Jobs</h1>
        <div className="card-body">
          <table class="rwd-table">
            <tbody>
              <tr>
                <th>JobID</th>
                <th>Job title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Job Type</th>
                <th>Assigned to</th>
                <th>Action</th>
              </tr>

            

            </tbody>
          </table>
        </div>
      </div>

        </>
    )
}

export default JobsTable;