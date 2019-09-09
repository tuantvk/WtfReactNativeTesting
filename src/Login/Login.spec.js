import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Login from './Login';

describe('Login', () => {

  describe('change text login', () => {
    it('change text username and password', () => {
      const { getByTestId } = render(<Login />);

      fireEvent.changeText(getByTestId('username'), 'admin');
      fireEvent.changeText(getByTestId('password'), 'admin@123');

      expect(getByTestId('username').props.value).toEqual('admin');
      expect(getByTestId('password').props.value).toEqual('admin@123');
    });


    it('change text phone input ', () => {
      const { getByTestId } = render(<Login />);

      fireEvent.changeText(getByTestId('phone'), '0123456789');

      expect(getByTestId('phone').props.value).toEqual('0123456789');
    });


    it('change text is string to phone input ', () => {
      const { getByTestId } = render(<Login />);

      fireEvent.changeText(getByTestId('phone'), 'isstring');

      expect(getByTestId('phone').props.value).toEqual('');
    });

  });



  describe('Submit form login', () => {

    it('on submit login', () => {
      const data = { "password": "123456", "username": "admin@123" }
      const submitHandler = jest.fn();
      const { getByTestId } = render(
        <Login login={submitHandler} />
      );

      fireEvent.changeText(getByTestId('username'), 'admin@123');
      fireEvent.changeText(getByTestId('password'), '123456');

      expect(getByTestId('username').props.value).toEqual('admin@123');
      expect(getByTestId('password').props.value).toEqual('123456');

      fireEvent.press(getByTestId('btnSubmit'));

      expect(submitHandler).toHaveBeenCalledWith(data);
    });

  })

});