import { createStackNavigator, createNavigationContainer } from 'react-navigation';
//LOCAL
import Splash from './src/screens/Splash';
import SignIn from './src/screens/SignIn';

const stackNavigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    SignIn: { screen: SignIn }
  },
  {
    headerMode: 'none'
  }
);

export default createNavigationContainer(stackNavigator);