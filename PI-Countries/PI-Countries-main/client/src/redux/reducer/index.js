import {  DELETE_FILTER, GET_COUNTRY_DETAIL, GET_COUNTRY_SEARCH, GET_FILTER, GET_PAGINATION_NUMBER,  SET_ORDER_STATUS, SET_PAIS_STATUS } from "../actions";

const initialState={
    pagination: 0,
    country: [],
    order :["",""],
    pais:"",
    filterArray: [],
    countryDetail: {}
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

    case GET_FILTER:
        return{...state, filterArray: state.filterArray.concat(action.payload)}


    case DELETE_FILTER:
        return{...state, filterArray: state.filterArray.filter((element) => element !== action.payload )}

    case GET_COUNTRY_DETAIL:
        return{...state, countryDetail: action.payload}

    default:return state
    }


};
export default rootReducer;