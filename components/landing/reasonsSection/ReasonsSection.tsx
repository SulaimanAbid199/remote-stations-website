import ReasonCard from "./ReasonCard"

const reasons = [
  {
    id: 1,
    icon: "/assets/choose/choose.svg",
    title: "Client-Specific Training",
    description: "Professional environment ensures stability and uninterrupted work.",
  },
  {
    id: 2,
    icon: "/assets/choose/choose1.svg",
    title: "Dedicated Resource",
    description: "Full dedication to your project for quality and timely delivery.",
  },
  {
    id: 3,
    icon: "/assets/choose/choose2.svg",
    title: "No Extra Time Charges",
    description: "Transparent pricing, no hidden overtime fees.",
  },
  {
    id: 4,
    icon: "/assets/choose/choose3.svg",
    title: "No Multiple Jobs",
    description: "Exclusive focus on your project ensures efficiency.",
  },
  {
    id: 5,
    icon: "/assets/choose/choose4.svg",
    title: "Trial Period",
    description: "Risk-free trial to evaluate before commitment.",
  },
  {
    id: 6,
    icon: "/assets/choose/choose5.svg",
    title: "Client-Specific Training",
    description: "Tailored training to meet your project needs.",
  },
  {
    id: 7,
    icon: "/assets/choose/choose6.svg",
    title: "Best Rates",
    description: "Professional environment ensures stability and uninterrupted work.",
  },
  {
    id: 8,
    icon: "/assets/choose/choose7.svg",
    title: "Weekly Status Report",
    description: "Regular updates ensure transparency and accountability.",
  },
  {
    id: 9,
    icon: "/assets/choose/choose8.svg",
    title: "Cross Domain Support",
    description: "Expertise across domains, providing complete solutions.",
  },
  {
    id: 10,
    icon: "/assets/choose/choose10.svg",
    title: "Partnership Benefits",
    description: "Risk-free trial to evaluate before commitment.",
  },
]

export default function ReasonsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#767676] text-sm font-medium mb-2">Structure That Mirrors Your In-House Culture</p>
          <h2 className="text-3xl sm:text-3xl font-bold">
            <span className="text-[#434343]">10</span> <span className="text-[#FF6600]">Reasons</span>{" "}
            <span className="text-[#434343]">To Choose Station</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <ReasonCard key={reason.id} icon={reason.icon} title={reason.title} description={reason.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
