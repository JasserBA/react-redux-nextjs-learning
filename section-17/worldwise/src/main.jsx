import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppV2 from "./App-v2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AppV2 />
  </StrictMode>
);
