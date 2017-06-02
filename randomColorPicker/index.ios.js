/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './js/AppContainer'

export default class randomColorPicker extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}



AppRegistry.registerComponent('randomColorPicker', () => randomColorPicker);
