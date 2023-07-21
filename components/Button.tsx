import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({onClick, children, variant = "primary"}) => {
  return (
    <button onClick={onClick} className={`bg-cyan-200 px-3 py-1 rounded-md hover:bg-cyan-400 ${variant}`}>
      {children}
    </button>
  )
};

export default Button;