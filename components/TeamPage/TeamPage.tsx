
import TeamCard from "./TeamCards"

interface TeamMember {
  id: string
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Umar Aziz",
    position: "Head of Backend",
    image: "/assets/team/member1.svg",
  },
  {
    id: "2",
    name: "Abdul Basit Javed",
    position: "Head of DevOps",
   image: "/assets/team/member2.svg",
  },
  {
    id: "3",
    name: "Rana Faizan Ahmad",
    position: "Head of UI/UX",
   image: "/assets/team/member3.svg",
  },
  {
    id: "4",
    name: "Umer Saleem",
    position: "Head of Quality Assurance",
   image: "/assets/team/member4.svg",
  },
  {
    id: "5",
    name: "Aqeel Javed",
    position: "Head of Frontend",
    image: "/assets/team/member5.svg",
  },
  {
    id: "6",
    name: "Sara Majid",
    position: "Head of Design",
  image: "/assets/team/member6.svg",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#434343]">
            Our <span className="text-[#FF6600]">Team</span>
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </main>
  )
}
