import React , {Component} from 'react';
import {Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageOne extends Component{
  render(){
    const goToPageTwo = () => Actions.pageTwo({text: 'This is the text past from PageOne'});
    return(
      <View style={{margin: 128}}>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
      </View>
    )
  }
}
