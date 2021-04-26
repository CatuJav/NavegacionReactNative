import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tabs 2 effect')
        
    }, [])

    return (
        <View>
            <Text>TabScreen2</Text>
        </View>
    )
}
