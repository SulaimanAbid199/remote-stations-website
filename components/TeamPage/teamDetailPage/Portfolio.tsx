interface ExperienceItem {
  role: string;
  icon: string;
  company: string;
  duration: string;
  bullets: string[];
}

interface EducationItem {
  degree: string
  university: string
  date: string
  icon?: string
}


interface Member {
  name: string;
  position: string;
  image: string;
  cover: string
  skills: string[];
  domains: string[];
  bio: string;
  experience: ExperienceItem[];
  education: EducationItem
}

interface PortfolioProps {
  member: Member;
}

export function Portfolio({ member }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">


      <div className="relative w-full">

        <div className="w-full h-[260px] md:h-[320px] overflow-hidden">
          <img
            src={member.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="w-full bg-white rounded-t-[40px] -mt-16 pb-10 pt-20 text-center">

          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl -mt-28">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl text-[#434343] font-bold mt-4">{member.name}</h1>
          <p className="text-[767676] mb-4">{member.position}</p>


          <button className="px-8 py-3 bg-[#FF6600] text-white rounded-full hover:bg-[#FF6600] transition">
            Hire Now
          </button>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {member.skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-50 border rounded-full border-[#E5E5E5] text-sm text-[#434343]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DOMAINS */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-4">Domains & Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {member.domains.map((domain: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2  border border-orange-300 rounded-full text-sm text-[#FF6600]"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>

      {/* BIO */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white shadow-md rounded-3xl p-8 border border-gray-100">
          <h2 className="text-lg text-[#434343] font-semibold mb-4">Bio</h2>
          <p className=" leading-7 text-sm">{member.bio}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 mb-20">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="flex flex-col gap-6">
          {member.experience.map((exp: ExperienceItem, i: number) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-3xl p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                {/* Left side: Icon + Role + Company */}
                <div className="flex items-center gap-4">
                  <img
                    src={exp.icon} // make sure each ExperienceItem has an 'icon' field
                    alt={exp.role}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <p className="text-slate-600">{exp.company}</p>
                  </div>
                </div>

                {/* Right side: Duration */}
                <p className="text-orange-500 font-medium whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 text-slate-600">
                {exp.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    • <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-6 mt-12 mb-20">
        <h2 className="text-lg font-semibold mb-6">Education</h2>

        {member.education && (
          <div className="bg-white shadow-md rounded-3xl p-6 border border-gray-100 flex items-start gap-4">
            {member.education.icon && (
              <img
                src={member.education.icon}
                alt={member.education.degree}
                className="w-10 h-10 object-contain"
              />
            )}
            <div>
              <h3 className="font-bold text-lg">{member.education.degree}</h3>
              <p className="text-slate-600">{member.education.university}</p>
              <p className="text-orange-500 font-medium">{member.education.date}</p>
            </div>
          </div>
        )}
      </div>



    </div>
  );
}
