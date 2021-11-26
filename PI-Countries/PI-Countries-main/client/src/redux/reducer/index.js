import {  GET_COUNTRY_SEARCH, GET_PAGINATION_NUMBER, SET_ORDER_STATUS, SET_PAIS_STATUS } from "../actions";

const initialState={
    countries: [],
    pagination: 0,
    country: [],
    order :["O",""],
    pais:""
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
    
    case GET_PAGINATION_NUMBER:
        return {...state, pagination: action.payload}


    case GET_COUNTRY_SEARCH:
       return{...state, country: action.payload }

    case SET_ORDER_STATUS:
        return {...state, order: action.payload}
    case SET_PAIS_STATUS:
        return{...state, pais:action.payload}
    default:return state
    }


};
export default rootReducer;