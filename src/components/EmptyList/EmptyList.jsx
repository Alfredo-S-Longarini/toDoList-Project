import React from 'react'
import { Table } from 'reactstrap'
import "./EmptyList.css"

const EmptyList = () => {
    return (
        <div className='dontTasks'>
            <h2 className=''>Hechas</h2>

            <div className='logoSection'>
                <img src="/img/logoDontTask.svg" alt="dontTasks" />
                <p>Sin tareas</p>
            </div>
        </div>
    )
}

export default EmptyList