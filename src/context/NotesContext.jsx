import { createContext, useContext, useReducer } from "react";

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
      throw new Error("Unknown action: " + action.type);
  }
}
const initNotes = [];

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, initNotes);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useDispatchNotes() {
  return useContext(NotesDispatchContext);
}
