import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../Utils';
import Headline from '.';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
    describe('Checking Proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'test Header',
                desc: 'test Header',
                tempArr: [{
                    fName: 'test fname',
                    lName: 'test lname',
                    email: 'test email',
                    age: 11,
                    onlineStatus: false,
                }],
            };
            const propError = checkProps(Headline, expectedProps);
            expect(propError).toBeUndefined();
        });
    });
    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: `This is header`,
                desc: `This is description`,
            };
            wrapper = setUp(props);
        })
        it('should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })
        it('should render H1', () => {
            const component = findByTestAtrr(wrapper, 'header');
            expect(component.length).toBe(1);
        })
        it('should render desc', () => {
            const component = findByTestAtrr(wrapper, 'desc');
            expect(component.length).toBe(1);
        })

    });
    describe('Do not have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        it('should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    });
});
