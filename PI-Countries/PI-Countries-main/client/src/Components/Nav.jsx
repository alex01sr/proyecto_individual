import React  from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCountrySearch } from "../redux/actions"

const Nav = (props) =>{
     const dispatch = useDispatch();
     
const[state, setState] =  useState("")

 React.useEffect(()=>{

    if(state === "") 
    {dispatch(getCountrySearch(state))}
 /*    else{dispatch(getCountrySearch(state));}  codigo para que a medida que vamos escribiendo aparezca el pais, falta mejorar*/
    console.log(state) 

},[state]) 
 

function handleChange(e){
    setState(e.target.value)
    
}

function handleFormChange(e){
    e.preventDefault()
    if(state === "") dispatch(getCountrySearch(state));
    dispatch(getCountrySearch(state));
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