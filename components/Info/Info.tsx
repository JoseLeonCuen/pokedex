import React from "react";
import { Type } from "../../utils/types";

interface InfoProps {
  children: React.ReactNode;
  title?: string;
  variant?: "primary" | "secondary";
}

const Info: React.FC<InfoProps> = ({title, children, variant= "primary"}) => {
  return (
    <div className={
      `border-2 rounded-lg border-blue-light m-2 p-2 md:w-[46.4%] ${variant == "primary" ? "sm:w-full" : "sm:w-[46.4%]"}`
      }>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Info;