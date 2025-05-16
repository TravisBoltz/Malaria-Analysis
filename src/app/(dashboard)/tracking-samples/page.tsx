"use client";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function TrackingSample() {
  // Sample data from the image
  const passedSamples = 1387;
  const failedSamples = 1037;
  const totalSamples = 2424;
  const passPercentage = Math.round((passedSamples / totalSamples) * 100);
  const failPercentage = Math.round((failedSamples / totalSamples) * 100);

  // Animation effect for progress bars
  const [animatePass, setAnimatePass] = useState(0);
  const [animateFail, setAnimateFail] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatePass(passPercentage);
      setAnimateFail(failPercentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [passPercentage, failPercentage]);

  return (
    <div className="px-4 lg:px-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-slate-600">
            Real-time monitoring of sample processing across different regions.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Sequencing Progress
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Current status of sample sequencing with pass/fail metrics
            </p>
          </div>

          <div className="p-6">
            {/* Stats overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Passed samples */}
              <div className="bg-emerald-50 rounded-lg p-5 flex items-center">
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-600">
                    PASSED SAMPLES
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-emerald-700">
                      {passedSamples}
                    </span>
                    <span className="text-emerald-600 ml-2">
                      / {totalSamples}
                    </span>
                  </div>
                </div>
              </div>

              {/* Failed samples */}
              <div className="bg-red-50 rounded-lg p-5 flex items-center">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <XCircle className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-600">
                    FAILED SAMPLES
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-red-700">
                      {failedSamples}
                    </span>
                    <span className="text-red-600 ml-2">/ {totalSamples}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-6">
              {/* Passed progress */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    Pass Rate
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {passPercentage}%
                  </span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: `${animatePass}%` }}
                  ></div>
                </div>
              </div>

              {/* Failed progress */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    Fail Rate
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {failPercentage}%
                  </span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-1000 ease-out"
                    style={{ width: `${animateFail}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional card with summary */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Processing Summary
            </h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-slate-500">Total Samples</p>
                <p className="text-3xl font-bold text-slate-800">
                  {totalSamples}
                </p>
              </div>

              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      {passPercentage}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Pass Rate
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                    <span className="text-xl font-bold text-red-600">
                      {failPercentage}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Fail Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
