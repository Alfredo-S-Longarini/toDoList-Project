import React from 'react'
import Lists from '../Lists/Lists';

const NotesLists = ({ arrayNotes }) => {
    return (
        <>
            {
                (arrayNotes.map((note) => (
                    <Lists key={note.id} note={note} />
                )))
            }
        </>
    )
}

export default NotesLists