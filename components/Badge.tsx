import React from "react";

const Button: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <span className="text-blue-light text-xs border-2 ml-2 px-2 rounded-full border-blue-light">
      {children}
    </span>
  )
};

export default Button;