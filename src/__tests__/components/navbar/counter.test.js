import React from 'react';
import Counter from '../../../components/navbar/counter';

import { shallow } from 'enzyme';

describe('Counter', () => {
    it('matches snapshot', () => {
      const wrapper = shallow(<Counter count={2} />);
      expect(wrapper).toMatchSnapshot();
    });
  });