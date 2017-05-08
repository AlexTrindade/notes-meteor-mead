import React from 'react';
import moment from 'moment';
import {Session} from 'meteor/session';
import {createContainer} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export const NoteListItem = (props) => {
  return (
    <div onClick={() => {
      props.Session.set('selectedNoteId', props.note._id);
    }}>
      <h5>{props.note.title || 'Untitled note'}</h5>
      {props.note.body}
      <p>{moment(props.note.updateAt).format('DD/M/YY')}</p>
      {props.note.selected ? 'selected' : undefined}
      <hr/>
    </div>
  )
}

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired,
  Session: PropTypes.object.isRequired
}

export default createContainer(() => {
  return { Session };
}, NoteListItem);
