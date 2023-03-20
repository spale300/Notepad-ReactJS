import React, { useState } from "react";

const NewNote = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="take a note..."
          rows="2"
          value={note.content}
        />
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  );
};

export default NewNote;
