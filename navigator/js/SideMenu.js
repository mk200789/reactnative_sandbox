import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';


export default class SideMenu extends Component {
    render(){
        return(
                <View style={{backgroundColor: 'red', flex: 1}}>
                  <Text>This is side menu!</Text>
                </View>

        );
    }
}
