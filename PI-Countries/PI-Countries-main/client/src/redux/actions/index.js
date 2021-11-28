

export const GET_PAGINATION_NUMBER = "GET_PAGINATION_NUMBER";
export const GET_COUNTRY_SEARCH= "GET_COUNTRY_SEARCH";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const SET_PAIS_STATUS = "SET_PAIS_STATUS";
export const GET_FILTER = "GET_FILTER";
export const DELETE_FILTER = "DELETE_FILTER";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";



//setear la pagina donde se encuentra el usuario
export const getPaginationNumber = function (payload){

    return{type:GET_PAGINATION_NUMBER, payload:payload};
}


//se trae la informacion con sus respectivas querys
export const  getCountrySearch = (pais,order)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?name=${pais}&order=${order[0]}&table=${order[1]}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_SEARCH, payload: json})

    })

    
}
//se hace una llamada con el id
export const  getCountryDetail = (id)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries/${id}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_DETAIL, payload: json})

    })

    
}

//manda al estado global el orden como se quiere tener la info
export const setOrderSatus = (order) =>{

    return{type:SET_ORDER_STATUS, payload:order}
    }
//manda al estado global el pais que se este buscando
export const setpaisSatus = (pais) =>{

        return{type:SET_PAIS_STATUS, payload:pais}
    }
//agrega un filtro al estado global
export const getFilter = (filter)=>{
    return {type:GET_FILTER, payload:filter}
}
//elimina un filtro al estado global
export const deleteFilter = (filter)=>{
    return {type:DELETE_FILTER, payload:filter}
}

