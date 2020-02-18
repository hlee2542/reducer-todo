import React, {useReducer, useState} from 'react';
import './App.css';
import {initialState, noteReducer, addNote, toggleNote, clearNotes} from './reducers/noteReducer';
import Note from './Note';

function App() {
  const [state, dispatch] = useReducer(noteReducer, initialState);
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(task));
    setTask('');
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type='text' value={task} placeholder='Type in something to do' onChange={(event) => setTask(event.target.value)}/>
          <input type='submit' />
          <button onClick={() => dispatch(clearNotes())}>Clear</button>
        </form>
      </div>
      <div>
        {state.length ? state.map(note => <Note note={note} key={note.id} toggleNote={() => dispatch(toggleNote(note))}/>) : 'Nothing to do.'}
      </div>
    </div>
  );
}

export default App;
