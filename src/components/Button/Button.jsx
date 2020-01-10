import React from "react";
import "./button.styles.css";

const Button = ({ type, className, title, ...rest }) => {
  return (
    <button type={type} className={className} {...rest}>
      {title}
    </button>
  );
};

export default Button;
