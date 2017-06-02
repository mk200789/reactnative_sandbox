import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {DrawerNavigator, StackNavigator} from 'react-navigation'

class MyHomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    drawerLabel: 'Home'
  };

  test(){
    console.log("test");
    this.props.navigation.dispatch([{
                type: 'Navigate/RESET',
                routeName: 'Home',
            }]);
    //
  }

  render() {
    console.log("home: ", this.props);

    return (
      <Button
        onPress={() => this.props.navigation.navigate('NotificationsScreen')}
        title="Go to notifications."
        color="#841584"
      />
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications'
  };

  render() {
    console.log("notifications: ", this.props)
    return (
      <Button
        onPress={() => this.props.navigation.navigate('HomeScreen')}
        title="Go back home."
      />
    );
  }
}

const mainScreenStack = StackNavigator(
  {
    HomeScreen: {
      screen: MyHomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'HomeScreen',
      headerMode: 'none',
      headerTitle: 'Home',
    }),
  }
);

const secondScreenStack = StackNavigator(
  {
    NotificationsScreen: {
      screen: MyNotificationsScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'NotificationsScreen',
      headerMode: 'none',
      headerTitle: 'Notifications',
    }),
  }
);

const SideMenu = DrawerNavigator({
  HomeScreen: {
    screen: mainScreenStack,
  },
  NotificationsScreen: {
    screen: secondScreenStack,
  }
}
);


export default SideMenu;
