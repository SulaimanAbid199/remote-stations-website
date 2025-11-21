
export interface ExperienceItem {
  role: string
  company: string
  duration: string
  bullets: string[]
  icon: string
}

export interface EducationItem {
  degree: string
  university: string
  date: string
  icon?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  cover: string
  slug: string
  skills: string[]
  domains: string[]
  bio: string
  experience: ExperienceItem[]
  education?: EducationItem
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Umar Aziz",
    position: "Head of Backend",
    image: "/assets/team/member1.svg",
    cover: "/assets/team/cover1.svg",
    slug: "umar-aziz",

    skills: [
      "J2SE",
      "J2EE",
      "JSF",
      "Hibernate",
      "Spring",
      "Gerrit",
      "JPA",
      "Docker",
      "Transaction Management",
      "Remoting Service",
      "Jenkins",
      "GIT",
    ],

    domains: ["Fintech", "Telecom", "ERP"],

    bio: `A seasoned Solutions Architect with 15+ years of experience in designing and delivering scalable, secure, and innovative technology solutions across FinTech, banking, and enterprise domains. Expertise includes microservices architecture, cloud platforms (AWS, Azure), API-driven integrations, and regulatory compliance. Proven track record of leading cross-functional teams to build complex financial systems, digital banking platforms, and enterprise-grade applications. Strong background in Java, Spring frameworks, and DevOps practices, with a passion for driving innovation and operational excellence. Adept at bridging the gap between business needs and technical solutions to achieve impactful outcomes.`,

    experience: [
      {
        role: "Solutions Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Solutions Architect (Part Time)",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Solutions Architect (Part Time)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Solutions Architect",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Solutions Architect",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Solutions Architect",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },

      {
        role: "Technical Lead",
         icon: "/assets/team/icon2.svg",
        company: "YAP",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Led technical teams to build and maintain YAP’s fintech platform.",
          "Managed core product development and transaction modules.",
          "Collaborated with business stakeholders to align product development with user needs.",
          "Oversaw code quality, system integration, and deployment strategies.",
          "Implemented new features and enhancements based on market trends.",
        ],
      },

      {
        role: "Manager Core Product Development ",
        icon: "/assets/team/icon3.svg",
        company: "Inov8 Limited Pakistan",
        duration: "Mar 2013 - Jan 2018",
        bullets: [
          "Led the development of FonePay, a payment ecosystem.",
          "Integrated with utility bill payment systems, telecom systems, and core banking systems.",
          "Managed integration with Zong’s USSD for branchless banking.",
          "Oversaw the development of core transactions and payment systems.",
          "Led the development team in designing and implementing payment modules.",
        ],
      },


      {
        role: "Senior Software Engineer",
        icon: "/assets/team/icon4.svg",
        company: "TGI Pakistan",
        duration: "Oct 2011 - Feb 2013",
        bullets: [
          "Developed a biometric card registration system with biometric device integration.",
          "Led a Flex development team and provided training to junior developers.",
          "Designed and developed various application modules, from front-end to back-end.",
          "Integrated email notification services and schedulers.",
          "Developed custom components using Flex for the registration system."
        ],
      },

      {
        role: "Senior Software Engineer",
        icon: "/assets/team/icon4.svg",
        company: "TkXel",
        duration: "Oct 2011 - Feb 2013",
        bullets: [
          "Developed the 'Order Local' mobile app for Android and iOS using Titanium.",
          "Integrated PayPal for online payment and Tropo for IVR-based orders.",
          "Created a CMS to manage restaurant and takeaway content for the app.",
          "Worked on both front-end and back-end development.",
          "Successfully launched the iPhone app on the Apple App Store."
        ],
      },

      {
        role: "Senior Software Engineer",
        icon: "/assets/team/icon4.svg",
        company: "NetSol Technologies Inc.",
        duration: "Jul 2010 - Jan 2011",
        bullets: [
          "Developed key modules for NetSol’s Financial Suite, a web-based leasing and finance solution.",
          "Implemented business logic for leasing and financing operations.",
          "Participated in CMMI activities and contributed to documentation.",
          "Involved in functional and requirement specifications for various modules.",
          "Worked on integrating multiple financial systems into a unified solution."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },


   {
    id: "2",
    name: "Abdul Basit Javed",
    position: "Head of DevOps",
    image: "/assets/team/member2.svg",
    cover: "/assets/team/cover1.svg",
    slug: "abdul-basit-javed",

    skills: [
      "System Administration",
      "Ruby, NodeJS",
      "Jenkins",
      "Gitlab",
      "DockerS",
      "Concord",
      "CI/CD Implementation",
      "DevOps Automation Tools",
      "Sonar",
      "Azure DevOps",
      "Hygieia",
      "Cloud Platforms (Azure Cloud, OpenStack)",
      "Grafana",
      "OpenNMS",
      "Git",
      "Nagios",
      "Linux Distros Management (CentOS, RHEL, Ubuntu, SUSE, Debian)",
      "Security Enhanced Linux (SELinux), Iptables",
      "Nginx, Squid Proxy Server, Mail Server (Sendmail/Postfix), DHCP Server",
      "Grafana",
      "OpenNMS"
    ],

    domains: ["Azure", "AWS", "GCP", "Hetzner", "Digital Ocean"],

    bio: `With over 10 years of experience in system administration, CICD implementation, security, and support, I specialize in DevOps and automation tools like Azure DevOps, Jenkins, Kubernetes, Docker, and Terraform. I have expertise in cloud administration, virtualization (Azure, VMware, OpenStack), and Linux systems management. My experience extends to server maintenance, application deployment, and PCI-DSS certification. I’ve also worked with tools like SonarQube, Ant, Maven, and have a strong background in systems monitoring and J2EE application servers.`,

    experience: [
      {
        role: "Devops Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Principal DevOps Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Technical Lead (SCM & Systems Security)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Assistant Manager SCM",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Senior SCM Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Mis Support Engineer",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },


    {
    id: "3",
    name: "Rana Faizan Ahmad",
    position: "Squad Leader of UI/UX",
    image: "/assets/team/member3.svg",
    cover: "/assets/team/cover1.svg",
    slug: "rana-faizan-ahmad",

    skills: [
      "System Administration",
      "Ruby, NodeJS",
      "Jenkins",
      "Gitlab",
      "DockerS",
      "Concord",
      "CI/CD Implementation",
      "DevOps Automation Tools",
      "Sonar",
      "Azure DevOps",
      "Hygieia",
      "Cloud Platforms (Azure Cloud, OpenStack)",
      "Grafana",
      "OpenNMS",
      "Git",
      "Nagios",
      "Linux Distros Management (CentOS, RHEL, Ubuntu, SUSE, Debian)",
      "Security Enhanced Linux (SELinux), Iptables",
      "Nginx, Squid Proxy Server, Mail Server (Sendmail/Postfix), DHCP Server",
      "Grafana",
      "OpenNMS"
    ],

    domains: ["Azure", "AWS", "GCP", "Hetzner", "Digital Ocean"],

    bio: `With over 10 years of experience in system administration, CICD implementation, security, and support, I specialize in DevOps and automation tools like Azure DevOps, Jenkins, Kubernetes, Docker, and Terraform. I have expertise in cloud administration, virtualization (Azure, VMware, OpenStack), and Linux systems management. My experience extends to server maintenance, application deployment, and PCI-DSS certification. I’ve also worked with tools like SonarQube, Ant, Maven, and have a strong background in systems monitoring and J2EE application servers.`,

    experience: [
      {
        role: "Devops Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Principal DevOps Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Technical Lead (SCM & Systems Security)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Assistant Manager SCM",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Senior SCM Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Mis Support Engineer",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },





     {
    id: "4",
    name: "Umer Saleem",
    position: "Squad Leader of Quality Assurance",
    image: "/assets/team/member4.svg",
    cover: "/assets/team/cover1.svg",
    slug: "umer-saleem",

    skills: [
      "System Administration",
      "Ruby, NodeJS",
      "Jenkins",
      "Gitlab",
      "DockerS",
      "Concord",
      "CI/CD Implementation",
      "DevOps Automation Tools",
      "Sonar",
      "Azure DevOps",
      "Hygieia",
      "Cloud Platforms (Azure Cloud, OpenStack)",
      "Grafana",
      "OpenNMS",
      "Git",
      "Nagios",
      "Linux Distros Management (CentOS, RHEL, Ubuntu, SUSE, Debian)",
      "Security Enhanced Linux (SELinux), Iptables",
      "Nginx, Squid Proxy Server, Mail Server (Sendmail/Postfix), DHCP Server",
      "Grafana",
      "OpenNMS"
    ],

    domains: ["Azure", "AWS", "GCP", "Hetzner", "Digital Ocean"],

    bio: `With over 10 years of experience in system administration, CICD implementation, security, and support, I specialize in DevOps and automation tools like Azure DevOps, Jenkins, Kubernetes, Docker, and Terraform. I have expertise in cloud administration, virtualization (Azure, VMware, OpenStack), and Linux systems management. My experience extends to server maintenance, application deployment, and PCI-DSS certification. I’ve also worked with tools like SonarQube, Ant, Maven, and have a strong background in systems monitoring and J2EE application servers.`,

    experience: [
      {
        role: "Devops Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Principal DevOps Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Technical Lead (SCM & Systems Security)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Assistant Manager SCM",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Senior SCM Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Mis Support Engineer",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },



       {
    id: "5",
    name: "Aqeel Javed",
    position: "Squad Leader of Frontend",
    image: "/assets/team/member5.svg",
    cover: "/assets/team/cover1.svg",
    slug: "aqeel-javed",

    skills: [
      "System Administration",
      "Ruby, NodeJS",
      "Jenkins",
      "Gitlab",
      "DockerS",
      "Concord",
      "CI/CD Implementation",
      "DevOps Automation Tools",
      "Sonar",
      "Azure DevOps",
      "Hygieia",
      "Cloud Platforms (Azure Cloud, OpenStack)",
      "Grafana",
      "OpenNMS",
      "Git",
      "Nagios",
      "Linux Distros Management (CentOS, RHEL, Ubuntu, SUSE, Debian)",
      "Security Enhanced Linux (SELinux), Iptables",
      "Nginx, Squid Proxy Server, Mail Server (Sendmail/Postfix), DHCP Server",
      "Grafana",
      "OpenNMS"
    ],

    domains: ["Azure", "AWS", "GCP", "Hetzner", "Digital Ocean"],

    bio: `With over 10 years of experience in system administration, CICD implementation, security, and support, I specialize in DevOps and automation tools like Azure DevOps, Jenkins, Kubernetes, Docker, and Terraform. I have expertise in cloud administration, virtualization (Azure, VMware, OpenStack), and Linux systems management. My experience extends to server maintenance, application deployment, and PCI-DSS certification. I’ve also worked with tools like SonarQube, Ant, Maven, and have a strong background in systems monitoring and J2EE application servers.`,

    experience: [
      {
        role: "Devops Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Principal DevOps Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Technical Lead (SCM & Systems Security)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Assistant Manager SCM",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Senior SCM Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Mis Support Engineer",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },

        {
    id: "5",
    name: "Sara Majid",
    position: "Squad Leader of Frontend",
    image: "/assets/team/member6.svg",
    cover: "/assets/team/cover1.svg",
    slug: "sara-majid",

    skills: [
      "System Administration",
      "Ruby, NodeJS",
      "Jenkins",
      "Gitlab",
      "DockerS",
      "Concord",
      "CI/CD Implementation",
      "DevOps Automation Tools",
      "Sonar",
      "Azure DevOps",
      "Hygieia",
      "Cloud Platforms (Azure Cloud, OpenStack)",
      "Grafana",
      "OpenNMS",
      "Git",
      "Nagios",
      "Linux Distros Management (CentOS, RHEL, Ubuntu, SUSE, Debian)",
      "Security Enhanced Linux (SELinux), Iptables",
      "Nginx, Squid Proxy Server, Mail Server (Sendmail/Postfix), DHCP Server",
      "Grafana",
      "OpenNMS"
    ],

    domains: ["Azure", "AWS", "GCP", "Hetzner", "Digital Ocean"],

    bio: `With over 10 years of experience in system administration, CICD implementation, security, and support, I specialize in DevOps and automation tools like Azure DevOps, Jenkins, Kubernetes, Docker, and Terraform. I have expertise in cloud administration, virtualization (Azure, VMware, OpenStack), and Linux systems management. My experience extends to server maintenance, application deployment, and PCI-DSS certification. I’ve also worked with tools like SonarQube, Ant, Maven, and have a strong background in systems monitoring and J2EE application servers.`,

    experience: [
      {
        role: "Devops Architect",
        icon: "/assets/team/icon1.svg",
        company: "YAP",
        duration: "Mar 2024 – Present",
        bullets: [
          "Design and implement scalable financial technology solutions.",
          "Lead technical strategy with regulatory compliance.",
          "Develop microservices on AWS, Azure, and GCP.",
          "Design API-driven architectures for seamless transactions.",
          "Improve product UX through engineering improvements.",
        ],
      },
      {
        role: "Principal DevOps Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Dec 2023 – Mar 2024",
        bullets: [
          "Designed and implemented solutions for financial technology applications.",
          "Led third-party integrations and ensured solution scalability.",
          "Managed the development lifecycle, from design to deployment.",
          "Coordinated with teams to ensure alignment with business goals.",
          "Specialized in solution design, team management, and architecture."
        ],
      },

      {
        role: "Technical Lead (SCM & Systems Security)",
         icon: "/assets/team/icon1.svg",
        company: "Digitify",
        duration: "Mar 2023 - Nov 2023",
        bullets: [
          "Analyzed and documented business requirements for technology solutions.",
          "Collaborated with senior management to define project scopes, timelines, and deliverables.",
          "Implemented proof of concepts on various technology trends.",
          "Assisted in presenting business ideas and innovative solutions to senior management.",
          "Worked closely with stakeholders to define and drive product development."
        ],
      },

      {
        role: "Assistant Manager SCM",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2022 - Jan 2023",
        bullets: [
          "Led solution design and architecture for BeyonMoney Super App.",
          "Managed development teams and conducted code reviews.",
          "Designed and implemented core transaction and payment modules.",
          "Oversaw development of features like integration with payment systems.",
          "Worked on the development lifecycle from analysis to deployment."
        ],
      },

      {
        role: "Senior SCM Engineer",
         icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
      {
        role: "Mis Support Engineer",
        icon: "/assets/team/icon1.svg",
        company: "Beyon Money",
        duration: "Mar 2018 - Mar 2022",
        bullets: [
          "Designed and developed a fintech product (YAP) from scratch.",
          "Integrated with banks, processors, and courier partners.",
          "Developed EKYC, Remittance, and Card modules.",
          "Implemented microservices architecture and managed cloud deployments.",
          "Focused on transaction management and seamless user experience."
        ],
      },
    ],

     education: {
      degree: "Bachelor's of Science in IT",
      university: "National University of Sciences & Technology",
      date: "2015 – 2019",
      icon: "/assets/icons/education.svg",
    },
  },
]
