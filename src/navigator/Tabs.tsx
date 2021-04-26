import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs=()=> {
  return (
    <Tab.Navigator
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
      //
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

      <Tab.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
      
    </Tab.Navigator>
  );
}