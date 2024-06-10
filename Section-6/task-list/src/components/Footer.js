import React from "react";

const Footer = ({ nbTasks, nbDoneTasks, percentage }) => {
  return (
    <footer className="stats">
      <em>
        {nbTasks === 0
          ? "You have completed all tasks, go chill out!"
          : `You have ${nbTasks} tasks on your list, and you have completed ${nbDoneTasks} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Footer;
