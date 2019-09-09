import React from 'react';
import { render } from 'react-native-testing-library';
import PassingProps from './PassingProps';

describe('PassingProps', () => {
  it('displays the passed-in name', () => {
    const { queryByText } = render(
      <PassingProps name="Josh" />
    );
    
    expect(queryByText('Hello, Josh!')).not.toBeNull();
    expect(queryByText('Age 30')).not.toBeNull();
  });

  it('displays the passed-in age', () => {
    const { queryByText } = render(
      <PassingProps name="Josh" age="25" />
    );
    expect(queryByText('Age 25')).not.toBeNull();
  });
});