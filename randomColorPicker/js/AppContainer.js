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
    this.state = {
      backgroundColor: '#FFFFFF',
      fontColor: '#000000',
      displayText: 'Click me for a color!'
    }
  }

  componentWillMount(){
    this.changeContent();
  }

  _onPressButton(){
    this.changeContent();
  }
  changeContent(){
    /*
    Change the backgroundColor, displayText, and fontColor based on randomly
    generate hex value.
    */
    var hexval = this.generateRandomHex();
    this.setState({backgroundColor: hexval});
    this.setState({displayText: "Hi, I'm "  + hexval})

    if (hexval == "#000000"){
      this.setState({fontColor: "#FFFFFF"})
    }
  }
  generateRandomHex(){
    /*
    Simple random hex value generator.
    Returns a string.
    */
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  render(){
    const {displayText} = this.state
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: this.state.backgroundColor}}>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text style={{color: this.state.fontColor, fontSize: 20}}>{displayText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
