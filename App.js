import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import SettingScreen from './screens/SettingScreen.js';
import customSidebarMenu from './components/SidebarMenu.js'


export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: { screen: HomeScreen },
  Exchange: { screen: Exchange },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === "HomeScreen") {
          return (
            <Image
              source={require("./assets/home-icon.png")}
              style={{ width: 20, height: 20 }}
            />
          )

        }
        else if (routeName === "Exchange") {
          return (
            <Image
              source={require("./assets/exchange-icon.png")}
              style={{ width: 20, height: 20, }}
            />)

        }
      }
    })
  }
);

const AppDrawNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
  },
  Settings: {
    screen: SettingScreen
  }
},
  {
    contentComponent: customSidebarMenu
  },
  {
    initialRouteName: 'Home'
  })

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AppDrawNavigator: AppDrawNavigator,
})

const AppContainer = createAppContainer(switchNavigator);