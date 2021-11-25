import React  from "react"
import { Link } from "react-router-dom"

const Country = ({id, nombre, flag,continente}) =>{

    return (<div>
        
        <img src={flag}/>
        <h2>{nombre}</h2>
        <h3>{continente}</h3>


        
    </div>)
};

export default Country