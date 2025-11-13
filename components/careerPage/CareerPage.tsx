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
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-2">Join Us</p>
        <h1 className="text-4xl font-bold">
          Available <span className="text-orange-500">Jobs</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="border-b border-border mb-8" />

      {/* Job Listings */}
      <div className="space-y-8">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
