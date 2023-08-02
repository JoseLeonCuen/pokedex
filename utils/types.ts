
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

export type Type = {
  slot: number;
  type: Data;
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

export type Pokemon = {
  entry_number: number;
  pokemon_species: {
    url: string;
    abilities: Ability[];
    height: number;
    id: number;
    weight: number;
    moves: Move[];
    name: string;
    order: number;
    species: Data;
    sprites: SpeechRecognitionResult;
    stats: Stat[];
    types: Type[];
  }
}