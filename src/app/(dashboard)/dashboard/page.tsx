"use client";

import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { PieChart } from "@/components/pie-chart";
import { BarChartGraph } from "@/components/bar-chart";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <div className="flex justify-end px-4">
        <Button
          variant="secondary"
          className="flex items-center text-white  rounded-lg px-3 py-2 shadow-sm border "
        >
          <Download className="h-4 w-4 " />
          <span className="text-sm font-medium">Export</span>
        </Button>
      </div>
      <SectionCards />

      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-6">
        <div>
          <PieChart />
        </div>
        <div>
          <BarChartGraph />
        </div>
      </div>
    </>
  );
}
