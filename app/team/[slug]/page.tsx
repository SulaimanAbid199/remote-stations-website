
// import { teamMembers } from "@/components/TeamPage/teamDetailPage/teamMembers"
// import { Portfolio } from "@/components/TeamPage/teamDetailPage/Portfolio"

// interface TeamDetailPageProps {
//   params: {
//     slug: string
//   }
// }

// export default function TeamDetailPage({ params }: TeamDetailPageProps) {
//   const member = teamMembers.find((m) => m.slug === params.slug)

//   if (!member) return <div>Member not found</div>

//   return <Portfolio member={member} />
// }


import { teamMembers } from "@/components/TeamPage/teamDetailPage/teamMembers"
import { Portfolio } from "@/components/TeamPage/teamDetailPage/Portfolio"

interface TeamDetailPageProps {
  params: { slug: string }
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  // If params is a promise, you can await it
  const { slug } = await params  // ✅ unwrap the Promise

  // const member = teamMembers.find((m) => m.slug === slug)

  // if (!member) return <div>Member not found</div>

  // return <Portfolio member={member} />


  const member = teamMembers.find((m) => m.slug === slug)

if (!member) return <div>Member not found</div>

// Ensure education is always defined
return <Portfolio member={{ ...member, education: member.education ?? { degree: '', university: '', date: '' } }} />

}
