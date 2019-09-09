import React from 'react';
import { render } from 'react-native-testing-library';
import Lifecycle from './Lifecycle';

describe('Lifecycle', () => {

  it('loads number from useEffect', () => {
    const { queryByText } = render(<Lifecycle />);

    expect(queryByText('one')).not.toBeNull();
    expect(queryByText('two')).not.toBeNull();
  });

});