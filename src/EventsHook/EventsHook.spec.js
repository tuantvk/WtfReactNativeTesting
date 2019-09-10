import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import renderer from 'react-test-renderer';
import { waitForElement } from 'react-native-testing-library';
import EventsHook from './EventsHook';

describe('EventsHook', () => {

  it('calls setCount with count + 1', async () => {

    let inst;
    inst = renderer.create(<EventsHook />)

    await waitForElement(() => {
      const button = inst.root.findByType(TouchableOpacity);
      const text = inst.root.findByType(Text);

      button.props.onPress();

      expect(text.props.children).toBe(2);

    })

  });

});