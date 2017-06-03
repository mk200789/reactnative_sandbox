import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

export default class AppContainer extends Component {
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="pageOne" title="Page One" component={PageOne} initial={true} />
          <Scene key="pageTwo" title="Page Two" component{pageTwo} />
        </Scene>
      </Router>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
