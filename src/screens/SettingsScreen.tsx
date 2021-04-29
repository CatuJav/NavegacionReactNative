import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

            {/**Evaluar si en el authState existe el icono*/}
            {
                authState.favoriteIcon&&(
                    <Icon 
                        name={authState.favoriteIcon}
                        size={150}
                        color={colores.primary}
                    />
                )
            }
        </View>
    )
}
