import React from "react";

interface MainProps { 
  children: React.ReactNode;
}
const Panel: React.FC<MainProps> = ({children}) => {
  return (
  <main className="
    col-span-4 row-span-4
    w-full overflow-y-auto
  ">
    {children}
  </main>
  )
}

export default Panel