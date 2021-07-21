import React from 'react';
import Navbar from '../../../components/navbar';

import { shallow } from 'enzyme';

describe('App', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<Navbar count={2} />);
      expect(wrapper).toMatchSnapshot();
    });
  });