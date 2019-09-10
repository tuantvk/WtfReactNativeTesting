import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button label="Submit" />)
      expect(component).toMatchSnapshot()
    });

    it('Button renders correctly', () => {

      const tree = renderer.create(<Button />).toJSON();
      expect(tree).toMatchSnapshot();

    });
  });

  describe('onPress', () => {
    it('on submit login', () => {

     
    });

  })

});