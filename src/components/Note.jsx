import React from "react";

const Note = ({ title, content, onDelete, id }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default Note;
