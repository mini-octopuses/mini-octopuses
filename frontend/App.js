import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Remote debugger"]);

//* Import of the navigation tools
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

//* Import all pages
import SplashScreen from "./screens/SplashScreen";
import AllConnexion from "./screens/AllConnexion";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Categories from "./screens/Categories";

import ResultScreen from "./screens/ResultScreen";

import Profile from "./screens/Profile";
import PastBattles from "./screens/PastBattles";
import HistoryScreen from "./screens/HistoryScreen";
import Settings from "./screens/Settings";
import SettingsGuest from "./screens/SettingsGuest";


import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import PageThree from "./screens/PageThree";

import Loading from "./screens/Loading";


//* Import of the tools required for redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import useless from './reducers/useless'
import game from './reducers/game';
const store = createStore(combineReducers({ useless, game }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="AllConnexion" component={AllConnexion} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PastBattles" component={PastBattles} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="SettingsGuest" component={SettingsGuest} />

          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="PageThree" component={PageThree} />

          <Stack.Screen name="Loading" component={Loading} />

          {/* Christian's test pages DO NOT TOUCH */}
          {/* <Stack.Screen name="PageThree" component={PageThree} /> */}
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
