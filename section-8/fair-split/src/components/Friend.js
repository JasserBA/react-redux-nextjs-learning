import React from "react";

const Friend = ({ avatar, name, balance }) => {
  return (
      <li>
      <img src={avatar} alt={name} />
        <h3>{name}</h3>
        <p>
          You owe {name}: {balance}$
        </p>
      <button className="button">Select</button>
      </li>
  );
};

export default Friend;
