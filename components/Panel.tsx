import React, { useEffect, useState } from "react";

const Panel: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
  <div className="flex-col p-4 border-r-4 border-blue-500 w-48">
    {children}
  </div>
  )
}

export default Panel