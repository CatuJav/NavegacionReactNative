import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    //Acceder a la función de SignIn usando el contexto
    const {signIn, authState} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {/**Muestro el botón según el estado */}
            {
                (!authState.isLogged)&&
                (<Button
                    title='SignIn'
                   onPress={()=>{
                    signIn()
                   }} 
                />)
            }
            
        </View>
    )
}
