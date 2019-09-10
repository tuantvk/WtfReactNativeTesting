import React from 'react';
import { render } from 'react-native-testing-library';
import PassingProps from './PassingProps';

describe('PassingProps', () => {

  it('displays the passed-in name', () => {
    const { queryByText } = render(
      <PassingProps name="Jinx" />
    );
    
    expect(queryByText('Hello, Jinx!')).not.toBeNull();
    expect(queryByText('Age 30')).not.toBeNull();
  });

  it('displays the passed-in age', () => {
    const { queryByText } = render(
      <PassingProps name="Jinx" age="25" />
    );
    expect(queryByText('Age 25')).not.toBeNull();
  });

});