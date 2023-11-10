import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Cahracter from './components/Character';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Character" component={Cahracter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
