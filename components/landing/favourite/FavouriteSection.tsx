import CircularStat from "./CircularStat"

export default function FavouriteSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            {/* Left Content Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                That's why we're list of <span className="text-orange-500">favorites</span>.
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Most of the projects fails due to a lack of skills and domain knowledge. Choose our talent, and we're
                committed to providing experts with the right skills and domain knowledge, ensuring your project's
                success is guaranteed
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <CircularStat
                  percentage={100}
                  label="Work Success"
                  color="text-green-600"
                  borderColor="border-green-600"
                />
                <CircularStat
                  percentage={80}
                  label="Skill Scoring"
                  color="text-orange-500"
                  borderColor="border-orange-500"
                />
                <CircularStat
                  percentage={60}
                  label="Domain Scoring"
                  color="text-yellow-500"
                  borderColor="border-yellow-500"
                />
              </div>
            </div>

            {/* Right Image Section */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-96">
                <img
                  src="/testimonial-1.png"
                  alt="Professional team member"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
