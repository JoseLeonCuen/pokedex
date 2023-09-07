import React from "react";
import Link from "next/link";
import { Data } from "../utils/types";
import { namePokemon, getPokemonNumber } from "../utils";

interface ListItemProps {
  item: Data,
  key: string;
} 

// TODO: either abstract the component or rename it
const ListItem: React.FC<ListItemProps> = ({item, key}) => {
  const pokemonNumber = getPokemonNumber(item.url);
  return (
    <li key={key} className="mx-1
        hover:bg-blue
        border-b-2 border-blue-dark
      ">
      <Link className="
        p-3 py-2
        block text-left w-full        
      " href={`/pokemon/${pokemonNumber}`}>
        {"#" + pokemonNumber + " - " + namePokemon(item.name)}
      </Link>
    </li>
  );
}

export default ListItem;