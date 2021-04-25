import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}
export const SettingsScreen = ({navigation}:Props) => {

    useEffect(() => {
        navigation.setOptions({
            title:'Sett',
            //headerShown:true
        })
        
            
        
    }, []);

    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}
