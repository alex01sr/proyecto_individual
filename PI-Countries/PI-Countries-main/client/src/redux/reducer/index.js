import { GET_ALL_COUNTRIES, GET_COUNTRY_SEARCH, GET_PAGINATION_NUMBER } from "../actions";

const initialState={
    countries: [],
    pagination: 0,
    country:[]
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
    case GET_ALL_COUNTRIES:
        return{
            ...state, countries: action.payload
        }

    case GET_PAGINATION_NUMBER:
        return {...state, pagination: action.payload}


    case GET_COUNTRY_SEARCH:
        return{...state, country: action.payload }
    default:return state
    }


};
export default rootReducer;