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

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      alert("Application submitted successfully!")
      setFormData({ name: "", phone: "", email: "", resume: null })
      setResumeFileName("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Apply here</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left side - Image */}
        <div className="flex items-center justify-center">
          <div className="w-full aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="/person-holding-phone.jpg"
              alt="Application illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone Number Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Your name"
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
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="Your email"
              />
            </div>

            {/* Resume/CV Upload */}
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
                  className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-gray-500">{resumeFileName || "mycv.pdf"}</span>
                </label>

                {/* Clear button */}
                {resumeFileName && (
                  <button
                    type="button"
                    onClick={handleClearFile}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition"
                    aria-label="Clear file"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
