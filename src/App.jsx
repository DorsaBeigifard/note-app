import { useReducer, useState } from "react";

import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import Header from "./components/Header";

function noteReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "complete":
      return state.map((s) =>
        action.id === s.id ? { ...s, completed: !s.completed } : s
      );
    case "delete":
      return state.filter((s) => s.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const initNotes = [];

  const [sortBy, setSortBy] = useState("latest");

  const [notes, dispatch] = useReducer(noteReducer, initNotes);

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", id: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);

    dispatch({ type: "complete", id: noteId });
  };

  return (
    <div className="container">
      <Header
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        {/* we can pass functions as props. */}
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
