"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  phoneNumber: string
  email: string
  slot: string
  time: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    slot: "",
    time: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        slot: "",
        time: "",
        message: "",
      })

      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fieldVariants}
        custom={0}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 placeholder-gray-300"
              required
            />
          </div>
        </div>
      </motion.div>
      <motion.div variants={fieldVariants} custom={1} initial="hidden" animate="visible">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 placeholder-gray-300"
          required
        />
      </motion.div>


      <motion.div variants={fieldVariants} custom={2} initial="hidden" animate="visible">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Slot</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="date"
              name="slot"
              value={formData.slot || today}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-orange-500 focus:ring-1 transition text-gray-800"
              placeholder="Select Date"
              required
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-orange-500 focus:ring-1 transition ${!formData.time ? "text-gray-300" : "text-gray-800"}`}
              required
            >
              <option value="" disabled hidden>Select Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
            </select>
          </div>
        </div>
      </motion.div>


      <motion.div variants={fieldVariants} custom={3} initial="hidden" animate="visible">
        <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us More</label>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Type your message..."
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 resize-none placeholder-gray-300"
          required
        />
      </motion.div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#FF6600] hover:bg-[#FF6600] disabled:bg-orange-400 text-white font-semibold py-4 rounded-full transition duration-200 transform disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-green-600 text-center font-medium"
          >
            Message sent successfully!
          </motion.p>
        )}
        {submitStatus === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-600 text-center font-medium"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
