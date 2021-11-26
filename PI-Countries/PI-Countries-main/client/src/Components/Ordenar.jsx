import React  from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"

import { getCountrySearch, getFilterCountries, getFirtsCountries, setOrderSatus } from "../redux/actions"

const Ordenar = (props) =>{
     const dispatch = useDispatch()
    const[state, setState] = useState("O")

    const pais = useSelector(state => state.pais)

    function handleOnChange(e){
       
        setState(e.target.value)
        
       
    }
    React.useEffect(()=>{
        dispatch(setOrderSatus(state))
        if(state === "O"){
            dispatch(getFirtsCountries())
        }else{
            dispatch(getCountrySearch(pais,state))
        }
       
       
        

        
        
         

    },[state])
   /*  React.useEffect(()=>{
        dispatch(getFilterCountries(order))
    },[order]) */
    return <div>
            <select  onChange={handleOnChange}>
            <option value="O"selected>Ordenar por</option>
            {props.name?.map((element =>{
            return <option value={element.serv}>{element.order}</option>

            
            }))}
            </select>   
        
    </div>
}

export default Ordenar