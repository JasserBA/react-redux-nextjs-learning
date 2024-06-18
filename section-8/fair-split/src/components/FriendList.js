import React from 'react'
import Friend from './Friend';

const FriendList = ({data}) => {
  return (
    <ul className="sidebar">
      {data.map((f) => (
        <Friend
          key={f.id}
          avatar={f.image}
          name={f.name}
          balance={f.balance}
        />
      ))}
    </ul>
  );
}

export default FriendList