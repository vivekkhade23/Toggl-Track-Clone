import {  LOGOUT, SET_AUTH, SET_TOKEN } from "./actionType"


export const declareToken=(data)=>{
    return {
type:SET_TOKEN,
payload:data
    }
}

export const declareAuth=(data)=>{
    return {
type:SET_AUTH,
payload:data
    }
}

export const declareLogout=()=>{
    return {
type:LOGOUT
    }
}
