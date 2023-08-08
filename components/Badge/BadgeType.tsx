import React from "react";
import Badge from "./Badge";

const BadgeType: React.FC<{type: string}> = ({type}) => {
  return (
    <Badge
      className={`text-white text-xs w-20 m-1 rounded-lg type bg-${type}`}
    >
      {type.toUpperCase()}
    </Badge>
  )
}

export default BadgeType;