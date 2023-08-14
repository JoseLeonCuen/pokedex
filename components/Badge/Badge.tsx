import React from "react";

interface BadgeProps { 
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({children, className}) => {
  return (
    <span className={`text-center text-blue text-xs border-2 ml-2 px-2 rounded-full border-blue dark:text-blue-lightest dark:border-blue-lightest ${className}`}>
      {children}
    </span>
  )
};

export default Badge;