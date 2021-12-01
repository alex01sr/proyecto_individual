import React  from "react"
import { Link } from "react-router-dom"
import {useDispatch } from "react-redux";
import { getPaginationNumber, setOrderSatus, setpaisSatus, updateFilter, updateFilterActivity } from "../redux/actions"
const Landing = (props) =>{
    const dispatch = useDispatch() 
    React.useEffect(()=>{

        return inicializarEstados();
    })

    function inicializarEstados(){
        dispatch(setpaisSatus(""))
        dispatch(setOrderSatus(["",""]))
        dispatch(updateFilter());
        dispatch(updateFilterActivity())
        dispatch(getPaginationNumber(0));} 

    return <div>
        <Link to="/home">
        <button>Home</button>
        </Link>
        
    </div>
}

export default Landing