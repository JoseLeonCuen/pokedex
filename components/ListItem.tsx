import React from "react";
import Link from "next/link";
import { Data } from "../utils/types";
import { namePokemon } from "../utils/utils";

interface ListItemProps {
  item: Data,
  key: string;
} 

const ListItem: React.FC<ListItemProps> = ({item, key}) => {
  return (
    <li key={key} className="m-1 hover:bg-gray-300">
    <Link className="text-left w-full" href={`/pokemon/${item.name}`}>
      {namePokemon(item.name)}
    </Link>
    </li>
  );
}

export default ListItem;