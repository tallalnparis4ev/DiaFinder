import { countries, Country, State, Region } from "typed-countries";

export type Availability = {
  ID: string; // UUID
  Country: string;
  Medication: string;
  ObtainingMethod: string;
};

export type Medication = {
  Name: string;
  GenericName: string;
  Manufacturer: string;
  Category:
    | "Insulin Pump"
    | "Continuous Glucose Monitor"
    | "Insulin Disposable Pen"
    | "Insulin Cartridges"
    | "Insulin Vials";
};

export type Method = {
  Type: "Pharmacy" | "Hospital" | "OnlineStore" | "Clinic";
  Name: string;
  Website?: string; // URI
  Address?: string;
  PhoneNumber?: string;
  OperatingHours?: string;
  Tips?: string[];
  Requirements?: string[];
};

export enum FundingType {
  PrivateInsurance = "Private Insurance",
  PublicHealthcare = "Public Healthcare",
  OutOfPocket = "Out-of-Pocket",
}

export type ObtainingMethod = {
  ID: string; // UUID
  FundingType: FundingType;
  Method: Method;
};

export type RootSchema = {
  Availability: Availability[];
  Country: Country[];
  Medication: Medication[];
  ObtainingMethod: ObtainingMethod[];
};

export const data: RootSchema = {
  Country: countries,
  Medication: [
    {
      Name: "OmniPod DASH",
      GenericName: "Insulin Pump",
      Manufacturer: "Insulet Corporation",
      Category: "Insulin Pump",
    },
    {
      Name: "Dexcom G6",
      GenericName: "Continuous Glucose Monitor",
      Manufacturer: "Dexcom Inc.",
      Category: "Continuous Glucose Monitor",
    },
    {
      Name: "NovoRapid FlexPen",
      GenericName: "Insulin Disposable Pen",
      Manufacturer: "Novo Nordisk",
      Category: "Insulin Disposable Pen",
    },
    {
      Name: "Humalog Cartridge",
      GenericName: "Insulin Cartridge",
      Manufacturer: "Eli Lilly",
      Category: "Insulin Cartridges",
    },
    {
      Name: "Lantus Vial",
      GenericName: "Insulin Vial",
      Manufacturer: "Sanofi",
      Category: "Insulin Vials",
    },
  ],
  ObtainingMethod: [
    {
      ID: "d9b2b05e-44b0-45ff-a2ab-4de3eae3aef2",
      FundingType: FundingType.PrivateInsurance,
      Method: {
        Type: "Pharmacy",
        Name: "CVS Pharmacy",
        Website: "https://www.cvs.com",
        Address: "123 Main Street, Los Angeles, CA 90001, USA",
        PhoneNumber: "+1-800-746-7287",
        OperatingHours: "Mon-Sat 9 AM - 9 PM, Sun 10 AM - 6 PM",
        Tips: [
          "Call ahead to check availability.",
          "Check if your insurance covers this medication.",
        ],
        Requirements: ["Prescription from a certified doctor"],
      },
    },
    {
      ID: "b38a50f6-58c1-405f-9bb8-2b9c647b1e77",
      FundingType: FundingType.PublicHealthcare,
      Method: {
        Type: "Hospital",
        Name: "Mount Sinai Hospital",
        Website: "https://www.mountsinai.org",
        Address: "1468 Madison Ave, New York, NY 10029, USA",
        PhoneNumber: "+1-212-241-6500",
        OperatingHours: "24/7",
        Tips: ["Register at the front desk for outpatient services."],
        Requirements: ["Patient ID", "Insurance information"],
      },
    },
    {
      ID: "e1f939f3-8572-4205-b920-ecf6845a5e58",
      FundingType: FundingType.OutOfPocket,
      Method: {
        Type: "OnlineStore",
        Name: "Health Supplies Direct",
        Website: "https://www.healthsuppliesdirect.com",
        Tips: [
          "Allow 3-5 business days for shipping.",
          "Check for discount codes.",
        ],
      },
    },
  ],
  Availability: [
    {
      ID: "e84ef82b-7a2f-474a-a243-d6ead4ae0ff9",
      Country: "USA",
      Medication: "OmniPod DASH",
      ObtainingMethod: "d9b2b05e-44b0-45ff-a2ab-4de3eae3aef2",
    },
    {
      ID: "979c967d-a603-4045-8b8e-3d9bd892d3da",
      Country: "Canada",
      Medication: "Dexcom G6",
      ObtainingMethod: "b38a50f6-58c1-405f-9bb8-2b9c647b1e77",
    },
  ],
};
