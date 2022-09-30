import { ISOPEN_CLOSE, ISOPEN_OPEN } from "./isOpen.type"


const initalSate={
    isopen:true,
}
export const isOpen=(state=initalSate,{type,payload})=>{
    switch(type){
        case ISOPEN_OPEN:{
            return{
                ...state,
                isopen:true
            }
        }
        case ISOPEN_CLOSE:{
            return{
                ...state,
                isopen:false,
            }
        }
        default:
           return state;
    }

}