import { useState } from "react";

import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    // Prev notes is in the memory of the state
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);
    // better way:
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   noteId === note.id ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        noteId === note.id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        {/* we can pass functions as props. */}
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
