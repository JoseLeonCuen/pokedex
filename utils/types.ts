
export type Data = {
  name: string;
  url: string;
}

export type Region = Data;

export type RegionData = {
  id: number;
  main_generation: Data;
  name: string;
  version_groups: Data;
}

export type TypeName = "grass" | "fire" | "water" | "normal" | "flying" | "bug" | "electric" | "rock" | "steel" | "fighting" | "ground" | "ice" | "dark" | "psychic" | "poison" | "ghost" | "fairy" | "dragon";

export type TypeData = {
  name: TypeName
} & Data;

export type Type = {
  slot: number;
  type: TypeData;
}

export type TypeInfo = {
  id: number;
  name: TypeName;
  damage_relations: {
    no_damage_to: TypeData[];
    half_damage_to: TypeData[];
    double_damage_to: TypeData[];
    no_damage_from: TypeData[];
    half_damage_from: TypeData[];
    double_damage_from: TypeData[];
  }
}

export type Ability = {
  ability: Data;
  is_hidden: boolean;
  slot: number;
}

export type Move = {
  move: Data;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: Data;
  }[];
}

export type Sprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Data;
}

export type PokemonSpecies = {
  url: string;
  abilities: Ability[];
  height: number;
  id: number;
  weight: number;
  moves: Move[];
  name: string;
  order: number;
  species: Data;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export type Pokemon = {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}