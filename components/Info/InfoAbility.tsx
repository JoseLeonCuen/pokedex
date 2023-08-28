import React from "react";
import { Ability } from "../../utils/types";
import { capitalize, replaceDashWithSpace } from "../../utils";
import Info from "./Info";
import Badge from "../Badge/Badge";

const InfoAbility: React.FC<{abilities: Ability[]}> = ({abilities}) => {
  return (
    <Info title="Abilities" variant="secondary">
      <div className="">
        {abilities.map(ability => {
          return (
            <p
              key={ability?.ability?.name}
              className={"m-1 rounded-sm"}
              >
                {replaceDashWithSpace(capitalize(ability?.ability?.name))}
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

export default InfoAbility;