import {
  countries,
  ICountry,
  TCountries,
  getCountryCode,
} from "countries-list";

export type Availability = {
  ID: string; // UUID
  Country: ICountry;
  Medication: string;
  ObtainingMethod: string;
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
};

function makeMedications(
  input: Omit<Medication, "Category">[],
  Category: Medication["Category"]
): Medication[] {
  return input.map((i) => ({ ...i, Category }));
}

const insulinPumps = [
  {
    Name: "MiniMed™ 780G System",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 770G System",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 630G System",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "Omnipod® 5 Automated Insulin Delivery System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
  },
  {
    Name: "Omnipod DASH® Insulin Management System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
  },
  {
    Name: "t:slim X2™ Insulin Pump with Control-IQ® Technology",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
  },
  {
    Name: "t:slim X2™ Insulin Pump with Basal-IQ® Technology",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Accu-Chek Insight Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Accu-Chek Solo Micropump System",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Dana Diabecare IIS",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  { Name: "YpsoPump®", Manufacturer: "Ypsomed AG", GenericName: null },
  { Name: "EOPatch®", Manufacturer: "EOFlow Co., Ltd.", GenericName: null },
  {
    Name: "Sigi™ Patch Pump",
    Manufacturer: "AMF Medical (acquired by Tandem Diabetes Care)",
    GenericName: null,
  },
  {
    Name: "iLet® Bionic Pancreas",
    Manufacturer: "Beta Bionics",
    GenericName: null,
  },
  {
    Name: "Inreda AP",
    Manufacturer: "Inreda Diabetic B.V.",
    GenericName: null,
  },
  {
    Name: "Spring Zone Insulin Delivery System",
    Manufacturer:
      "Spring Health Solutions Ltd. (subsidiary of D. Medical Industries)",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® Revel™ Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® REAL-Time Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 670G System",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "Omnipod® Insulin Management System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
  },
  {
    Name: "t:flex® Insulin Pump",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
  },
  {
    Name: "t:slim G4™ Insulin Pump",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Animas® Vibe® Insulin Pump",
    Manufacturer:
      "Animas Corporation (a Johnson & Johnson company; note: Animas exited the insulin pump market in 2017)",
    GenericName: null,
  },
  {
    Name: "Animas® OneTouch Ping® Insulin Pump",
    Manufacturer:
      "Animas Corporation (a Johnson & Johnson company; note: Animas exited the insulin pump market in 2017)",
    GenericName: null,
  },
  {
    Name: "Deltec Cozmo® Insulin Pump",
    Manufacturer: "Smiths Medical (note: this pump has been discontinued)",
    GenericName: null,
  },
  {
    Name: "Accu-Chek Spirit Combo Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Diabecare® IIS Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Omnipod® Horizon™ System",
    Manufacturer: "Insulet Corporation",
    GenericName: null,
  },
  {
    Name: "t:slim X2™ Insulin Pump with Mobile Bolus Feature",
    Manufacturer: "Tandem Diabetes Care",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 640G System",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® 522/722 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® 515/715 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® 512/712 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ Paradigm® 511 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 508 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 507C Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 507 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 506 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 504 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "MiniMed™ 502 Insulin Pump",
    Manufacturer: "Medtronic",
    GenericName: null,
  },
  {
    Name: "Dana-i Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Dana R Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Dana Diabecare RS Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Dana Diabecare R Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Dana Diabecare II Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Dana Diabecare I Insulin Pump",
    Manufacturer: "SOOIL Development",
    GenericName: null,
  },
  {
    Name: "Accu-Chek D-TRONplus Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Accu-Chek D-TRON Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Accu-Chek Spirit Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
  {
    Name: "Accu-Chek Combo Insulin Pump",
    Manufacturer: "Roche Diabetes Care",
    GenericName: null,
  },
];

const cgmDevices = [
  { Name: "Dexcom G6", Manufacturer: "Dexcom", GenericName: null },
  { Name: "Dexcom ONE", Manufacturer: "Dexcom", GenericName: null },
  { Name: "Dexcom Stelo", Manufacturer: "Dexcom", GenericName: null },
  { Name: "FreeStyle Libre 2", Manufacturer: "Abbott", GenericName: null },
  { Name: "FreeStyle Libre 3", Manufacturer: "Abbott", GenericName: null },
  { Name: "Lingo", Manufacturer: "Abbott", GenericName: null },
  { Name: "Guardian Connect", Manufacturer: "Medtronic", GenericName: null },
  { Name: "Guardian Sensor 3", Manufacturer: "Medtronic", GenericName: null },
  { Name: "Eversense E3", Manufacturer: "Senseonics", GenericName: null },
  { Name: "Eversense 365", Manufacturer: "Senseonics", GenericName: null },
];

const insulinDisposable = [
  {
    Name: "Humalog KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Humalog Mix 50/50 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
  },
  {
    Name: "Humalog Mix 75/25 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
  },
  {
    Name: "Humalog U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Humalog U-200 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Humulin 70/30 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
  },
  {
    Name: "Humulin N KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
  },
  {
    Name: "Humulin R U-500 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
  },
  {
    Name: "Basaglar KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Lyumjev U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
  },
  {
    Name: "Lyumjev U-200 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
  },
  {
    Name: "Admelog SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Apidra SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glulisine",
  },
  {
    Name: "Lantus SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Toujeo SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
  },
  {
    Name: "Toujeo Max SoloStar",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
  },
  {
    Name: "NovoLog FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  {
    Name: "NovoLog Mix 70/30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName:
      "70% Insulin Aspart Protamine Suspension and 30% Insulin Aspart Injection",
  },
  {
    Name: "Fiasp FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
  },
  {
    Name: "Levemir FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
  },
  {
    Name: "Tresiba FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
  },
  {
    Name: "Ryzodeg 70/30 FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Degludec and 30% Insulin Aspart",
  },
  {
    Name: "NovoMix 30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Insulin Aspart and 70% Insulin Aspart Protamine",
  },
  {
    Name: "Semglee Pen",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "NovoRapid FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  {
    Name: "NovoRapid FlexTouch",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  {
    Name: "Humalog Junior KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Insulin Lispro Injection Junior KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Insulin Lispro U-100 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Insulin Aspart FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  {
    Name: "Insulin Aspart Protamine and Insulin Aspart Injectable Suspension Mix 70/30 FlexPen",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Aspart Protamine and 30% Insulin Aspart",
  },
  {
    Name: "Insulin Lispro Protamine and Insulin Lispro Injectable Suspension Mix 75/25 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "75% Insulin Lispro Protamine and 25% Insulin Lispro",
  },
  {
    Name: "Humalog Mix 50/50 KwikPen",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "50% Insulin Lispro Protamine and 50% Insulin Lispro",
  },
];

const insulinCartridges = [
  {
    Name: "Humalog Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "NovoRapid Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  {
    Name: "Apidra SoloStar Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glulisine",
  },
  {
    Name: "Fiasp Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
  },
  {
    Name: "Humulin N Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
  },
  {
    Name: "Humulin R Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
  },
  {
    Name: "Novolin N Cartridge",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
  },
  {
    Name: "Novolin R Cartridge",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
  },
  {
    Name: "Levemir Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
  },
  {
    Name: "Lantus Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Toujeo Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
  },
  {
    Name: "Basaglar Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Tresiba Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
  },
  {
    Name: "Ryzodeg 70/30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% Insulin Degludec and 30% Insulin Aspart",
  },
  {
    Name: "Humalog Mix 75/25 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
  },
  {
    Name: "Humalog Mix 50/50 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
  },
  {
    Name: "NovoMix 30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Insulin Aspart and 70% Insulin Aspart Protamine",
  },
  {
    Name: "Admelog Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "Lyumjev Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
  },
  {
    Name: "Insuman Comb 25 Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
  },
  {
    Name: "Insuman Basal Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
  },
  {
    Name: "Insuman Rapid Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Actrapid Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Insulatard Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "Isophane Insulin",
  },
  {
    Name: "Mixtard 30 Penfill",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Soluble Insulin and 70% Isophane Insulin",
  },
  {
    Name: "Hypurin Porcine Neutral Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
  },
  {
    Name: "Hypurin Porcine Isophane Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
  },
  {
    Name: "Hypurin Bovine Neutral Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
  },
  {
    Name: "Hypurin Bovine Isophane Cartridge",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
  },
  {
    Name: "Semglee Cartridge",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Gensulin R Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Gensulin N Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Gensulin M30 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Gensulin M40 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "40% Regular Human Insulin and 60% NPH Human Insulin",
  },
  {
    Name: "Gensulin M50 Cartridge",
    Manufacturer: "Bioton S.A.",
    GenericName: "50% Regular Human Insulin and 50% NPH Human Insulin",
  },
  {
    Name: "Biosulin R Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Biosulin N Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Biosulin 30/70 Cartridge",
    Manufacturer: "Pharmstandard",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Rosinsulin R Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Rosinsulin N Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Rosinsulin M 30/70 Cartridge",
    Manufacturer: "Geropharm",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Insulin Human Winthrop Comb 25 Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
  },
  {
    Name: "Insulin Human Winthrop Basal Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
  },
  {
    Name: "Insulin Human Winthrop Rapid Cartridge",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Humalog Mix 25 Cartridge",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "25% Insulin Lispro and 75% Insulin Lispro Protamine",
  },
];

const insulinVials = [
  {
    Name: "Humulin R",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Regular Insulin",
  },
  {
    Name: "Novolin R",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
  },
  {
    Name: "Humulin N",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "NPH Insulin",
  },
  {
    Name: "Novolin N",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
  },
  { Name: "Lantus", Manufacturer: "Sanofi", GenericName: "Insulin Glargine" },
  {
    Name: "Levemir",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Detemir",
  },
  {
    Name: "Tresiba",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Degludec",
  },
  {
    Name: "Toujeo",
    Manufacturer: "Sanofi",
    GenericName: "Insulin Glargine U-300",
  },
  {
    Name: "Basaglar",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Humalog",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro",
  },
  {
    Name: "NovoLog",
    Manufacturer: "Novo Nordisk",
    GenericName: "Insulin Aspart",
  },
  { Name: "Apidra", Manufacturer: "Sanofi", GenericName: "Insulin Glulisine" },
  {
    Name: "Fiasp",
    Manufacturer: "Novo Nordisk",
    GenericName: "Faster-Acting Insulin Aspart",
  },
  { Name: "Admelog", Manufacturer: "Sanofi", GenericName: "Insulin Lispro" },
  {
    Name: "Lyumjev",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Insulin Lispro-aabc",
  },
  {
    Name: "Humulin 70/30",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
  },
  {
    Name: "Novolin 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
  },
  {
    Name: "Humalog Mix 75/25",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "75% Insulin Lispro Protamine Suspension and 25% Insulin Lispro Injection",
  },
  {
    Name: "Humalog Mix 50/50",
    Manufacturer: "Eli Lilly and Co.",
    GenericName:
      "50% Insulin Lispro Protamine Suspension and 50% Insulin Lispro Injection",
  },
  {
    Name: "NovoLog Mix 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName:
      "70% Insulin Aspart Protamine Suspension and 30% Insulin Aspart Injection",
  },
  {
    Name: "ReliOn/Novolin R",
    Manufacturer: "Novo Nordisk",
    GenericName: "Regular Insulin",
  },
  {
    Name: "ReliOn/Novolin N",
    Manufacturer: "Novo Nordisk",
    GenericName: "NPH Insulin",
  },
  {
    Name: "ReliOn/Novolin 70/30",
    Manufacturer: "Novo Nordisk",
    GenericName: "70% NPH Insulin and 30% Regular Insulin",
  },
  {
    Name: "Humulin R U-500",
    Manufacturer: "Eli Lilly and Co.",
    GenericName: "Concentrated Regular Insulin",
  },
  {
    Name: "Afrezza",
    Manufacturer: "MannKind Corporation",
    GenericName: "Inhaled Human Insulin",
  },
  {
    Name: "Semglee",
    Manufacturer: "Biocon Biologics",
    GenericName: "Insulin Glargine",
  },
  {
    Name: "Myxredlin",
    Manufacturer: "Baxter International Inc.",
    GenericName: "Ready-to-Use Regular Insulin",
  },
  {
    Name: "Insuman Rapid",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Insuman Basal",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
  },
  {
    Name: "Insuman Comb 25",
    Manufacturer: "Sanofi",
    GenericName: "25% Soluble Insulin and 75% Isophane Insulin",
  },
  {
    Name: "Actrapid",
    Manufacturer: "Novo Nordisk",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Insulatard",
    Manufacturer: "Novo Nordisk",
    GenericName: "Isophane Insulin",
  },
  {
    Name: "Mixtard 30",
    Manufacturer: "Novo Nordisk",
    GenericName: "30% Soluble Insulin and 70% Isophane Insulin",
  },
  {
    Name: "Hypurin Porcine Neutral",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
  },
  {
    Name: "Hypurin Porcine Isophane",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Porcine Insulin",
  },
  {
    Name: "Hypurin Bovine Neutral",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
  },
  {
    Name: "Hypurin Bovine Isophane",
    Manufacturer: "Wockhardt UK Ltd",
    GenericName: "Bovine Insulin",
  },
  {
    Name: "Gensulin R",
    Manufacturer: "Bioton S.A.",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Gensulin N",
    Manufacturer: "Bioton S.A.",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Gensulin M30",
    Manufacturer: "Bioton S.A.",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Biosulin R",
    Manufacturer: "Pharmstandard",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Biosulin N",
    Manufacturer: "Pharmstandard",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Biosulin 30/70",
    Manufacturer: "Pharmstandard",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Rosinsulin R",
    Manufacturer: "Geropharm",
    GenericName: "Regular Human Insulin",
  },
  {
    Name: "Rosinsulin N",
    Manufacturer: "Geropharm",
    GenericName: "NPH Human Insulin",
  },
  {
    Name: "Rosinsulin M 30/70",
    Manufacturer: "Geropharm",
    GenericName: "30% Regular Human Insulin and 70% NPH Human Insulin",
  },
  {
    Name: "Insulin Human Winthrop Rapid",
    Manufacturer: "Sanofi",
    GenericName: "Soluble Insulin",
  },
  {
    Name: "Insulin Human Winthrop Basal",
    Manufacturer: "Sanofi",
    GenericName: "Isophane Insulin",
  },
];

const allMedications: Medication[] = [
  ...makeMedications(insulinPumps, "Insulin Pump"),
  ...makeMedications(cgmDevices, "Continuous Glucose Monitor"),
  ...makeMedications(insulinDisposable, "Insulin Disposable Pen"),
  ...makeMedications(insulinCartridges, "Insulin Cartridges"),
  ...makeMedications(insulinVials, "Insulin Vials"),
];

export type Method = {
  Type: "Pharmacy" | "Hospital" | "OnlineStore" | "Clinic";
  Name: string;
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
  Country: TCountries;
  Medication: Medication[];
  ObtainingMethod: ObtainingMethod[];
};

export const data: RootSchema = {
  Country: countries,
  Medication: allMedications,
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
      Country: countries.US,
      Medication: "OmniPod DASH",
      ObtainingMethod: "d9b2b05e-44b0-45ff-a2ab-4de3eae3aef2",
    },
    {
      ID: "979c967d-a603-4045-8b8e-3d9bd892d3da",
      Country: countries.CA,
      Medication: "Dexcom G6",
      ObtainingMethod: "b38a50f6-58c1-405f-9bb8-2b9c647b1e77",
    },
  ],
};
