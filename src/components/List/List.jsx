import React from 'react'
import Task from '../Task/Task'

import "./List.css"

const List = ({ arrayTasks, title }) => {
    return (
        <section className=' list '>
            <h2>{title}</h2>
            {
                (arrayTasks.map((note) => (
                    <Task key={note.id} taskObject={note} />
                )))
            }

        </section>
    )
}

export default List