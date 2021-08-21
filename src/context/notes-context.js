import React, { useCallback, useContext, useReducer, useEffect } from "react";
import {
  TOGGLE_NOTE,
  SET_FORM_CONTENT,
  SET_FORM_TITLE,
  GET_NOTE,
  ADD_NOTE,
  DELETE_NOTE,
  SET_ERROR,
  RESET_ERROR,
  HANDLE_SEARCH_NOTE,
} from "../actions";
import reducer from "../reducers/notes-reducer";

const NotesContext = React.createContext();

const getLocalStorage = () => {
  let notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [
      {
        id: 1,
        title: "Sample Note1",
        content: "Hello,this is sample Note1",
        date: "12 Aug,2021 14:12:10",
      },
      {
        id: 2,
        title: "Sample Note2",
        content: "Hello,this is sample Note2",
        date: "12 Aug,2021 14:15:20",
      },
    ];
  }
};
const initialState = {
  notes: getLocalStorage(),
  showNote: { editMode: false, display: false },
  titleForm: "",
  contentForm: "",
  isEditItemId: "",
  error: false,
  searchTerm: "",
};

const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  const toggleNote = () => {
    dispatch({ type: TOGGLE_NOTE });
  };

  const setTitleForm = (title) => {
    dispatch({ type: SET_FORM_TITLE, payload: title });
  };

  const setContentForm = (content) => {
    dispatch({ type: SET_FORM_CONTENT, payload: content });
  };

  const getNote = (id) => {
    dispatch({ type: GET_NOTE, payload: id });
  };

  const addNote = (titleForm, contentForm) => {
    dispatch({ type: ADD_NOTE, payload: { titleForm, contentForm } });
  };

  const setError = () => {
    dispatch({ type: SET_ERROR });
  };

  const resetError = useCallback(() => {
    dispatch({ type: RESET_ERROR });
  }, []);

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  const handleSearchNote = (term) => {
    dispatch({ type: HANDLE_SEARCH_NOTE, payload: term });
  };

  return (
    <NotesContext.Provider
      value={{
        ...state,
        toggleNote,
        setTitleForm,
        setContentForm,
        getNote,
        setError,
        resetError,
        addNote,
        deleteNote,
        handleSearchNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};

export default NotesContextProvider;
