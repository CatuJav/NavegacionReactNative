import { AuthState } from './AuthContext';

//Creamos las acciones
type AuthAction=
| { type:'signIn'}
| { type:'logout'}
| { type:'changeFavIcon', payload:string};//payload usualmente se pone para mandar informacion adicional

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
        //Cada una accion sabe los scopes que tiene    
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon:action.payload
            }
        case 'logout':
            return{
                ...state,
                isLogged:false,
                favoriteIcon:undefined,
                userName:undefined,
            }
        default:
            return state;
    }
    
}