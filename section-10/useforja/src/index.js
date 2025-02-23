import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import App from "./App";
/*
function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="pink"
        maxRating={10}
        onSetRating={setMovieRating}
        defaultRating={5}
      />
      <p>This Movie was rated {movieRating} stars.</p>
    </div>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* removed StrictMode to avoid double useEffect */}
    <App />
    {/* <StarRating maxRating={"5"} />
    <StarRating maxRating={14} color="red" />
    <StarRating maxRating={10} color="#fffa86" className="test" />
    <StarRating messages={["Terrible", "Bad", "Okay", "Amazing"]} />
    <StarRating defaultRating={3} />
    <Test /> */}
  </>
);
