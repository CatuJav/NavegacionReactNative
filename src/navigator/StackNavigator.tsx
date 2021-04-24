import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

//Se usa la funcion para crear un stack navigator
//Para la navegación se debe usar el name para referenciar a que
//página deseamos ir el componet define la página screen
const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator
    //Para ver una página inicial del stack
      //initialRouteName='Pagina2Screen'


      screenOptions={{
        //Muestra el header
        //headerShown:false,
        headerStyle:{
          elevation:0,
        },
        cardStyle:{
          backgroundColor:'white',
        }
      }}

    >
      <Stack.Screen name="Pagina1Screen" options={{title:'Página 1'}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:'Página 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:'Página 3'}} component={Pagina3Screen} />
      

    </Stack.Navigator>
  );
}