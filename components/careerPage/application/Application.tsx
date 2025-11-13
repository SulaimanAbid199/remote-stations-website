"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface FormData {
  name: string
  phone: string
  email: string
  resume: File | null
}

export default function Application() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    resume: null,
  })

  const [resumeFileName, setResumeFileName] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }))
      setResumeFileName(file.name)
    }
  }

  const handleClearFile = () => {
    setFormData((prev) => ({
      ...prev,
      resume: null,
    }))
    setResumeFileName("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Form submitted:", formData)
      alert("Application submitted successfully!")
      setFormData({ name: "", phone: "", email: "", resume: null })
      setResumeFileName("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-4xl shadow-2xl mt-10 mb-32 p-8 md:p-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#2A2A2A]">Apply here</h1>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 md:gap-12">
        <div className="flex items-center justify-center">
          <div className="w-full aspect-square relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/assets/career/apply.svg"
              alt="Application illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mr-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 placeholder-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                 
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 placeholder-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                 
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-3  placeholder-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF6600] focus:border-transparent transition"
               
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex placeholder-gray-200 items-center justify-between px-4 py-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-gray-200">{resumeFileName || "mycv.pdf"}</span>
                </label>

                {resumeFileName && (
                  <button
                    type="button"
                    onClick={handleClearFile}
                    className="absolute right-3  top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition"
                    aria-label="Clear file"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF6600] hover:bg-[#FF6600] text-white font-semibold py-3 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
