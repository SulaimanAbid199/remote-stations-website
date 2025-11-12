import Image from "next/image";

interface Category {
  name: string;
  features: Record<string, boolean>;
}

interface Feature {
  name: string;
  description?: string;
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
  ];

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
  ];

  return (
    <div className="w-full bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#434343] mb-4">
            Talent Categories We Offer
          </h1>
          <p className="text-md text-[#767676]">
            Discover the{" "}
            <span className="text-[#FF6600] font-semibold">
              key resource categories
            </span>{" "}
            that power your projects
          </p>
        </div>
        <div className="overflow-x-auto rounded-4xl border border-[#E6E9F5] shadow-lg bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E6E9F5] bg-card">
                <th className="px-6 py-4 text-left font-semibold text-foreground w-48"></th>
                {categories.map((category) => (
                  <th
                    key={category.name}
                    className="px-6 py-4 text-center text-sm font-semibold text-[#434343] border-l border-[#E6E9F5]"
                  >
                    {category.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.name}
                  className={`border-b border-[#E6E9F5] ${
                    idx % 2 === 0 ? "bg-card" : "bg-background"
                  } hover:bg-muted/50 transition-colors`}
                >
                  <td className="px-6 py-4 text-[#767676] text-xs">
                    {feature.name}
                  </td>

                  {categories.map((category) => (
                    <td
                      key={`${feature.name}-${category.name}`}
                      className="px-6 py-4 text-center border-l border-[#E6E9F5]"
                    >
                      {category.features[feature.name] ? (
                        <Image
                          src="/assets/talent/Vector.svg"
                          alt="logo"
                          width={16}
                          height={16}
                          className="rounded-md mx-auto"
                        />
                      ) : (
                        <span className="text-[#767676] text-md">
                          −
                        </span>
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
  );
};

export default TalentCategories;
