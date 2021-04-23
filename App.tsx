import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>
        Pantalla de navegación
      </Text> */}
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}
