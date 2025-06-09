import { Bug } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const ResearchDashboard = () => {
  return (
    <div className="p-6 ">
      <div className=" mx-auto">
        <Card className="  rounded-lg p-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Parasite Dashboard */}
            <div className="space-y-6 max-w-xl ">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-4 flex-shrink-0">
                  <Bug className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Parasite Dashboard
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Manage and track parasite samples, view analysis reports,
                    and monitor research progress.
                  </p>
                </div>
              </div>

              <Button className="bg-blue-600 p-6">
                Enter Parasite Dashboard
              </Button>
            </div>

            {/* Vector Dashboard */}
            <div className="space-y-6 max-w-xl ">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-4 flex-shrink-0">
                  <Bug className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Vector Dashboard
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Manage and track vector samples, analyze distribution
                    patterns, and generate insights.
                  </p>
                </div>
              </div>

              <Button className="bg-green-600 p-6">
                Enter Vector Dashboard
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResearchDashboard;
