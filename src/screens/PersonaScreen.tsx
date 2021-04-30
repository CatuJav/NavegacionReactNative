import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams{
//     id:number;
//     nombre:string;
// }

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

export const PersonaScreen = ({navigation,route}:Props) => {
    //Extraer los parámetros
    const params= route.params;

    //Usar el contexto
    const {changeUserName} = useContext(AuthContext);
    useEffect(() => {
        navigation.setOptions({
            title:params.nombre,

        })
    }, []);

    //Se puede crear otro useEffect al mismo tiempo
    useEffect(() => {
       changeUserName(params.nombre);
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
               {
                   JSON.stringify(params,null,3)
               }
            </Text>
        </View>
    )
}
