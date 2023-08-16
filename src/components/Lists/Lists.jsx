import React from 'react'
import { deleteNote } from '../../redux/noteSlice'
import { useDispatch } from 'react-redux'

const Lists = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <th scope="row">
          {note.task}
        </th>
        <td>
          {note.date}
        </td>
        <td>
          <button onClick={()=>dispatch(deleteNote(note))}>x</button>
        </td>
      </tr>
    </>
  )
}

export default Lists