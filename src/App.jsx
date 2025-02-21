import { useState } from "react";

import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    // Prev notes is in the memory of the state
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        {/* we can pass functions as props. */}
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
