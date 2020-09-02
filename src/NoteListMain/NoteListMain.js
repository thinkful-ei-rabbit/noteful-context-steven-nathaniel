import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import NotefulContext from '../NotefulContext'
import { getNotesForFolder } from '../notes-helpers';

export default function NoteListMain(props) {
  return (
    <NotefulContext.Consumer>
      {({notes}) => {
         const { folderId } = props.match.params;
         const notesFolder = getNotesForFolder(
             notes,
             folderId
         );
        return(
          <section className='NoteListMain'>
      <ul>
        {notesFolder.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
        )
      }}
    </NotefulContext.Consumer>
    
  )
}

NoteListMain.defaultProps = {
  notes: [],
}
