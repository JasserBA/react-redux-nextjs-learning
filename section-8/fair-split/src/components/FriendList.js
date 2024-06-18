import React from 'react'
import Friend from './Friend';

const FriendList = ({data}) => {
  return (
    <ul className="sidebar">
      {data.map((friend) => (
        <Friend
          avatar={friend.image}
          name={friend.name}
          balance={friend.balance}
        />
      ))}
    </ul>
  );
}

export default FriendList