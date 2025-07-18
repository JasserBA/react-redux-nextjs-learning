import React from "react";

const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to the React quiz</h2>
      <p>{numQuestions} question to test your React mastery</p>
      <button>Start QUIZ</button>
    </div>
  );
};

export default StartScreen;
