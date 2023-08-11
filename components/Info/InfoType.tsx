import React from "react";
import { Type } from "../../utils/types";
import Info from "./Info";
import BadgeType from "../Badge/BadgeType";

const InfoType: React.FC<{types: Type[]}> = ({types}) => {
  return (
    <Info title="Type" variant="secondary">
      <div className="flex">
        {types.map(type => {
          return (
            <BadgeType key={type.type.name} type={type.type.name} />
          )
        })}
      </div>
    </Info>
  )
}

export default InfoType;