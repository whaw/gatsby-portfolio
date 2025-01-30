import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode,
  className?: string,
}

const Button = ({ children, className = "", ...props } : ButtonProps ) => {

  if (!children) console.error('button is missing text or a children prop');

  return <button
    className={`btn ${className}`}
    {...props}>
    {children}
  </button>
};

export default Button;
