import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, View} from 'react-native';

export default class PageThree extends Component{
  render(){
    return(
      <View style={{margin: 128}}>
        <Text>This is page Three </Text>
        <Text style={{backgroundColor: 'black', color: 'white'}} onPress={Actions.pageOne}>Click here to go back to PageOne.</Text>
      </View>
    )
  }
}
