import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  position: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center  py-20 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Profile Image */}
      <div className="mb-6 mt-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mb-10">
        <h3 className="text-lg font-bold text-[#434343] mb-1">{member.name}</h3>
        <p className="text-sm text-[#767676]">{member.position}</p>
      </div>
    </div>
  )
}
