import React from 'react';

import Note from "./note";
import "./notes.css"

const notes = props => {
    const { notes, handleContentChange, handleDeleteNote, handleTitleChange } = props;
    return (
        <div className="notes__container">
            {notes.map((note, index) => <Note
                key={index}
                {...note}
                index={index}
                handleContentChange={handleContentChange}
                handleTitleChange={handleTitleChange}
                handleDeleteNote={handleDeleteNote}
            />)}
        </div>
    )
} 

export default notes;