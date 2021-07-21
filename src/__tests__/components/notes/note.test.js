import React from 'react';
import Note from '../../../components/notes/note';

import { shallow } from 'enzyme';
import ContentEditable from 'react-contenteditable';

describe('App', () => {

  const mockHandleContentChange = jest.fn();
  const mockHandleDeleteNote = jest.fn();
  const mockHandleTitleChange = jest.fn();

  let props;

  beforeEach(() => {
    mockHandleContentChange.mockReset();
    mockHandleTitleChange.mockReset();
    mockHandleDeleteNote.mockReset();

    props = {
      title: "hi",
      content: "bye",
      index: 5,
      handleContentChange: mockHandleContentChange,
      handleDeleteNote: mockHandleDeleteNote,
      handleTitleChange: mockHandleTitleChange
    }
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Note {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles delete', () => {
    const wrapper = shallow(<Note {...props} />);
    wrapper.find(".note__title").simulate("change", { target: { value: "foo" }});
    expect(mockHandleTitleChange).toHaveBeenCalled();
  });

  it('handles content', () => {
    const wrapper = shallow(<Note {...props} />);
    wrapper.find(ContentEditable).at(1).simulate("change", { target: { value: "foo" }});
    expect(mockHandleContentChange).toHaveBeenCalled();
  });

  it('handles delete', () => {
    const wrapper = shallow(<Note {...props} />);
    wrapper.find(".note__btn").simulate("click");
    expect(mockHandleDeleteNote).toHaveBeenCalled();
  });

});