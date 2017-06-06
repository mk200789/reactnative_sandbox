import React , {Component} from 'react';
import {Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageOne extends Component{
  constructor(props){
    super(props)
  }
  
  componentWillMount(){
    console.log("page one: ", this);
    if (this.props.state.hasLoad == false){
      this.setState({hasLoad: true});
    }else{
        Actions.refresh({key: 'drawer', open: value => !value });
    }
  }
  render(){
    const goToPageTwo = () => Actions.pageTwo({text: 'This is the text past from PageOne'});
    return(
      <View style={{margin: 128}}>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
      </View>
    )
  }
}
