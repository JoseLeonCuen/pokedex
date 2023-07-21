import React from "react";
import { Ability } from "../utils/types";
import capitilize from "../utils/capitalize";

const InfoType: React.FC<{abilities: Ability[]}> = ({abilities}) => {
  return (
    <div className="border-2 rounded-lg border-cyan-500 m-2 p-2 w-40">
      <h2>Abilities</h2>
      <div className="">
        {abilities.map(ability => {
          return (
            <p
              key={ability?.ability?.name}
              className={"m-1 rounded-sm"}
              >
                {capitilize(ability?.ability?.name)}
              </p>
          )
        })}
      </div>
    </div>
  )
}

export default InfoType;