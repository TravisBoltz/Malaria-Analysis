"use client";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
import {
  FileText,
  BarChart3,
  MapPin,
  TrendingUp,
  Download,
  Eye,
} from "lucide-react";

export default function ReportPage() {
  // const [activeTab, setActiveTab] = useState("reports");

  const reportTemplates = [
    {
      id: 1,
      title: "Monthly Summary Report",
      description: "Comprehensive monthly analysis of parasite sample data",
      lastGenerated: "June 1, 2024",
      icon: FileText,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      title: "Species Distribution Analysis",
      description: "Detailed breakdown of parasite species identification",
      lastGenerated: "May 28, 2024",
      icon: BarChart3,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
    },
    {
      id: 3,
      title: "Geographic Distribution Report",
      description: "Regional analysis of parasite prevalence across Ghana",
      lastGenerated: "May 25, 2024",
      icon: MapPin,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
    },
    {
      id: 4,
      title: "Trend Analysis Report",
      description: "Longitudinal trends in parasite detection and prevalence",
      lastGenerated: "May 20, 2024",
      icon: TrendingUp,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-500",
    },
  ];

  const recentReports = [
    {
      id: 1,
      name: "June 2024 Parasite Summary.pdf",
      date: "2024-06-01",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Q2 Species Distribution.pdf",
      date: "2024-05-28",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Regional Analysis May 2024.pdf",
      date: "2024-05-25",
      size: "3.1 MB",
    },
    {
      id: 4,
      name: "Trend Report Q2 2024.pdf",
      date: "2024-05-20",
      size: "2.7 MB",
    },
  ];

  const stats = [
    {
      value: "412",
      label: "Total Samples This Quarter",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      value: "28.9%",
      label: "Positive Detection Rate",
      icon: TrendingUp,
      color: "text-red-500",
    },
    {
      value: "8",
      label: "Active Collection Sites",
      icon: MapPin,
      color: "text-green-600",
    },
  ];

  const handleGenerateReport = (reportId: number) => {
    console.log(`Generating report ${reportId}`);
    // Simulate report generation
  };

  const handleViewReport = (reportId: number) => {
    console.log(`Viewing report ${reportId}`);
  };

  const handleDownloadReport = (reportId: number) => {
    console.log(`Downloading report ${reportId}`);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Generate New Report
            </h1>
          </div>
          <p className="text-gray-600">
            Select a report template to generate updated analysis
          </p>
        </div>

        {/* Report Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reportTemplates.map((template) => {
            const IconComponent = template.icon;
            return (
              <div
                key={template.id}
                className={` border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3  rounded-lg shadow-sm ${template.iconColor}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {template.description}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Last generated: {template.lastGenerated}
                </p>

                <Button
                  onClick={() => handleGenerateReport(template.id)}
                  className="w-full h-10 bg-green-600"
                >
                  Generate Report
                </Button>
              </div>
            );
          })}
        </div>

        {/* Recent Reports Section */}
        <div className="rounded-xl shadow-sm border mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Reports
            </h2>
            <p className="text-gray-600 text-sm">
              Download and view previously generated reports
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="p-6 flex items-center justify-between hover: transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <p className="text-sm text-gray-500">
                      {report.date} • {report.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <button
                    onClick={() => handleViewReport(report.id)}
                    className="px-3 py-1.5 text-sm text-primary  rounded-md transition-colors duration-200 flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4" />
                    Ready
                  </button>
                  <button
                    onClick={() => handleDownloadReport(report.id)}
                    className="flex text-muted-foreground hover:text-primary hover:bg-gray-100 rounded-md transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="rounded-xl shadow-sm border p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <IconComponent className={`w-6 h-6 `} />
                  </div>
                </div>
                <div className={`text-2xl font-bold mb-1 `}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
