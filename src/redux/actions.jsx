import {types} from "./types"


export const InputAction=(num)=>{
    return {
        type: types.INPUT,
        payload: num,
    }
}

export const CheckAction=(pass)=>{
    return {
        type: types.CHECK,
        payload: pass
    }
}

export const DecrAction=(pass)=>{
    return {
        type: types.DECR,
        payload: pass,
    }
}