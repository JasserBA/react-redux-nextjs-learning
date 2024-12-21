import React from "react";

const FormSplit = ({ selectedFriend }) => {
  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <form className="form-split-bill" onSubmit={handleSumbit}>
      <h2>
        Split a bill with <mark>{selectedFriend.name}</mark>
      </h2>
      <label htmlFor="Bvalue">💸 Bill Value</label>
      <input type="text" name="Bvalue" />

      <label htmlFor="Yexpense">🫵 Your expense</label>
      <input type="text" name="Yexpense" />

      <label htmlFor="Xexpense">
        🧑‍🤝‍🧑 <mark>{selectedFriend.name}</mark>'s expense
      </label>
      <input type="text" name="Xexpense" disabled />

      <label htmlFor="Paying">🤑 Bill Value</label>
      <select name="Paying">
        <option value="you">You</option>
        <option value="x">
          <mark>{selectedFriend.name}</mark>
        </option>
      </select>
    </form>
  );
};

export default FormSplit;
