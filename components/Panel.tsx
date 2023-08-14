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
  <div className={`
    row-span-4
    flex ${borderSide} p-4  border-blue-light bg-background
    dark:bg-background-dark
    justify-center
  `}>
    {children}
  </div>
  )
}

export default Panel