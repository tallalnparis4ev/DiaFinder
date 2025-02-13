"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "@/data/medications";
import { useState, useMemo, useEffect } from "react";
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

// Add this new component for displaying the current location
function CurrentLocation({
  location,
}: {
  location: {
    latitude: number;
    longitude: number;
    country: string;
    displayName?: string;
  };
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <MapPin className="h-4 w-4" />
      <span>
        {location.displayName ||
          `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`}
      </span>
    </div>
  );
}

export default function MedicationDetails() {
  const [searchLocation, setSearchLocation] = useState<{
    latitude: number;
    longitude: number;
    country: string;
    displayName?: string;
  } | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedFundingType, setSelectedFundingType] = useState<string | null>(
    null
  );

  // Load saved location on mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      setSearchLocation(JSON.parse(savedLocation));
    } else {
      setShowLocationModal(true);
    }
  }, []);

  const handleLocationSelect = (location: {
    latitude: number;
    longitude: number;
    country: string;
    displayName?: string;
  }) => {
    setSearchLocation(location);
    localStorage.setItem("userLocation", JSON.stringify(location));
    setShowLocationModal(false);
  };

  const params = useParams();
  const medicationName = decodeURIComponent(params.name as string);
  const medication = data.Medication.find((med) => med.Name === medicationName);
  if (!medication) return null;
  const fundingTypes = Object.values(FundingType);

  const filteredObtainingMethods = useMemo(() => {
    return medication.Availability.filter((avail) => {
      const locationMatch =
        !searchLocation ||
        getCountryCode(avail.Country.name) === searchLocation.country;
      const fundingTypeMatch =
        !selectedFundingType ||
        selectedFundingType === "all" ||
        avail.FundingType === selectedFundingType;
      return locationMatch && fundingTypeMatch;
    });
  }, [medicationName, searchLocation?.country, selectedFundingType]);

  const sortedObtainingMethods = useMemo(() => {
    if (!searchLocation) return filteredObtainingMethods;

    return [...filteredObtainingMethods].sort((a, b) => {
      const distanceA = a.Coordinates
        ? calculateDistance(
            searchLocation.latitude,
            searchLocation.longitude,
            a.Coordinates.latitude,
            a.Coordinates.longitude
          )
        : Infinity;

      const distanceB = b.Coordinates
        ? calculateDistance(
            searchLocation.latitude,
            searchLocation.longitude,
            b.Coordinates.latitude,
            b.Coordinates.longitude
          )
        : Infinity;

      return distanceA - distanceB;
    });
  }, [filteredObtainingMethods, searchLocation]);

  if (!medication) {
    return <div>Medication not found</div>;
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="ghost">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Medications
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            {searchLocation && <CurrentLocation location={searchLocation} />}
            <Button
              variant="outline"
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Change Location
            </Button>
          </div>
        </div>

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
                <Card>
                  <CardHeader>
                    <CardTitle>{method.Name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Type:</strong> {method.Type}
                      </p>
                      <p>
                        <strong>Funding Type:</strong> {method.FundingType}
                      </p>
                      {method.Website && (
                        <p>
                          <strong>Website:</strong>{" "}
                          <a
                            href={method.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {method.Website}
                          </a>
                        </p>
                      )}
                      {method.Address && (
                        <p>
                          <strong>Address:</strong> {method.Address}
                        </p>
                      )}
                      {method.PhoneNumber && (
                        <p>
                          <strong>Phone:</strong> {method.PhoneNumber}
                        </p>
                      )}
                      {method.OperatingHours && (
                        <p>
                          <strong>Hours:</strong> {method.OperatingHours}
                        </p>
                      )}
                      {method.Tips && method.Tips.length > 0 && (
                        <div>
                          <strong>Tips:</strong>
                          <ul className="list-disc pl-5 mt-1">
                            {method.Tips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {method.Requirements &&
                        method.Requirements.length > 0 && (
                          <div>
                            <strong>Requirements:</strong>
                            <ul className="list-disc pl-5 mt-1">
                              {method.Requirements.map((req, index) => (
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

      <LocationModal
        open={showLocationModal}
        onLocationSelect={handleLocationSelect}
        onClose={() => {
          if (searchLocation) {
            setShowLocationModal(false);
          } else {
            window.history.back();
          }
        }}
      />
    </div>
  );
}
