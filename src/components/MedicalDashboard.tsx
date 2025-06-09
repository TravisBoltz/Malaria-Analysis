import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
} from "recharts";

// Data for Genetic Marker Prevalence
const geneticMarkerData = [
  { marker: "PFCRT K76T", percentage: 82, sampleCount: 780 },
  { marker: "PFMDR1 N86Y", percentage: 79, sampleCount: 720 },
  { marker: "PFDHPS K540E", percentage: 45, sampleCount: 580 },
  { marker: "PFDHFR N108I", percentage: 36, sampleCount: 540 },
  { marker: "K13 C580Y", percentage: 12, sampleCount: 420 },
];

// Data for Regional Mutation Comparison
const regionalMutationData = [
  {
    region: "Ashanti",
    mutation1: 100,
    mutation2: 80,
    mutation3: 60,
    mutation4: 40,
  },
  {
    region: "Greater Accra",
    mutation1: 90,
    mutation2: 75,
    mutation3: 55,
    mutation4: 35,
  },
  {
    region: "Western",
    mutation1: 85,
    mutation2: 70,
    mutation3: 50,
    mutation4: 30,
  },
  {
    region: "Upper East",
    mutation1: 88,
    mutation2: 73,
    mutation3: 52,
    mutation4: 32,
  },
  {
    region: "Northern",
    mutation1: 80,
    mutation2: 65,
    mutation3: 45,
    mutation4: 25,
  },
];

// Data for Mutation Trends Over Time
const trendData = [
  { year: "2020", marker1: 75, marker2: 70, marker3: 5 },
  { year: "2021", marker1: 77, marker2: 72, marker3: 7 },
  { year: "2022", marker1: 79, marker2: 75, marker3: 9 },
  { year: "2023", marker1: 80, marker2: 78, marker3: 11 },
  { year: "2024", marker1: 82, marker2: 80, marker3: 12 },
];

// Data for Drug Resistance Distribution
const drugResistanceData = [
  { drug: "Chloroquine", resistant: 80, sensitive: 20 },
  { drug: "Sulfadoxine-Pyrimethamine", resistant: 62, sensitive: 38 },
  { drug: "Mefloquine", resistant: 37, sensitive: 63 },
  { drug: "Artemisinin", resistant: 12, sensitive: 88 },
];

const GeneticMarkerChart = () => (
  <div className="p-6 rounded-lg shadow-sm border">
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Genetic Marker Prevalence</h3>
      <p className="text-sm text-muted-foreground">
        Drug resistance mutations and sample counts
      </p>
    </div>
    <div className="h-100">
      <ResponsiveContainer width="80%" height="100%">
        <ComposedChart
          data={geneticMarkerData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="marker"
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 800]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            yAxisId="left"
            dataKey="percentage"
            fill="#3b82f6"
            radius={[2, 2, 0, 0]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="sampleCount"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const RegionalMutationChart = () => (
  <div className="p-6 rounded-lg shadow-sm border">
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Regional Mutation Comparison</h3>
      <p className="text-sm text-muted-foreground">
        Drug resistance patterns across Ghana regions
      </p>
    </div>
    <div className="h-100">
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          data={regionalMutationData}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="region"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 280]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="mutation1" stackId="a" fill="#ef4444" />
          <Bar dataKey="mutation2" stackId="a" fill="#f97316" />
          <Bar dataKey="mutation3" stackId="a" fill="#8b5cf6" />
          <Bar dataKey="mutation4" stackId="a" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const MutationTrendsChart = () => (
  <div className="p-6 rounded-lg shadow-sm border">
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Mutation Trends Over Time</h3>
      <p className="text-sm text-muted-foreground">
        5-year evolution of key resistance markers
      </p>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={trendData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 90]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Line
            type="monotone"
            dataKey="marker1"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ fill: "#ef4444", strokeWidth: 2, r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="marker2"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ fill: "#f97316", strokeWidth: 2, r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="marker3"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={{ fill: "#06b6d4", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const DrugResistanceChart = () => (
  <div className="p-6 rounded-lg shadow-sm border">
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Drug Resistance Distribution</h3>
      <p className="text-sm text-muted-foreground">
        Proportion of resistant vs sensitive samples
      </p>
    </div>
    <div className="space-y-4">
      {drugResistanceData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">
              {item.drug}
            </span>
            <span className="text-sm text-muted-foreground">
              {item.resistant}% resistant
            </span>
          </div>
          <div className="w-full  rounded-full h-2 relative overflow-hidden">
            <div
              className="bg-red-500 h-2 rounded-l-full transition-all duration-300"
              style={{ width: `${item.resistant}%` }}
            />
            <div
              className=" h-2 absolute top-0 rounded-r-full transition-all duration-300"
              style={{
                width: `${item.sensitive}%`,
                right: 0,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function MedicalDashboard() {
  return (
    <div className=" p-6">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GeneticMarkerChart />
          <RegionalMutationChart />
          <MutationTrendsChart />
          <DrugResistanceChart />
        </div>
      </div>
    </div>
  );
}
