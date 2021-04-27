import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {
 
    const {top}=useSafeAreaInsets()
    useEffect(() => {
        console.log('Tabs 1 effect')
        
    }, [])

    return (
        <View style={{...styles.globalMargin, marginTop:top+10}}>
            <Text>Iconos</Text>
            <Text>
            <Icon name="flight-land" size={80} color={colores.primary} />
            <Icon name="shopping-cart" size={80} color={colores.primary} />
            <Icon name="verified" size={80} color={colores.primary} />
            <Icon name="https" size={80} color={colores.primary} />
            <Icon name="view-module" size={80} color={colores.primary} />
            <Icon name="pivot-table-chart" size={80} color={colores.primary} />
            <Icon name="work-outline" size={80} color={colores.primary} />
            </Text>
        </View>
    )
}
