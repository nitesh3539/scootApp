/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createBottomTabNavigator } from 'react-navigation'
import HomeSCreen from './HomeScreen'

import {Icon} from 'native-base'
const tabStyle = {
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'red',
    inactiveTintColor: '#aaaaaa',
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#f3f3f3',
    },
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      fontWeight: '600',
      width: '100%'
    },
    tabStyle: {
      alignItems: 'center',
      height: 50,
      paddingTop: 10,
      paddingBottom: 5
    },
    indicatorStyle: {
      height: 0
    }

  }
};
const HomeTab = createBottomTabNavigator({
  Home: {
    screen: HomeSCreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='glasses'
          type="MaterialCommunityIcons"
          style={[{ fontSize: 18, marginTop: 0, color: tintColor }]}
        />
      ),
    }
  },
  Login: {
    screen: HomeSCreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='glasses'
          type="MaterialCommunityIcons"
          style={[{ fontSize: 18, marginTop: 0, color: tintColor }]}
        />
      ),
    }
  } ,
  Menu:  {
    screen: HomeSCreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='glasses'
          type="MaterialCommunityIcons"
          style={[{ fontSize: 18, marginTop: 0, color: tintColor }]}
        />
      ),
    }
  },
},
  { ...tabStyle }
);

const App = () => {
  return (
    <HomeTab/>
  );
};

export default App;
