import React  from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCountrySearch, getFirtsCountries } from "../redux/actions"

const Nav = (props) =>{
     const dispatch = useDispatch();
     //creamo un stado local para guardar el input
const[state, setState] =  useState("")
//useEffect esta escuchando el estado cada vez que cambie
 React.useEffect(()=>{
     //si el estado esta vacio llamamos la action getfirstcountries que nos devuelve los paises iniciales
    if(state === "" ) 
        {dispatch(getFirtsCountries())
    }
    else{
        //si no hace la llamada a getcountrysearch y hace la busqueda en la api 
        dispatch(getCountrySearch(state))
    }
},[state]) 
 

function handleChange(e){
//seteamos el estado cada vez que cambia el input
    setState(e.target.value)
       
}

function handleFormChange(e){
    e.preventDefault()
    if(state === "" ) 
        {dispatch(getFirtsCountries())
    }
    else{
        dispatch(getCountrySearch(state))
    }

}


    return <div >
        <nav >
            <div style={{display: "flex", justifyContent: "space-around" , alignContent:"center"}}>
                <div><h3>COUNTRIES</h3></div>
                <div style={{marginTop:"1em"}}>
                    <form onSubmit={handleFormChange}>
                    <input  name="Buscar" placeholder="Buscar pais" onChange={handleChange} />
                    <button >Buscar</button>
                    </form>
                    
                    
                </div>
                
            
            </div>
            
            
        </nav>
        
    </div>
}

export default Nav