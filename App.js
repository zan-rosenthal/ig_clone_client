import Profile from 'screens/Profile'
import ImageDetail from 'screens/ImageDetail'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Profile: { screen: Profile, params: { userId: 1 } },
  ImageDetail: { screen: ImageDetail }
},{
  initialRouteName: 'Profile'
});

export default createAppContainer(MainNavigator);

