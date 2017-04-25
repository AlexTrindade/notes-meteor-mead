import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function () {

    it('should show render title and timestamp', function () {
      const title = 'My title';
      const updateAt = 1493154969124;
      const wrapper = mount(<NoteListItem note={{title, updateAt}} />);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('25/4/17');

    });

    it('should set default title if no title set', function () {
      const updateAt = 1493154969124;
      const wrapper = mount(<NoteListItem note={{updateAt}} />);

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    });

  });
}
