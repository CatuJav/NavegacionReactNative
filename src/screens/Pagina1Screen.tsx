import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//A parte tambien se puede usar las props para realizar la
//navegación extendiendo de StackScreenProps y pasando como
//página el name del stack que se definio en StackNavigator 
//con el component screen que abre
interface Props extends StackScreenProps<any,any>{
    
}

export const Pagina1Screen = ({navigation}:Props) => {
    //console.log(props);
    return (
        <View style={styles.globalMargin}>
           <Text style={styles.title}>Pagina1Screen</Text> 
           <Button 
           title='Ir página 2'
           onPress={()=>{
            navigation.navigate('Pagina2Screen')
           }}
           ></Button>
        </View>
    )
}
