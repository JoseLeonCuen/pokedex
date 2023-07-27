import React from "react";
import { Type } from "../../utils/types";
import Info from "./Info";

const InfoType: React.FC<{types: Type[]}> = ({types}) => {
  return (
    <Info title="Type">
      <div className="flex">
        {types.map(type => {
          return (
            <p
              key={type?.type?.name}
              className={`text-center text-white text-xs w-20 m-1 rounded-sm type bg-${type.type.name}`}
            >
              {type?.type?.name.toUpperCase()}
            </p>
          )
        })}
      </div>
    </Info>
  )
}

export default InfoType;