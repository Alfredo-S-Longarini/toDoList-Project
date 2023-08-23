import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import EmptyList from '../EmptyList/EmptyList';

import List from '../List/List';

import "./ListsSection.css";

const ListsSection = () => {

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
    <div className=' tableContainer grid-col my-4 gap-20'>

      {stateListToDo ? <List arrayTasks={toDoList} title={ "Hacer" } /> : <EmptyList />}

      {/* ---------------------------------------------------- */}

      {stateListInProgress ? <List arrayTasks={inProgressList} title={ "Haciendo" }/> : <EmptyList />}

      {/* ---------------------------------------------------- */}

      {stateListDone ? <List arrayTasks={doneList} title={ "Hecho" } /> : <EmptyList />}

    </div>
  )
}

export default ListsSection