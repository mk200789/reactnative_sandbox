import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');


export default class SideMenu extends Component {

    render(){
      console.log("SideMenu: ", this)

      const menuDescription = [
        {id: 1, title: 'Page One', nav: Actions.pageOne},
        {id: 2, title: 'Page Two', nav: Actions.pageTwo},
        {id: 3, title: 'Page Three', nav: Actions.pageThree}
      ];

      const menuItems = menuDescription.map(item => (
        <TouchableOpacity key={item.id} onPress={this.props.pressMenu.bind(this, item.nav, item.title)}>
          <View>
            <Text>
            {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))


      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={{ height, alignItems: 'center', justifyContent: 'center' }}>
              { menuItems }
            </View>
          </View>
      )
    }
}
