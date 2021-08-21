import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NotesContextProvider from "./context/notes-context";

ReactDOM.render(
  <NotesContextProvider>
    <App />
  </NotesContextProvider>,
  document.getElementById("root")
);
