import React from "react";

interface PanelProps { 
  children: React.ReactNode;
  variant?: string;
}
const Panel: React.FC<PanelProps> = ({children, variant="left"}) => {
  const borderSide = variant == "left" ? (
    "border-r-4"
  ) : (
    "border-l-4"
  )
  return (
  <div className={`flex-col ${borderSide} p-4  border-blue-light bg-background md:w-48 dark:bg-background-dark`}>
    {children}
  </div>
  )
}

export default Panel