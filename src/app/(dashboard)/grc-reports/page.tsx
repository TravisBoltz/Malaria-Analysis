"use client";
import { useState } from "react";
import { BarChart2, Map, Database } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import dynamic from "next/dynamic";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock data for Ghana regions
  const regions: string[] = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Eastern",
    "Central",
  ];

  const mutantTypes = [
    { name: "WT", color: "#6b7220" },
    { name: "Single", color: "#4a3563" },
    { name: "Composite", color: "#275151" },
    { name: "Multi", color: "#1937" },
    { name: "Null", color: "#1167" },
  ];

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

  // Filtered data based on search term
  const filteredData = tableData.filter(
    (row) =>
      row.mutant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
            <Input
              placeholder="Search mutants or regions..."
              className="h-8 w-[200px]"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
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
          <div className="w-full xl:w-1/2 h-[400px] xl:h-[calc(100vh-300px)]">
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
          <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6">
            {/* Chart */}
            <Card className="flex-1">
              <CardHeader className="py-2 sm:py-3">
                <CardTitle className="text-sm sm:text-base font-medium flex items-center">
                  <BarChart2 className="w-4 h-4 mr-2" />
                  PIDHR Mutants Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 sm:p-6">
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">
                  Prevalence of PIDHR Mutants Across Ghana
                </h4>
                <div className="h-40 sm:h-48 flex overflow-x-auto pb-2 -mx-2 px-2">
                  <div className="flex min-w-max w-full">
                    {regions.map((region) => (
                      <div
                        key={region}
                        className="flex flex-col flex-1 mx-1"
                        style={{ height: "100%" }}
                      >
                        <div className="flex-grow flex flex-col-reverse">
                          {mutantTypes.map((type) => (
                            <div
                              key={`${region}-${type.name}`}
                              className="w-full"
                              style={{
                                backgroundColor: type.color,
                                height: `${Math.max(
                                  5,
                                  Math.random() * 25 +
                                    (type.name === "WT" ? 40 : 10)
                                )}%`,
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-[10px] xs:text-xs mt-2 text-muted-foreground transform origin-top-left h-10 xs:h-12 overflow-hidden whitespace-nowrap">
                          {region.length > 15
                            ? `${region.substring(0, 8)}..`
                            : region}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
                  {mutantTypes.map((type) => (
                    <div key={type.name} className="flex items-center text-xs">
                      <div
                        className="w-3 h-3 mr-1 rounded-sm"
                        style={{ backgroundColor: type.color }}
                      ></div>
                      {type.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Table */}
            <Card className="flex-1 flex flex-col">
              <CardHeader className="py-2 sm:py-3 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm sm:text-base font-semibold flex items-center">
                    <Database className="w-4 h-4 mr-2 text-primary" />
                    Gene Data Table
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-1 sm:p-2">
                <div className="rounded-md border overflow-x-auto">
                  <Table className="min-w-[600px] sm:min-w-full">
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="h-8 sm:h-10 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                          Mutant
                        </TableHead>
                        <TableHead className="h-8 sm:h-10 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                          Region
                        </TableHead>
                        <TableHead className="h-8 sm:h-10 px-2 sm:px-4 py-1.5 sm:py-2 text-right text-xs sm:text-sm">
                          Frequency
                        </TableHead>
                        <TableHead className="h-8 sm:h-10 px-2 sm:px-4 py-1.5 sm:py-2 text-right text-xs sm:text-sm">
                          Prevalence
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentItems.length > 0 ? (
                        currentItems.map((row) => (
                          <TableRow key={row.id} className="hover:bg-muted/50">
                            <TableCell className="px-2 sm:px-4 py-1.5 sm:py-3">
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-muted rounded">
                                {row.mutant}
                              </span>
                            </TableCell>
                            <TableCell className="px-2 sm:px-4 py-1.5 sm:py-3 text-xs sm:text-sm">
                              {row.region}
                            </TableCell>
                            <TableCell className="px-2 sm:px-4 py-1.5 sm:py-3 text-right font-medium text-xs sm:text-sm">
                              {row.frequency}
                            </TableCell>
                            <TableCell className="px-2 sm:px-4 py-1.5 sm:py-3 text-right">
                              <span className="font-medium text-xs sm:text-sm">
                                {(row.percentage * 100).toFixed(1)}%
                              </span>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={4}
                            className="h-24 text-center text-muted-foreground"
                          >
                            No results found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </div>
                    <Pagination className="w-auto">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                            onClick={() =>
                              currentPage > 1 && setCurrentPage(currentPage - 1)
                            }
                          />
                        </PaginationItem>
                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            // Calculate page numbers to show (current page in the middle when possible)
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }

                            return (
                              <PaginationItem key={pageNum}>
                                <PaginationLink
                                  isActive={pageNum === currentPage}
                                  className="cursor-pointer"
                                  onClick={() => setCurrentPage(pageNum)}
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                        )}
                        <PaginationItem>
                          <PaginationNext
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                            onClick={() =>
                              currentPage < totalPages &&
                              setCurrentPage(currentPage + 1)
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
