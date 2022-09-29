import { TIME_SUCCESS_GET, TIME_SUCCESS_POST } from "./Time.type"

const initData={
    data:[]
}

export const TimeTrackerReducer=(state=initData,{type,payload})=>{
    switch (type){
        case TIME_SUCCESS_POST:{
           return {
            ...state,
            data:payload
           }
        }

        case TIME_SUCCESS_GET:{
            return{
                ...state,
                data:payload
            }
        }
        default :{
        return state
    }
    }
}