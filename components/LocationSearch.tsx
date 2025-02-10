/// <reference types="@types/google.maps" />
import * as React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Loader2 } from "lucide-react";
import { getCountryCode } from "countries-list";

interface LocationSearchProps {
  onLocationSelect: (location: {
    latitude: number;
    longitude: number;
    country: string;
  }) => void;
}

export function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [value, setValue] = React.useState("");
  const [predictions, setPredictions] = React.useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const autocompleteService =
    React.useRef<google.maps.places.AutocompleteService | null>(null);
  const geocoder = React.useRef<google.maps.Geocoder | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      autocompleteService.current =
        new google.maps.places.AutocompleteService();
      geocoder.current = new google.maps.Geocoder();
    }
  }, []);

  const getPlacePredictions = React.useCallback((input: string) => {
    if (!input || !autocompleteService.current) {
      setPredictions([]);
      setShowResults(false);
      return;
    }

    setLoading(true);
    autocompleteService.current.getPlacePredictions(
      { input, types: ["geocode"] },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPredictions(results || []);
          setShowResults(true);
        } else {
          setPredictions([]);
          setShowResults(false);
        }
        setLoading(false);
      }
    );
  }, []);

  const handleSelect = async (placeId: string) => {
    if (!geocoder.current) return;

    try {
      geocoder.current.geocode({ placeId }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
          const result = results[0];
          if (!result.geometry || !result.geometry.location) {
            console.error("No geometry information available.");
            return;
          }

          const { lat, lng } = result.geometry.location;
          const countryComponent = result.address_components.find((component) =>
            component.types.includes("country")
          );

          const countryName = countryComponent?.long_name || "";
          const country = getCountryCode(countryName) || "";

          onLocationSelect({
            latitude: lat(),
            longitude: lng(),
            country,
          });
          setValue(result.formatted_address);
        }
      });
    } catch (error) {
      console.error("Error geocoding place:", error);
    }
  };

  return (
    <div className="w-full">
      <Command shouldFilter={false} className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Type your location..."
          value={value}
          onValueChange={(value) => {
            setValue(value);
            getPlacePredictions(value);
          }}
        />
        {showResults && (
          <CommandList className="h-[200px]">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {loading && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              {predictions.map((prediction) => (
                <CommandItem
                  key={prediction.place_id}
                  value={prediction.description}
                  onSelect={() => handleSelect(prediction.place_id)}
                  className="cursor-pointer hover:bg-accent"
                  role="option"
                >
                  {prediction.description}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
