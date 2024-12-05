import React from "react";

const Button = ({ children = "Uh oh! Forgot the text", className = "", ...props }) => {
  return <button
    className={`btn ${className}`}
    {...props}>
    {children}
  </button>
};

export default Button;
