"use client";
import { useState } from "react";
import { BarChart2, Map, Database } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import dynamic from "next/dynamic";
import RegionalRiskAssessment from "@/components/RegionalRiskAssessment";

// Dynamic import of the Map component to prevent SSR issues
const MapComponent = dynamic(() => import("../../../components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full flex items-center justify-center">
      Loading map...
    </div>
  ),
});

// Define the type for the icon component
type IconType = React.ComponentType<{ className?: string }>;

// Stats card component
const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendColor = "text-green-500",
}: {
  title: string;
  value: string | number;
  icon: IconType;
  trend?: string;
  trendColor?: string;
}) => (
  <Card className="flex-1 min-w-[200px] transition-all hover:shadow-md">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {trend && (
            <p className={`text-xs mt-1 ${trendColor} flex items-center`}>
              {trend}
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function GRCReports() {
  const [selectedMutant] = useState("All");

  // Sample table data - focused on Ghana
  const tableData = [
    {
      id: 1,
      mutant: "C50",
      region: "Greater Accra",
      frequency: 14,
      percentage: 0.85,
    },
    {
      id: 2,
      mutant: "C50",
      region: "Ashanti",
      frequency: 11,
      percentage: 0.78,
    },
    {
      id: 3,
      mutant: "C50",
      region: "Western",
      frequency: 9,
      percentage: 0.67,
    },
    {
      id: 4,
      mutant: "C50",
      region: "Eastern",
      frequency: 8,
      percentage: 0.62,
    },
    {
      id: 5,
      mutant: "C50",
      region: "Central",
      frequency: 10,
      percentage: 0.74,
    },
    {
      id: 6,
      mutant: "K76T",
      region: "Greater Accra",
      frequency: 12,
      percentage: 0.82,
    },
    {
      id: 7,
      mutant: "K76T",
      region: "Ashanti",
      frequency: 10,
      percentage: 0.71,
    },
    {
      id: 8,
      mutant: "K76T",
      region: "Western",
      frequency: 7,
      percentage: 0.52,
    },
    {
      id: 9,
      mutant: "K76T",
      region: "Eastern",
      frequency: 9,
      percentage: 0.68,
    },
    {
      id: 10,
      mutant: "K76T",
      region: "Central",
      frequency: 8,
      percentage: 0.61,
    },
  ];

  // Ghana map coordinates
  const ghanaCoordinates = {
    center: [7.9465, -2.0232],
    zoom: 7,
  };

  // Ghana region data points
  const ghanaDataPoints = [
    { region: "Greater Accra", lat: 5.6037, lng: 0.187, count: 14 },
    { region: "Ashanti", lat: 6.7, lng: -1.6333, count: 11 },
    { region: "Western", lat: 5.0, lng: -2.0, count: 9 },
    { region: "Eastern", lat: 6.15, lng: -0.3, count: 8 },
    { region: "Central", lat: 5.5, lng: -1.0, count: 10 },
  ];

  // Filter data points based on selected mutant
  const filteredDataPoints =
    selectedMutant === "All"
      ? ghanaDataPoints
      : ghanaDataPoints.map((point) => {
          const matchingData = tableData.find(
            (item) =>
              item.region === point.region && item.mutant === selectedMutant
          );
          return {
            ...point,
            count: matchingData ? matchingData.frequency : 0,
          };
        });

  // Calculate stats
  const totalSamples = tableData.reduce((sum, item) => sum + item.frequency, 0);
  const uniqueMutants = [...new Set(tableData.map((item) => item.mutant))]
    .length;
  const avgPrevalence = (
    (tableData.reduce((sum, item) => sum + item.percentage, 0) /
      tableData.length) *
    100
  ).toFixed(1);

  return (
    <div className="px-4 lg:px-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-muted-foreground">
                Detailed reports on gene-specific data across Ghana regions
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <StatCard
              title="Total Samples"
              value={totalSamples}
              icon={Database}
              trend="+12% from last month"
            />
            <StatCard
              title="Unique Mutants"
              value={uniqueMutants}
              icon={BarChart2}
              trend="+2 new variants"
              trendColor="text-blue-500"
            />
            <StatCard
              title="Avg. Prevalence"
              value={`${avgPrevalence}%`}
              icon={Map}
              trend="-3.2% from last quarter"
              trendColor="text-amber-500"
            />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
          {/* Left Side - Map (Full Height) */}
          <div className="w-full xl:w-2/3 h-[500px] xl:h-[calc(100vh)]">
            <Card className="h-full flex flex-col">
              <CardHeader className="py-2 sm:py-3 border-b">
                <CardTitle className="text-sm sm:text-base font-semibold flex items-center">
                  <Map className="w-4 h-4 mr-2 text-primary" />
                  Geographic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 relative">
                <div className="absolute inset-0">
                  <MapComponent
                    center={ghanaCoordinates.center}
                    zoom={ghanaCoordinates.zoom}
                    dataPoints={filteredDataPoints}
                    selectedMutant={selectedMutant}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Chart and Table (Stacked) */}
          <RegionalRiskAssessment />
        </div>
      </div>
    </div>
  );
}
