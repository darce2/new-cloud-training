import React from 'react';
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";

import "./note.css"


const note = props => {
    const { content, handleContentChange, title, handleDeleteNote, index, handleTitleChange } = props;
    return (
        <div className="note__container" data-testid="note-element" >
            <ContentEditable
                className={"note__title"}
                // innerRef={this.contentEditable}
                html={title} // innerHTML of the editable div
                // disabled={false}       // use true to disable editing
                onChange={event => handleTitleChange(event, index)} // handle innerHTML change
            // tagName='article' // Use a custom HTML tag (uses a div by default)
            />
            <ContentEditable
                className={"note__content"}
                data-testid="note-content"
                // innerRef={this.contentEditable}
                html={content} // innerHTML of the editable div
                // disabled={false}       // use true to disable editing
                onChange={event => handleContentChange(event, index)} // handle innerHTML change
            // tagName='article' // Use a custom HTML tag (uses a div by default)
            />
            <div className="note__line" />
            <button className="note__btn" onClick={() => handleDeleteNote(index)}>Delete</button>
        </div>

    )
}

note.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    handleDeleteNote: PropTypes.func,
    content: PropTypes.string,
    handleContentChange: PropTypes.func,
    handleTitleChange: PropTypes.func
};

export default note;