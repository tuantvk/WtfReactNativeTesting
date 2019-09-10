import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Events extends React.Component {

  state = {
    counter: 1,
  }

  _setCounter = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  }

  render() {
    const { counter } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this._setCounter}>
          <Text>{counter}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Events;