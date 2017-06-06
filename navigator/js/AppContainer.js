import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router, Scene, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons'

import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

import NavigationDrawer from './NavigatorDrawer'

export default class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = {hasLoad: false}
  }

  render(){
    return(
      <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false} passProps={true} state={this.state}>
          <Scene key="root">
            <Scene key="pageOne" title="Page One" component={PageOne} initial={true} type={ActionConst.REPLACE} />
            <Scene key="pageTwo" title="Page Two" component={PageTwo} type={ActionConst.REPLACE} />
            <Scene key="pageThree" title="Page Three" component={PageThree} type={ActionConst.REPLACE} />
          </Scene>
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
