"use client";
import React, { useState } from "react";
import { Search, Filter, Download, Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VectorRiskAssessment from "@/components/VectorRiskAssessment";

const TrackingSamples = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleData = [
    {
      recordId: "PAR001",
      internalId: "INT001",
      collectionDate: "2024-10-01",
      location: "Accra",
      species: "P. falciparum",
      coil: "Positive",
      kelch: "K13_WT",
      patientAge: 25,
      gender: "Female",
      parasitemia: "2.5%",
      barcode: "BC001234",
    },
    {
      recordId: "PAR002",
      internalId: "INT002",
      collectionDate: "2024-10-02",
      location: "Kumasi",
      species: "P. vivax",
      coil: "Negative",
      kelch: "K13_MUT",
      patientAge: 32,
      gender: "Male",
      parasitemia: "1.8%",
      barcode: "BC001235",
    },
    {
      recordId: "PAR003",
      internalId: "INT003",
      collectionDate: "2024-10-03",
      location: "Tamale",
      species: "P. falciparum",
      coil: "Positive",
      kelch: "K13_WT",
      patientAge: 18,
      gender: "Female",
      parasitemia: "4.2%",
      barcode: "BC001236",
    },
    {
      recordId: "PAR004",
      internalId: "INT004",
      collectionDate: "2024-10-04",
      location: "Cape Coast",
      species: "P. ovale",
      coil: "Positive",
      kelch: "K13_WT",
      patientAge: 45,
      gender: "Male",
      parasitemia: "0.9%",
      barcode: "BC001237",
    },
  ];

  const filteredData = sampleData.filter((sample) =>
    Object.values(sample).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto space-y-6">
        {/* Controls */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search samples..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Sample
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold ">
              Parasite Sample Tracking
            </CardTitle>
            <p className="text-muted-foreground">
              Monitor parasite samples and genetic markers
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-4 font-semibold text-sm">
                      Record ID
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Internal ID
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Collection Date
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Location
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Species
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      COIL
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Kelch
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Patient Age
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Gender
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Parasitemia
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Barcode
                    </th>
                    <th className="text-left p-4 font-semibold text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((sample) => (
                    <tr
                      key={sample.recordId}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-semibold">{sample.recordId}</td>
                      <td className="p-4">{sample.internalId}</td>
                      <td className="p-4">{sample.collectionDate}</td>
                      <td className="p-4">{sample.location}</td>
                      <td className="p-4 italic">{sample.species}</td>
                      <td className="p-4">
                        <Badge
                          className={`${
                            sample.coil === "Positive"
                              ? "bg-red-100 text-red-900"
                              : "bg-green-100 text-green-900"
                          } text-xs`}
                        >
                          {sample.coil}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge
                          className={`${
                            sample.kelch === "K13_WT"
                              ? "bg-blue-100 text-blue-900"
                              : "bg-amber-100 text-amber-900"
                          } text-xs`}
                        >
                          {sample.kelch}
                        </Badge>
                      </td>
                      <td className="p-4">{sample.patientAge}</td>
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className={`${
                            sample.gender === "Male"
                              ? "bg-blue-100 text-blue-900"
                              : "bg-pink-100 text-pink-900"
                          } text-xs`}
                        >
                          {sample.gender}
                        </Badge>
                      </td>
                      <td className="p-4 font-medium">{sample.parasitemia}</td>
                      <td className="p-4 text-muted-foreground">
                        {sample.barcode}
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      <VectorRiskAssessment />
    </div>
  );
};

export default TrackingSamples;
