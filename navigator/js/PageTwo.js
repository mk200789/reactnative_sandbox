import React , {Component} from 'react';
import {Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageTwo extends Component{
  render(){
    return(
      <View style={{margin: 128}}>
        <Text>This is PageTwo!</Text>
      </View>
    )
  }
}
