import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Members from './Members';

const members = [{ id: 1, name: 'Daphne', }, { id: 2, name: 'Margret', }];


describe('Members Component', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Members members={members} />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render all item in members', () => {
        const wrapper = shallow(
            <Members members={members} />
        );

        expect(wrapper.find({ testID: 'memberDetail' }).length).toBe(2);
    });

    it('should render correct names', () => {
        const wrapper = shallow(
            <Members members={members} />
        );

        wrapper.find({ testID: 'memberDetail' }).forEach((node, index) => {
            expect(node.props().children).toBe(members[index].name);
        });
    });

});