import nauru from "./Nauru-Passport.webp";




export interface Passport {
  id: string;
  country: string;
  image: string;
  mobilityScore: number;
  globalRank: number;
  individualRank: number;
  visaFree: number;
  voa: number;
  eta: number;
  evisa: number;
  description: string;
}

export const passports: Passport[] = [
  {
    id: "nauru",
    country: "Nauru",
    image: nauru,
    mobilityScore: 88,
    globalRank: 57,
    individualRank: 106,
    visaFree: 55,
    voa: 28,
    eta: 5,
    evisa: 30,
    description: `As of 2025, Nauru passport ranks 57th globally...`,
  },
  {
    id: "fiji",
    country: "Fiji",
    image: nauru,
    mobilityScore: 92,
    globalRank: 50,
    individualRank: 98,
    visaFree: 60,
    voa: 25,
    eta: 4,
    evisa: 28,
    description: `Fiji passport holders enjoy visa-free...`,
  },
  {
    id: "India",
    country: "India",
    image: nauru,
    mobilityScore: 92,
    globalRank: 50,
    individualRank: 98,
    visaFree: 60,
    voa: 25,
    eta: 4,
    evisa: 28,
    description: `Fiji passport holders enjoy visa-free...`,
  },
  // ➕ add more countries here
];
