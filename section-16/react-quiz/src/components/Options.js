export const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null}
          key={index}
          onClick={() => dispatch({ type: "newAnswer", playload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
