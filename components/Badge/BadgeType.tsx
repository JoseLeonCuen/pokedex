import React from "react";
import Badge from "./Badge";

const InfoType: React.FC<{type: string}> = ({type}) => {
  return (
    <Badge
      className={`text-center text-white text-xs w-20 m-1 rounded-lg type bg-${type}`}
    >
      {type.toUpperCase()}
    </Badge>
  )
}

export default InfoType;