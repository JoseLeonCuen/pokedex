import React from "react";

interface MainProps { 
  children: React.ReactNode;
}
const Panel: React.FC<MainProps> = ({children}) => {
  return (
  <main className="
    sm:col-span-4 sm:row-span-10
    w-full overflow-y-auto

    xs:row-span-9 xs:col-span-5
  ">
    {children}
  </main>
  )
}

export default Panel