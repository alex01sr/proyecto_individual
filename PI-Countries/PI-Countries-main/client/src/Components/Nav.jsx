import React  from "react"

import Buscador from "./Buscador"
import Filter from "./Filter"
import Ordenar from "./Ordenar"
import { Link,useLocation } from "react-router-dom";
import FilterActivities from "./FilterActivities";

import styles from "../css/Nav.module.css"
const Nav = (props) =>{

    let location = useLocation()
    return <div className={(location.pathname === "/home/crearactividad" || location.pathname === "/home/crearactividad/agregaractividad")?styles.ocultar:""}>
            <nav className={styles.nav} style={{display:"flex"}}>
            <div><Link to="/"><h1 className={styles.icono}>Countries</h1></Link></div>
            <div><Link to="/home/crearactividad"><h3 className={styles.crear}>Crear actividad</h3></Link></div>
            <div><Filter/></div>
            <div><FilterActivities/></div>
            <div><Ordenar table="nombre"
                name={[
                {order:"A-Z", serv:"ASC" ,table:"nombre"},
                {order:"Z-A", serv:"DESC", table:"nombre"},
                {order:"menor a mayor", serv:"ASC", table:"poblacion"},
                {order:"mayor a menor", serv:"DESC", table:"poblacion"}
                ]}/>
        </div>
             <div><Buscador/></div>
             </nav>
    </div>
}

export default Nav