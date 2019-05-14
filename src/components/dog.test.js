import React from 'react';
import Dog from './Dog';
import { shallow } from 'enzyme';

describe('test dog component', () =>{
  it('produces a dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
