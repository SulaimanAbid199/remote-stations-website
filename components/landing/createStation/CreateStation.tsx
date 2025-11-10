"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
// import { Button } from "@/components/ui/button"

interface Step {
  id: number
  title: string
  isExpanded: boolean
}

export default function CreateStation() {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, title: "Tell Your Requirements", isExpanded: false },
    { id: 2, title: "Work With Hand", isExpanded: false },
    { id: 3, title: "Station Locked. Guaranteed", isExpanded: false },
  ])

  const toggleStep = (id: number) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, isExpanded: !step.isExpanded } : step)))
  }

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-3 text-pretty">Create Station</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Save your time, efforts and cost. Build your Remote Station in 3 simple steps.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-foreground leading-tight">{step.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-sm font-semibold">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:bg-muted transition-colors"
                      aria-label={step.isExpanded ? "Collapse" : "Expand"}
                    >
                      {step.isExpanded ? (
                        <Minus className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-4 h-px bg-border" />
              </div>
            ))}
          </div>

          {/* Center - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="/assets/create/create.svg"
                alt="Modern workspace setup"
                className="w-full h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right - Description */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Share your project details with one of our industry experts. A dedicated professional from our team will
              work with you to understand your goals, technical needs, and team dynamics.
            </p>
                    <button className="w-fit px-8 py-6 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
