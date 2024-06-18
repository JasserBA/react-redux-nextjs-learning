import React from 'react'

const FormAddFriend = () => {
  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <form className="form-add-friend" onSubmit={handleSumbit}>
      <label htmlFor="name">🤵 Friend name</label>
      <input type="text" name="name" />

      <label htmlFor="img">🖼️ Image URL</label>
      <input
        type="text"
        name="img"
        placeholder="https://i.pravatar.cc/300"
      />
      <button className='button'>Add</button>
    </form>
  );
}

export default FormAddFriend