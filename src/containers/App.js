import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "../components/navbar";
import Notes from "../components/notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [post, setPostNumber] = useState(1);

  useEffect(() => {
    async function fetchNotes() {
      if (post > 0) {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/" + post
          );
          console.log(response);

          const {
            data: { title, body },
          } = response;
          const newNotes = Array.from(notes);
          newNotes.push({ title, content: body });

          setNotes(newNotes);
        } catch (e) {
          // ignore
        }
      }
    }

    fetchNotes();
  }, [post]);

  const handleNewNote = () => {
    const newNotes = Array.from(notes);
    newNotes.push({ title: "Edit Me!", content: "Edit Me!" });
    setNotes(newNotes);
  };

  const handleDeleteNote = (index) => {
    const newNotes = Array.from(notes);
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleContentChange = (event, index) => {
    const {
      target: { value },
    } = event;
    const newNotes = notes.slice();
    const newNote = newNotes[index];

    newNotes.splice(index, 1, { ...newNote, content: value });

    setNotes(newNotes);
  };

  const handleTitleChange = (event, index) => {
    const {
      target: { value },
    } = event;
    const newNotes = notes.slice();
    const newNote = newNotes[index];

    newNotes.splice(index, 1, { ...newNote, title: value });

    setNotes(newNotes);
  };

  const count = notes.length;

  return (
    <div className="app__container">
      <Header count={count} />
      <div className="new-note__container">
        <button className="btn__add-note" onClick={handleNewNote}>
          Add Note
        </button>
      </div>
      <div className="new-note__container">
        <label style={{ color: "whitesmoke" }}>
          Change this number to fetch a new note:
        </label>
        <input
          value={post}
          className="input__postnumber"
          data-testid="input__postnumber"
          onChange={(e) => setPostNumber(e.target.value)}
        />
      </div>
      <Notes
        notes={notes}
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default App;
