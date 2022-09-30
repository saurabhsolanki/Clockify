import { FaLastfmSquare } from "react-icons/fa"
import { AUTH_Failed, AUTH_GOOGLE_SUCCESS, AUTH_Loading, AUTH_login_Success, AUTH_Logout, AUTH_Success } from "./auth.type"

const initalSate = {
    loading:false,
    error: false,
    isAuth:false,
    user:""

}

export const authReducer = (state=initalSate,{type,payload}) => {
    switch (type) {
        
        case AUTH_Loading: {
            return {
                ...state,
                loading: true
            }
        }
 
        case AUTH_Success: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth:true,
                user: payload
             
            }
        }
        case AUTH_login_Success: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth:true,
                user: payload
             
            }
        }
         
        case AUTH_GOOGLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth:true,
                user: payload
            }
     }
            
        case AUTH_Failed: {
            return {
                ...state,
                loading: false,
                error: true,
                isAuth:false,
            }
        }
            
        case AUTH_Logout: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: false,
                token: "",
            }
        }
            
         default :{ return state}
            
            
            
    }
}