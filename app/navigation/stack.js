import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainScreen from '../screens/mainScreen';
import YoutubeScreen from '../screens/player';

const AppContainer = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Youtube playlist',
    },
  },
  YoutubeScreen: {
    screen: YoutubeScreen,
    navigationOptions: {
      title: 'Youtube videos',
    },
  },
});

export default createAppContainer(AppContainer);
