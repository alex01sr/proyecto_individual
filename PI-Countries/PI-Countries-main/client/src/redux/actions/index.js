

export const GET_PAGINATION_NUMBER = "GET_PAGINATION_NUMBER";
export const GET_COUNTRY_SEARCH= "GET_COUNTRY_SEARCH";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const SET_PAIS_STATUS = "SET_PAIS_STATUS";
export const GET_FILTER = "GET_FILTER";
export const DELETE_FILTER = "DELETE_FILTER";
export const SET_FILTER_COUNTRY = "SET_FILTER_COUNTRY";




export const getPaginationNumber = function (payload){

    return{type:GET_PAGINATION_NUMBER, payload:payload};
}

export const  getCountrySearch = (pais,order)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?name=${pais}&order=${order[0]}&table=${order[1]}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_SEARCH, payload: json})

    })

    
}

export const setOrderSatus = (order) =>{

    return{type:SET_ORDER_STATUS, payload:order}
    }
export const setpaisSatus = (pais) =>{

        return{type:SET_PAIS_STATUS, payload:pais}
    }

export const getFilter = (filter)=>{
    return {type:GET_FILTER, payload:filter}
}
export const deleteFilter = (filter)=>{
    return {type:DELETE_FILTER, payload:filter}
}
export const setFilterCountry = (filter)=>{
    return {type:GET_COUNTRY_SEARCH, payload:filter}
}