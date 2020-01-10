import React from "react";
import "./input.styles.css";

const Input = ({ type, name, className, onChange, title, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{title}</label>
      <input {...rest} type={type} name={name} id={name} onChange={onChange} />
    </div>
  );
};

export default Input;
