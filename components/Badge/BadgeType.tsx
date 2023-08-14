import React from "react";
import Badge from "./Badge";

const BadgeType: React.FC<{type: string}> = ({type}) => {
  return (
    <Badge
      className={`text-white w-20 m-1 rounded-md type bg-${type} dark:text-white dark:border-white`}
    >
      {type.toUpperCase()}
    </Badge>
  )
}

export default BadgeType;