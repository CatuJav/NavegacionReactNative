import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any,any>{}
export const SettingsScreen = ({navigation}:Props) => {

    useEffect(() => {
        navigation.setOptions({
            title:'Ajustes',
            //headerShown:true
        })
    }, []);

    {/**Tener un mejor control de los lugares donde no puedo mostrar contenido */}
    const insets=useSafeAreaInsets();

    //Usar el context
    const {authState} = useContext(AuthContext);

    return (
        //insets permite ajustar como puedo mostrar el contenido 
        //Permitiendo tener controlado el notch
        <View style={
            {...styles.globalMargin,
            marginTop:insets.top+20}}>
            <Text style={styles.title}>SettingsScreen</Text>
            <Text>
                {JSON.stringify(authState,null,4)}
            </Text>
        </View>
    )
}
