import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, View} from 'react-native';

export default class PageThree extends Component{
  render(){
    return(
      <View style={{margin: 128}}>
        <Text>This is page Three </Text>
      </View>
    )
  }
}
