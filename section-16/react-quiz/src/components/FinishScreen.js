export const FinishScreen = ({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = "🎖️";
  } else if (percentage >= 80) {
    emoji = "🎉";
  } else if (percentage >= 50) {
    emoji = "👍";
  } else if (percentage > 0) {
    emoji = "🙃";
  } else {
    emoji = "😢";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)})
        </strong>
      </p>
      <p className="highscore">
        (Highscore : <strong>{highScore} points</strong>)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset
      </button>
    </>
  );
};
