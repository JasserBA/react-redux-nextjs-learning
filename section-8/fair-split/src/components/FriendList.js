import React from "react";
import Friend from "./Friend";

const FriendList = ({ data, onSeletion, selectedFriend }) => {
  return (
    <ul>
      {data.map((f) => (
        <Friend
          key={f.id}
          avatar={f.image}
          name={f.name}
          balance={f.balance}
          friend={f}
          onClick={onSeletion}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
