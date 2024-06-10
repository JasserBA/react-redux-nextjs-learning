import React from "react";

const Footer = ({ nbTasks, nbDoneTasks, percentage }) => {
  if (nbTasks===0){
    return (
      <footer className="stats">
        <em>Start adding some tasks to your task list 📋.</em>
      </footer>
    );

  }
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have completed all tasks, go chill out!"
          : `You have ${nbTasks} tasks on your list, and you have completed ${nbDoneTasks} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Footer;
