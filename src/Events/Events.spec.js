import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import renderer from 'react-test-renderer';
import Events from './Events';

describe('Events', () => {

  it('updates counter when clicked', () => {

    const inst = renderer.create(<Events />);
    const button = inst.root.findByType(TouchableOpacity);
    const text = inst.root.findByType(Text);

    expect(inst.root.instance.state.counter).toBe(1);

    button.props.onPress();
    
    expect(text.props.children).toBe(2);
  });
});