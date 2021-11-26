import { GET_ALL_COUNTRIES, GET_COUNTRY_SEARCH, GET_FILTER_COUNTRIES, GET_FIRST_COUNTRIES, GET_PAGINATION_NUMBER, SET_ORDER_STATUS, SET_PAIS_STATUS } from "../actions";

const initialState={
    countries: [],
    pagination: 0,
    country: [],
    order :"O",
    pais:""
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
    case GET_ALL_COUNTRIES:
        return{
            ...state, countries: action.payload, country: action.payload
        }

    case GET_PAGINATION_NUMBER:
        return {...state, pagination: action.payload}


    case GET_COUNTRY_SEARCH:
       return{...state, country: action.payload }

    case GET_FIRST_COUNTRIES:
        return {...state, country: state.countries}

    case GET_FILTER_COUNTRIES:
        return {...state, countries: action.payload}

    case SET_ORDER_STATUS:
        return {...state, order: action.payload}
    case SET_PAIS_STATUS:
        return{...state, pais:action.payload}
    default:return state
    }


};
export default rootReducer;