import React from "react";
import { useNotesContext } from "../context/notes-context";
import Flash from "./Flash";

const Note = () => {
  const {
    toggleNote,
    setTitleForm,
    setContentForm,
    titleForm,
    addNote,
    contentForm,
    setError,
    error,
    showNote,
  } = useNotesContext();

  return (
    <div className="note-container">
      {showNote.editMode ? (
        <h2>Edit Current Note</h2>
      ) : (
        <h2>New Note to be added...</h2>
      )}
      <form
        className="note-form"
        onSubmit={(e) => {
          e.preventDefault();

          if (titleForm && contentForm) {
            addNote(titleForm, contentForm);
            toggleNote();
            setContentForm("");
            setTitleForm("");
          } else {
            setError();
          }
          // setContentForm("");
          // setTitleForm("");
        }}
      >
        <div className="note-title">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title..."
            value={titleForm}
            onChange={(e) => setTitleForm(e.target.value)}
          />
        </div>
        <div className="note-textarea-container">
          <textarea
            className="note-textarea"
            placeholder="Type Here..."
            value={contentForm}
            onChange={(e) => setContentForm(e.target.value)}
          />
        </div>

        <input className="note-button" type="submit" value="Submit" />
        {error && <Flash error="Missing Contents... Fill all fields" />}
      </form>
    </div>
  );
};

export default Note;
