import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes = useNotes();
  // Derived State -> computed from already created states
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;

  //  - !allNotes means falsy value...
  if (!allNotes) return <h2>No Note has been added.</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
