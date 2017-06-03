/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import AppContainer from './js/AppContainer'

export default class navigator extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('navigator', () => navigator);
