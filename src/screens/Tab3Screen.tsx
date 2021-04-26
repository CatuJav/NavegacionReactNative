import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tabs 3 effect')
        
    }, [])
    return (
        <View>
            <Text>TabScreen3</Text>
        </View>
    )
}
