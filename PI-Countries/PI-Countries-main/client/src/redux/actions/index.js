
export const GET_ALL_COUNTRIES = "GET_ALL_HOUSES";
export const GET_PAGINATION_NUMBER = "GET_PAGINATION_NUMBER";
export const GET_COUNTRY_SEARCH= "GET_COUNTRY_SEARCH";
export const GET_FIRST_COUNTRIES = "GET_FIRST_COUNTRIES";
export const GET_FILTER_COUNTRIES = "GET_FILTER_COUNTRIES";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const SET_PAIS_STATUS = "SET_PAIS_STATUS";



export const getAllCountries = ()=> dispatch =>{
    return fetch("http://localhost:3001/countries").then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_ALL_COUNTRIES, payload: json})

    })

}

export const getPaginationNumber = function (payload){

    return{type:GET_PAGINATION_NUMBER, payload:payload};
}

export const  getCountrySearch = (pais,order)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?name=${pais}&order=${order}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_SEARCH, payload: json})

    })

    
}

export const getFirtsCountries = () =>{

return{type:GET_FIRST_COUNTRIES}
}


export const getFilterCountries = (filter, order)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?order=${filter}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_FILTER_COUNTRIES, payload: json})

    })

    
}
export const setOrderSatus = (order) =>{

    return{type:SET_ORDER_STATUS, payload:order}
    }
export const setpaisSatus = (pais) =>{

        return{type:SET_PAIS_STATUS, payload:pais}
    }
