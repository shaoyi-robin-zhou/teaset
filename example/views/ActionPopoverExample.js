// ActionPopoverExample.js

'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationPage, ActionPopover, Button} from '@yz1311/teaset';

export default class ActionPopoverExample extends Component {

  static navigationOptions = ({navigation})=>{
      return {
        headerTitle: 'ActionPopover'
      };
  }

  show(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      let items = [
        {title: 'Copy', onPress: () => alert('Copy')},
        {title: 'Remove', onPress: () => alert('Remove')},
        {title: 'Share', onPress: () => alert('Share')},
      ];
      ActionPopover.show({x: pageX, y: pageY, width, height}, items);
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Show' ref='apButton' onPress={() => this.show(this.refs['apButton'])} />
      </View>
    );
  }

}
