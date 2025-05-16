"use client";

import { DataTable } from "@/components/data-table";
import React from "react";
import data from "./data.json";
export default function OverviewPage() {
  return (
    // <div className="px-4 lg:px-6">
    //   <h1 className="text-2xl font-bold mb-6">Data Overview</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div className="bg-card p-6 rounded-lg shadow">
    //       <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
    //       <div className="space-y-4">
    //         <div className="flex justify-between items-center">
    //           <span className="text-muted-foreground">Total Users</span>
    //           <span className="font-medium">12,345</span>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <span className="text-muted-foreground">Active Sessions</span>
    //           <span className="font-medium">1,234</span>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <span className="text-muted-foreground">Conversion Rate</span>
    //           <span className="font-medium">24.5%</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-card p-6 rounded-lg shadow">
    //       <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
    //       <div className="space-y-3">
    //         {[1, 2, 3, 4].map((i) => (
    //           <div key={i} className="flex items-center gap-3 pb-3 border-b">
    //             <div className="w-2 h-2 rounded-full bg-primary"></div>
    //             <div>
    //               <p className="text-sm">User activity #{i}</p>
    //               <p className="text-xs text-muted-foreground">2 hours ago</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <DataTable data={data} />
  );
}
