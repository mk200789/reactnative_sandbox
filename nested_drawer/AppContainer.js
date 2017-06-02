import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SideMenu from './js/stackInDrawNav'

export default class AppContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <SideMenu />
    )
  }
}
