import "./App.css";
import List from "./components/List";
import NavBar from "./components/NavBar";
import Note from "./components/Note";
import Search from "./components/Search";
import { useNotesContext } from "./context/notes-context";

function App() {
  const { showNote } = useNotesContext();
  return (
    <>
      <NavBar />
      {!showNote.display && <Search />}
      <div>{showNote.display ? <Note></Note> : <List />}</div>
    </>
  );
}

export default App;
