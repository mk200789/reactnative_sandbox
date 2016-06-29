'use strict';

//importing react-native module and assigns it to `React`
var React = require('react-native');

//defined a single style called `text`
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class propertyFinderApp extends React.Component{
  render(){
    return React.createElement(React.Text, {style: styles.text}, 'Hello World!');
  }
}