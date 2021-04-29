import React, { Children, createContext, useReducer } from 'react'
import { authReducer } from './authReducer';
/**Definir cómo luce, que información tendré aquí */
export interface AuthState{
    isLogged:boolean;
    userName?:string;
    favoriteIcon?:string;
}

//Estado inicial
export const authInitialState:AuthState={
    isLogged:false,
    userName:undefined,
    favoriteIcon:undefined
}

//Lo usuaremos para decirle comomluce y qué expone el context
export interface AuthContextProps{
    authState:AuthState;
    signIn:()=>void;
}
//Crear el contexto
export const AuthContext=createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider=({children}:{children:any})=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    
    //Para llamar la acción 
    const sigIn = ()=>{
        dispatch({type:'signIn'});
    }
    return (
        <AuthContext.Provider value={{

            authState:authState,
            signIn:sigIn,
            
        }}>
            {children}
        </AuthContext.Provider>
    );
}
