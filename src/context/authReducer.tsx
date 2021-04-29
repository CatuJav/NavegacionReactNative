import { AuthState } from './AuthContext';


type AuthAction={
    type:'signIn'
};

//Genera estado
//No se debe mutar el estado se debe regresar un nuevo estado
export const authReducer=(state:AuthState,action:AuthAction):AuthState=>{
    switch (action.type) {
        case 'signIn':
            //Se crea un nuevo estado con las propiedades del estado
            //No se debe mutar los estados
            return {
                ...state,
                isLogged:true,
                userName:'no-usernanem-yet'
            };
            
    
        default:
            return state;
    }
    
}