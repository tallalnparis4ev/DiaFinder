import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LocationSearch } from "@/components/LocationSearch";

interface LocationModalProps {
  open: boolean;
  onLocationSelect: (location: {
    latitude: number;
    longitude: number;
    country: string;
  }) => void;
  onClose?: () => void;
}

export function LocationModal({
  open,
  onLocationSelect,
  onClose,
}: LocationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-[220px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Your Location</DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <p className="text-muted-foreground mb-4">
            Please enter your location to see available options near you.
          </p>
          <LocationSearch onLocationSelect={onLocationSelect} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
