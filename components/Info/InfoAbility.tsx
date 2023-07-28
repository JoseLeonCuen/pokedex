import React from "react";
import { Ability } from "../../utils/types";
import { capitalize, cleanString } from "../../utils/utils";
import Info from "./Info";
import Badge from "../Badge/Badge";

const InfoType: React.FC<{abilities: Ability[]}> = ({abilities}) => {
  return (
    <Info title="Abilities">
      <div className="">
        {abilities.map(ability => {
          return (
            <p
              key={ability?.ability?.name}
              className={"m-1 rounded-sm"}
              >
                {cleanString(capitalize(ability?.ability?.name))}
                {ability.is_hidden && (
                  <Badge>Hidden</Badge>
                )}
              </p>
          )
        })}
      </div>
    </Info>
  )
}

export default InfoType;