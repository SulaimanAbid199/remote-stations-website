export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      year: "2018",
      details: "GPA: 3.8/4.0",
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Education</h2>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-border pl-6">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="text-muted-foreground">{edu.school}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-accent">{edu.year}</span>
              <span className="text-sm text-muted-foreground">• {edu.details}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
