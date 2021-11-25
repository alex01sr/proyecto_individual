
export const GET_ALL_COUNTRIES = "GET_ALL_HOUSES";
export const GET_PAGINATION_NUMBER = "GET_PAGINATION_NUMBER";
export const GET_COUNTRY_SEARCH= "GET_COUNTRY_SEARCH";
export const GET_FIRST_COUNTRIES = "GET_FIRST_COUNTRIES"



export const getAllCountries = ()=> dispatch =>{
    return fetch("http://localhost:3001/countries").then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_ALL_COUNTRIES, payload: json})

    })

}

export const getPaginationNumber = function (payload){

    return{type:GET_PAGINATION_NUMBER, payload:payload};
}

export const  getCountrySearch = (pais)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?name=${pais}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_SEARCH, payload: json})

    })

    
}

export const getFirtsCountries = () =>{

return{type:GET_FIRST_COUNTRIES}
}
