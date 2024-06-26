import React, { useState } from "react";

const Form = ({ onAddtask }) => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (!title || !date) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
      completed: false,
    };
    onAddtask(newTask);
    setTitle("");
    setDescription("");
    setDate("");
  }

  return (
    <div>
      {toggle && (
        <div
          className="overlay"
          onClick={() => {
            setToggle(false);
            setDescription("");
          }}
        ></div>
      )}
      <div className="add-form">
        <form onSubmit={(e) => handleClick(e)}>
          <div>
            <label htmlFor="taskTitle">
              <h4>What task(s) do you need?</h4>
            </label>
            <input
              value={title}
              id="taskTitle"
              type="text"
              placeholder="task..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="taskDate">
              <h4>Enter your Deadline:</h4>
            </label>
            <input
              value={date}
              id="taskDate"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="btn-desc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z"
              ></path>
            </svg>
          </button>
          {toggle && (
            <div className="option-description">
              <label htmlFor="taskDescription">
                <h4>Enter your description:</h4>
              </label>
              <textarea
                value={description}
                id="taskDescription"
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                className="btn-desc"
              >
                Done ✅
              </button>
            </div>
          )}
          <button type="submit" className="btn-add">
            Add ➕
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
