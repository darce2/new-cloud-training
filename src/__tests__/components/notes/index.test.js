import React from 'react';
import Notes from '../../../components/notes';
import Note from '../../../components/notes/note';

import { shallow } from 'enzyme';

describe('App', () => {
  const notes = [
    {
      title: "Greeting",
      content: "hi"
    },
    {
      title: "Kewl",
      content: "yo"
    }
  ]
  it('matches snapshot', () => {
    const wrapper = shallow(<Notes notes={notes} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('has two notes', () => {
    const wrapper = shallow(<Notes notes={notes} />);
    expect(wrapper.find(Note).length).toEqual(2);;
  });
});