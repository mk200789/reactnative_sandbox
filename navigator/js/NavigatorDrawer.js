import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class NavigationDrawer extends Component{
  constructor(props){
    super(props)
  }


  render(){
    const state = this.props.navigationState;
    const children = state.children;
    console.log("state: ", state);
    console.log("this: ", this)
    return(
      <Drawer
          ref={(ref) => {this._drawer = ref}}
          open={state.open}
          onOpen={()=>Actions.refresh({key:state.key, open: true})}
          onClose={()=>Actions.refresh({key:state.key, open: false})}
          type="overlay"
          content={<SideMenu />}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          negotiatePan={true}
          tweenHandler={(ratio) => ({
           main: { opacity:Math.max(0.54,1-ratio) }
          })}
        >
          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}
