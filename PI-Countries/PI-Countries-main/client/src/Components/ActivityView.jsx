import React  from "react"
import styles from "../css/CrearActividad.module.css"

const ActivityView = (props) =>{

    return <div >
        <div className={styles.paisact}   style={{display:"flex", justifyContent:"center"}}>
        <div><h1>{props.nombre}</h1></div>
        <div><button className={styles.botonview} onClick={()=> props.func(props.id)}>X</button></div>

        </div>

       
        
    </div>
}

export default ActivityView