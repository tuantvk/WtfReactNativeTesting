import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;