import React from "react";

interface PanelProps { 
  children: React.ReactNode;
  variant?: string;
}
const Panel: React.FC<PanelProps> = ({children, variant="left"}) => {
  const borderSide = variant == "left" ? (
    "sm:border-r-4"
  ) : (
    "sm:border-l-4"
  )
  return (
  <div className={`
    sm:row-span-10 sm:col-span-1
    flex ${borderSide} p-4  border-blue-light bg-background
    dark:bg-background-dark
    sm:justify-center sm:border-b-0
    xs: row-span-1 xs: col-span-5 xs:border-b-2
  `}>
    {children}
  </div>
  )
}

export default Panel