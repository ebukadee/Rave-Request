import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Search/> */}
  </React.StrictMode>
);
