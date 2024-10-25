import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store/ReduxStore";
import { Provider } from "react-redux";

// Get the root element
const container = document.getElementById("root");
// Create a root
const root = createRoot(container);

// Render the app using the new createRoot API
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
