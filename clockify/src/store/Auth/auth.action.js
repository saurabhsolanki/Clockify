import { AUTH_Failed, AUTH_GOOGLE_SUCCESS, AUTH_Loading, AUTH_login_Success, AUTH_Logout, AUTH_Success } from "./auth.type"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged ,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { auth } from "../../firebass/firebass"


export const Singup = (email, password) => async (dispatch) =>{
    // console.log(email,password)
    dispatch({ type: AUTH_Loading })
    try {
        let res =  await createUserWithEmailAndPassword(auth,email, password)
        console.log(res)
        dispatch({ type: AUTH_Success,payload:res.user.uid})
        
    } catch (err) {
        alert(err)
        dispatch({ type: AUTH_Failed})
 
    }

}


export const LoginData = (email, password) =>async (dispatch)=>{
    dispatch({ type: AUTH_Loading })
    try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        // console.log(res.user.email)
        dispatch({ type: AUTH_login_Success, payload: { email: res.user.email, token: res.user.uid } })
        // payload:res.user.uid
    } catch (err) {
        dispatch({ type: AUTH_Failed})
        alert(err)
    }
}

export const Sigup_google =() => async(dispatch) => {
    try {
        const googleauth = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, googleauth)
        console.log(res)
        dispatch({ type: AUTH_GOOGLE_SUCCESS,payload:res.user.uid})
    // return signInWithPopup(auth, googleauth)
        
    } catch (err) { 
        dispatch({ type: AUTH_Failed})
        // console.log(err)
        alert(err)
    }
}



export const Logout = () => ({ type: AUTH_Logout });




// function google=() => {
//     const googleauth = new GoogleAuthProvider()
//     return signInWithPopup(auth,googleauth)
// }



// const googleform = async (e) => {
//     try {
       
//         await google()
//         navigate("/")
//     }catch(err){
//         console.log(err)

//     }
    
// }