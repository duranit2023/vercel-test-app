import JobCreate from "@/components/JobCreate"
import Navbar from "@/components/Navbar"


function createJob({ roles }) {
  return (
    <>
      <Navbar />
      <JobCreate />
    </>
  )
}

export default createJob
