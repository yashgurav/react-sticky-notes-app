import {
  TOGGLE_NOTE,
  SET_FORM_CONTENT,
  SET_FORM_TITLE,
  GET_NOTE,
  SET_ERROR,
  RESET_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  HANDLE_SEARCH_NOTE,
} from "../actions";
import { nanoid } from "nanoid";

const NotesReducer = (state, action) => {
  if (action.type === TOGGLE_NOTE)
    return {
      ...state,
      showNote: { editMode: false, display: !state.showNote.display },
      titleForm: "",
      contentForm: "",
      isEditItemId: "",
      error: false,
    };

  if (action.type === SET_FORM_TITLE) {
    return {
      ...state,
      titleForm: action.payload,
    };
  }

  if (action.type === SET_FORM_CONTENT) {
    return {
      ...state,
      contentForm: action.payload,
    };
  }

  if (action.type === GET_NOTE) {
    const currentNote = state.notes.find((note) => note.id === action.payload);

    return {
      ...state,
      showNote: { editMode: true, display: true },
      titleForm: currentNote.title,
      contentForm: currentNote.content,
      isEditItemId: action.payload,
    };
  }
  if (action.type === ADD_NOTE) {
    const date = new Date();

    const timeLine =
      date.getDate() +
      " " +
      date.toLocaleString("default", { month: "long" }) +
      "," +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    if (state.isEditItemId) {
      const newNotes = state.notes.map((note) => {
        if (note.id === state.isEditItemId) {
          return {
            ...note,
            title: action.payload.titleForm,
            content: action.payload.contentForm,
            date: timeLine,
          };
        }
        return note;
      });
      return {
        ...state,
        notes: newNotes,
        titleForm: "",
        contentForm: "",
        isEditItemId: "",
        error: false,
      };
    } else {
      const newNotes = [
        ...state.notes,
        {
          id: nanoid(),
          title: action.payload.titleForm,
          content: action.payload.contentForm,
          date: timeLine,
        },
      ];
      return {
        ...state,
        notes: newNotes,
        titleForm: "",
        contentForm: "",
        isEditItemId: "",
        error: false,
      };
    }
  }

  if (action.type === SET_ERROR) {
    return { ...state, error: true };
  }

  if (action.type === RESET_ERROR) {
    return { ...state, error: false };
  }

  if (action.type === DELETE_NOTE) {
    const newNotes = state.notes.filter((note) => note.id !== action.payload);
    return { ...state, notes: newNotes };
  }

  if (action.type === HANDLE_SEARCH_NOTE) {
    return { ...state, searchTerm: action.payload };
  }
};

export default NotesReducer;
