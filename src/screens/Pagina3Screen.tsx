import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

//A parte tambien se puede usar las props para realizar la
//navegación extendiendo de StackScreenProps y pasando como
//página el name del stack que se definio en StackNavigator 
//con el component screen que abre
interface Props extends StackScreenProps<any,any>{};
export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View>
           <Text style={styles.title}>Pagina3Screen</Text> 

           <Button
            title='Regresar'
            onPress={()=>navigation.pop()}
           />
            <Button
            title='Regresar página 1'
            onPress={()=>navigation.popToTop()}
           />
        </View>
    )
}
