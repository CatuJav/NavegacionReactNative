import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colores } from '../theme/appTheme';

interface Props{
    iconName:string;
    size?:number;
}
export const TouchableIcon = ({iconName, size=80}:Props) => {
    
    return (
        <TouchableOpacity
            onPress={()=>console.log(iconName)}
        >
            <Icon 
            name={iconName}
            size={size} 
            color={colores.primary} />
            
        </TouchableOpacity>
    )
}
