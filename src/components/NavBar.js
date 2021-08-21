import React from "react";
import { useNotesContext } from "../context/notes-context";

const NavBar = () => {
  const { toggleNote, showNote } = useNotesContext();
  return (
    <div className="nav-container">
      <div className="nav-logo">Notes</div>
      <div className="nav-button" onClick={toggleNote}>
        {showNote.display ? "Cancel" : "+ Note"}
      </div>
    </div>
  );
};

export default NavBar;
