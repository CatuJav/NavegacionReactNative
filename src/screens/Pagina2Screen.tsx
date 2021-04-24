import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
    //Se puede usar este Hook para controlar la navegación
    const naigator=useNavigation();

    //Para ios 
    useEffect(() => {
        naigator.setOptions({
            /*Esto permite cambiar el título de la página
            y además esto tiene más peso que el title que se le asigna
            en el stack */
            title:'Hola Mundo',
            /*Esta parte es para ios el cual indica
            que mensaje se indica en el botón de regresar*/

            headerBackTitle:'Atrás'
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
           <Text style={styles.title}>Pagina2Screen</Text> 
           <Button
            title='Ir a página 3'
            onPress={()=>naigator.navigate('Pagina3Screen')}
           />
        </View>
    )
}
