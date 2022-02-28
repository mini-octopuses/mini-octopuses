
import React from 'react';

//* Import of the navigation tools
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//* Import of the 2 blank pages
import PageOne from './screens/PageOne';
import PageTwo from './screens/PageTwo';
import PageThree from './screens/PageThree';

import ResultScreen from './screens/ResultScreen';
import HistoryScreen from './screens/HistoryScreen'

//* Import of the tools required for redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import useless from './reducers/useless'
const store = createStore(combineReducers({ useless }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="PageOne" component={PageOne} /> */}
          {/* <Stack.Screen name="PageTwo" component={PageTwo} /> */}
          <Stack.Screen name="PageThree" component={PageThree} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
