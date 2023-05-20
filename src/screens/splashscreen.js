import React, {Component} from 'react';
import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';

import {StackActions} from '@react-navigation/native';

class splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Tabs'));
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <ImageBackground
          source={require('../assets/leaves-pattern.png')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/chef.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </ImageBackground>

        {/* </View> */}
      </View>
    );
  }
}

export default splashscreen;
