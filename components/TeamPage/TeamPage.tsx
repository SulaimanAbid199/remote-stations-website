
import { teamMembers } from "./teamDetailPage/teamMembers"
import TeamCard from "./TeamCards"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto">
    

         <h1 className="text-center text-3xl md:text-3xl font-bold leading-tight text-[#434343] mb-6 mt-20">
                Our <span className="text-[#FF6600]">Team</span>
              </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </main>
  )
}
