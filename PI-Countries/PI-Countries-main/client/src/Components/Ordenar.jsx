import React  from "react"

import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"

import { getCountrySearch, setOrderSatus,getPaginationNumber } from "../redux/actions"

const Ordenar = (props) =>{
     const dispatch = useDispatch()


    const[state, setState] = useState(["",""])

    const pais = useSelector(state => state.pais)
  

    function handleOnChange(e){
      let aux = e.target.value.split("-")
        setState([aux[0], aux[1]])
      }
    
    React.useEffect(()=>{
     
        dispatch(setOrderSatus(state))
        
        dispatch(getCountrySearch(pais,state))
        
      },[state])
     return <div>
            <select  onChange={handleOnChange}>
            <option value="-">Ordenar por:</option>
            {props.name?.map((element,index) =>{
            return <option key={index} value={`${element.serv}-${element.table}`}>{element.order}-{element.table}</option>})}
            </select> 
            </div>
}

export default Ordenar