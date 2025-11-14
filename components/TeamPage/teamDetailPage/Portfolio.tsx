
import { TeamMember } from "./teamMembers"

export function Portfolio({ member }: { member: TeamMember }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center py-12">
          <div className="relative w-32 h-32 mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-white"
            />
          </div>

          <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
          <p className="text-lg text-slate-600 mb-6">{member.position}</p>

          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  )
}

