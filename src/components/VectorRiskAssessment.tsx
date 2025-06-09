import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const complianceData = [
  {
    title: "Collection Protocols",
    lastAudit: "2024-05-15",
    percentage: 96,
    status: "Compliant",
    statusColor: "bg-green-100 text-green-800",
    issues: "0 issues",
  },
  {
    title: "Species Identification",
    lastAudit: "2024-05-20",
    percentage: 94,
    status: "Compliant",
    statusColor: "bg-green-100 text-green-800",
    issues: "1 issue",
  },
  {
    title: "Data Recording",
    lastAudit: "2024-05-18",
    percentage: 90,
    status: "Minor Issues",
    statusColor: "bg-yellow-100 text-yellow-800",
    issues: "2 issues",
  },
  {
    title: "Environmental Safety",
    lastAudit: "2024-05-22",
    percentage: 99,
    status: "Compliant",
    statusColor: "bg-green-100 text-green-800",
    issues: "0 issues",
  },
];

const riskData = [
  {
    id: 1,
    title: "Field Team Safety",
    probability: "8%",
    impact: "Medium",
    riskLevel: "Low Risk",
    riskColor: "bg-blue-100 text-blue-800",
    mitigation: "Safety protocols and protective equipment provided",
  },
  {
    id: 2,
    title: "Sample Degradation",
    probability: "12%",
    impact: "Medium",
    riskLevel: "Medium Risk",
    riskColor: "bg-yellow-100 text-yellow-800",
    mitigation: "Cold chain maintenance and rapid processing",
  },
  {
    id: 3,
    title: "Species Misidentification",
    probability: "5%",
    impact: "High",
    riskLevel: "Low Risk",
    riskColor: "bg-blue-100 text-blue-800",
    mitigation: "Expert verification and molecular confirmation",
  },
];

const ComplianceCard = ({ item }: { item: (typeof complianceData)[0] }) => (
  <Card className=" p-4 mb-2 ">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-base mb-1">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          Last audit: {item.lastAudit}
        </p>
      </div>
      <div className="flex gap-2">
        <div className="text-2xl font-bold  mb-1">{item.percentage}%</div>
        <Badge
          className={`px-3 py-1 rounded-full text-sm font-medium ${item.statusColor}`}
        >
          {item.status}
        </Badge>
      </div>
    </div>

    <div className="text-sm text-muted-foreground">{item.issues}</div>
  </Card>
);

const RiskCard = ({ risk }: { risk: (typeof riskData)[0] }) => (
  <div className="rounded-lg p-4 mb-4 border ">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-semibold text-base">{risk.title}</h3>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${risk.riskColor}`}
      >
        {risk.riskLevel}
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
      <div>
        <span className="text-sm text-muted-foreground">Probability: </span>
        <span className="font-medium">{risk.probability}</span>
      </div>
      <div>
        <span className="text-sm text-muted-foreground">Impact: </span>
        <span className="font-medium">{risk.impact}</span>
      </div>
    </div>

    <div>
      <div className="text-sm text-muted-foreground mb-1">Mitigation:</div>
      <div className="text-sm">{risk.mitigation}</div>
    </div>
  </div>
);

export default function VectorStudyDashboard() {
  return (
    <div className=" mx-auto p-6 min-h-screen">
      {/* Compliance Metrics Section */}
      <div className="mb-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold ">
              Vector Compliance Metrics
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Current compliance status across key vector study categories
          </p>
        </div>

        <div className="space-y-0">
          {complianceData.map((item, index) => (
            <ComplianceCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Risk Assessment Section */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold ">
              Vector Study Risk Assessment
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Current risk analysis for vector collection and study
          </p>
        </div>

        <div className="space-y-0">
          {riskData.map((risk) => (
            <RiskCard key={risk.id} risk={risk} />
          ))}
        </div>
      </div>
    </div>
  );
}
