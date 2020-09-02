import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import NotefulContext from '../NotefulContext'
import { findFolder, findNote } from '../notes-helpers';

export default function NotePageNav(props) {
  return (
    <NotefulContext.Consumer>
      {({notes, folders}) => {
          const { noteId } = props.match.params;
          const note = findNote(notes, noteId) || {};
          const folder = findFolder(folders, note.folderId);
          console.log(folder);
        return (
          <div className='NotePageNav'>
            <CircleButton
              tag='button'
              role='link'
              onClick={() => props.history.goBack()}
              className='NotePageNav__back-button'
            >
              <FontAwesomeIcon icon='chevron-left' />
              <br />
              Back
            </CircleButton>
            {folder && (
              <h3 className='NotePageNav__folder-name'>
                {folder.name}
              </h3>
            )}
          </div>
       );
      }}
    </NotefulContext.Consumer>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}
