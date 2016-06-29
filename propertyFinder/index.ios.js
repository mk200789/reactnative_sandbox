//importing react-native libs
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


class propertyFinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
      </View>
    );
  }
}

//stylesheet
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

});

AppRegistry.registerComponent('propertyFinder', () => propertyFinder);
