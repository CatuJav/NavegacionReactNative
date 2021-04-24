import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>
        Pantalla de navegación
      </Text> */}
      {/* <StackNavigator></StackNavigator> */}
      
      {/**Ahora ya no llamamos al menu lateral primero  */}
      <MenuLateralBasico/>
    </NavigationContainer>
  )
}
