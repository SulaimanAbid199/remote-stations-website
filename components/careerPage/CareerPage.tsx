import { JobCard } from "./JobCard"
import { JOBS } from "./jobs"

interface Job {
  id: number
  title: string
  type: string
  experience: string
  location: string
}


export function CareerPage() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-8">
        <p className="text-sm text-[#767676] mb-2">Join Us</p>
        <h1 className="text-3xl text-[#434343] font-bold">
          Available <span className="text-[#FF6600]">Jobs</span>
        </h1>
      </div>
      <div className="border-b border-gray-200 mb-8" />

      <div className="space-y-8">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
