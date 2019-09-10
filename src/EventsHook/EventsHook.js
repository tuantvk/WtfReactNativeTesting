import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const EventsHook = () => {

  const [number, _setNumber] = useState(1);

  return (
    <View>
      <TouchableOpacity onPress={() => _setNumber(number + 1)}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EventsHook;