import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean
}

const Button : React.FC<ButtonProps> = ({ children, onClick, className, type,disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled = {disabled}
    >
      {children}
    </button>
  );
};  

export default Button