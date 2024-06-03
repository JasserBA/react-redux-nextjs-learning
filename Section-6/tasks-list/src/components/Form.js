import React from 'react'
import taskData from '../tasks.json'

const Form = () => {
  return (
    <div className="add-form">
      <form>
        <div>
          {/*<select>
          <option value="Select">
            --Select--
          </option>
          {taskData.tasks.map((t) => {
            return (
              <option key={t.id} value={t.title}>
                {t.title}
              </option>
            );
          })}
        </select>*/}
          <label for="task">
            <h4>What task(s) you need ?</h4>
          </label>
          <br />
          <input
            name="task"
            type="text"
            placeholder="task..."
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <label for="date">
            <h4>Enter your Deadline :</h4>
          </label>
          <br />
          <input name="date" type="date" />
        </div>
        <button>Add +</button>
      </form>
    </div>
  );
}

export default Form