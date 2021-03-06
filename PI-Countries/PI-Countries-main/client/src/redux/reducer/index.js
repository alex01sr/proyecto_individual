import {  DELETE_FILTER, DELETE_FILTER_ACTIVITY,GET_ACTIVITY, GET_COUNTRY_DETAIL, GET_COUNTRY_SEARCH, GET_FILTER, GET_FILTER_ACTIVITY, GET_PAGINATION_NUMBER,  SET_ORDER_STATUS, SET_PAIS_STATUS, UPDATE_FILTER, UPDATE_FILTER_ACTIVITY } from "../actions";

const initialState={
    pagination: 0,
    country: [],
    order :["",""],
    pais:"",
    filterArray: [],
    filterArrayActivity: [],
    countryDetail: {},
    activity:[]
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

   

    case GET_FILTER_ACTIVITY:
        return{...state, filterArrayActivity: state.filterArrayActivity.concat(action.payload)}

    case DELETE_FILTER_ACTIVITY:
            return{...state, filterArrayActivity: state.filterArrayActivity.filter((element) => element !== action.payload )}
    
    case UPDATE_FILTER_ACTIVITY:
        return {...state, filterArrayActivity: action.payload}
    
    case GET_FILTER:
            return{...state, filterArray: state.filterArray.concat(action.payload)}
    case DELETE_FILTER:
        return{...state, filterArray: state.filterArray.filter((element) => element !== action.payload )}
    case UPDATE_FILTER:
        return {...state, filterArray: action.payload}
    case GET_COUNTRY_DETAIL:
        return{...state, countryDetail: action.payload}

    case GET_ACTIVITY:
        return {...state, activity: action.payload}

    default:return state
    }


};
export default rootReducer;