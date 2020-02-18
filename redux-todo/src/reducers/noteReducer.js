const ADD_NOTE = 'ADD_NOTE';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const CLEAR = 'CLEAR';

export const addNote = (task) => {
    const date = new Date();
    return {
        type: ADD_NOTE,
        note: {item: task, completed: false, id: date}
    };
};

export const toggleNote = (note) => {
    return {
        type: TOGGLE_COMPLETED,
        note: note
    };
};

export const clearNotes = () => ({
    type: CLEAR
});


export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const noteReducer = (state, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return state.concat(action.note);
        case TOGGLE_COMPLETED:
            return state.filter(note => note.id !== action.note.id).concat({item: action.note.item, completed: true, id: action.note.id});
        case CLEAR:
            return state.filter(note => !note.completed);
        default:
            return state;
    }
};