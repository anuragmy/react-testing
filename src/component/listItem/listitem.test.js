import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../Utils';
import ListItem from '.'

const setUp = (props = {}) => shallow(<ListItem {...props} />);

describe('ListItem Component', () => {
  describe('Check prop types', () => {
    it('shoud render with props', () => {
      const props = {
        title: 'title',
        desc: 'desc',
      };
      const propsError = checkProps(ListItem, props);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Render title and description', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'title',
        desc: 'desc',
      };
      wrapper = setUp(props);
    })
    it('should render title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });
    it('should render null on no title', () => {
      const title = findByTestAtrr(shallow(<ListItem />), 'componentTitle');
      expect(title.length).toBe(0);
    });
    it('should render desc', () => {
      const title = findByTestAtrr(wrapper, 'componentDesc');
      expect(title.length).toBe(1);
    });
  });
});
