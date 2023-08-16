import React, { useEffect, useState } from 'react'
import Lists from '../Lists/Lists'
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { readNotes } from '../../redux/noteSlice';
import NotesLists from '../NotesLists/NotesLists';
import EmptyList from '../EmptyList/EmptyList';

const TableNotes = () => {

  const notes = useSelector((state) => state.note)
  console.log(notes);

  const toDoList = notes.toDoNotes;
  const doneList = notes.doneNotes;
  const inProgressList = notes.inProgressNotes;

  const [stateListToDo, setStateListToDo] = useState(false);
  const [stateListDone, setStateListDone] = useState(false);
  const [stateListInProgress, setStateListInProgress] = useState(false);

  useEffect(() => {

    ((toDoList.length > 0) ? setStateListToDo(true) : setStateListToDo(false));

    ((doneList.length > 0) ? setStateListDone(true) : setStateListDone(false));

    ((inProgressList.length > 0) ? setStateListInProgress(true) : setStateListInProgress(false));

  }, [notes]);

  return (
    <div className='flex my-5 flex-row gap-40'>

      <section>
        <Table
          responsive
        >
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Fecha
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>

            {
              (stateListToDo ?
                <NotesLists arrayNotes={toDoList} /> :

                <EmptyList />
              )
            }

          </tbody>
        </Table>
      </section>

      {/* ---------------------------------------------------- */}

      <section>
        <Table
          responsive
        >
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Fecha
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>

            {
              (stateListInProgress ?

                <NotesLists arrayNotes={inProgressList} /> :

                <EmptyList />
              )
            }

          </tbody>
        </Table>
      </section>

      {/* ---------------------------------------------------- */}

      <section>
        <Table
          responsive
        >
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Fecha
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>

            {
              (stateListDone ?

                <NotesLists arrayNotes={doneList} /> :

                <EmptyList />
              )
            }

          </tbody>
        </Table>
      </section>

    </div>
  )
}

export default TableNotes