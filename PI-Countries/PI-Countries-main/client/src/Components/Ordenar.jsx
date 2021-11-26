import React  from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"

import { getCountrySearch, setOrderSatus } from "../redux/actions"

const Ordenar = (props) =>{
     const dispatch = useDispatch()

    const[state, setState] = useState(["O","nombre"])

    const pais = useSelector(state => state.pais)
  

    function handleOnChange(e){
       
        setState([e.target.value, props.table])
        
       
    }
    React.useEffect(()=>{
        dispatch(setOrderSatus(state))
        dispatch(getCountrySearch(pais,state))
        

    },[state])
     return <div>
            <select  onChange={handleOnChange}>
            <option value="O"selected>Ordenar por {props.table}</option>
            {props.name?.map((element =>{
            return <option  value={element.serv}>{element.order}</option>

            
            }))}
            </select>   
        
    </div>
}

export default Ordenar