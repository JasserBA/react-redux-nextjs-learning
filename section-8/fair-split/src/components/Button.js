import React from 'react'

const Button = ({ onAddOption, children }) => {
  return (
    <button className="button" onClick={onAddOption}>
      {children}
    </button>
  );
};

export default Button