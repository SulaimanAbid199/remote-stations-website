"use client"

import { usePathname, useRouter } from "next/navigation"
import { JOBS } from "@/components/careerPage/jobs"
import Application from "@/components/careerPage/application/Application"
import Image from "next/image"

export default function JobDetailPage() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname.split("/").pop()

  const job = JOBS.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === slug
  )

  if (!job) {
    return (
      <>
        <div className="w-full max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600">Job not found</h1>
        </div>
        <Application />
      </>
    )
  }

  return (
    <div className="bg-[#FBFBFB] pt-30 pb-20">
      <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto max-w-[1600px]">
        <button
          onClick={() => router.push("/career")}
          className="flex items-center gap-2 text-sm font-sm text-[#282938] hover:underline mb-8 cursor-pointer"
        >
          <Image
            src="/assets/career/back.svg"
            alt="Back arrow"
            width={18}
            height={18}
          />
          Back to Jobs
        </button>
        <h1 className="text-2xl md:text-2xl text-[#434343] font-semibold mb-6">{job.title}</h1>
        <div className="space-y-1 text-sm text-muted-foreground mb-10">
          <p>
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold ">Job Type:</span> {job.type}
          </p>
          <p>
            <span className="font-semibold ">Experience:</span> {job.experience}
          </p>
          <p>
            <span className="font-semibold">Positions:</span> {job.positions}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-md font-semibold mb-1">Job Summary:</h2>
          <p className="text-sm">{job.summary}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-md font-semibold mb-1">Required Skills and Qualifications:</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            {job.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold mb-1">Why Join Us?</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            {job.benefits.map((b, index) => (
              <li key={index}>{b}</li>
            ))}
          </ul>
        </div>
      <Application />
      </div>
    </div>
  )
}
