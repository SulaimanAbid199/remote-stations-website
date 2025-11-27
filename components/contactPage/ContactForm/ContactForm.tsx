"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  slots: {
    date: string;
    time: string;
  }[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    slots: [
      { date: "", time: "" },
      { date: "", time: "" },
      { date: "", time: "" },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    phoneNumber?: string;
    email?: string;
    slots?: string;
  }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof validationErrors];
        return newErrors;
      });
    }

    if ((name === "date" || name === "time") && validationErrors.slots) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.slots;
        return newErrors;
      });
    }

    if (name === "date" || name === "time") {
      if (index === undefined) return;

      const updatedSlots = [...formData.slots];
      updatedSlots[index][name] = value;

      setFormData((prev) => ({
        ...prev,
        slots: updatedSlots,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTimeSlots = () => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      const hour = i.toString().padStart(2, "0");
      arr.push(`${hour}:00`);
    }
    return arr;
  };

  const timeSlots = generateTimeSlots();
  const today = new Date().toISOString().split("T")[0];

  const validateForm = (): boolean => {
    const errors: {
      name?: string;
      phoneNumber?: string;
      email?: string;
      slots?: string;
    } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    const completeSlots = formData.slots.filter(
      (slot) => slot.date.trim() && slot.time.trim()
    );
    if (completeSlots.length === 0) {
      errors.slots =
        "At least one time slot with both date and time is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setValidationErrors({});

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("phoneNumber", formData.phoneNumber.trim());
      formDataToSend.append("email", formData.email.trim());

      if (formData.message.trim()) {
        formDataToSend.append("message", formData.message.trim());
      }

      const completeSlots = formData.slots.filter(
        (slot) => slot.date.trim() && slot.time.trim()
      );

      completeSlots.forEach((slot, index) => {
        formDataToSend.append(`slot_${index + 1}_date`, slot.date.trim());
        formDataToSend.append(`slot_${index + 1}_time`, slot.time.trim());
      });

      // Add access key
      formDataToSend.append(
        "access_key",
        "4c233f2f-8ae6-4b57-a5c1-6a3877c790e7"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");

        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
          slots: [
            { date: "", time: "" },
            { date: "", time: "" },
            { date: "", time: "" },
          ],
        });

        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg ${
              validationErrors.name ? "border-red-500" : "border-gray-200"
            }`}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Enter your phone"
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg ${
              validationErrors.phoneNumber
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
          {validationErrors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg ${
            validationErrors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
        {validationErrors.email && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
        )}
      </div>

      {formData.slots.map((slot, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Slot {index === 0 && <span className="text-red-500">*</span>}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Date */}
            <input
              type="date"
              name="date"
              value={slot.date || today}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white"
            />

            {/* Time */}
            <div key={index} className="relative">
              <select
                name="time"
                value={slot.time}
                onChange={(e) => handleChange(e, index)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white appearance-none"
              >
                <option value="" disabled hidden>
                  Select Time
                </option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      ))}
      {validationErrors.slots && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.slots}</p>
      )}

      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Tell Us More <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Type your message..."
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF6600] cursor-pointer hover:bg-[#FF6600] disabled:bg-orange-400 text-white font-semibold py-4 rounded-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <AnimatePresence>
        {submitStatus === "success" && (
          <p className="text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 text-center">Failed. Please try again.</p>
        )}
      </AnimatePresence>
    </form>
  );
}
