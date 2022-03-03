import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Remote debugger"]);

//* Import of the navigation tools
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

//* Import all pages
import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import SplashScreen from "./screens/SplashScreen";
import Loading from "./screens/Loading";
import AllConnexion from "./screens/AllConnexion";
import SignUp from "./screens/SignUp";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";

import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import PageThree from "./screens/PageThree";
import ResultScreen from "./screens/ResultScreen";
import HistoryScreen from "./screens/HistoryScreen";

//* Import of the tools required for redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import useless from "./reducers/useless";
import game from "./reducers/game";
import user from "./reducers/user";

const store = createStore(combineReducers({ useless, game, user }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="AllConnexion" component={AllConnexion} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Categories" component={Categories} />

          {/* Christian's test pages DO NOT TOUCH */}
          <Stack.Screen name="PageThree" component={PageThree} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
