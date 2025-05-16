"use client";

import React from "react";

export default function ReportPage() {
  return (
    <div className="px-4 lg:px-6">
      <div className="space-y-6">
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
          <div className="h-64 bg-muted/20 rounded flex items-center justify-center">
            <p className="text-muted-foreground">
              Monthly performance chart will be displayed here
            </p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Key Findings</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <p>Revenue increased by 15% compared to previous quarter</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <p>Customer acquisition cost reduced by 8%</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <p>User retention improved to 76%</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
              <p>Average session duration increased by 2 minutes</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
