import React from "react";
import Link from "next/link";
import { Data } from "../utils/types";
import { namePokemon, getPokemonNumber } from "../utils/utils";

interface ListItemProps {
  item: Data,
  key: string;
} 

const ListItem: React.FC<ListItemProps> = ({item, key}) => {
  const pokemonNumber = getPokemonNumber(item.url);
  return (
    <li key={key} className="m-1 hover:bg-gray-300">
    <Link className="text-left w-full" href={`/pokemon/${pokemonNumber}`}>
      {namePokemon(item.name)}
    </Link>
    </li>
  );
}

export default ListItem;