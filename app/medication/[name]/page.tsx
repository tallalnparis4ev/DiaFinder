"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "@/data/medications";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FundingType } from "@/data/medications";
import { calculateDistance } from "@/lib/distance";
import { LocationModal } from "@/components/LocationModal";
import { getCountryCode } from "countries-list";

export default function MedicationDetails() {
  const [searchLocation, setSearchLocation] = useState<{
    latitude: number;
    longitude: number;
    country: string;
  } | null>(null);
  const [selectedFundingType, setSelectedFundingType] = useState<string | null>(
    null
  );

  const params = useParams();
  const medicationName = decodeURIComponent(params.name as string);
  const medication = data.Medication.find((med) => med.Name === medicationName);

  const fundingTypes = Object.values(FundingType);

  const filteredObtainingMethods = useMemo(() => {
    return data.ObtainingMethod.filter((method) => {
      const availabilityMatch = data.Availability.some(
        (avail) =>
          avail.Medication === medicationName &&
          avail.ObtainingMethod === method.ID &&
          (!searchLocation ||
            getCountryCode(avail.Country.name) === searchLocation.country)
      );

      const fundingTypeMatch =
        !selectedFundingType ||
        selectedFundingType === "all" ||
        method.FundingType === selectedFundingType;

      return availabilityMatch && fundingTypeMatch;
    });
  }, [medicationName, searchLocation?.country, selectedFundingType]);

  const sortedObtainingMethods = useMemo(() => {
    if (!searchLocation) return filteredObtainingMethods;

    return [...filteredObtainingMethods].sort((a, b) => {
      const distanceA = a.Method.Coordinates
        ? calculateDistance(
            searchLocation.latitude,
            searchLocation.longitude,
            a.Method.Coordinates.latitude,
            a.Method.Coordinates.longitude
          )
        : Infinity;

      const distanceB = b.Method.Coordinates
        ? calculateDistance(
            searchLocation.latitude,
            searchLocation.longitude,
            b.Method.Coordinates.latitude,
            b.Method.Coordinates.longitude
          )
        : Infinity;

      return distanceA - distanceB;
    });
  }, [filteredObtainingMethods, searchLocation]);

  if (!medication) {
    return <div>Medication not found</div>;
  }

  if (!searchLocation) {
    return (
      <LocationModal
        open={true}
        onLocationSelect={setSearchLocation}
        onClose={() => window.history.back()}
      />
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Medications
          </Button>
        </Link>

        <div className="space-y-8">
          {/* Medication Info */}
          <Card>
            <CardHeader>
              <CardTitle>{medication.Name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Generic Name:</strong> {medication.GenericName}
                </p>
                <p>
                  <strong>Manufacturer:</strong> {medication.Manufacturer}
                </p>
                <p>
                  <strong>Category:</strong> {medication.Category}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Obtaining Methods */}
          <div>
            <div className="flex gap-4 mb-6">
              <div className="w-48">
                <h3 className="text-sm font-medium mb-2">Funding Type</h3>
                <Select
                  value={selectedFundingType || undefined}
                  onValueChange={setSelectedFundingType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Funding Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Funding Types</SelectItem>
                    {fundingTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">How to Obtain</h2>
            <div className="grid gap-6">
              {sortedObtainingMethods.map((method) => (
                <Card key={method.ID}>
                  <CardHeader>
                    <CardTitle>{method.Method.Name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Type:</strong> {method.Method.Type}
                      </p>
                      <p>
                        <strong>Funding Type:</strong> {method.FundingType}
                      </p>
                      {method.Method.Website && (
                        <p>
                          <strong>Website:</strong>{" "}
                          <a
                            href={method.Method.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {method.Method.Website}
                          </a>
                        </p>
                      )}
                      {method.Method.Address && (
                        <p>
                          <strong>Address:</strong> {method.Method.Address}
                        </p>
                      )}
                      {method.Method.PhoneNumber && (
                        <p>
                          <strong>Phone:</strong> {method.Method.PhoneNumber}
                        </p>
                      )}
                      {method.Method.OperatingHours && (
                        <p>
                          <strong>Hours:</strong> {method.Method.OperatingHours}
                        </p>
                      )}
                      {method.Method.Tips && method.Method.Tips.length > 0 && (
                        <div>
                          <strong>Tips:</strong>
                          <ul className="list-disc pl-5 mt-1">
                            {method.Method.Tips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {method.Method.Requirements &&
                        method.Method.Requirements.length > 0 && (
                          <div>
                            <strong>Requirements:</strong>
                            <ul className="list-disc pl-5 mt-1">
                              {method.Method.Requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
