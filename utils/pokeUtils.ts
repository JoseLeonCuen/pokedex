import { capitalize, cleanString, genderize, snakeToCamelCase } from "./utils";
import { WeaknessRelations, TypeData, CamelDamageRelationFrom, TypeName, SnakeDamageRelationFrom } from "./types";

export function getHeight(height: number): string {
  return height/10 + " m";
}

export function getWeight(weight: number): string {
  return weight/10 + " kg";
}

export function namePokemon(str: string): string {
  return capitalize(cleanString(genderize(str)));
}

export function typeIsListed(weaknesses: WeaknessRelations, target: TypeData): CamelDamageRelationFrom | undefined {
  for ( const relation in weaknesses) {
    if (weaknesses[relation as CamelDamageRelationFrom].find(type => type.name === target.name)) {
      return relation as CamelDamageRelationFrom;
    }
  }
}

export function findTypeIndex(relation: TypeData[], typeName: TypeName): number {
  return relation.findIndex(type => type.name === typeName)
}

export function seekAndRemoveType(relation: TypeData[], typeName: TypeName): TypeData[] {
  let result = relation;
  const typeIndex = findTypeIndex(result, typeName);
  if(typeIndex > -1) {
    result.splice(typeIndex, 1);
  }
  return result;
}

export function seekAndDoubleType(relation: TypeData[], type: TypeData): TypeData[] {
  let result = relation;
  const typeIndex = findTypeIndex(result, type.name);
  if (typeIndex > -1) {
    result.splice(typeIndex,1, {...type, double: true})
  }
  return result;
}

export function evaluateTypeWeakness(weaknesses: WeaknessRelations, relation: SnakeDamageRelationFrom, type: TypeData): WeaknessRelations {
  const result = weaknesses
  switch(relation) {
    case 'no_damage_from':
      const otherRelations = ["halfDamageFrom", "doubleDamageFrom"];
      for (let i =0; i< otherRelations.length; i ++) {
        if (typeIsListed(weaknesses, type) == otherRelations[i]) {
          weaknesses[otherRelations[i] as CamelDamageRelationFrom] =
            seekAndRemoveType(weaknesses[otherRelations[i] as CamelDamageRelationFrom], type.name);
        }
      }
      result[snakeToCamelCase(relation) as CamelDamageRelationFrom].push(type);
      break;
    case 'half_damage_from':
      if (typeIsListed(weaknesses, type) !== "noDamageFrom") {
        if (typeIsListed(weaknesses, type) === "doubleDamageFrom") {
          weaknesses.doubleDamageFrom = seekAndRemoveType(weaknesses.doubleDamageFrom, type.name);
        } else if (typeIsListed(weaknesses, type) === "halfDamageFrom") {
          weaknesses.halfDamageFrom = seekAndDoubleType(weaknesses.halfDamageFrom, type);
        } else {
          result[snakeToCamelCase(relation) as CamelDamageRelationFrom].push(type);
        }
      }
      break;
    case 'double_damage_from':
      if (!typeIsListed(weaknesses, type)) {
        result[snakeToCamelCase(relation) as CamelDamageRelationFrom].push(type);
      } else if (typeIsListed(weaknesses, type) !== "noDamageFrom") {
        if (typeIsListed(weaknesses, type) === "halfDamageFrom") {
          weaknesses.halfDamageFrom = seekAndRemoveType(weaknesses.halfDamageFrom, type.name);
        } else if (typeIsListed(weaknesses, type) === "doubleDamageFrom") {
          weaknesses.doubleDamageFrom = seekAndDoubleType(weaknesses.doubleDamageFrom, type);
        } else {
          result[snakeToCamelCase(relation) as CamelDamageRelationFrom].push(type);
        }
      }
      break;
  }
  return result;
}