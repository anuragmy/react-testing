import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../../Utils';
import Button from '.';

const setUp = (props = {}) => shallow(<Button {...props} />);

describe('Button Component', () => {
    describe('Checking proptypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'this is button text',
                emitEvent: () => 'this is emit event',
            };
            const propError = checkProps(Button, expectedProps);
            expect(propError).toBeUndefined();
        })
    });
    describe('Renders', () => {
        let wrapper;
        let mockFn;
        beforeEach(() => {
            mockFn = jest.fn();
            const props = {
                buttonText: 'Text',
                emitEvent: mockFn,
            };
            wrapper = setUp(props);
        });
        it('renders the button', () => {
            const component = findByTestAtrr(wrapper, 'buttonComponent');
            expect(component.length).toBe(1);
        })
        it('emit callback on click', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFn.mock.calls.length;
            expect(callback).toBe(1);

        })
    });
})
