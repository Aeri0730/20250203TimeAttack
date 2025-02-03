import React from "react";

const Input = ({ value, text, type, onChangeFunc }) => {
  return (
    <div>
      <label htmlFor={value}> {text}</label>
      <input type={type} value={value} onChange={onChangeFunc}></input>
    </div>
  );
};

export default Input;
