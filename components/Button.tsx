import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({children, onClick, variant = "primary"}) => {
  return (
    <button onClick={onClick} className={variant}>
      {children}
    </button>
  )
};

export default Button;