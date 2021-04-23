import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
    //Se puede usar este Hook para controlar la navegación
    const naigator=useNavigation();

    return (
        <View style={styles.globalMargin}>
           <Text>Pagina2Screen</Text> 
           <Button
            title='Ir a página 3'
            onPress={()=>naigator.navigate('Pagina3Screen')}
           />
        </View>
    )
}
