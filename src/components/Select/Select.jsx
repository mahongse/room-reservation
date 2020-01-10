import React from "react";
import "./select.styles.css";

const Select = ({ name, title, options, className, onChange, id, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{title}</label>
      <select name={name} id={id} onChange={onChange} {...rest}>
        <option value="" />
        {options.map(option => (
          <option key={option.id} value={option[id]}>
            {option[id]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
