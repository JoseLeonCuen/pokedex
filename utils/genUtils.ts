import { GenName } from "./types";

export const regionThreshold = [
  { min: 1, max: 151 },
  { min: 152, max: 251 },
  { min: 252, max: 386 },
  { min: 387, max: 493 },
  { min: 494, max: 649 },
  { min: 650, max: 721 },
  { min: 722, max: 809 },
  { min: 810, max: 890 },
  { min: 891, max: 905},
  { min: 906, max: 1010 }
];

const genIDs = {
  kanto: 0,
  johto: 1,
  hoenn: 2,
  sinnoh: 3,
  unova: 4,
  kalos: 5,
  alola: 6,
  galar: 7,
  hisui: 8,
  paldea: 9,
}

export function getGen(num: number) {
  if (num <= regionThreshold[0].max) {
    return 1;
  }
  if (num <= regionThreshold[1].max) {
    return 2;
  }
  if (num <= regionThreshold[2].max) {
    return 3;
  }
  if (num <= regionThreshold[3].max) {
    return 4;
  }
  if (num <= regionThreshold[4].max) {
    return 5;
  }
  if (num <= regionThreshold[5].max) {
    return 6;
  }
  if (num <= regionThreshold[6].max) {
    return 7;
  }
  if (num <= regionThreshold[7].max) {
    return 8;
  }
  if (num <= regionThreshold[8].max) {
    return 8;
  }
  if (num <= regionThreshold[9].max) {
    return 9;
  }
}

// In case the numbered pokemon is part of a special case like a Mega evolution
// of a different, numbered pokemon
export function isNotNumbered(num: number): boolean {
  return num > regionThreshold[9].max;
}

export function getPokemonNumber(url: string) {
  return Number.parseInt(url.match(/\/([0-9]+)\/?$/)?.[1] || "0");
}

export function isFromGen(region: GenName, url: string): boolean {
  const pkmnNum = getPokemonNumber(url);
  return regionThreshold[genIDs[region]].min <= pkmnNum && regionThreshold[genIDs[region]].max > pkmnNum;
}