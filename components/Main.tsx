import React from "react";

interface MainProps { 
  children: React.ReactNode;
}
const Panel: React.FC<MainProps> = ({children}) => {
  return (
  <div className="w-full">
    {children}
  </div>
  )
}

export default Panel