import React  from "react"
import { Link } from "react-router-dom"
import Buscador from "./Buscador"
import Ordenar from "./Ordenar"

const Nav = (props) =>{

    return <div style={{display: "flex", justifyContent: "space-around" , alignContent:"center"}}>
            <div>Countries</div>
            <div><Ordenar table="nombre"name={[{order:"A-Z", serv:"ASC"},{order:"Z-A", serv:"DESC"}]}/></div>
            <div><Ordenar table="area"name={[{order:"menor a mayor", serv:"ASC"},{order:"mayor a menor", serv:"DESC"}]}/></div>
            <div><Buscador/></div>
    </div>
}

export default Nav