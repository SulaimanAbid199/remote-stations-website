export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  slug: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Umar Aziz",
    position: "Head of Backend",
    image: "/assets/team/member1.svg",
    slug: "umar-aziz",
  },
  {
    id: "2",
    name: "Abdul Basit Javed",
    position: "Head of DevOps",
    image: "/assets/team/member2.svg",
    slug: "abdul-basit-javed",
  },
  {
    id: "3",
    name: "Rana Faizan Ahmad",
    position: "Head of UI/UX",
    image: "/assets/team/member3.svg",
    slug: "rana-faizan-ahmad",
  },
  {
    id: "4",
    name: "Umer Saleem",
    position: "Head of Quality Assurance",
    image: "/assets/team/member4.svg",
    slug: "umer-saleem",
  },
  {
    id: "5",
    name: "Aqeel Javed",
    position: "Head of Frontend",
    image: "/assets/team/member5.svg",
    slug: "aqeel-javed",
  },
  {
    id: "6",
    name: "Sara Majid",
    position: "Head of Design",
    image: "/assets/team/member6.svg",
    slug: "sara-majid",
  },
]
