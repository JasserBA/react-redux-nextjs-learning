import React from "react";
import Button from "./Button";

const Friend = ({ avatar, name, balance, onClick, friend, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name}: {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {balance}$
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <Button onClick={() => onClick(friend)}>
        {!isSelected ? "Select" : "Close"}
      </Button>
    </li>
  );
};

export default Friend;
