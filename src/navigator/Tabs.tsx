import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';

import { LogBox } from 'react-native';
//Para ignorar el menaje de advertencia que
//aparece durante desarrollo en una caja
LogBox.ignoreLogs(['Reanimated']);

export const  Tabs=()=>{
  return Platform.OS==='ios'
          ?<TabsIOS/>
          :<TabsAndroid/>
}


/**Para que funcione material tambien se debe instalar
 * yarn add react-native-vector-icons para que solucione
 * el error
 */
const BottomTabAndroid = createMaterialBottomTabNavigator();

export const  TabsAndroid=()=> {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colores.primary
      }}
      screenOptions={
        ({route})=>(
         {
           tabBarIcon:({color,focused})=>{
             //console.log(route.name)
             let iconName:string='';
             switch (route.name) {
               case 'Tab1Screen':
                 iconName='T1'
                 break;
               case 'Tab2Screen':
                  iconName='T2'
                  break;
                  case 'StackNavigator':
                    iconName='St'
                    break;
                 
               
             }
             return <Text style={{color}}>{iconName}</Text>

           }
        } 
        )
      }
    >
       <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title:'Tab 2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS=()=> {
  return (
    <BottomTabIOS.Navigator
    //Personaliza contenedor de la pantalla
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      //Personaliza la barra
      tabBarOptions={{
        activeTintColor:colores.primary,
        style:{borderTopColor:colores.primary,
               borderTopWidth:0,
               elevation:0
              },
        labelStyle:{
          fontSize:15,
        }
      }}
      /**Se crea la personalizacion para la parte de iconos */
      screenOptions={
        ({route})=>(
         {
           tabBarIcon:({color,focused,size})=>{
             //console.log(route.name)
             let iconName:string='';
             switch (route.name) {
               case 'Tab1Screen':
                 iconName='T1'
                 break;
               case 'Tab2Screen':
                  iconName='T2'
                  break;
                  case 'StackNavigator':
                    iconName='St'
                    break;
                 
               
             }
             return <Text style={{color}}>{iconName}</Text>

           }
        } 
        )
      }
    >
      {/**Con las opcionts puedo cambiar el nombre de los tabs que se muestran.
       * tabBarIcon se pide una funcion que devuelva nodo reactjsx
       */}
       {/**Ejemplo de como poner iconos en el bottomBar */}
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1',tabBarIcon:(props)=>(
        <Text style={{color:props.color}}>T1</Text>
      )}} component={Tab1Screen} /> */}

      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
      
    </BottomTabIOS.Navigator>
  );
}