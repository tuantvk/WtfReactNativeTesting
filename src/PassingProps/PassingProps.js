import React from 'react';
import {
  View,
  Text
} from 'react-native';

const PassingProps = ({ name, age = 30 }) => (
  <View>
    <Text testID="name">{`Hello, ${name}!`}</Text>
    <Text testID="age">{`Age ${age}`}</Text>
  </View>
);

export default PassingProps;