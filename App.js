import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomTabNavigator from './components/BottomTabNavigator';
import LoginScreen from './screens/Login';
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './screens/Search';
import PickRouteScreen from './screens/PickRoute';
import db from './config';
import firebase from "firebase";
import * as Font from 'expo-font';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontLoaded: false ,
      HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
      DataTable: [
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
      ]
      };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      fontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchContainer = createSwitchNavigator({
  Login:{
    screen:LoginScreen
  },
  Search:{
    screen:SearchScreen
  },
  PickRoute:{
    screen:PickRouteScreen
  }
},
{initialRouteName:'Login'}
)
const AppContainer = createAppContainer(AppSwitchContainer)

