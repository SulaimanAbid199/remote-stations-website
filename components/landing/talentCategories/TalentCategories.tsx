import { CheckCircle2 } from "lucide-react"

interface Category {
  name: string
  features: Record<string, boolean>
}

interface Feature {
  name: string
  description?: string
}

const TalentCategories = () => {
  const features: Feature[] = [
    { name: "Work From Office" },
    { name: "Same Time Zone" },
    { name: "15 Days S&D Training" },
    { name: "Trial Guarantee" },
    { name: "SME Support" },
    { name: "Cross Domain Experts Support" },
    { name: "Partnership Benefits" },
  ]

  const categories: Category[] = [
    {
      name: "Essential Geeks",
      features: {
        "Work From Office": true,
        "Same Time Zone": true,
        "15 Days S&D Training": true,
        "Trial Guarantee": false,
        "SME Support": false,
        "Cross Domain Experts Support": false,
        "Partnership Benefits": false,
      },
    },
    {
      name: "FireFoxs",
      features: {
        "Work From Office": true,
        "Same Time Zone": true,
        "15 Days S&D Training": true,
        "Trial Guarantee": true,
        "SME Support": false,
        "Cross Domain Experts Support": false,
        "Partnership Benefits": false,
      },
    },
    {
      name: "Tech Goats",
      features: {
        "Work From Office": true,
        "Same Time Zone": true,
        "15 Days S&D Training": true,
        "Trial Guarantee": true,
        "SME Support": true,
        "Cross Domain Experts Support": false,
        "Partnership Benefits": false,
      },
    },
    {
      name: "Overlords",
      features: {
        "Work From Office": true,
        "Same Time Zone": true,
        "15 Days S&D Training": true,
        "Trial Guarantee": true,
        "SME Support": true,
        "Cross Domain Experts Support": true,
        "Partnership Benefits": true,
      },
    },
  ]

  return (
    <div className="w-full bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Talent Categories We Offer</h1>
          <p className="text-lg text-muted-foreground">
            Discover the <span className="text-orange-600 font-semibold">key resource categories</span> that power your
            projects
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-6 py-4 text-left font-semibold text-foreground w-48">Features</th>
                {categories.map((category) => (
                  <th
                    key={category.name}
                    className="px-6 py-4 text-center font-semibold text-foreground border-l border-border"
                  >
                    {category.name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.name}
                  className={`border-b border-border ${
                    idx % 2 === 0 ? "bg-card" : "bg-background"
                  } hover:bg-muted/50 transition-colors`}
                >
                  {/* Feature Name */}
                  <td className="px-6 py-4 text-foreground font-medium">{feature.name}</td>

                  {/* Feature Availability per Category */}
                  {categories.map((category) => (
                    <td
                      key={`${feature.name}-${category.name}`}
                      className="px-6 py-4 text-center border-l border-border"
                    >
                      {category.features[feature.name] ? (
                        <CheckCircle2 className="w-6 h-6 text-orange-600 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground font-medium text-lg">−</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TalentCategories
