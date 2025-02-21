import { useState } from "react";

function Header({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Lates notes first</option>
        <option value="oldest">Oldest notes first</option>
        <option value="completed">Completed notes first</option>
      </select>
    </div>
  );
}

export default Header;
