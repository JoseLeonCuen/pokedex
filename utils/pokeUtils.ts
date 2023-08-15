import { capitalize, cleanString, genderize } from "./utils";

export function getHeight(height: number) {
  return height/10 + " m";
}

export function getWeight(weight: number) {
  return weight/10 + " kg";
}

export function namePokemon(str: string) {
  return capitalize(cleanString(genderize(str)));
}