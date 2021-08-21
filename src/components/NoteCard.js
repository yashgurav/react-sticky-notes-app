import React from "react";
import { useNotesContext } from "../context/notes-context";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

const NoteCard = ({ note }) => {
  const { getNote, deleteNote } = useNotesContext();
  return (
    <div className="note-card-container">
      <div className="note-card-title">{note.title}</div>
      <div className="note-card-content">{note.content}</div>
      <div className="note-card-tags">
        <small>{note.date}</small>
      </div>
      <span className="note-card-delete" onClick={() => deleteNote(note.id)}>
        <i className="material-icons">
          {" "}
          <MdDeleteForever />
        </i>
      </span>
      <span className="note-card-edit" onClick={() => getNote(note.id)}>
        <i className="material-icons">
          <GrEdit />
        </i>
      </span>
    </div>
  );
};

export default NoteCard;
