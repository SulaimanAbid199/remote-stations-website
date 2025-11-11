import Image from 'next/image'

interface CompetencyCard {
  id: string
  title: string
  description: string
  image: string
}

const competencies: CompetencyCard[] = [
  {
    id: '1',
    title: 'AI & Data Science',
    description: 'Building intelligent, data-driven solutions that transform complex information into actionable insights and seamless user experiences.',
    image: "/assets/Competencies/compet1.svg"

  },
  {
    id: '2',
    title: 'Frontend',
    description: 'Crafting responsive, user-friendly interfaces that deliver seamless experiences across all devices.',
    image: "/assets/Competencies/compet2.svg"
  },
  {
    id: '3',
    title: 'Backend',
    description: 'Building robust and scalable server-side systems to power your applications securely and efficiently.',
    image: "/assets/Competencies/compete3.svg"
  },
  {
    id: '4',
    title: 'UI UX',
    description: 'Crafting intuitive, user-centered designs that elevate experiences, foster engagement, and bring ideas to life.',
    image: "/assets/Competencies/compete4.svg"
  },
  {
    id: '5',
    title: 'Project Excellence',
    description: 'Delivering flawless, data-driven products through rigorous testing and structured project management, from initial concept to successful completion.',
    image: "/assets/Competencies/compete5.svg"
  },
  {
    id: '6',
    title: 'DevOps',
    description: 'Streamlining development and operations for faster deployments, better collaboration, and continuous integration.',
    image: "/assets/Competencies/compet6.svg"
  }
]

export function CompetenciesSection() {
  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">
            Our <span className="text-[#FF6600]">Competencies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency) => (
            <div
              key={competency.id}
              className="flex flex-col bg-card rounded-4xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-64 bg-muted overflow-hidden">
                <Image
                  src={competency.image || "/placeholder.svg"}
                  alt={competency.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-md font-semibold text-[#434343] mb-3">
                  {competency.title}
                </h3>
                <p className="text-sm text-[#767676] leading-relaxed text-muted-foreground flex-1">
                  {competency.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}