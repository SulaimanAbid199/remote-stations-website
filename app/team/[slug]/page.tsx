

import { teamMembers } from "@/components/TeamPage/teamDetailPage/teamMembers"
import { Portfolio } from "@/components/TeamPage/teamDetailPage/Portfolio"
interface TeamDetailPageProps {
  params: { slug: string }
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = await params
  const member = teamMembers.find((m) => m.slug === slug)
  if (!member) return <div>Member not found</div>
  return <Portfolio member={{ ...member, education: member.education ?? { degree: '', university: '', date: '' } }} />

}
