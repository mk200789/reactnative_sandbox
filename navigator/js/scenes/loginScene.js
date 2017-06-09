import React, { Component } from 'react'
import {
  Container,
  Content,
  View,
  Button,
  Text
} from 'native-base'
import {Image, StyleSheet, Dimensions, TouchableOpacity, TextInput} from 'react-native'

import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

export default class LoginScene extends Component{
  constructor(){
    super()
    this.state = {text: ""}
  }
  componentDidMount(){
    this.props.state.current_page = this.props.title
  }

  render(){
    console.log("LoginScene.js")
    return(
      <Container style={style.container}>
        <View>
            <TextInput
              style={style.usernameInput}
              placeholder="username"
              onChangeText={(text) => this.setState({text})}
            />
            <TouchableOpacity onPress={Actions.pageOne} style={style.loginButton}>
              <Text style={style.buttonContent}>Login</Text>
            </TouchableOpacity>
        </View>
      </Container>
    )
  }
}

const style = StyleSheet.flatten({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 128
  },
  loginButton: {
    backgroundColor: 'orange',
    marginTop: 15
  },
  usernameInput: {
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1

  },
  buttonContent: {
    textAlign: 'center',
    padding: 10
  }
})
