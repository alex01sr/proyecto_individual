import React  from "react"

import { getPaginationNumber } from "../redux/actions"
import {useDispatch} from "react-redux";
import styles from "../css/Pagination.module.css"
const Pagination = (props) =>{
     const dispatch = useDispatch()
    return <button className={styles.pagination} onClick={()=>dispatch(getPaginationNumber(props.num)) }>{props.name?props.name:props.num}</button>
        
        
  
}

export default Pagination