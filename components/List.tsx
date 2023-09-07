import React from "react";
import { capitalize } from "../utils";
import { Data } from "../utils/types";
import ListItem from "./ListItem";

interface ListProps {
    title: string;
    listItems: Data[]
};

const List: React.FC<ListProps> = ({title, listItems}) => {
  return (
    <div className="px-2 h-full">
        <h2 className="
            p-2 w-full border-b-2
            bg-background dark:bg-background-dark
        ">
        {capitalize(title)}</h2>
        <ul className="p-2">
            {listItems.map( item => {
            return (
                <ListItem
                    key={item.name}
                    item={item}
                />
            )})}
        </ul>
    </div>
  )
};

export default List;