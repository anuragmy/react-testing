import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../Utils';
import App from './App';

const setUp = (initialState = {}, props = {}) => {
  const store = testStore(initialState);
  return shallow(<App store={store} {...props} />).childAt(0).dive();
}

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      post: [{ title: 'title', body: 'body' }, { title: 'title', body: 'body' }, { title: 'title', body: 'body' }],
    }
    wrapper = setUp(initialState);
  });
  it('renders the component without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
})
