import { LOGOUT, SET_AUTH, SET_TOKEN } from "./actionType";

const Reducer = (state, { type, payload }) => {
    switch (type) {
      
case SET_AUTH:
return {
    ...state,
    isAuth:payload
}

case SET_TOKEN:
return{
    ...state,
    token:payload
}
case LOGOUT:
return{
    ...state,
    token:"",
    isAuth:false
}
        default:
            return state;
    }
}

export default Reducer;