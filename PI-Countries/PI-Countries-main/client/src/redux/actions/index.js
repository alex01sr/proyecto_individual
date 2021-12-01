

export const GET_PAGINATION_NUMBER = "GET_PAGINATION_NUMBER";
export const GET_COUNTRY_SEARCH= "GET_COUNTRY_SEARCH";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const SET_PAIS_STATUS = "SET_PAIS_STATUS";
export const GET_FILTER = "GET_FILTER";
export const DELETE_FILTER = "DELETE_FILTER";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_FILTER_ACTIVITY = "GET_FILTER_ACTIVITY"
export const DELETE_FILTER_ACTIVITY ="DELETE_FILTER_ACTIVITY"
export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_FILTER_ACTIVITY = "UPDATE_FILTER_ACTIVITY";



//setear la pagina donde se encuentra el usuario
export const getPaginationNumber = function (payload){

    return{type:GET_PAGINATION_NUMBER, payload:payload};
}


//se trae la informacion con sus respectivas querys
export const  getCountrySearch = (pais,order)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries?name=${pais}&order=${order[0]}&table=${order[1]}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_SEARCH, payload: json})

    }).catch((error)=> {console.log(error)})

    
}
//se hace una llamada con el id
export const  getCountryDetail = (id)=> dispatch => {

   
    return fetch(`http://localhost:3001/countries/${id}`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_COUNTRY_DETAIL, payload: json})

    }).catch((error)=> {console.log(error)})

    
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

export const getFilterActivity = (filter)=>{
    return {type:GET_FILTER_ACTIVITY, payload:filter}
}
export const deleteFilterActivity = (filter)=>{
    return {type:DELETE_FILTER_ACTIVITY, payload:filter}
}

//elimina un filtro al estado global
export const deleteFilter = (filter)=>{
    return {type:DELETE_FILTER, payload:filter}
}
export const getActivity = ()=> dispatch=>{
    return fetch(`http://localhost:3001/activity/`).then((response) => response.json())
    .then((json) =>{
        dispatch({type:GET_ACTIVITY, payload: json})

    }).catch((error)=> {console.log(error)})
}
export const updateFilter = ()=>{
    return {type: UPDATE_FILTER, payload: []}
}
export const updateFilterActivity = ()=>{
    return {type: UPDATE_FILTER_ACTIVITY, payload: []}
}



