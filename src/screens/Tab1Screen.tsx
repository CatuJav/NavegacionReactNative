import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
 
    const {top}=useSafeAreaInsets()
    useEffect(() => {
        console.log('Tabs 1 effect')
        
    }, [])

    return (
        <View style={{...styles.globalMargin, marginTop:top+10}}>
            <Text>Iconos</Text>
            <Text>
            <TouchableIcon iconName="flight-land" size={80}  />
            <TouchableIcon iconName="shopping-cart" size={80} />
            <TouchableIcon iconName="verified" size={80}  />
            <TouchableIcon iconName="https" size={80}  />
            <TouchableIcon iconName="view-module" size={80} />
            <TouchableIcon iconName="pivot-table-chart" size={80}  />
            <TouchableIcon iconName="work-outline" size={80}  />
            </Text>
        </View>
    )
}
