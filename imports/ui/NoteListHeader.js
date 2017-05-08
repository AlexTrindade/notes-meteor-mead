import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import PropTypes from 'prop-types';

export const NoteListHeader = (props) => {
  return (
    <button onClick={() => {
      props.meteorCall('notes.insert', (err, res) => {
        if (res) {
          console.log(res);
          props.Session.set('selectedNoteId', res);
        }
      });
    }}>New Note</button>
  )
}

NoteListHeader.propTypes = {
  meteorCall: PropTypes.func.isRequired,
  Session: PropTypes.object.isRequired
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
}, NoteListHeader);
