import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyComponent from "./MyComponent";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Sigup from "./pages/Signup/Signup";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
