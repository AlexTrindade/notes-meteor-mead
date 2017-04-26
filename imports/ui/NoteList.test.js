import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import {NoteList} from './NoteList';


const notes = [
  {
    _id: 'noteid1',
    title: 'Title 1',
    body: '',
    updateAt: 0,
    userId: 'user1'
  }, {
    _id: 'noteid2',
    title: '',
    body: 'Body 2',
    updateAt: 0,
    userId: 'user2'
  }
];

if (Meteor.isClient) {
  describe('Notelist', () => {
    it('should render NoteListItem for each note', function() {
      const wrapper = mount(<NoteList notes={notes}/>);
      expect(wrapper.find('NoteListItem').length).toBe(2);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0);
    });

    it('should render NoteListEmptyItem if zero notes', function() {
      const wrapper = mount(<NoteList notes={[]} />);
      expect(wrapper.find('NoteListItem').length).toBe(0);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(1);
    });
  });
}
