import React, { useState } from "react";
import Button from "./Button";

const FormSplit = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        Split a bill with <mark>{selectedFriend.name}</mark>
      </h2>
      <label htmlFor="Bvalue">💸 Bill Value</label>
      <input
        type="text"
        name="Bvalue"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="Yexpense">🫵 Your expense</label>
      <input
        type="text"
        name="Yexpense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paidByFriend
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor="Xexpense">
        🧑‍🤝‍🧑 <mark>{selectedFriend.name}</mark>'s expense
      </label>
      <input type="text" name="Xexpense" disabled value={paidByFriend} />

      <label htmlFor="Paying">🤑 Who is paying the bill</label>
      <select
        id="Paying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="x">
          <mark>{selectedFriend.name}</mark>
        </option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplit;
