import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyleComponent from "./styles/GlobalStyles.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyleComponent />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
