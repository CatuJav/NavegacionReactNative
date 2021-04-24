import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

//A parte tambien se puede usar las props para realizar la
//navegación extendiendo de StackScreenProps y pasando como
//página el name del stack que se definio en StackNavigator 
//con el component screen que abre
//interface Props extends StackScreenProps<any,any>{

//Estos es para el menu hambuerguesa
interface Props extends DrawerScreenProps<any,any>{
    
}

export const Pagina1Screen = ({navigation}:Props) => {
    //console.log(props);

    useEffect(() => {
        navigation.setOptions({
            headerLeft:()=>(
                <Button
                    title='Menú'
                    onPress={()=>{navigation.toggleDrawer()}}
                />
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
           <Text style={styles.title}>Pagina1Screen</Text> 
           <Button 
           title='Ir página 2'
           onPress={()=>{
            navigation.navigate('Pagina2Screen')
           }}
           ></Button>

        {/* <Button
            title='Ir persona'
            onPress={()=>{
                navigation.navigate('PaginaPersona')
            }}
           /> */}

           {/* Crear botones personalizados */}
           <Text>Navegar con argunmentos</Text>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity 
            style={{...styles.botonGrande, backgroundColor:'#5856d6'}}
           /**En la navegación también puedo enviarr parametros
            * navigation.navigate('Pagina',{Parametros})
            */
            onPress={()=>navigation.navigate('PersonaScreen',{
                id:1,
                nombre:'Pedro'
            })}>
                <Text style={styles.botonGrandeTexto}>Pedro</Text>
           </TouchableOpacity>

           <TouchableOpacity 
            style={{...styles.botonGrande, backgroundColor:'#ff9427'}}
           /**En la navegación también puedo enviarr parametros
            * navigation.navigate('Pagina',{Parametros})
            */
            onPress={()=>navigation.navigate('PersonaScreen',{
                id:1,
                nombre:'María'
            })}>
                <Text style={styles.botonGrandeTexto}>María</Text>
           </TouchableOpacity>
           </View>
        </View>
    )
}
