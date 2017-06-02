import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = { backgroundColor: '#FFFFFF', fontColor: '#000000'}
  }

  _onPressButton(){
    var hexval = this.generateRandomHex();
    this.setState({backgroundColor: hexval});

    if (hexval == "#000000"){
      this.setState({fontColor: "#FFFFFF"})
    }
  }

  generateRandomHex(){
      return '#' + Math.random().toString(16).slice(2, 8);
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: this.state.backgroundColor}}>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text style={{color: this.state.fontColor, fontSize: 20}}>Click me for color!</Text>
        </TouchableOpacity>
      </View>
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
