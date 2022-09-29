import { TIME_SUCCESS_GET, TIME_SUCCESS_POST } from "./Time.type"

const initData={
    TimeData:[]
}

export const TimeTrackerReducer=(state=initData,{type,payload})=>{
    switch (type){
        case TIME_SUCCESS_POST:{
           return {
            ...state,
            TimeData:payload
           }
        }

        case TIME_SUCCESS_GET:{
            return{
                ...state,
                TimeData:payload
            }
        }
        default :{
        return state
    }
    }
}