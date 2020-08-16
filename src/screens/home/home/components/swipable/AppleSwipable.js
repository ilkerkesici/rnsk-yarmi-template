import React, { Component } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Color } from '../../../../../styles/Colors';

export default class HomeCardSwipeable extends Component {
  
  renderLeftActions = (progress, dragX) => {
    const styles = func_style();
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-100, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.View
          style={[
            styles.actionView,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          <Text style={styles.date}>
              {this.props.data.date}
          </Text>
          <Text style={styles.month}>
              {this.props.data.month}
          </Text>
          <Text style={styles.time}>
              {this.props.data.time}
          </Text>
        </Animated.View>
      </RectButton>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={3}
        leftThreshold={40}
        //rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        
        //renderRightActions={this.renderRightActions}
        >
        {children}
      </Swipeable>
    );
  }
}

const func_style = () => StyleSheet.create({
  leftAction: {
    width: 120,
    backgroundColor: Color.background,
    justifyContent: 'flex-start',
  },
  actionView: {
    backgroundColor: Color.white,
    padding: 10,
    marginTop: 10,
    width: 100,
    borderRadius: 5

  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',

  },
  date:{
      fontSize: 30,
      fontWeight: 'bold'
  },
  month:{
      fontWeight: '500',
      fontSize: 16
  },
  time:{
      marginTop: 8,
      alignContent: 'flex-end',
      alignSelf: 'stretch'
  }
});