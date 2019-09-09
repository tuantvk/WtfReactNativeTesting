import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';

const NUMBERS = ['one', 'two'];

const Lifecycle = () => {

  const [numbers, _setNumbers] = useState([]);

  useEffect(() => {
    _setNumbers(NUMBERS);
  });

  return (
    <View>
      {
        numbers.map((num, index) => (
          <Text key={index}>{num}</Text>
        ))
      }
    </View>
  );
}

export default Lifecycle;