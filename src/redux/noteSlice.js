import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    toDoNotes: [],
    doneNotes: [],
    inProgressNotes: [],
};

const addNotesArray = (array, note) => {

    switch (note.status) {
        case "toDo":
            array.push(note);
            return array;

        case "done":
            array.push(note);
            return array

        case "inProgress":
            array.push(note)
            return array

        default:
            console.log("Default Switch");
            break;
    }

}



export const noteSlice = createSlice({

    name: "notes",
    initialState,
    reducers: {

        addNote: (state, action) => {

            if (action.payload.status == "toDo") {

                state.toDoNotes = current(addNotesArray(state.toDoNotes, action.payload));

            } else if (action.payload.status == "done") {

                state.doneNotes = current(addNotesArray(state.doneNotes, action.payload));

            } else {

                state.inProgressNotes = current(addNotesArray(state.inProgressNotes, action.payload));
            };

            let dataNotes = {
                toDoNotes: state.toDoNotes,
                inProgressNotes: state.inProgressNotes,
                doneNotes: state.doneNotes
            };

            localStorage.setItem("notesUser", JSON.stringify(dataNotes));

        },

        readNotes: (state, action) => {

            if (!action.payload) {
                console.log("No hay notas");
            } else {
                state.toDoNotes = action.payload.toDoNotes;
                state.inProgressNotes = action.payload.inProgressNotes;
                state.doneNotes = action.payload.doneNotes;
            }
        },

        deleteNote: (state, action) => {

            console.log(action.payload);

            if (action.payload.status == "toDo") {

                state.toDoNotes = state.toDoNotes.filter((note) => note.id !== action.payload.id);

            } else if (action.payload.status == "done") {

                state.doneNotes = state.doneNotes.filter((note) => note.id !== action.payload.id);

            } else {
                state.inProgressNotes = state.inProgressNotes.filter((note) => note.id !== action.payload.id);
            }

        }

    }
});

export const { addNote, readNotes, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;