import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';


export default class SideMenu extends Component {
    render(){
      const menuDescription = [
        {title: 'Page One', key: ()=>Actions.pageOne()},
        {title: 'Page Two', key: ()=> Actions.pageTwo()},
        {title: 'Page Three', key: ()=> Actions.pageThree()}
      ];

      const menuItems = menuDescription.map(item => (
        <TouchableOpacity key={item.key} onPress={item.key}>
          <View>
            <Text>
            {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))


      return (
        <View style={{backgroundColor: 'red', flex: 1, paddingTop: 30}}>
          {menuItems}
        </View>
      )
        // return(
        //         <View style={{backgroundColor: 'red', flex: 1}}>
        //           <Text>This is side menu!</Text>
        //         </View>
        //
        // );
    }
}
