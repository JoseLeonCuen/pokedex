
export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function cleanString(str: string) {
  return str.replace(/[_-]/, " ").trim();
}

function genderize(str: string) {
  return str.replace(/-f$/, " ♀").replace(/-m$/, " ♂");
}

export function getHeight(height: number) {
  return height/10 + " m";
}

export function getWeight(weight: number) {
  return weight/10 + " kg";
}


export function namePokemon(str: string) {
  return capitalize(cleanString(genderize(str)));
}

export function getGen(num: number) {
  if (num <= 151) {
    return 1;
  }
  if (num <= 251) {
    return 2;
  }
  if (num <= 386) {
    return 3;
  }
  if (num <= 493) {
    return 4;
  }
  if (num <= 649) {
    return 5;
  }
  if (num <= 721) {
    return 6;
  }
  if (num <= 809) {
    return 7;
  }
  if (num <= 905) {
    return 8;
  }
  if (num <= 1010) {
    return 9;
  }
}