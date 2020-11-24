import React from 'react'
import { shallow } from 'enzyme';
import Header from '.'
import { findByTestAtrr } from '../../../Utils'

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {
  let component;
  beforeEach(() => component = setUp(<Header />));

  it('it should render correctly', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('it should render the logo', () => {
    const wrapper = findByTestAtrr(component, 'logoIMG');
    expect(wrapper.length).toBe(1);
  });
});

