import { countries, ICountry, TCountries } from "countries-list";

export enum FundingType {
  PrivateInsurance = "Private Insurance",
  PublicHealthcare = "Public Healthcare",
  OutOfPocket = "Out-of-Pocket",
}

export type Availability = {
  Name: string;
  Country: ICountry;
  FundingType: FundingType;
  Type: "Pharmacy" | "Hospital" | "OnlineStore" | "Clinic";
  Website?: string; // URI
  Address?: string;
  PhoneNumber?: string;
  OperatingHours?: string;
  Tips?: string[];
  Requirements?: string[];
  Coordinates?: {
    latitude: number;
    longitude: number;
  };
};

export type Medication = {
  Name: string;
  GenericName: string | null;
  Manufacturer: string;
  Category:
    | "Insulin Pump"
    | "Continuous Glucose Monitor"
    | "Insulin Disposable Pen"
    | "Insulin Cartridges"
    | "Insulin Vials";
  Availability: Availability[];
};

function makeMedications(
  input: Omit<Medication, "Category">[],
  Category: Medication["Category"]
): Medication[] {
  return input.map((i) => ({ ...i, Category }));
}

const availabilities: Record<string, Availability> = {
  libre_2_chemist_4_u: {
    Name: "Chemist4u",
    Country: countries.GB,
    FundingType: FundingType.OutOfPocket,
    Type: "OnlineStore",
    Website: "https://www.chemist-4-u.com/freestyle-libre-two-sensor",
  },
};

const insulinPumps = [
  {
    Name: "MiniMed™ 780G System",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 770G System",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 630G System",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Omnipod® 5 Automated Insulin Delivery System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Omnipod DASH® Insulin Management System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "t:slim X2™ Insulin Pump with Control-IQ® Technology",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "t:slim X2™ Insulin Pump with Basal-IQ® Technology",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek Insight Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek Solo Micropump System",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana Diabecare IIS",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "YpsoPump®",
    Manufacturer: "Ypsomed AG",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "EOPatch®",
    Manufacturer: "EOFlow Co., Ltd.",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Sigi™ Patch Pump",
    Manufacturer: "AMF Medical (acquired by Tandem Diabetes Care)",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "iLet® Bionic Pancreas",
    Manufacturer: "Beta Bionics",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Inreda AP",
    Manufacturer: "Inreda Diabetic B.V.",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Spring Zone Insulin Delivery System",
    Manufacturer:
      "Spring Health Solutions Ltd. (subsidiary of D. Medical Industries)",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® Revel™ Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® REAL-Time Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 670G System",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Omnipod® Insulin Management System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "t:flex® Insulin Pump",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "t:slim G4™ Insulin Pump",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Animas® Vibe® Insulin Pump",
    Manufacturer:
      "Animas Corporation (a Johnson & Johnson company; note: Animas exited the insulin pump market in 2017)",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Animas® OneTouch Ping® Insulin Pump",
    Manufacturer:
      "Animas Corporation (a Johnson & Johnson company; note: Animas exited the insulin pump market in 2017)",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Deltec Cozmo® Insulin Pump",
    Manufacturer: "Smiths Medical (note: this pump has been discontinued)",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek Spirit Combo Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Diabecare® IIS Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Omnipod® Horizon™ System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "t:slim X2™ Insulin Pump with Mobile Bolus Feature",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 640G System",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® 522/722 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® 515/715 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® 512/712 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ Paradigm® 511 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 508 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 507C Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 507 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 506 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 504 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "MiniMed™ 502 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana-i Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana R Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana Diabecare RS Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana Diabecare R Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana Diabecare II Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dana Diabecare I Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek D-TRONplus Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek D-TRON Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek Spirit Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Accu-Chek Combo Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
    Availability: [],
  },
];

const cgmDevices = [
  {
    Name: "Dexcom G6",
    Manufacturer: "Dexcom",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dexcom ONE",
    Manufacturer: "Dexcom",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Dexcom Stelo",
    Manufacturer: "Dexcom",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "FreeStyle Libre 2",
    Manufacturer: "Abbott",
    GenericName: null,
    Availability: [availabilities.libre_2_chemist_4_u],
  },
  {
    Name: "FreeStyle Libre 3",
    Manufacturer: "Abbott",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Lingo",
    Manufacturer: "Abbott",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Guardian Connect",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Guardian Sensor 3",
    Manufacturer: "Medtronic",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Eversense E3",
    Manufacturer: "Senseonics",
    GenericName: null,
    Availability: [],
  },
  {
    Name: "Eversense 365",
    Manufacturer: "Senseonics",
    GenericName: null,
    Availability: [],
  },
];

const insulinDisposable = [
  {
    Name: "Humalog KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Humalog Mix 50/50 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "Humalog Mix 75/25 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "Humalog U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Humalog U-200 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Humulin 70/30 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
    Availability: [],
  },
  {
    Name: "Humulin N KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "Humulin R U-500 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "Basaglar KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Lyumjev U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
    Availability: [],
  },
  {
    Name: "Lyumjev U-200 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
    Availability: [],
  },
  {
    Name: "Admelog SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Apidra SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glulisine",
    Availability: [],
  },
  {
    Name: "Lantus SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Toujeo SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
    Availability: [],
  },
  {
    Name: "Toujeo Max SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
    Availability: [],
  },
  {
    Name: "NovoLog FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "NovoLog Mix 70/30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName:
      "70% Insulin Aspart Protamine Suspension and 30% Insulin Aspart Injection",
    Availability: [],
  },
  {
    Name: "Fiasp FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Levemir FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
    Availability: [],
  },
  {
    Name: "Tresiba FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
    Availability: [],
  },
  {
    Name: "Ryzodeg 70/30 FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Degludec and 30% Insulin Aspart",
    Availability: [],
  },
  {
    Name: "NovoMix 30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Insulin Aspart and 70% Insulin Aspart Protamine",
    Availability: [],
  },
  {
    Name: "Semglee Pen",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "NovoRapid FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "NovoRapid FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Humalog Junior KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Insulin Lispro Injection Junior KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Insulin Lispro U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Insulin Aspart FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Insulin Aspart Protamine and Insulin Aspart Injectable Suspension Mix 70/30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Aspart Protamine and 30% Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Insulin Lispro Protamine and Insulin Lispro Injectable Suspension Mix 75/25 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "75% Insulin Lispro Protamine and 25% Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Humalog Mix 50/50 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "50% Insulin Lispro Protamine and 50% Insulin Lispro",
    Availability: [],
  },
];

const insulinCartridges = [
  {
    Name: "Humalog Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "NovoRapid Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Apidra SoloStar Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glulisine",
    Availability: [],
  },
  {
    Name: "Fiasp Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Humulin N Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "Humulin R Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "Novolin N Cartridge",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "Novolin R Cartridge",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "Levemir Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
    Availability: [],
  },
  {
    Name: "Lantus Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Toujeo Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
    Availability: [],
  },
  {
    Name: "Basaglar Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Tresiba Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
    Availability: [],
  },
  {
    Name: "Ryzodeg 70/30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Degludec and 30% Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Humalog Mix 75/25 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "Humalog Mix 50/50 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "NovoMix 30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Insulin Aspart and 70% Insulin Aspart Protamine",
    Availability: [],
  },
  {
    Name: "Admelog Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Lyumjev Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
    Availability: [],
  },
  {
    Name: "Insuman Comb 25 Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Insuman Basal Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Insuman Rapid Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Actrapid Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Insulatard Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Mixtard 30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Soluble Insulin and 70% Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Porcine Neutral Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Porcine Isophane Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Bovine Neutral Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Bovine Isophane Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
    Availability: [],
  },
  {
    Name: "Semglee Cartridge",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Gensulin R Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin N Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin M30 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin M40 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "40% Regular Human Insulin and 60% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin M50 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "50% Regular Human Insulin and 50% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin R Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin N Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin 30/70 Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin R Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin N Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin M 30/70 Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Insulin Human Winthrop Comb 25 Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Insulin Human Winthrop Basal Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Insulin Human Winthrop Rapid Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Humalog Mix 25 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "25% Insulin Lispro and 75% Insulin Lispro Protamine",
    Availability: [],
  },
];

const insulinVials = [
  {
    Name: "Humulin R",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "Novolin R",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "Humulin N",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "Novolin N",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "Lantus",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Levemir",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
    Availability: [],
  },
  {
    Name: "Tresiba",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
    Availability: [],
  },
  {
    Name: "Toujeo",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
    Availability: [],
  },
  {
    Name: "Basaglar",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Humalog",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "NovoLog",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Apidra",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glulisine",
    Availability: [],
  },
  {
    Name: "Fiasp",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
    Availability: [],
  },
  {
    Name: "Admelog",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Lispro",
    Availability: [],
  },
  {
    Name: "Lyumjev",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
    Availability: [],
  },
  {
    Name: "Humulin 70/30",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
    Availability: [],
  },
  {
    Name: "Novolin 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
    Availability: [],
  },
  {
    Name: "Humalog Mix 75/25",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "Humalog Mix 50/50",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
    Availability: [],
  },
  {
    Name: "NovoLog Mix 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName:
      "70% Insulin Aspart Protamine Suspension and 30% Insulin Aspart Injection",
    Availability: [],
  },
  {
    Name: "ReliOn/Novolin R",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
    Availability: [],
  },
  {
    Name: "ReliOn/Novolin N",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
    Availability: [],
  },
  {
    Name: "ReliOn/Novolin 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
    Availability: [],
  },
  {
    Name: "Humulin R U-500",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Concentrated Regular Insulin",
    Availability: [],
  },
  {
    Name: "Afrezza",
    Manufacturer: "MannKind Corporation",
    GenericName: "Inhaled Human Insulin",
    Availability: [],
  },
  {
    Name: "Semglee",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
    Availability: [],
  },
  {
    Name: "Myxredlin",
    Manufacturer: "Baxter International Inc.",
    GenericName: "Ready-to-Use Regular Insulin",
    Availability: [],
  },
  {
    Name: "Insuman Rapid",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Insuman Basal",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Insuman Comb 25",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Actrapid",
    Manufacturer: "Novo Nordisk",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Insulatard",
    Manufacturer: "Novo Nordisk",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Mixtard 30",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Soluble Insulin and 70% Isophane Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Porcine Neutral",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Porcine Isophane",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Bovine Neutral",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
    Availability: [],
  },
  {
    Name: "Hypurin Bovine Isophane",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin R",
    Manufacturer: "Bioton S.A.",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin N",
    Manufacturer: "Bioton S.A.",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Gensulin M30",
    Manufacturer: "Bioton S.A.",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin R",
    Manufacturer: "Pharmstandard",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin N",
    Manufacturer: "Pharmstandard",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Biosulin 30/70",
    Manufacturer: "Pharmstandard",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin R",
    Manufacturer: "Geropharm",
    GenericName: "Regular Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin N",
    Manufacturer: "Geropharm",
    GenericName: "NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Rosinsulin M 30/70",
    Manufacturer: "Geropharm",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
    Availability: [],
  },
  {
    Name: "Insulin Human Winthrop Rapid",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
    Availability: [],
  },
  {
    Name: "Insulin Human Winthrop Basal",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
    Availability: [],
  },
];

const allMedications: Medication[] = [
  ...makeMedications(insulinPumps, "Insulin Pump"),
  ...makeMedications(cgmDevices, "Continuous Glucose Monitor"),
  ...makeMedications(insulinDisposable, "Insulin Disposable Pen"),
  ...makeMedications(insulinCartridges, "Insulin Cartridges"),
  ...makeMedications(insulinVials, "Insulin Vials"),
];

export type RootSchema = {
  Country: TCountries;
  Medication: Medication[];
};

export const data: RootSchema = {
  Country: countries,
  Medication: allMedications,
};
