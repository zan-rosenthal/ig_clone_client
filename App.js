import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from 'screens/Profile/index.js'
import ImageDetail from 'screens/ImageDetail/index.js'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Profile: { screen: Profile, params: { userId: 1 } },
  ImageDetail: { screen: ImageDetail}
},{
  initialRouteName: 'Profile'
});

export default createAppContainer(MainNavigator);

