import  React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral=() =>{
  const {width}=useWindowDimensions();
  return (
    <Drawer.Navigator
      //drawerPosition='right'
      drawerType={width>=768?'permanent':'front'}
      drawerContent={(props)=>(<MenuInterno {...props}/>)}
    >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
      <Drawer.Screen name="SettingScreen"   component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

//Creanmos un nuevo funtional component para el drawerContent
//Diujamos lo que se va ha mostrar en el menu lateral
const MenuInterno=(props:DrawerContentComponentProps<DrawerContentOptions>)=>{
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  )
}