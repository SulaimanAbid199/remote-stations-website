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
    image: '/placeholder.svg?key=kpt45'
  },
  {
    id: '2',
    title: 'Frontend',
    description: 'Crafting responsive, user-friendly interfaces that deliver seamless experiences across all devices.',
    image: '/placeholder.svg?key=qfl98'
  },
  {
    id: '3',
    title: 'Backend',
    description: 'Building robust and scalable server-side systems to power your applications securely and efficiently.',
    image: '/placeholder.svg?key=00hl7'
  },
  {
    id: '4',
    title: 'UI UX',
    description: 'Crafting intuitive, user-centered designs that elevate experiences, foster engagement, and bring ideas to life.',
    image: '/placeholder.svg?key=wt75h'
  },
  {
    id: '5',
    title: 'Project Excellence',
    description: 'Delivering flawless, data-driven products through rigorous testing and structured project management, from initial concept to successful completion.',
    image: '/placeholder.svg?key=0lomb'
  },
  {
    id: '6',
    title: 'DevOps',
    description: 'Streamlining development and operations for faster deployments, better collaboration, and continuous integration.',
    image: '/placeholder.svg?key=t70nl'
  }
]

export function CompetenciesSection() {
  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Our <span className="text-orange-500">Competencies</span>
          </h2>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency) => (
            <div
              key={competency.id}
              className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src={competency.image || "/placeholder.svg"}
                  alt={competency.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {competency.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
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