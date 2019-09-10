# React Native Testing

<p align="center">
  <a href="https://github.com/tuantvk/WtfReactNativeTesting/issues">
    <img src="https://img.shields.io/github/issues/tuantvk/WtfReactNativeTesting.svg" alt="issues" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/forks/tuantvk/WtfReactNativeTesting.svg" alt="forks" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/stars/tuantvk/WtfReactNativeTesting.svg" alt="stars" />
  </a>
  <a href="https://github.com/tuantvk/WtfReactNativeTesting/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/tuantvk/WtfReactNativeTesting.svg" alt="LICENSE" />
  </a>
</p>

<p align="center">
  <img src="assets/testing-app.png" alt="testing-app" />
<p>

## What are we unit testing exactly ? :rotating_light:

We're using **"unit testing"** to refer to tests of functions and plain JavaScript objects, independent of the React Native framework. This means that we aren't testing any components that rely on React Native.


<p align="center">
  <img src="assets/giphy.gif" alt="giphy" />
<p>


For example, a unit could be individual methods and functions in classes or really any small pieces of functionality. We mock out dependencies in these tests so that we can test individual methods and functions in isolation.


These test are written using testing frameworks and for this article i will be using [Jest](https://jestjs.io/), javascript testing framework together with [Enzyme](https://airbnb.io/enzyme/) and [React Native Testing Library](https://github.com/callstack/react-native-testing-library).


## Setting

### Install

If you use **React Native CLI** installs the **Jest** testing framework by default. But if you're using Expo we need to install it manually.

```sh
yarn add -D enzyme enzyme-adapter-react-16
```

More:
```sh
yarn add react-dom react-native-testing-library
```

Create new file `jestSetup.js` in root and add to jest in `package.json`:

```js
// jestSetup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter()
});
```

```json
// package.json
"jest": {
  "preset": "react-native",
  "setupFilesAfterEnv": [
    "<rootDir>/jestSetup.js"
  ]
}
```

Refer to [Jest configuration](https://jestjs.io/docs/en/configuration.html) for more info.

<p align="center">
  <img src="assets/setup-done.gif" alt="setup-done" />
<p>

With this, our setup should be done :tada: :tada: :tada:

### Let's get started by writing a test for a hypothetical function that adds two numbers.

First, create a [Sum.js](src/Sum/Sum.js) file:
```js
'use strict'

function sum(a, b) {
  return a + b;
};

module.exports = sum;
```

Create a file named [Sum.test.js](src/Sum/Sum.test.js), this will contain our actual test.
```js
const Sum = require('./Sum');

test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
});
```

Finally, run yarn test and Jest will print this message:

```sh
PASS  ./Sum.test.js
:heavy_check_mark: adds 1 + 2 to equal 3 (5ms)
```

<p align="center">
  <img src="assets/ohmygod.gif" alt="ohmygod" />
<p>


## Testing React Native components

Component tests are tests of individual React Native components apart from where they are used in an application.
I will cover rendering elements, testing props, finding nested elements, updating props, and calling event handlers.

I use `react-native-testing-library` allows you to test React Native components, verifying the component tree they render and allowing you to interact with them.


## Hello world testing

I have component [Hello.js](src/Hello/Hello.js) and enter the following contents:

```js
// Hello.js
import React from 'react';
import { Text } from 'react-native';

const Hello = () => <Text>Hello, world!</Text>;

export default Hello;
```

Next, then add a [Hello.spec.js](src/Hello/Hello.spec.js) file in it with the following contents:

```js
// Hello.spec.js
import React from 'react';
import { render } from 'react-native-testing-library';
import Hello from './Hello';

describe('Hello', () => {

  it('renders the correct message', () => {
    const { queryByText } = render(<Hello />);
    expect(queryByText('Hello, world!')).not.toBeNull();
  });

});
```

Run test with `yarn test`