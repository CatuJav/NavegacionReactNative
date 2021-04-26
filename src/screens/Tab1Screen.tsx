import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tabs 1 effect')
        
    }, [])

    return (
        <View>
            <Text>TabScreen1</Text>
        </View>
    )
}
