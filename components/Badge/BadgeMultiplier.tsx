import React from "react";
import { capitalize } from "../../utils";
import Badge from "./Badge";

interface BadgeDangerProps {
  message?: string;
  children?: React.ReactNode;
}

const BadgeDanger: React.FC<BadgeDangerProps> = ({message, children}) => {
  const color = message === "x4" ? "red" : "green";
  return (
    <Badge
      className={`text-${color} dark:text-${color} border-${color} dark:border-${color}`}
    >
      {children}
      {message && capitalize(message)}
    </Badge>
  )
}

export default BadgeDanger;