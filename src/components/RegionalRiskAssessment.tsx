import { Card } from "./ui/card";

const RegionalRiskAssessment = () => {
  const regionData = [
    {
      region: "Greater Accra",
      samples: 145,
      avgPrevalence: 54,
      mccoilComplexity: 2.3,
      highest: "PIDHFR (75%)",
    },
    {
      region: "Ashanti",
      samples: 178,
      avgPrevalence: 58,
      mccoilComplexity: 2.1,
      highest: "PIDHFR (81%)",
    },
    {
      region: "Northern",
      samples: 89,
      avgPrevalence: 50,
      mccoilComplexity: 1.8,
      highest: "PIDHFR (65%)",
    },
    {
      region: "Upper East",
      samples: 78,
      avgPrevalence: 51,
      mccoilComplexity: 1.6,
      highest: "PIDHFR (92%)",
    },
    {
      region: "Western",
      samples: 112,
      avgPrevalence: 51,
      mccoilComplexity: 2.0,
      highest: "PIDHFR (73%)",
    },
  ];

  const getRiskLevel = (prevalence: number) => {
    if (prevalence >= 55) return { level: "High", color: "bg-red-500" };
    if (prevalence >= 45) return { level: "Medium", color: "bg-orange-500" };
    return { level: "Low", color: "bg-green-500" };
  };

  return (
    <Card className="rounded-lg p-6 w-full xl:w-1/3 mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Regional Risk Assessment
        </h2>
        <p className="text-sm text-gray-600">
          Parasite drug resistance risk by region
        </p>
      </div>

      <div className="space-y-4">
        {regionData.map((region, index) => {
          const risk = getRiskLevel(region.avgPrevalence);

          return (
            <div
              key={index}
              className="border-b border-gray-100 pb-4 last:border-b-0"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {region.region}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {region.samples} samples
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm font-medium ${risk.color}`}
                >
                  {risk.level}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Prevalence:</span>
                  <span className="font-medium text-gray-900">
                    {region.avgPrevalence}%
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">McCOIL Complexity:</span>
                  <span className="font-medium text-gray-900">
                    {region.mccoilComplexity}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Highest:</span>
                  <span className="font-medium text-gray-900">
                    {region.highest}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RegionalRiskAssessment;
