import React  from "react"
import { Link } from "react-router-dom"
import {useDispatch } from "react-redux";
import { getPaginationNumber, setOrderSatus, setpaisSatus, updateFilter, updateFilterActivity } from "../redux/actions"
import styles from "../css/Landing.module.css"
import video from "../rec/tierra3.mp4"

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

    return <div >
        
     
       <div className={styles.vid}  >
        <video loop autoPlay muted>
          <source src={video} type="video/mp4" />
          </video>
        </div> 


        <Link to="/home"><button className={styles.boton}>INICIAR</button>
        </Link>
        <h1 className={styles.icono}>COUNTRIES</h1>
    </div>
}

export default Landing