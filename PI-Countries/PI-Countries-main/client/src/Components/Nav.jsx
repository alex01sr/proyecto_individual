import React  from "react"

import Buscador from "./Buscador"
import Filter from "./Filter"
import Ordenar from "./Ordenar"
import { Link } from "react-router-dom";
import FilterActivities from "./FilterActivities";


const Nav = (props) =>{

   
    return <div style={{display: "flex", justifyContent: "space-around" , alignContent:"center"}}>
            <div>Countries</div>
            <div><Link to="/home/crearactividad">Crear actividad</Link></div>
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
    </div>
}

export default Nav