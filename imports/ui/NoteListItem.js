import React from 'react';
import moment from 'moment';


const NoteListItem = (props) => {
  return (
    <div>
      <h5>{props.note.title || 'Untitled note'}</h5>
      <p>{moment(props.note.updateAt).format('DD/M/YY')}</p>
    </div>
  )
}

NoteListItem.propTypes = {
  note: React.PropTypes.object.isRequired
}

export default NoteListItem;
