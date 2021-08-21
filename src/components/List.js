import React from "react";
import { useNotesContext } from "../context/notes-context";
import NoteCard from "./NoteCard";

const List = () => {
  const { notes, searchTerm } = useNotesContext();

  let sortedNotes = notes;
  if (searchTerm) {
    sortedNotes = sortedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sortedNotes.length > 0) {
    if (sortedNotes.length > 1) {
      sortedNotes = sortedNotes.sort((a, b) => {
        const d = new Date(a.date).getTime();
        const e = new Date(b.date).getTime();
        return e - d;
      });
    }
    const cards = sortedNotes.map((note, index) => {
      return <NoteCard key={note.id} note={note} />;
    });

    return <div className="list-container">{cards}</div>;
  }

  return <div className="list-container"> Sorry no note found...</div>;
};

export default List;
