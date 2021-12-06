import React  from "react"

import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCountrySearch,  setpaisSatus,getPaginationNumber } from "../redux/actions"
import styles from "../css/Nav.module.css"
const Buscador = (props) =>{
     const dispatch = useDispatch();
     const order = useSelector(state => state.order);
     //creamo un stado local para guardar el input
    const[state, setState] =  useState("")
//useEffect esta escuchando el estado cada vez que cambie
 React.useEffect(()=>{
     //si el estado esta vacio llamamos la action getcountrysearch que nos devuelve los paises 
    if(state === "" ) 
        {
            dispatch(setpaisSatus(""))
            dispatch(getCountrySearch(state,order))
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }else{
        //si no hace la llamada a getcountrysearch y hace la busqueda en la api 
        dispatch(setpaisSatus(state))
        dispatch(getPaginationNumber(0))
        dispatch(getCountrySearch(state,order))
         // eslint-disable-next-line react-hooks/exhaustive-deps
       }},[state]) 


 

function handleChange(e){
//seteamos el estado cada vez que cambia el input
    setState(e.target.value)

       
}

    return <div >
               
                <input className={styles.buscador} name="Buscar" placeholder="Buscar pais.." title="Sin numeros y sin caracteres especiales" pattern="[A-Za-z ]"  onChange={handleChange} />
                    
            </div>
}

export default Buscador