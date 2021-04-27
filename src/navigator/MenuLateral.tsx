import  React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
/**Puedo crear un nuevo stack para crear un header en el SettingsScreen
 * Sin que aparesca el icono de hamburguesa
 */
// const Stack=createStackNavigator();
// const SettingsStackScreen=()=>{
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name='SettingScreen'
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   );
// }

export const MenuLateral=() =>{
  const {width}=useWindowDimensions();
  return (
    <Drawer.Navigator
      //drawerPosition='right'
      drawerType={width>=768?'permanent':'front'}
      drawerContent={(props)=>(<MenuInterno {...props}/>)}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingScreen"   component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

//Creanmos un nuevo funtional component para el drawerContent
//Diujamos lo que se va ha mostrar en el menu lateral
const MenuInterno=({navigation}:DrawerContentComponentProps<DrawerContentOptions>)=>{
  return (
    <DrawerContentScrollView>
      {/**Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/**Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Tabs')}
        style={{...styles.menuBoton, flexDirection:'row', alignContent:'space-between', alignItems:'center'}}>
          <Icon name='map-outline' size={20}  color={colores.primary}/>
          <Text style={{...styles.menuTexto, marginLeft:10}}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('SettingScreen')}
        style={{...styles.menuBoton, flexDirection:'row', alignItems:'center'}}>
          <Icon name='settings-outline' size={20}  color={colores.primary}/>
          <Text style={{...styles.menuTexto, marginLeft:10}}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}