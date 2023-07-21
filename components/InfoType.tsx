import React from "react";
import { Type } from "../utils/types";

const InfoType: React.FC<{types: Type[]}> = ({types}) => {
  return (
    <div className="border-2 rounded-lg border-cyan-500 m-2 p-2 w-40 h-20">
      <h2>Type</h2>
      <div className="flex">
        {types.map(type => {
          return (
            <p
              key={type?.type?.name}
              className={`text-center text-white text-xs w-20 m-1 rounded-sm type ${type?.type?.name}`}
              >
                {type?.type?.name.toUpperCase()}
              </p>
          )
        })}
      </div>
    </div>
  )
}

export default InfoType;