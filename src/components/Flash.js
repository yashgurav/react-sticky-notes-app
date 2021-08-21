import React, { useEffect } from "react";
import { useNotesContext } from "../context/notes-context";

const Flash = ({ error }) => {
  const { resetError } = useNotesContext();
  useEffect(() => {
    let a = setTimeout(() => {
      resetError();
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, [resetError]);

  return <div className="flash-container">{error}</div>;
};

export default Flash;
