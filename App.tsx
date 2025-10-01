import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;