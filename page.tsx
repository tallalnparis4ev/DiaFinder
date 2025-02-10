"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { data } from "@/data/medications";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [medicationSearch, setMedicationSearch] = useState<string>("");
  const [manufacturerSearch, setManufacturerSearch] = useState<string>("");

  const categories = Array.from(
    new Set(data.Medication.map((med) => med.Category))
  );

  const filteredMedications = useMemo(() => {
    return data.Medication.filter(
      (med) =>
        (!selectedCategory || med.Category === selectedCategory) &&
        (!medicationSearch ||
          med.Name.toLowerCase().includes(medicationSearch.toLowerCase()) ||
          med.GenericName.toLowerCase().includes(
            medicationSearch.toLowerCase()
          )) &&
        (!manufacturerSearch ||
          med.Manufacturer.toLowerCase().includes(
            manufacturerSearch.toLowerCase()
          ))
    );
  }, [selectedCategory, medicationSearch, manufacturerSearch]);

  const groupedMedications = useMemo(() => {
    const grouped: { [key: string]: typeof data.Medication } = {};
    filteredMedications.forEach((med) => {
      if (!grouped[med.Category]) {
        grouped[med.Category] = [];
      }
      grouped[med.Category].push(med);
    });
    return grouped;
  }, [filteredMedications]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Category</h2>
          <div className="relative">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory("")}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Medication Search</h2>
          <Input
            placeholder="Search medication..."
            value={medicationSearch}
            onChange={(e) => setMedicationSearch(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Manufacturer Search</h2>
          <Input
            placeholder="Search manufacturer..."
            value={manufacturerSearch}
            onChange={(e) => setManufacturerSearch(e.target.value)}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-4xl font-bold mb-6">Medical Devices</h1>
        {Object.entries(groupedMedications).map(([category, medications]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medications.map((med) => (
                <Link
                  href={`/medication/${encodeURIComponent(med.Name)}`}
                  key={med.Name}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{med.Name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Generic Name:</strong> {med.GenericName}
                      </p>
                      <p>
                        <strong>Manufacturer:</strong> {med.Manufacturer}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
