import React from "react";
import { Type } from "../../utils/types";

interface InfoProps {
  children: React.ReactNode;
  title?: string;
}

const InfoType: React.FC<InfoProps> = ({title, children}) => {
  return (
    <div className="border-2 rounded-lg border-blue-light m-2 p-2 min-w-40">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default InfoType;