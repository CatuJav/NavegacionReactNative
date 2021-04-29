import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string;
    size?:number;
}
export const TouchableIcon = ({iconName, size=80}:Props) => {

    //Llamamos a la funcion con el context
    const {changeFavoriteIcon} = useContext(AuthContext);
    return (
        <TouchableOpacity
            onPress={()=>changeFavoriteIcon(iconName)}
        >
            <Icon 
            name={iconName}
            size={size} 
            color={colores.primary} />
            
        </TouchableOpacity>
    )
}
