"use client"

import { useRouter } from "next/navigation"
import { JOBS } from "@/components/careerPage/jobs"
import Application from "@/components/careerPage/application/Application"


interface JobDetailPageProps {
  params: { slug: string }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const router = useRouter()
  const job = JOBS.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  )

  if (!job) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600">Job not found</h1>
      </div>
    )
  }

  return (
    <>
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.push("/career")}
        className="flex items-center text-sm text-orange-500 font-medium hover:underline mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Jobs
      </button>

      {/* Job Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{job.title}</h1>

      {/* Job Info */}
      <div className="space-y-1 text-sm text-muted-foreground mb-10">
        <p>
          <span className="font-semibold text-foreground">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-semibold text-foreground">Job Type:</span> {job.type}
        </p>
        <p>
          <span className="font-semibold text-foreground">Experience:</span> {job.experience}
        </p>
        <p>
          <span className="font-semibold text-foreground">Positions:</span> {job.positions}
        </p>
      </div>

      {/* Job Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Job Summary:</h2>
        <p className="text-muted-foreground leading-relaxed">{job.summary}</p>
      </div>

      {/* Required Skills */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Required Skills and Qualifications:</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {job.qualifications.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>

      {/* Why Join Us */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Why Join Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {job.benefits.map((b, index) => (
            <li key={index}>{b}</li>
          ))}
        </ul>
      </div>
    </div>

    <Application/>

    </>
  )
}
