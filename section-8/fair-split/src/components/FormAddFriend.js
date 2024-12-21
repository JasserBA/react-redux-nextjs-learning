import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSumbit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID;
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSumbit}>
      <label htmlFor="name">🤵 Friend name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="img">🖼️ Image URL</label>
      <input
        type="text"
        name="img"
        id="img"
        placeholder="https://i.pravatar.cc/300"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={(e) => handleSumbit(e)}>Add</Button>
    </form>
  );
};

export default FormAddFriend;
