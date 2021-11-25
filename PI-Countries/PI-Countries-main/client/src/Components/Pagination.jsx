import React  from "react"
import { Link } from "react-router-dom"
import { getPaginationNumber } from "../redux/actions"
import {useDispatch} from "react-redux";

const Pagination = (props) =>{
     const dispatch = useDispatch()
    return <div>
      
        <button onClick={()=>dispatch(getPaginationNumber(props.num)) }>{props.name?props.name:props.num}</button>
        
        
    </div>
}

export default Pagination