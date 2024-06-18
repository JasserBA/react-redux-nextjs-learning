import React from "react";

const Friend = ({ avatar, name, balance }) => {
  return (
    <li>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>

      {balance > 0 && (
        <p className="green">
          You owe {name}: {balance}$
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name}: {balance}$
        </p>
      )}
      {balance === 0 && (
        <p>
          You owe {name}: {balance}$
        </p>
      )}

      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
