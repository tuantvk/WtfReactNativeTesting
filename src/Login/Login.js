import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const Login = props => {

  const [username, _setUsername] = useState('');
  const [password, _setPassword] = useState('');
  const [phone, _setPhone] = useState('');

  _onSubmitLogin = () => {
    // Do something...

    const { login } = props;

    if (login) {
      login({ username, password });
    }

  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        testID="username"
        placeholder="Username"
        value={username}
        onChangeText={text => _setUsername(text)}
      />
      <TextInput
        testID="password"
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => _setPassword(text)}
      />
      <TextInput
        testID="phone"
        placeholder="Phone"
        value={phone}
        keyboardType="numeric"
        maxLength={10}
        // when testing not detect text is number although keyboardType="numeric"
        onChangeText={text => _setPhone(text.replace(/[^0-9]/g, ''))}
      />
      <Button
        title="Submit"
        testID="btnSubmit"
        onPress={_onSubmitLogin}
      />
    </View>
  );
}

export default Login;