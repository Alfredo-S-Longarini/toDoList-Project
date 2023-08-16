import React, { useEffect, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap'
import TableNotes from '../TableNotes/TableNotes'
import { useDispatch } from 'react-redux'
import { addNote, readNotes } from '../../redux/noteSlice'
import { v4 as uuidv4 } from 'uuid';

const NotesListContainer = () => {

  const dispatch = useDispatch();

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const [rSelected, setRSelected] = useState(null);
  const [stateBtn, setStateBtn] = useState(true);

  const createNote = (state) => {

    state = (state !== null ? state : "toDo")
    let noteInput = document.getElementById("taskValue").value;

    let note = {
      id: uuidv4(),
      task: noteInput,
      status: state,
      date: `${day}/${month}/${year}`
    }

    dispatch(addNote(note));

  }

  const stateInputBtn = (e) => {
    (e.target.value.length !== 0 && e.target.value.length >= 3 ? setStateBtn(false) : setStateBtn(true));
  }

  useEffect(() => {
    let localStorageNotes = JSON.parse(localStorage.getItem("notesUser"));
    dispatch(readNotes(localStorageNotes));
  })

  return (
    <div className=' flex flex-col justify-center items-center my-4 gap-5'>
      <h1 className=' text-5xl font-semibold'>ToDoList [422]</h1>

      <section className=' flex flex-col justify-center items-center gap-3'>

        <section className='inputTask flex gap-1'>

          <Input id='taskValue' onChange={stateInputBtn} />

          <Button id='saveNoteBtn' onClick={() => createNote(rSelected)} disabled={stateBtn}>
            👍
          </Button>

        </section>

        <ButtonGroup>
          <Button
            color="danger"
            outline
            onClick={() => setRSelected("toDo")}
            active={rSelected !== "inProgress" && rSelected !== "done"}
          >
            To Do
          </Button>
          <Button
            color="warning"
            outline
            onClick={() => setRSelected("inProgress")}
            active={rSelected === "inProgress"}
          >
            Doing
          </Button>
          <Button
            color="success"
            outline
            onClick={() => setRSelected("done")}
            active={rSelected === "done"}
          >
            Done
          </Button>
        </ButtonGroup>

      </section>

      <section className='notesContainer border-t-2'>
        < TableNotes />
      </section>
    </div>
  )
}

export default NotesListContainer