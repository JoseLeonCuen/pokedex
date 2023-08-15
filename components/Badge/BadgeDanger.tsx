import React from "react";
import { capitalize } from "../../utils";
import Badge from "./Badge";

const BadgeDanger: React.FC<{message: string}> = ({message}) => {
  return (
    <Badge
      className={`text-red dark:text-red`}
    >
      {capitalize(message)}
    </Badge>
  )
}

export default BadgeDanger;