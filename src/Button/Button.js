import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({ label }) => {

  const [disabled, _setDisabled] = useState(false);

  _onSubmit = () => {
    // Do something...

    _setDisabled(true);

  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={_onSubmit}>
      <Text>
        {disabled ? 'Loading...' : label}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;