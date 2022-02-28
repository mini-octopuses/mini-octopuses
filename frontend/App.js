import React from "react";

//* Import of the navigation tools
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

//* Import of the 2 blank pages
import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import SplashScreen from "./screens/SplashScreen";
import AllConnexion from "./screens/AllConnexion";

//* Import of the tools required for redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import useless from "./reducers/useless";
const store = createStore(combineReducers({ useless }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="AllConnexion" component={AllConnexion} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
