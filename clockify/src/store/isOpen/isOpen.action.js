import { ISOPEN_CLOSE, ISOPEN_OPEN } from "./isOpen.type"

export const open=()=>{
return{
    type:ISOPEN_OPEN
}    

}
export const close=()=>{
return{
    type:ISOPEN_CLOSE
}    

}