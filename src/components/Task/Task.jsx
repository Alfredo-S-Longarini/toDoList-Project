import React from 'react'
import { deleteNote } from '../../redux/noteSlice'
import { useDispatch } from 'react-redux'

import "./Task.css";

const Task = ({ taskObject }) => {

    const dispatch = useDispatch();

    return (
        <div className='itemTask'>

            <p className='task'>{taskObject.task}</p>

            <section>
                <p className=' font-light text-gray-400'>{taskObject.date}</p>
                <p className=' font-extrabold text-red-700'><button onClick={() => dispatch(deleteNote(note))}>X</button></p>
            </section>
            
        </div>
    )
}

export default Task