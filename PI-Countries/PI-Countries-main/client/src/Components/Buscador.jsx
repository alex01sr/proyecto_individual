import React  from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCountrySearch, getFilterCountries, getFirtsCountries, setpaisSatus } from "../redux/actions"

const Buscador = (props) =>{
     const dispatch = useDispatch();
     const order = useSelector(state => state.order);
     //creamo un stado local para guardar el input
    const[state, setState] =  useState("")
//useEffect esta escuchando el estado cada vez que cambie
 React.useEffect(()=>{
     //si el estado esta vacio llamamos la action getfirstcountries que nos devuelve los paises iniciales
    if(state === "" ) 
        {
            dispatch(setpaisSatus(""))
            dispatch(getCountrySearch(state,order))
    }else{
        //si no hace la llamada a getcountrysearch y hace la busqueda en la api 
        dispatch(setpaisSatus(state))
        dispatch(getCountrySearch(state,order))
       }},[state]) 


 

function handleChange(e){
//seteamos el estado cada vez que cambia el input
    setState(e.target.value)

       
}

    return <div >
               
                <input  name="Buscar" placeholder="Buscar pais.." onChange={handleChange} />
                    
            </div>
}

export default Buscador