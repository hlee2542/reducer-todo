import React from 'react';
import './App.css';

const Note = (props) => {
    return (
        <div className={props.note.completed ? 'completed' : null} onClick={props.toggleNote}>
            <p>{props.note.item}</p>
        </div>
    )
}

export default Note;