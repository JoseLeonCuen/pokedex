
export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function cleanString(str: string) {
  return str.replace(/[_-]/, " ").trim();
}

export function genderize(str: string) {
  return str.replace(/-f$/, " ♀").replace(/-m$/, " ♂");
}
