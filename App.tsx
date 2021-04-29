import 'react-native-gesture-handler';
import React from 'react'
import { Platform, StatusBar, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>

      <AppState>
      {/* <StatusBar hidden={true}
      //translucent={true}
      //backgroundColor={Platform.OS =="ios"? "white" : "white"}
      barStyle="light-content"></StatusBar> */}
      {/* <Text>
        Pantalla de navegación
      </Text> */}
      {/* <StackNavigator></StackNavigator> */}
      
      {/* *Ahora ya no llamamos al menu lateral básico primero 
      <MenuLateralBasico/> */}

      {/**Mostrar el munu lateral */}
      <MenuLateral/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState=({children}:any)=>{
  return (
    <AuthProvider>
      {children}  
    </AuthProvider>
  )
}