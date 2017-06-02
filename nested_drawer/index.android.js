/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './AppContainer'

export default class nested_drawer extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('nested_drawer', () => nested_drawer);
