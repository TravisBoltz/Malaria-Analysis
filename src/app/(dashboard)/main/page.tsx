"use client";

import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { PieChart } from "@/components/pie-chart";
import { BarChartGraph } from "@/components/bar-chart";

export default function DashboardPage() {
  return (
    <>
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
