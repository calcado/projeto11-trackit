import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { AuthProvider } from "./provider/auth.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector(".root")
);
