import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button label="Click me" />)
      expect(component).toMatchSnapshot()
    });
  });

});